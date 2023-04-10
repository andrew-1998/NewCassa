<?php
declare(strict_types=1); //Жесткую типизацию Необходимо писать именно в начале!

ini_set('error_reporting', (string)E_ALL);
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');

function db_connect () {
    $link = mysqli_connect("localhost", "andrey", "and321", "cassa");
    if (!$link) {
        die (mysqli_connect_error($link));
    } 
    return $link;
}
function procFile (&$h) {
    $h = strip_tags($h); 
    $h = htmlentities($h);
    $h = str_replace('"', '', $h);
    $h = str_replace('&quot;', '', $h);  //кавычки! Отображаются на странице как кавычки а не сущности
    $h = mb_convert_encoding($h, "UTF-8");
}
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
        crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" 
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossorigin="anonymous"></script>
    <title>Тестовое задание. Парсинг веб-страницы</title>
</head>
<body>
<div class="container">
<h1 class="text-center"> Парсинг веб-страницы </h1>
<?php
/*//Из-за наличия защиты пришлось скачать файлы первой страницы с 10 тендерами
и одну страницу конкретной процедуры                                           */
//$hope = 'https://tender.rusal.ru/Tenders';
$hope = 'data/rusal.html';   

/* Стандартный способ открытия файла тоже не сработал - защиту обойти не удалось
$homepage="";
$fd = fopen($hope, 'r') or die("не удалось открыть файл");
while(!feof($fd)) {
    $str = fgets($fd);
    $homepage.=$str;
}
fclose($fd);                                                                  */

$allHomepage = file_get_contents($hope);
$homepage = $allHomepage;
procFile($homepage);

preg_match_all("/(?<=Запрос предложений:№\s)T-\d{7}/", $homepage, $lotNum);
//краткая форма а-я у малых букв почему-то не работает
preg_match_all("/(?<=Организатор:)[\sА-ЯЁабвгдежзийклмнопрстуфхцчшщъьыэюяё]+(?=Лот:)/", $homepage, $orgName);
preg_match_all("/http[s]?:\/\/tender\.rusal\.ru\/Tender\/T-\d{7}\/\d{1,}(?=\">№\sT-)/", $allHomepage, $urlName);

$hope = 'data/armenal.html';
$allHomepage = file_get_contents($hope);
$homepage = $allHomepage;
procFile($homepage);

//после даты там куча вертикальных пробелов
preg_match_all("/(?<=Дата начала подачи заявок)[\s]+(\d{2}\.){2}\d{4}\s\d{2}:\d{2}/", $homepage, $datLot);
$lotData = $datLot[0][0];
$lotData = ltrim($lotData);
//Преобразование формата даты
$lotDataTime = strtotime($lotData);
$lotDataTime = date("Y-m-d H:i", $lotDataTime);

preg_match_all("/(?<=Закупочная документация|Извещение)[\s]+[\sА-ЯЁабвгдежзийклмнопрстуфхцчшщъьыэюяё:\-A-Za-z\.\d]+/",
                 $homepage, $datFile);
$files = $datFile[0][0];
$files = trim($files);
//Вырезаем даты и время, если есть
//Нумерование групп в регулярном выражении почему-то не работает
$files = preg_replace("/\d{2}:\d{2}/", "", $files);
$files = preg_replace("/(\d{2}\.){2}\d{4}/", "", $files);

//Считаем, что у имени файла есть расширение из не более 5 латинских букв
//Имя файла может состоять пробелов между словами из русских и латинских букв, цифр, точек и тире
preg_match_all("/[ А-ЯЁабвгдежзийклмнопрстуфхцчшщъьыэюяё\.\-A-Za-z\d]+\.\w{1,5}/",
                $files, $nFile);

$nameFile = [];
foreach ($nFile[0] as $ffile) {
    $ffile = trim($ffile);
    $nameFile[] = $ffile;
}

//Охота на ссылки на файлы, которых в тендере может быть несколько
preg_match_all("/<a href=\"http[s]?:\/\/tender\.rusal\.ru\/Files\/Download.+?>/",
               $allHomepage, $uFile);

