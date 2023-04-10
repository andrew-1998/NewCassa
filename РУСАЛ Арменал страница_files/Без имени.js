(function(window,undefined){var Globalize;if(typeof require!=="undefined"&&typeof exports!=="undefined"&&typeof module!=="undefined"){Globalize=require("globalize")}else{Globalize=window.Globalize}Globalize.addCultureInfo("ru-RU","default",{name:"ru-RU",englishName:"Russian (Russia)",nativeName:"русский (Россия)",language:"ru",numberFormat:{",":" ",".":",",negativeInfinity:"-бесконечность",positiveInfinity:"бесконечность",percent:{pattern:["-n%","n%"],",":" ",".":","},currency:{pattern:["-n$","n$"],",":" ",".":",",symbol:"р."}},calendars:{standard:{"/":".",firstDay:1,days:{names:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],namesAbbr:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],namesShort:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]},months:{names:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь",""],namesAbbr:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]},monthsGenitive:{names:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря",""],namesAbbr:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек",""]},AM:null,PM:null,patterns:{d:"dd.MM.yyyy",D:"d MMMM yyyy",t:"HH:mm",T:"HH:mm:ss",f:"dd.MM.yyyy HH:mm",F:"dd.MM.yyyy HH:mm:ss","μ":"dd.MM.yyyy HH:mm:ss.fff",Y:"MMMM yyyy"}}}})}(this));var FogSoft=(function(module){var commonModule=module.Common=module.Common||{},globalizationModule=module.Globalization=module.Globalization||{},localeObj={locale:"ru",culture:"ru-RU"};commonModule.settings={datePickerParams:{language:localeObj.locale,showMeridian:false,weekStart:1}};commonModule.messages={successMessage:"Операция выполнена успешно",failureMessage:"Операция не может быть выполнена",pleaseWait:"Пожалуйста, подождите...",applicationError:"Внутренняя ошибка сервера. Попробуйте повторить операцию еще раз. Если ошибка будет повторяться, пожалуйста, обратитесь к администратору.",yes:"Да",no:"Нет",cancel:"Отмена",ok:"ОК",enter:"Войти",loginDialogTitle:"Вход в систему",dataGridSelectDeselectAll:"Выбрать все/Снять выделение",dataGridLoadingIndicatorLabel:"Загружается",dataGridNoSelectedRowsError:"Не выбрано ни одной записи для выполнения операции",unsavedChangesConfirmMessage:"На странице имеются несохраненные изменения. Вы действительно хотите покинуть страницу?",fileManager:"Файловый менеджер",notificationArea:{show:"Показать остальные уведомления",remove:"Удалить все",hide:"Скрыть...",empty:"На данный момент уведомлений нет"},requiredAsteriskMessage:"Это поле обязательно для заполнения",customRequiredAsteriskMessage:"Поле обязательно для заполнения, но в режиме черновика может быть пустым",emailValidationMessage:"Пожалуйста введите корректный email адрес"};globalizationModule.locale(localeObj);return module}(FogSoft||{}));(function($){FogSoft.SignatureMessages={validationStepIsValidBrowserName:"Проверка браузера",validationStepPluginName:"Проверка установки плагина",validationStepCertificateName:"Проверка наличия сертификата",validationStepCertificateMessage:"Сертификат не выбран или отсутствует",validationCertificatesExistsName:"Получение списка сертификатов",validationStepCertificatesExistsMessage:"Действующие сертификаты отсутствуют",validationStepLocalCertificateCheckName:"Локальная проверка сертификата",validationStepLocalCertificateCheckMessage:"Сертификат не прошел проверку на Вашем компьютере",validationStepLocalCertificateSignName:"Проверка подписи сертификатом пользователя",validationStepLocalCertificateSignMessage:"Ошибка при подписи данных",validationStepLocalCertificateEncryptName:"Проверка шифрования сертификатом пользователя",validationStepLocalCertificateEncryptMessage:"Ошибка при шифровании/дешифровании данных",validationStepLocalCertificateGostName:"Проверка на соответствие сертификата ГОСТу",validationStepLocalCertificateGostMessage:"Сертификат не соответствует ГОСТу",validationStepLocalCertificateServerName:"Проверка соответствия сертификата",validationStepLocalCertificateServerMessage:"Ошибка при проверке сертификата на сервере",selectCertificate:"Выберите сертификат",errorStoreOpen:"Ошибка при открытии хранилища",errorStoreClose:"Ошибка при закрытии хранилища",errorCertificateEnum:"Ошибка при перечислении сертификатов",errorSignatureCreate:"При попытке подписи произошла ошибка. Убедитесь, что установлен плагин для электронной подписи и сайт добавлен в список доверенных узлов",errorEncryption:"Не удалось зашифровать из-за ошибки",errorDecryption:"При расшифровании данных произошла ошибка",errorSignValidate:"Ошибка проверки подписи",errorCertificateExport:"Ошибка экспортирования сертификата",errorCertificateImport:"Ошибка импортирования сертификата",errorUserCertificateIsNotFound:"Не найден активный сертификат пользователя на локальном компьютере",errorSignerTitle:"Ошибка использования компонента подписи",activeCertNotGostError:"Ваш активный сертификат не соответствует ГОСТу",NoCertificateSelected:function(url){return"Не выбран активный сертификат пользователя. Укажите активный сертификат на странице <a href='"+url+'\'>"Мои сертификаты"</a>.'},collapseXmlDocument:"Скрыть информацию о подписи",expandXmlDocument:"Просмотр подписанных данных",collapseSigningXmlDocument:"Скрыть информацию о подписываемых данных",expandSigningXmlDocument:"Просмотр подписываемых данных",issuer:"Поставщик",validFrom:"Действителен с",validTo:"по",errorValidateIntergiry:"Ошибка при проверке подлинности сертификата",errorValidateSign:"Обнаружены проблемы в подписи сертификата",errorValidateChain:"Невозможно проверить подлинность сертификата по цепочке",errorValidateCyclic:"Обнаружены циклические ссылки в цепочке сертификации",errorValidateChainDate:"В цепочке сертификации обнаружены сертификаты с истекшим (не наступившим) сроком действия",errorValidateInvalidChainSign:"В цепочке сертификации обнаружены сертификаты с некорректной подписью",errorValidateInvalidUsage:"В цепочке сертификации обнаружены сертификаты с некорректной целью применения",errorValidateDateExpired:"Истек срок действия сертификата.",errorValidateDateNotStarted:"Данный сертификат не может быть использован. Срок его действия еще не наступил.",errorValidateChainDateNested:"Ошибка при проверке временной вложенности цепочки сертификатов",errorValidateInvalidRootUsage:"Корневой сертификат с некорректной целью применения",errorValidateRevoked:"Сертификат отозван",errorValidateStatus:"Невозможно определить статус сертификата",errorInvalidConstraints:"Ошибка при проверке ограничений сертификата",errorNoInsuranceChainPolicy:"Отсутствует политика выдачи сертификата",errorOfflineRevocation:"Невозможно проверить статус отзыва сертификата",CapidecAddPluginMessageIE:function(url){return"Для работы с подписью в браузере Internet Explorer выполните действия, описанные в <a href='"+url+"'>руководстве по настройке браузера</a>"},CapidecAddPluginMessageUnsupportedBrowser:"Данный браузер не поддерживается. Воспользуйтесь браузером Microsoft Internet Explorer.",CapidecSuportedBrowsersMessage:"Поддерживаются только браузеры Microsoft Internet Explorer.",CapidecErrorActiveXObjectCreation:"Ошибка создания объекта",CapidecErrorOldVersion:"У вас установлена старая версия плагина для подписи. Для корректной работы необходимо обновить плагин. Для этого необходимо удалить старую версию, и перезапустить браузер. Подтвердите удаление.",CapidecErrorReopenTabToUninstall:"Для завершения удаления расширения для электронной подписи перезапустите браузер.",Cades2AddPluginMessage:function(url){return"Для работы с подписью установите плагин <a href='"+url+'\'>"КриптоПро ЭЦП Browser plug-in"</a>'},Cades2SuportedBrowsersMessage:"Данный браузер не поддерживается, поддерживаются только Internet Explorer, Mozilla Firefox, Opera, Google Chrome, Яндекс.Браузер, Apple Safari."}})(jQuery);var FogSoft=(function(module){var dataTables=module.DataTable=module.DataTable||{};dataTables.messages={processing:"Подождите...",search:"Поиск:",lengthMenu:"Показать _MENU_ записей",info:"Записи с _START_ по _END_ из _TOTAL_",infoEmpty:"",select:{rows:{_:"Выбрано записей: %d",0:""}},infoSinglePage:"Записей: _TOTAL_",infoFiltered:"(отфильтровано из _MAX_ записей)",infoPostFix:"",loadingRecords:"Загрузка записей...",zeroRecords:"Записи отсутствуют.","emptyTable:":"В таблице отсутствуют данные",paginate:{first:"Первая",previous:"",next:"",last:"Последняя"},aria:{sortAscending:": активировать для сортировки столбца по возрастанию",sortDescending:": активировать для сортировки столбца по убыванию"}};return module}(FogSoft||{}));var FogSoft=(function(module,$){var tenderParticipationModule=module.TenderParticipation=module.TenderParticipation||{};tenderParticipationModule.messages={incorrectInput:"Указанное ценовое предложение не удовлетворяет правилам заполнения",incorrectInputForPosition:"Ценовое предложение для позиции «{0}» не удовлетворяет правилам заполнения",priceOfferHasToBeGreaterThanInitialPrice:"Ценовое предложение не должно быть меньше начальной цены",priceOfferHasToBeGreaterThanInitialPriceForPosition:"Ценовое предложение для позиции «{0}» не должно быть меньше начальной цены",priceOfferHasToBeLessThanInitialPrice:"Ценовое предложение не должно превышать начальную цену",priceOfferHasToBeLessThanInitialPriceForPosition:"Ценовое предложение для позиции «{0}» не должно превышать начальную цену",priceOfferHasToBeGreaterThanPreviousPrice:"Ценовое предложение должно быть больше предыдущей цены",priceOfferHasToBeGreaterThanPreviousPriceForPosition:"Ценовое предложение для позиции «{0}» должно быть больше предыдущей цены",priceOfferHasToBeLessThanPreviousPrice:"Ценовое предложение должно быть меньше предыдущей цены",priceOfferHasToBeLessThanPreviousPriceForPosition:"Ценовое предложение для позиции «{0}» должно быть меньше предыдущей цены",priceOfferHasToBeGreaterThanZero:"Ценовое предложение должно быть больше нуля",priceOfferHasToBeGreaterThanZeroForPosition:"Ценовое предложение для позиции «{0}» должно быть больше нуля",errorNoPriceOffer:"Необходимо указать ценовое предложение",errorNoPriceOfferForPosition:"Необходимо указать ценовое предложение для позиции «{0}»",errorSelectedPositionListEmpty:"Необходимо отметить хотя бы одну позицию",};return module}(FogSoft||{},jQuery));