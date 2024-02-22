//@ui5-bundle approval/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"approval/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("approval.Component",{metadata:{manifest:"json"}})});
},
	"approval/ext/controller/Approve.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog("oBusyDialog");return{approve:async function(o){debugger;t.open();let a="finalApprove";let l=window.location.href;var n=l.split("(");var s=n[1];var i=s.split("'");let r=oModel.bindContext(`/${a}(...)`);let p={pankey:i[1],flag:"X",buttonClicked:"Approved"};r.setParameter("data",JSON.stringify(p));await r.execute();let c=r.getBoundContext();let u=c.getObject();console.log(u);e.show("PAN Form Has Successfully Approved");t.close();window.location.reload()}}});
},
	"approval/ext/controller/Draftattachment.js":function(){sap.ui.define(["sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,t,n,r){"use strict";function a(n,r){var a;function o(e){a&&a.getBeginButton().setEnabled(e)}function i(e){a.setBusy(e)}function s(){a&&a.close()}function g(t,n,r){e.error("Upload failed",{title:"Error"})}function l(e){return sap.ui.core.Fragment.byId("excelUploadDialog",e)}return{onFileUploadDone:function(e){debugger},onBeforeOpen:function(e){a=e.getSource();n.addDependent(a)},onAfterClose:function(e){n.removeDependent(a);a.destroy();a=undefined},onAfterBinding:async function(e){debugger;const t=this.base.getExtensionAPI();oModel=t.getModel();sFunctionName="getattachments";oFunction=oModel.bindContext(`/${sFunctionName}(...)`)},_getBaseURL:function(){debugger;var e=this.getOwnerComponent().getManifestEntry("/sap.app/id").replaceAll(".","/");return jQuery.sap.getModulePath(e)},onFileChange:function(e){debugger;var t=e.getParameters("files").files[0];this.file=t},onFileUploadDone:function(e){debugger},onOk:function(e){debugger;let t=e.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/approval::tab1ObjectPage/controls/fe::table::tab1tovendor_data::LineItem::VendorData"].oModel.oData.currentCtxt.sPath;const n=/'([^']+)'/;const r=t.match(n);const a=r[1];var o=l("__fileUploader");let i=e.oSource;var s=new FileReader;s.onload=function(e){debugger;var t=this.file;this.content=e.currentTarget.result;this.createfile(a,i)}.bind(this);s.readAsDataURL(this.file)},createfile:async function(t,n){debugger;var r=this;var t=t;var a=this.file;debugger;var o={PAN_Number:t,contentS:this.content,mediaType:this.file.type,fileName:this.file.name};debugger;let i=n.getParent().getParent().getParent().oContainer.getParent().getParent().getParent().getManifestObject()._oBaseUri._string;var g={url:"/odata/v4/catalog/attachments",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(o)};debugger;const l=async()=>{var t=new sap.m.BusyDialog({text:"Uploading file..."});t.open();return new Promise((r,a)=>{$.ajax(g).done(async(a,o,i)=>{var s=o;if(s=="success"){t.close();var g="FILE UPLOADED SUCCESSFULLY";e.success(g)}else{var l="ERROR UPLOADING THE FILE";e.error(l)}debugger;r(a.ID);debugger;let u=n;if(n?.getParent()?.getBindingContext()!=undefined){debugger;await n.getParent().getBindingContext().refresh}else{debugger}}).fail(e=>{debugger;a(e)})})};debugger;await l();debugger;s()},onCancel:function(e){s()},onTypeMismatch:function(e){var t=e.getSource().getFileType().map(function(e){return"*."+e}).join(", ");g("The file type *."+e.getParameter("fileType")+" is not supported. Choose one of the following types: "+t)},onFileAllowed:function(e){o(true)},onFileEmpty:function(e){o(false)},onUploadComplete:function(e){var r=e.getParameter("status");var a=e.getSource();a.clear();o(false);i(false);if(r>=400){var l;try{l=JSON.parse(e.getParameter("responseRaw"))}catch(t){l=e.getParameter("responseRaw")}if(l&&l.error&&l.error.message){g(l.error.code,l.error.target,l&&l.error&&l.error.message)}}else{t.show("File uploaded successfully");n.refresh();s()}}}}return{upload:function(e,t){this.loadFragment({id:"excelUploadDialog",name:"approval.ext.fragment.Draftattachment",controller:a(this,"MediaFile")}).then(function(e){e.open()})}}});
},
	"approval/ext/controller/Form.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";var t=0;return e.extend("approval.ext.controller.Form",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onBeforeBinding:async function(){debugger;this.getView().getContent()[0].getSections()[2].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[1].setUploadEnabled(false);var e=this.base.getExtensionAPI().getModel();var t=window.location.href;var n=t.split("(");var g=n[1];var o=g.split("'");let i=o[1];var r="getData";let s=e.bindContext(`/${r}(...)`);s.setParameter("ID",i);await s.execute();debugger;debugger;let a=s.getBoundContext();let l=a.getObject();if(l.value=="Approved"||l.value=="Rejected"||l.value=="Need For Justification"){debugger;this.getView().getContent()[0].getFooter().setVisible(false)}else if(l.value=="Pending for Approval"){this.getView().getContent()[0].getFooter().setVisible(true);this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().setEditable(true);this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().setEditMode("Editable");this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().getContentEdit()[0].setEditable(true)}else{this.getView().getContent()[0].getFooter().setVisible(false)}}}}})});
},
	"approval/ext/controller/Needforclarification.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog("oBusyDialog");return{needforclarification:async function(o){t.open();let a=o.getModel();let i="Reject";let n=window.location.href;var l=n.split("(");var r=l[1];var s=r.split("'");let c=a.bindContext(`/${i}(...)`);let d={buttonClicked:"Need For Clarification"};c.setParameter("data",JSON.stringify(d));await c.execute();let u=c.getBoundContext();let f=u.getObject();console.log(f);t.close();e.show("PAN From is Send Back For More Clarification");window.location.reload()}}});
},
	"approval/ext/controller/PanDetailsList.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("approval.ext.controller.PanDetailsList",{override:{onInit:function(){debugger;var e=this.base.getExtensionAPI().getModel()}}})});
},
	"approval/ext/controller/Reject.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog("oBusyDialog");return{reject:async function(o){t.open();let a=o.getModel();let l="finalApprove";let n=window.location.href;var s=n.split("(");var i=s[1];var c=i.split("'");let r=a.bindContext(`/${l}(...)`);let u={pankey:c[1],flag:"X",buttonClicked:"Rejected"};r.setParameter("data",JSON.stringify(u));await r.execute();let d=r.getBoundContext();let g=d.getObject();console.log(g);e.show("PAN Form Has Successfully Rejected");t.close();window.location.reload()}}});
},
	"approval/ext/fragment/Demo.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"><Table noDataText="Drop column list items here and columns in the area above" id="table0"><items><ColumnListItem type="Active" id="item0"><cells><Text text="Row 1 Cell 1" id="text3"/><Text text="Row 1 Cell 2" id="text4"/><Text text="Row 1 Cell 3" id="text5"/></cells></ColumnListItem></items><columns><Column id="column0"><header><Label text="Header 1" id="label0"/></header></Column><Column id="column1"><header><Label text="Header 2" id="label1"/></header></Column><Column id="column2"><header><Label text="Header 3" id="label2"/></header></Column></columns></Table><sap.ui.layout.form:Form editable="true" xmlns:sap.ui.layout.form="sap.ui.layout.form" id="form0"><sap.ui.layout.form:formContainers><sap.ui.layout.form:FormContainer title="Title" id="container0"><sap.ui.layout.form:formElements><sap.ui.layout.form:FormElement label="Label" id="element0"><sap.ui.layout.form:fields><Input width="100%" id="input0"/></sap.ui.layout.form:fields></sap.ui.layout.form:FormElement></sap.ui.layout.form:formElements></sap.ui.layout.form:FormContainer></sap.ui.layout.form:formContainers><sap.ui.layout.form:layout><sap.ui.layout.form:ResponsiveGridLayout id="layout0"/></sap.ui.layout.form:layout></sap.ui.layout.form:Form></core:FragmentDefinition>',
	"approval/ext/fragment/Draftattachment.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core"\n    xmlns:u="sap.ui.unified"\n    xmlns="sap.m"><Dialog id="_IDDialog" title="Upload Attachment" class="sapUiResponsiveContentPadding"\n        beforeOpen=".onBeforeOpen"\n        afterClose=".onAfterClose"><content><u:FileUploader id="__fileUploader"\n            placeholder="Choose a file..." \n            change="onFileChange"\n             multiple="false" \n             fileType="pdf,jpeg,png"\n             uploadComplete="onFileUploadDone" \n /><Button id="ok"\n                text="OK"\n                press=".onOk"\n                type="Emphasized"\n/><Button id="cancel"\n                text="Cancel"\n                press=".onCancel" /></content></Dialog></core:FragmentDefinition>',
	"approval/ext/fragment/Switch.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m"><Switch id="_IDGenButton1" core:require="{ handler: \'approval/ext/fragment/Switch\'}" state="{Notification_Status}" change="handler.onPress" type="AcceptReject" enabled="false" /></core:FragmentDefinition>',
	"approval/ext/fragment/Switch.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onInit:function(n){debugger;e.show("Switch has been triggered.")}}});
},
	"approval/ext/fragment/WF.fragment.xml":'<core:FragmentDefinition xmlns="sap.m"\n                         xmlns:core="sap.ui.core"  xmlns:macros="sap.fe.macros" ><Table id="myTable"\n           inset="false"\n           items="{path: \'/tab1(PAN123)/tab1toWORKFLOW_HISTORY\'\n\t\t  }"\n           class="sapUiResponsiveMargin" core:require="{ handler: \'approval/ext/fragment/Switch\'}"><columns><Column id="_IDGenColumn2" ><Text id="_IDGenText2" text="Level" /></Column><Column id="_IDGenColumn3"><Text id="_IDGenText5" text="Employee ID" /></Column><Column id="_IDGenColumn4"><Text id="_IDGenText6" text="Employee Name" /></Column><Column id="_IDGenColumn10"><Text id="_IDGenText12" text="Notification Status" /></Column></columns><items><ColumnListItem id="_IDGenColumnListItem1"><cells><Text id="_IDGenText14" text="{level}" /><Text id="_IDGenText114" text="{Employee_ID}" /><Text id="_IDGenText113" text="{Employee_Name}" /><Switch id="_IDGenSwitch1" type="AcceptReject"></Switch></cells></ColumnListItem></items></Table></core:FragmentDefinition>\n',
	"approval/i18n/i18n.properties":'# This is the resource bundle for approval\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=PAN Approval\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=PAN Approval\n',
	"approval/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"approval","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.2","toolsId":"3ed37458-5205-4193-aa9a-7ad81b70931d"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"approval-display":{"semanticObject":"approval","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.4","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"approval.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"routes":[{"pattern":":?query:","name":"tab1List","target":"tab1List"},{"pattern":"tab1({key}):?query:","name":"tab1ObjectPage","target":"tab1ObjectPage"},{"pattern":"tab1({key})/tab1tovendor_data({key2}):?query:","name":"tab1_tab1tovendor_dataObjectPage","target":"tab1_tab1tovendor_dataObjectPage"}],"targets":{"tab1List":{"type":"Component","id":"tab1List","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/tab1","variantManagement":"None","navigation":{"tab1":{"detail":{"route":"tab1ObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"enableExport":false,"type":"GridTable"}}},"initialLoad":"Enabled"}}},"tab1ObjectPage":{"type":"Component","id":"tab1ObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/tab1","content":{"footer":{"actions":{"approve":{"press":"approval.ext.controller.Approve.approve","visible":true,"enabled":true,"text":"Approve","position":{"anchor":"needforclarification","placement":"After"}},"reject":{"press":"approval.ext.controller.Reject.reject","visible":true,"enabled":true,"text":"Reject","position":{"placement":"After","anchor":"approve"}},"needforclarification":{"press":"approval.ext.controller.Needforclarification.needforclarification","visible":true,"enabled":true,"text":"Need For Clarification","position":{"placement":"Before","anchor":"approve"}}}},"body":{"sections":{}}},"navigation":{"tab1tovendor_data":{"detail":{"route":"tab1_tab1tovendor_dataObjectPage"}}},"controlConfiguration":{"tab1tovendor_data/@com.sap.vocabularies.UI.v1.LineItem#VendorData":{"tableSettings":{"enableExport":false,"type":"GridTable"}},"tab1topdf/@com.sap.vocabularies.UI.v1.LineItem#ATTACHMENTSINTERNALTOPANFORAPPROVERS":{"tableSettings":{"enableExport":false},"actions":{"attach":{"press":"approval.ext.controller.Draftattachment.upload","visible":true,"enabled":true,"requiresSelection":false,"text":"attach"}}},"tab1toWORKFLOW_HISTORY/@com.sap.vocabularies.UI.v1.LineItem#WORKFLOWHISTORY":{"tableSettings":{"enableExport":false,"type":"GridTable"},"columns":{"Switch":{"header":"Notification Status","width":"100px","position":{"anchor":"DataField::WFtoWFE::Employee_Name","placement":"After"},"template":"approval.ext.fragment.Switch"}}},"tab1totab2/@com.sap.vocabularies.UI.v1.LineItem#_":{"tableSettings":{"enableExport":false,"type":"GridTable"}},"tab1totab3/@com.sap.vocabularies.UI.v1.LineItem#PANTYPE":{"tableSettings":{"type":"GridTable"}},"tab1toWORKFLOW_HISTORY/@com.sap.vocabularies.UI.v1.LineItem#WorkflowHistory":{"tableSettings":{"type":"AnalyticalTable"}}}}}},"tab1_tab1tovendor_dataObjectPage":{"type":"Component","id":"tab1_tab1tovendor_dataObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/tab1/tab1tovendor_data","navigation":{},"controlConfiguration":{"vendtoptd/@com.sap.vocabularies.UI.v1.LineItem#PAYMENT_TERM_DETAILS":{"tableSettings":{"type":"GridTable"}},"vendtopd/@com.sap.vocabularies.UI.v1.LineItem#PRICEDETAILS":{"tableSettings":{"type":"GridTable"}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#approval::tab1ObjectPage":{"controllerName":"approval.ext.controller.Form"},"sap.fe.templates.ListReport.ListReportController#approval::tab1List":{"controllerName":"approval.ext.controller.PanDetailsList"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"approval_form"}}'
}});