/* Далее исходим из того, что количество ссылок файлов для скачивания, соотв. регулярному 
выражению выше и имеющих атрибут data-original-title="Имя файла.расширение" равно количеству 
файлов в тендере, что вообще-то необязательно                                              */

$helpFile = []; //Имя каждого файла в коде, которое надо извлечь
foreach ($uFile[0] as &$u) {
    $u=mb_substr($u, 8);  //обрезаем <a href=
    preg_match_all("/(?<=data-original-title=)\".+?\"/", $u, $hFile);
    //Удаляем кавычки у вспомогательного имени файла
    $hFile[0][0] = preg_replace("/\"/", "", $hFile[0][0]);
    $helpFile[] = $hFile[0][0];
}
$urlFile = []; //Путь к каждому файлу
foreach ($uFile[0] as $h) {
    preg_match_all("/^\".+?\"/", $h, $uhFile);
    //Удаляем кавычки и получаем url файла
    $uhFile[0][0] = preg_replace("/\"/", "", $uhFile[0][0]);
    $urlFile[] = $uhFile[0][0];
}

/*Переписываем сохраненные файлы из data/source в data/tenderfiles
без проверок на существование, размер и тип.
Чтобы работала команда copy, владельцем должен быть www-data     */

foreach ($nameFile as $ffile) {
    $ffrom = __DIR__."/data/source/$ffile";
    $fto = __DIR__."/data/tenderfiles/$ffile";
    $f = copy($ffrom, $fto);
    if (!$f) {
        die ("Что-то пошло не так!");
    }
}

$link1 = db_connect();
$tab1 = 'tenders';
$tab2 = 'procedures';
$tab3 = 'files';

$sql = "SELECT * FROM ".$tab1;
$result = mysqli_query($link1, $sql);
$epms=[];
while ($row = mysqli_fetch_assoc($result)) {
    $epms[] = $row;
}
if (empty($epms)) {
    //По умолчанию, на странице 10 тендеров, но пусть будет для произвольной длины
    $long = count($lotNum[0]);
    for ($i=0; $i < $long; $i++) {
        $lot = $lotNum[0][$i];
        $org = $orgName[0][$i];
        $url = $urlName[0][$i];
        $lot = "'".$lot."'";
        $org = "'".$org."'";
        $url = "'".$url."'";

        $sql="INSERT INTO $tab1 (lot, org, url) VALUES ($lot, $org, $url)";
        $result=mysqli_query($link1, $sql);
        //Заполняем массив из таблицы tenders в БД
        $sql = "SELECT * FROM ".$tab1;
        $result = mysqli_query($link1, $sql);
        $epms=[];
        while ($row = mysqli_fetch_assoc ($result)) {
            $epms[] = $row;
        }
    }
} else {
    //Таблица tenders в БД и массив emps заполнены
}
/*Теперь следовало бы обойти все тендеры, но на сайте стоит защита от выкачивания
так что я ограничился 8 тендером в таблице. Русал Арменал № T-0007226
К нему прилагаются 2 файла документации
html файл и файлы документации я сохранил к себе и работал с ними                */

//Рассматриваем 8 тендер из таблицы
$tenderId = 8; //8 позиция в таблице tenders
$startdate = $lotDataTime;

$sql = "SELECT * FROM ".$tab2;
$resultTend8 = mysqli_query($link1, $sql);
$epms2=[];
while ($rowTend8 = mysqli_fetch_assoc ($resultTend8)) {
    $epms2[] = $rowTend8;
}
if (empty($epms2)) {
    $startdate = "'".$startdate."'";
    $sql = "INSERT INTO $tab2 (tender_id, startdate) VALUES ($tenderId, $startdate)";
    $resultTend8=mysqli_query($link1, $sql);
    //Поскольку работаем с 1 строкой, в дальнейшем считаем, что таблица заполнена
}

