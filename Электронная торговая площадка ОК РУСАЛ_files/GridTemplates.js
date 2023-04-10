!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.GridTemplates=t():e.GridTemplates=t()}("undefined"!=typeof self?self:this,function(){return webpackJsonp_name_([4],{437:function(e,t,a){a(35),a(438),a(444),e.exports=a(446)},438:function(e,t,a){"use strict";var l=a(93),n=a(439),r=a(441),u=a(442),i=a(443);(0,l.addTemplate)("PublicViewTenderRow",n.PublicViewTenderRow),(0,l.addTemplate)("PublicViewPlanPositionRow",r.PublicViewPlanPositionRow),(0,l.addTemplate)("PublicViewPlanRow",u.PublicViewPlanRow),(0,l.addTemplate)("PublicViewContractRow",i.PublicViewContractRow)},439:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PublicViewTenderRow=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i),c=a(50);t.PublicViewTenderRow=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.columnsById,l=(e.resources,e.additionalResources),n=(0,c.createHelper)(a,t),r=t.LotStatusCode,u="row status-"+r+" entity-tender",i=n.formatValue("RequestReceivingEndDate"),s=i||l.RequestReceivingEndDateNotSpecified;return o.default.createElement("div",{className:"block-item-row"},o.default.createElement("div",{className:u},o.default.createElement("div",{className:"col-sm-3 ui-column"},o.default.createElement("div",{className:"ui-status"},n.formatValue("LotStatusName")),n.formatValue("InitialPriceString")?o.default.createElement("div",{className:"ui-money"},o.default.createElement("div",{className:"ui-label"},n.name("InitialPriceString"),":"),o.default.createElement("div",{className:"ui-value"},n.formatValue("InitialPriceString"))):null),o.default.createElement("div",{className:"col-sm-6 ui-column"},o.default.createElement("div",{className:"ui-content-row"},o.default.createElement("span",{className:"ui-label inline"},n.formatValue("TenderConfigCodeName"),":"),o.default.createElement("a",{className:"ui-link",href:n.value("TenderViewUrl")},n.name("TenderNumber")," ",n.formatValue("TenderNumber"))),function(){return a.CustomerName&&a.CustomerName.visible?o.default.createElement("div",{className:"ui-content-row"},o.default.createElement("span",{className:"ui-label inline"},n.name("CustomerName"),":"),o.default.createElement("a",{className:"ui-link-black",href:n.value("CustomerViewUrl")},n.formatValue("CustomerName"))):null}(),o.default.createElement("div",{className:"ui-content-row"},o.default.createElement("span",{className:"ui-label inline"},n.name("OrganizerName"),":"),o.default.createElement("a",{className:"ui-link-black",href:n.value("OrganizerViewUrl")},n.formatValue("OrganizerName"))),o.default.createElement("div",{className:"ui-content-row"},o.default.createElement("span",{className:"ui-label inline"},n.name("TenderLotTitle"),":"),o.default.createElement("a",{className:"ui-link",href:n.value("TenderLotViewUrl")},n.formatValue("TenderTitle")," / ",n.formatValue("TenderLotTitle")))),o.default.createElement("div",{className:"col-sm-3 ui-column"},o.default.createElement("div",{className:"ui-label"},n.name("RequestReceivingBeginDate"),":"),o.default.createElement("div",{className:"ui-value"},n.formatValue("RequestReceivingBeginDate")),o.default.createElement("div",{className:"ui-label"},n.name("RequestReceivingEndDate"),":"),o.default.createElement("div",{className:"ui-value"},s))))}}]),t}(o.default.Component)},441:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PublicViewPlanPositionRow=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i),c=a(50);t.PublicViewPlanPositionRow=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.columnsById,a=e.data,l=(0,c.createHelper)(t,a);return o.default.createElement("div",{className:"block-item-row"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-3 ui-column"},o.default.createElement("div",{className:"ui-name"},o.default.createElement("a",{href:l.value("ViewUrl"),className:"ui-link"},o.default.createElement("span",null,l.name("Number")),o.default.createElement("span",null,l.formatValue("Number")))),o.default.createElement("div",{className:"ui-money"},o.default.createElement("div",{className:"ui-label"},l.name("InitialPriceString")),o.default.createElement("div",{className:"ui-value"},l.formatValue("InitialPriceString")))),o.default.createElement("div",{className:"col-md-5 ui-column"},o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("Title")),o.default.createElement("a",{className:"ui-link ui-value",href:l.value("ViewUrl")},l.formatValue("Title"))),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("PurchaseMethod")),o.default.createElement("span",{className:"ui-value"},l.formatValue("PurchaseMethod"))),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("Year")),o.default.createElement("span",{className:"ui-value"},l.formatValue("Year")))),o.default.createElement("div",{className:"col-md-4 ui-column"},o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("PlacementPeriod")),o.default.createElement("span",{className:"ui-value"},l.formatValue("PlacementPeriod"))),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("ContractFulfillmentDate")),o.default.createElement("span",{className:"ui-value"},l.formatValue("ContractFulfillmentDate"))))))}}]),t}(o.default.Component)},442:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PublicViewPlanRow=void 0;var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=a(1),c=l(o),s=a(22),m=(l(s),a(50));t.PublicViewPlanRow=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.columnsById,a=e.data,l=(0,m.createHelper)(t,a);return c.default.createElement("div",{className:"block-item-row"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-3 ui-column"},c.default.createElement("div",{className:"ui-label"},l.name("Year"),":"),c.default.createElement("a",{className:"ui-link",href:l.value("ViewUrl")},l.formatValue("Year"))),c.default.createElement("div",{className:"col-md-5 ui-column"},c.default.createElement("span",{className:"ui-label inline"},l.name("CompanyName"),":"),c.default.createElement("a",{className:"ui-link-black",href:l.value("CompanyViewUrl")},l.formatValue("CompanyName"))),c.default.createElement("div",{className:"col-md-4 ui-column"},c.default.createElement("div",null,c.default.createElement("span",{className:"ui-label inline"},l.name("LastUpdate"),":"),c.default.createElement("span",{className:"ui-value"},l.formatValue("LastUpdate"))),c.default.createElement("div",null,c.default.createElement("span",{className:"ui-label inline"},l.name("PublishDate"),":"),c.default.createElement("span",{className:"ui-value"},l.formatValue("PublishDate"))))))}}]),t}(c.default.Component)},443:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PublicViewContractRow=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i),c=a(50);t.PublicViewContractRow=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.columnsById,l=(e.resources,(0,c.createHelper)(a,t)),n=t.Status,r=(t.StatusName,t.ContractViewUrl),u=(t.AmountString,t.AmountCurrencyCode,"row ui-row "+n+" entity-Contract"),i="status-icon status-icon-"+n+" entity-Contract";return o.default.createElement("div",{className:u},o.default.createElement("div",{className:"col-md-4 ui-column"},o.default.createElement("div",{className:"ui-name ui-icn-container"},o.default.createElement("i",{className:i})),o.default.createElement("div",{className:"ui-status"},l.formatValue("StatusName")),o.default.createElement("div",{className:"ui-money"},o.default.createElement("div",{className:"ui-value"},o.default.createElement("span",{class:"ui-money-value"},l.formatValue("AmountString"))," ",o.default.createElement("span",{className:"ui-money-currency"},l.formatValue("AmountCurrencyCode"))))),o.default.createElement("div",{className:"col-md-5 ui-column"},o.default.createElement("a",{className:"ui-link",href:r},l.formatValue("Title"),l.formatValue("ConclusionDate")),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("OwnerCompanyName"),":"),o.default.createElement("span",{className:"ui-name"},l.formatValue("OwnerCompanyName"))),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("ContractorCompanyName"),":"),o.default.createElement("span",{className:"ui-name"},l.formatValue("ContractorCompanyName"))),o.default.createElement("a",{className:"ui-link",href:r},l.formatValue("Description"))),o.default.createElement("div",{className:"col-md-3 ui-column"},o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("FulfillmentDate"),":")," ",o.default.createElement("span",{className:"ui-value"},l.formatValue("FulfillmentDate"))),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("PublishedDate"),":")," ",o.default.createElement("span",{className:"ui-value"},l.formatValue("PublishedDate"))),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.name("RenewedDate"),":")," ",o.default.createElement("span",{className:"ui-value"},l.formatValue("RenewedDate")))))}}]),t}(o.default.Component)},444:function(e,t,a){"use strict";var l=a(93),n=a(445);(0,l.addTemplate)("PublicViewNewsRow",n.PublicViewNewsRow)},445:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.PublicViewNewsRow=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i),c=a(50);t.PublicViewNewsRow=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.columnsById,l=(e.resources,(0,c.createHelper)(a,t));return o.default.createElement("div",{className:"row ui-row"},o.default.createElement("div",{className:"col-sm-3 ui-column ui-icn-container"},o.default.createElement("i",{className:"ui-icon-clock icon-large"}),l.formatValue("PublishDate")),o.default.createElement("div",{className:"col-sm-9"},o.default.createElement("div",null,o.default.createElement("a",{href:l.value("ViewUrl")},l.value("Title"))),o.default.createElement("p",{className:"news-preview-text"},l.value("Preview"))))}}]),t}(o.default.Component)},446:function(e,t,a){"use strict";var l=a(93),n=a(447);(0,l.addTemplate)("ViewTenderRequestRow",n.ViewTenderRequestRow)},447:function(e,t,a){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.ViewTenderRequestRow=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),i=a(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i),c=a(50);t.ViewTenderRequestRow=function(e){function t(){return l(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"renderFieldWithUrl",value:function(e,t,a){return t?o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},e,":"),a?o.default.createElement("a",{className:"ui-link inline",href:a},t):o.default.createElement("span",{className:"ui-value inline"},t)):null}},{key:"renderField",value:function(e,t){return t?o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},e,":"),o.default.createElement("span",{className:"ui-value value"},t)):null}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.columnsById,l=(0,c.createHelper)(a,t),n=t.StatusCode,r="row status-"+n;return o.default.createElement("div",{className:"block-item-row"},o.default.createElement("div",{className:r},o.default.createElement("div",{className:"col-md-3 ui-column"},o.default.createElement("div",{className:"ui-status"},l.formatValue("RequestStatusName"))),o.default.createElement("div",{className:"col-md-7 ui-column"},o.default.createElement("div",null,o.default.createElement("a",{className:"ui-link inline",href:l.value("RequestViewUrl")},l.name("PublicNumber")," ",l.formatValue("PublicNumber"))),this.renderField(l.name("DecisionCodeName"),l.value("DecisionCodeName")),this.renderFieldWithUrl(l.name("OrganizerCompanyName"),l.formatValue("OrganizerCompanyName"),l.value("OrganizerCompanyViewUrl")),this.renderFieldWithUrl(l.name("ParticipantCompanyName"),l.formatValue("ParticipantCompanyName"),l.value("ParticipantCompanyViewUrl")),o.default.createElement("div",null,o.default.createElement("span",{className:"ui-label inline"},l.formatValue("TenderConfigCodeName"),":"),o.default.createElement("a",{className:"ui-link",href:l.value("TenderViewUrl")},l.formatValue("TenderNumberFull")," - ",l.formatValue("TenderTitle")))),o.default.createElement("div",{className:"col-md-2 ui-column"},o.default.createElement("div",null,o.default.createElement("div",{className:"ui-label"},l.name("SubmittedDate"),":"),o.default.createElement("div",{className:"ui-value"},l.formatValue("SubmittedDate"))))))}}]),t}(o.default.Component)}},[437])});