//Получаем номер лота для 8 тендера
$sql = "SELECT lot FROM $tab1 WHERE id=$tenderId";
$lotRes8 = mysqli_query($link1, $sql);
$lotRes8 = mysqli_fetch_assoc ($lotRes8);
$lot8 = $lotRes8['lot'];
//Получаем дату из БД
$sql = "SELECT startdate FROM $tab2 WHERE tender_id=$tenderId";
$sdRes8 = mysqli_query($link1, $sql);
$sdRes8 = mysqli_fetch_assoc ($sdRes8);
$startdate8 = $sdRes8['startdate'];

//Работа с 2 файлами для 8 тендера
$sql = "SELECT * FROM ".$tab3;
$result = mysqli_query($link1, $sql);
$epmsF=[];
while ($rowFiles = mysqli_fetch_assoc ($result)) {
    $epmsF[] = $rowFiles;
} 

if (empty($epmsF)) {
    //У нас 2 файла, но пусть будет для произвольной длины
    $long = count($nameFile);

    //Получение индентификатора процедуры
    //Должен быть 1 т.к. запись одна
    $sql = "SELECT id FROM $tab2 WHERE tender_id=$tenderId";
    $idRes = mysqli_query($link1, $sql);
    $idRes = mysqli_fetch_assoc ($idRes);
    $procedureId = (int)$idRes['id'];      //Преобразуем в целое

    for ($i=0; $i < $long; $i++) {
        $fileName = $nameFile[$i];
        $fileUrl = $urlFile[$i];
        $alterPath = __DIR__."/data/source/".$nameFile[$i];
        $fileName = "'".$fileName."'";
        $fileUrl = "'".$fileUrl."'";
        $alterPath = "'".$alterPath."'";

        $sql="INSERT INTO $tab3 (filename, alterpath, fileurl, procedure_id) VALUES ($fileName, $alterPath, $fileUrl, $procedureId)";
        $result=mysqli_query($link1, $sql);
        //Заполняем массив из таблицы files в БД
        $sql = "SELECT * FROM ".$tab3;
        $result = mysqli_query($link1, $sql);
        $epmsF=[];
        while ($rowFiles = mysqli_fetch_assoc ($result)) {
            $epmsF[] = $rowFiles;
        }
    } 
} else {
    //Таблица files в БД и массив empsF заполнены
}

mysqli_close ($link1);

?>
    <h2 class="text-center">Список тендеров</h2>
    <table id="Output" class="table border border-dark table-striped">
      <thead class="thead-dark">
        <tr>
          <th class="align-top">№/п</th>
          <th class="align-top">Номер лота</th>
          <th class="align-top">Организатор</th>
          <th class="align-top">Url адрес тендера</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($epms as $row): ?>
        <tr class="table-sm table-active">
          <td><?= $row['id']; ?></td>
          <td><?= $row['lot']; ?></td>
          <td><?= $row['org']; ?></td>
          <td><?= $row['url']; ?></td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>

    <h2 class="text-center">8 тендер</h2>
    <table id="Output" class="table border border-dark table-striped">
      <thead class="thead-dark">
        <tr>
          <th class="align-top">Номер лота</th>
          <th class="align-top">Дата начала</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-sm table-active">
          <td><?= $lot8; ?></td>
          <td><?= $startdate8; ?></td>
        </tr>
      </tbody>
    </table>

    <h2 class="text-center">Файлы для 8 тендера</h2>
    <table id="Output" class="table border border-dark table-striped">
      <thead class="thead-dark">
        <tr>
          <th class="align-top">№/п</th>
          <th class="align-top text-center">Номер процедуры</th>
          <th class="align-top">Имя файла</th>
          <th class="align-top text-center">Url адрес файла</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach ($epmsF as $rowFiles): ?>
        <tr class="table-sm table-active">
          <td><?= $rowFiles['id']; ?></td>
          <td class="text-center"><?= $rowFiles['procedure_id']; ?></td>
          <td><?= $rowFiles['filename']; ?></td>
          <td><?= $rowFiles['fileurl']; ?></td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>

</div>
</body>
</html>