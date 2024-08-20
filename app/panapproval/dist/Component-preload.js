//@ui5-bundle panapproval/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"panapproval/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("panapproval.Component",{metadata:{manifest:"json"}})});
},
	"panapproval/ext/controller/Approve1.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog;var a=new sap.m.Text({text:"   Comments are mandatory!"});var n=new sap.m.Text({text:"Are you sure you want to Approve this form ?"});var r="action";var s=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Error",title:"Error",content:a,beginButton:new sap.m.Button({text:"OK",press:function(){s.close()}.bind(this)})});return{Approve:async function(a){let o=new Promise(e=>{var t=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Warning",title:"Warning",content:n,beginButton:new sap.m.Button({type:sap.m.ButtonType.Emphasized,text:"OK",press:function(){r="action";t.close();e()}.bind(this)}),endButton:new sap.m.Button({text:"Close",press:function(){r=null;t.close();e()}.bind(this)})});t.open()});let i=await o;if(r==null)return"not confirmed";t.open();var l=a.getModel();var p="getuser";var u="Reject";let c=l.bindContext(`/${u}(...)`);var m=a.sPath.match(/'([^']+)'/)?.[1];m={key:m,status:"Approved",urll:window.location.href};m=JSON.stringify(m);c.setParameter("ID",m);await c.execute();let g=l.bindContext(`/${p}(...)`);g.setParameter("ID",m);await g.execute();let d=g.getBoundContext();let v=d.getObject();v=JSON.parse(v.value);if(v.status=="mandt"){t.close();s.open();return"errr"}var f=document.referrer;console.log(f);t.close();if(v.status=="er")alert("Sorry, we're experiencing technical difficulties. Please try again later.");else{sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FooterBar").setEnabled(false);sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FormContainer::ApprovalComments::FormElement::DataField::Comments::Field-edit").setEnabled(false)}var y=await sap.ushell.Container.getServiceAsync("Navigation");y.navigate({target:{semanticObject:"pan_approval",action:"display"}});if(v.status!="er"){e.show("PAN Form has been Approved.")}}}});
},
	"panapproval/ext/controller/Clarification1.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog;var a=new sap.m.Text({text:"  Comments are mandatory!"});var n=new sap.m.Text({text:" Are you sure you want to send this back for better justification ?"});var s="action";var i=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Error",title:"Error",content:a,beginButton:new sap.m.Button({text:"OK",press:function(){i.close()}.bind(this)})});return{clarification:async function(a){let r=new Promise(e=>{var t=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Warning",title:"Warning",content:n,beginButton:new sap.m.Button({type:sap.m.ButtonType.Emphasized,text:"OK",press:function(){s="action";t.close();e()}.bind(this)}),endButton:new sap.m.Button({text:"Close",press:function(){s=null;t.close();e()}.bind(this)})});t.open()});let o=await r;if(s==null)return"not confirmed";t.open();var l=a.getModel();var p="getuser";let c=l.bindContext(`/${p}(...)`);var u=a.sPath.match(/'([^']+)'/)?.[1];u={key:u,status:"Justification Needed",urll:window.location.href};u=JSON.stringify(u);c.setParameter("ID",u);await c.execute();let m=c.getBoundContext();let g=m.getObject();g=JSON.parse(g.value);if(g.status=="mandt"){t.close();i.open();return"errr"}t.close();if(g.status=="er")alert("Sorry, we're experiencing technical difficulties. Please try again later.");else{sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FooterBar").setEnabled(false);sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FormContainer::ApprovalComments::FormElement::DataField::Comments::Field-edit").setEnabled(false)}var d=await sap.ushell.Container.getServiceAsync("Navigation");d.navigate({target:{semanticObject:"pan_approval",action:"display"}});if(g.status!="er")e.show("PAN Form has been requested for clarification.")}}});
},
	"panapproval/ext/controller/ListController.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("panapproval.ext.controller.ListController",{override:{onInit:async function(){},routing:{onAfterBinding:async function(e){var t=this.base.getExtensionAPI().getModel();var a="filteredData";let i=t.bindContext(`/${a}(...)`);await i.execute();let r=i.getBoundContext();let n=r.getObject();var l=[{isEmpty:null,operator:"EQ",validated:"NotValidated",values:["Pending for Approval"]}];var o=JSON.parse(n.value);var s={PAN_Number:o,status:l};if(s.PAN_Number.length==0)s.PAN_Number=[{isEmpty:null,operator:"EQ",validated:"NotValidated",values:[""]}];let d=await this.base.byId("panapproval::PAN_Details_APRList--fe::FilterBar::PAN_Details_APR").getFilterConditions();d.PAN_Number=s.PAN_Number;await this.base.byId("panapproval::PAN_Details_APRList--fe::FilterBar::PAN_Details_APR").setFilterConditions(d);await sap.ui.getCore().byId("panapproval::PAN_Details_APRList--fe::FilterBar::PAN_Details_APR-btnSearch").firePress()}}}})});
},
	"panapproval/ext/controller/Nav1.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{llink:async function(e){var t=e.getModel();var a="cbe";let n=t.bindContext(`/${a}(...)`);var c=e.sPath.match(/'([^']+)'/)?.[1];n.setParameter("ID",c);await n.execute();let i=n.getBoundContext();let s=i.getObject();s=JSON.parse(s.value);var r=await sap.ushell.Container.getServiceAsync("Navigation");r.navigate({target:{semanticObject:"cbecompdbdynobj",action:"display"},params:{ProjectId:`${s.ProjectId}`}})}}});
},
	"panapproval/ext/controller/PanDetailsObj.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension","sap/uxap/ObjectPageSubSection"],function(e,t){"use strict";var n;return e.extend("panapproval.ext.controller.PanDetailsObj",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},onBeforeRendering:async function(){},onAfterRendering:async function(){},routing:{onBeforeBinding:async function(e){this.getView().setVisible(false);var a=this.getView().getContent()[0].getSections()[2].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[1].setUploadEnabled(false);var o=this;var s=window.location.href;var i=s.split("(");var l=i[1];var r=l.split("'");var g=this.base.getExtensionAPI().getModel();var d="validateUser";let c=g.bindContext(`/${d}(...)`);c.setParameter("ID",r[1]);await c.execute();let m=c.getBoundContext();let u=m.getObject();var p=JSON.parse(u.value);if(p.status=="User Found"){this.getView().setVisible(true);var C=this.base.getView().getContent()[0];C.attachSectionChange(function(){var e=this.getScrollingSectionId();sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::table::tab1tovendor_data::LineItem::VendorData").mAggregations._content.getRows().forEach(async e=>{await e.getCells()[9].removeStyleClass("css1");await e.getCells()[1].removeStyleClass("css1");await e.getCells()[9].addStyleClass("css1");await e.getCells()[1].addStyleClass("css1")})});var v=this.base.getAppComponent().getManifestObject()._oBaseUri._string;await $.ajax({url:v+`odata/v4/pan-approval/PAN_Details_APR/${r[1]}`,success:function(e){o.getView().getContent()[0].getFooter().setVisible(true);if(e.status=="Approved"||e.status=="Rejected"||e.status=="Justification Needed")o.getView().getContent()[0].getFooter().setVisible(false)},error:function(e,t,n){console.error(n)}});await $.ajax({url:v+`odata/v4/pan-approval/PAN_Details_APR/${r[1]}/tab1toWORKFLOW_HISTORY`,success:function(e){console.log(e);f(e)},error:function(e,t,n){console.error(n)}});function f(e){var a=e.value;var s=[];a.forEach(e=>{s.push({level:e.level,Notification_Status:e.Notification_Status,Title:e.Title,Employee_ID:e.Employee_ID,Employee_Name:e.Employee_Name,"Begin_Date/_Time":e.Begin_DateAND_Time,"End_Date/_Time":e.End_DateAND_Time,Days_Taken:e.Days_Taken,Status:e.Result,By_User:e.Approved_by})});let i=o.base.getView().getContent()[0].getSections()[3];let l=s.sort((e,t)=>e.level>t.level?1:e.level<t.level?-1:0);let r=[];let g=[];let d;let c;let m=l.length-1;l.forEach((e,t)=>{d=e.level;if(c!=undefined){if(d!==c){r.push(g);g=[]}}g.push(e);c=e.level;if(t==m){r.push(g)}});i.destroySubSections();i.addSubSection(new t({}));let u=i.getSubSections();let p=u[u.length-1];p.addBlock(new sap.m.ScrollContainer({horizontal:true,vertical:true,visible:true,height:"200px"}));let C=p.getBlocks()[0];C.addContent(new sap.m.HBox({width:"100%",alignItems:"End",alignContent:"End"}));let v=C.getContent();let f=v[v.length-1];f.addItem(new sap.m.HBox({width:"90%"}));f.addItem(new sap.m.Button({text:"Comment History",press:async function(e){function t(){var e=Math.floor(Math.random()*1e6);var t=(new Date).getTime();var n=t+"-"+e;return n}if(!n){n=new sap.m.Dialog({title:"Approval Comments",endButton:new sap.m.Button({text:"Close",press:async function(){n.close()},layoutData:new sap.m.FlexItemData({growFactor:5,alignSelf:"End"})})})}n.addContent(new sap.m.VBox({width:"60vw"}));let a="getcomments";let o=e.getSource().getModel().bindContext(`/${a}(...)`);console.log();var s=window.location.href;var i=s.split("(");var l=i[1];var r=l.split("'");var g=r[1];o.setParameter("ID",g);await o.execute();const d=o.getBoundContext();let c=d.getValue();c=JSON.parse(c.value);const m=[];const u=c[0];if(u==undefined){var p=new sap.suite.ui.commons.TimelineItem({text:"No Comments Found"});n.getContent()[0].destroyItems();n.getContent()[0].addItem(p)}else{c.forEach(e=>{const t=e.createdAt;const n=e.createdBy;const a=e.modifiedAt;const o=e.modifiedBy;const s=e.idd;const i=e.PAN_Number;const l=e.user;const r=e.Comments;const g=e.status;m.push({firsname:l,lname:g,comment:r,dateTime:t})});n.getContent()[0].destroyItems();for(let e=0;e<m.length;e++){var p=new sap.suite.ui.commons.TimelineItem({id:`${"item"+t()}`,dateTime:`${m[e].dateTime}`,title:`${m[e].lname}`,userNameClickable:false,userNameClicked:"onUserNameClick",select:"onPressItems",userPicture:"Photo",text:`${m[e].comment}`,userName:`${m[e].firsname}`});n.mAggregations.content[0].addItem(p)}}n.open()}}));r.forEach(e=>{C.addContent(new t({}));let n=C.getContent();let a=n[n.length-1];a.addBlock(new sap.m.VBox(`Box-${e[0].level}`));let o=a.getBlocks()[0];o.addItem(new sap.m.HBox({alignItems:"Center"}));let s=o.getItems()[0];s.addItem(new sap.m.Label({text:`Level ${e[0].level}`,design:"Bold"}));s.addItem(new sap.m.HBox({width:"40%"}));s.addItem(new sap.m.Label({text:`Notification: `}));s.addItem(new sap.m.Switch(`SwitchLevel--${e[0].level}`,{enabled:false,type:"AcceptReject",state:e[0].Notification_Status==="true",change:function(e){}}));o.addItem(new sap.m.Table({visible:true}));let i=o.getItems()[1];let l=Object.keys(e[0]);l=l.slice(2);let r=[];l.forEach(e=>{if(!r.includes(e)){var t=new sap.m.Column({header:new sap.m.Label({text:e.replace(/_/g," ")}),width:"200px"});i.addColumn(t);r.push(e)}});e.forEach(e=>{let t=[];let n;let a=Object.values(e);a=a.slice(2);let o;a.forEach(e=>{o=new sap.m.Text({text:e});t.push(o)});n=new sap.m.ColumnListItem({cells:t});i.addItem(n)})})}this.getView().getContent()[0].mAggregations.sections[4].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().setEditable(true);this.getView().getContent()[0].mAggregations.sections[4].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().setEditMode("Editable");this.getView().getContent()[0].mAggregations.sections[4].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().getContentEdit()[0].setEditable(true);sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FooterBar").setEnabled(true)}else{alert("You are Unauthorized to access this site!!")}},onAfterBinding:async function(e){var t=e.oBinding.sPath;const n=/'([^']+)'/;const a=t.match(n);const o=a[1];var s=this.base.getView().getContent()[0].getSections()[2].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[1].mBindingInfos.items.binding;s.filter(new sap.ui.model.Filter({path:"PAN_Number",operator:sap.ui.model.FilterOperator.EQ,value1:o}))}}}})});
},
	"panapproval/ext/controller/Reject1.js":function(){sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog;var a=new sap.m.Text({text:"  Comments are mandatory!"});var n=new sap.m.Text({text:" Are you sure you want to Reject this form ?"});var s="action";var r=new sap.m.Dialog({type:sap.m.DialogType.Message,title:"Error",state:"Error",content:a,beginButton:new sap.m.Button({text:"OK",press:function(){r.close()}.bind(this)})});return{reject:async function(a){let o=new Promise(e=>{var t=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Warning",title:"Warning",content:n,beginButton:new sap.m.Button({type:sap.m.ButtonType.Emphasized,text:"OK",press:function(){s="action";t.close();e()}.bind(this)}),endButton:new sap.m.Button({text:"Close",press:function(){s=null;t.close();e()}.bind(this)})});t.open()});let i=await o;if(s==null)return"not confirmed";t.open();var l=a.getModel();var p="getuser";var c="Reject";let u=l.bindContext(`/${c}(...)`);var m=a.sPath.match(/'([^']+)'/)?.[1];m={key:m,status:"Rejected",urll:window.location.href};m=JSON.stringify(m);u.setParameter("ID",m);await u.execute();let g=l.bindContext(`/${p}(...)`);g.setParameter("ID",m);await g.execute();let d=g.getBoundContext();let f=d.getObject();f=JSON.parse(f.value);if(f.status=="mandt"){t.close();r.open();return"errr"}t.close();if(f.status=="er")alert("Sorry, we're experiencing technical difficulties. Please try again later.");else{sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FooterBar").setEnabled(false);sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FormContainer::ApprovalComments::FormElement::DataField::Comments::Field-edit").setEnabled(false)}var v=await sap.ushell.Container.getServiceAsync("Navigation");v.navigate({target:{semanticObject:"pan_approval",action:"display"}});if(f.status!="er")e.show("PAN Form has been Rejected.")}}});
},
	"panapproval/ext/controller/Secobj.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(t){"use strict";return t.extend("panapproval.ext.controller.Secobj",{override:{onInit:function(){var t=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(){const t=location.href;const e=/PAN_Number='([^']+)'/;const n=t.match(e);const a=n?n[1]:null;let o={PAN_Number:[{operator:"EQ",values:[a],validated:"NotValidated"}]};sap.ui.getCore().byId("panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage--fe::table::vendtopd::LineItem::PRICEDETAILS").setFilterConditions(o);sap.ui.getCore().byId("panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage--fe::table::vendtoptd::LineItem::PAYMENT_TERM_DETAILS").setFilterConditions(o);let i={sorters:[{descending:false,name:"Property::slNo"}]};await sap.ui.getCore().byId("panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage--fe::table::vendtoptd::LineItem::PAYMENT_TERM_DETAILS").setSortConditions(i);var r=this.base.getView().getContent()[0];r.attachSectionChange(function(){var t=this.getScrollingSectionId();var e=sap.ui.getCore().byId(`${t}`).mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.content.mAggregations.columns;if(e!=undefined)e.forEach(e=>{var n=e.mProperties.dataProperty;var a=e.getHeader();var o=a.length;var i=sap.ui.getCore().byId(`${t}`).mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.content.mAggregations._content.mBindingInfos.rows.binding.oCache.getValue();const r=Math.max(...i.map(t=>t[n]?.length??8));if(r>o)o=r;const g=o*8+20+"px";e.setWidth(g);sap.ui.getCore().byId("panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage--fe::table::vendtoptd::LineItem::PAYMENT_TERM_DETAILS-innerTable").getColumns()[2].setWidth("350px");sap.ui.getCore().byId("panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage--fe::table::vendtoptd::LineItem::PAYMENT_TERM_DETAILS-innerTable").getColumns()[4].setWidth("350px")})})}}}})});
},
	"panapproval/ext/fragment/Attachment.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"\ndisplayBlock="true"\nxmlns:mvc="sap.ui.core.mvc"\n\txmlns:upload="sap.m.upload"><VBox id= "11" ><Button id="dewdewdw" visible="false" core:require="{ handler: \'panapproval/ext/fragment/Attachment\'}" press="handler.onPress" /><upload:UploadSet\n\t\t\t\t\t\n\t\t\t\t\tid="uploadSet"\n\t\t\t\t\tcore:require="{ handler: \'panapproval/ext/fragment/Attachment\'}"\n\t\t\t\t\tinstantUpload="false"\n\t\t\t\t\tuploadEnabled="true"\n\t\t\t\t\tshowIcons="true"\n\t\t\t\t\tmode="None"\n\t\t\t\t\tafterItemAdded="handler.onAfterItemAdded"\n\t\t\t\t\tuploadCompleted="handler.onUploadCompleted"\n\t\t\t\t\titems="{\n\t\t\t\t\t\t\t\tpath: \'/PAN_attachments_APR\',\n\t\t\t\t\t\t\t\tparameters: {\n\t\t\t\t\t\t\t\t\t$orderby: \'createdAt desc\'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\ttemplateShareable: false}"\n\t\t\t\t><upload:toolbar></upload:toolbar><upload:items><upload:UploadSetItem\n\t\t\t\t\t\tid="ddd"\n\t\t\t\t\t\t\tfileName="{fileName}"\n\t\t\t\t\t\t\tmediaType="{mediaType}"\n\t\t\t\t\t\t\turl="{url}"\n\t\t\t\t\t\t\tthumbnailUrl="{\n\t\t\t\t\t\t\t\tpath: \'mediaType\',\n\t\t\t\t\t\t\t\tformatter: \'handler.formatThumbnailUrl\'\n\t\t\t\t\t\t\t}"\n\t\t\t\t\t\t\tenabledEdit="false"\n\t\t\t\t\t\t\topenPressed="handler.onOpenPressed"\n\t\t\t\t\t\t\tremovePressed="handler.onRemovePressed"\n\t\t\t\t\t\t\tenabledRemove="true"\n\t\t\t\t\t\t\tselected="false"\n\t\t\t\t\t\t\tvisibleEdit="false"\n\t\t\t\t\t\t\tvisibleRemove="false"\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t><upload:attributes><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded By"\n\t\t\t\t\t\t\t\t\ttext="{createdBy}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22"\n\t\t\t\t\t\t\t\t\ttitle="Uploaded on"\n\t\t\t\t\t\t\t\t\ttext="{createdAt}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dddw2"\n\n\t\t\t\t\t\t\t\t\ttitle="File Type"\n\t\t\t\t\t\t\t\t\ttext="{mediaType}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t\tvisible="false"\n\t\t\t\t\t\t\t\t/><ObjectAttribute\n\t\t\t\t\t\t\t\tid="dd22a"\n\t\t\t\t\t\t\t\t\ttitle="File Size"\n\t\t\t\t\t\t\t\t\ttext="{size}"\n\t\t\t\t\t\t\t\t\tactive="false"\n\t\t\t\t\t\t\t\t\tvisible="false"\n\t\t\t\t\t\t\t\t/></upload:attributes></upload:UploadSetItem></upload:items></upload:UploadSet></VBox></core:FragmentDefinition>',
	"panapproval/ext/fragment/Attachment.js":function(){sap.ui.define(["sap/m/MessageToast","sap/ui/model/json/JSONModel","sap/ui/core/Item","sap/m/MessageToast"],function(e){"use strict";var t=this;var a;return{onPress:function(t){e.show("Custom handler invoked.")},onAfterItemAdded:function(e){a=e.oSource.getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oContainer.getParent().getParent().getParent().getManifestObject()._oBaseUri._string;var t=e.getParameter("item");var n=e.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/panapproval::PAN_Details_APRObjectPage/relatedApps"].oModel.oData.currentCtxt.sPath;var o=n.match(/'([^']+)'/)[1];console.log(o);var r=function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size,PAN_Number:o};var a={url:"/odata/v4/pan-approval/PAN_attachments_APR",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(a).done((t,a,n)=>{e(t.ID)}).fail(e=>{t(e)})})};r(t).then(e=>{var a=`/odata/v4/pan-approval/PAN_attachments_APR(ID=${e},PAN_Number='${o}')/content`;t.setUploadUrl(a);var n=this.byId("uploadSet");n.setHttpRequestMethod("PUT");n.uploadItem(t)}).catch(e=>{console.log(e)})},onUploadCompleted:function(e){var t=this.byId("uploadSet");t.removeAllIncompleteItems();t.getBinding("items").refresh()},onRemovePressed:function(t){t.preventDefault();t.getParameter("item").getBindingContext().delete();e.show("Selected file has been deleted")},onOpenPressed:function(e){e.preventDefault();var t=e.getSource();var a=t.getFileName();var n=e.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().getParent().oBindingContexts.undefined.oModel.sServiceUrl;var o=t.getUrl();let r=o.replace("attachments","PAN_attachments_APR");console.log(r);var i=function(e){var t={url:n+r,method:"GET",headers:{"Content-type":"application/octet-stream"},xhrFields:{responseType:"blob"}};return new Promise((e,a)=>{$.ajax(t).done(t=>{e(t)}).fail(e=>{a(e)})})};i(t).then(e=>{var t=window.URL.createObjectURL(e);window.open(t,"_blank")}).catch(e=>{console.log(e)})},_createEntity:function(e){var t={mediaType:e.getMediaType(),fileName:e.getFileName(),size:e.getFileObject().size};var a={url:"/pan-approval/PAN_attachments_APR",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(t)};return new Promise((e,t)=>{$.ajax(a).done((t,a,n)=>{e(t.ID)}).fail(e=>{t(e)})})},formatThumbnailUrl:function(e){var t;switch(e){case"image/png":t="sap-icon://card";break;case"text/plain":t="sap-icon://document-text";break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":t="sap-icon://excel-attachment";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":t="sap-icon://doc-attachment";break;case"application/pdf":t="sap-icon://pdf-attachment";break;default:t="sap-icon://attachment"}return t}}});
},
	"panapproval/ext/fragment/Custfilter.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:smartfilterbar="sap.ui.comp.smartfilterbar"></core:FragmentDefinition>',
	"panapproval/ext/fragment/Custfilter.js":function(){sap.ui.define(["sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,r){"use strict";return{filterItems:function(t){switch(t){case"0":return new e({path:"Sap_workitem_id",operator:r.LT,value1:100});case"1":return new e({filters:[new e({path:"Sap_workitem_id",operator:r.GT,value1:100}),new e({path:"Sap_workitem_id",operator:r.LT,value1:500})],and:true});case"2":return new e({path:"Sap_workitem_id",operator:r.GT,value1:500})}}}});
},
	"panapproval/ext/fragment/WFFrag.fragment.xml":'<core:FragmentDefinition xmlns:core="sap.ui.core" xmlns="sap.m" xmlns:macros="sap.fe.macros"></core:FragmentDefinition>',
	"panapproval/ext/fragment/WFFrag.js":function(){sap.ui.define(["sap/m/MessageToast"],function(s){"use strict";return{onPress:function(e){s.show("Custom handler invoked.")}}});
},
	"panapproval/i18n/i18n.properties":'# This is the resource bundle for panapproval\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=PAN Approval\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n\nflpTitle=PAN Approval\n',
	"panapproval/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"panapproval","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.12.2","toolsId":"2a17e7a5-8477-480a-9af3-e564590f3473"},"dataSources":{"mainService":{"uri":"odata/v4/pan-approval/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"pan_approval-display":{"semanticObject":"pan_approval","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}},"outbounds":{"pan_approval-display":{"semanticObject":"pan_approval","action":"display","parameters":{}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.platform.cf":{"ui5VersionNumber":"1.120.6"},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.6","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{},"sap.suite.ui.commons":{},"sap.uxap":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"panapproval.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"routes":[{"pattern":":?query:","name":"PAN_Details_APRList","target":"PAN_Details_APRList"},{"pattern":"PAN_Details_APR({key}):?query:","name":"PAN_Details_APRObjectPage","target":"PAN_Details_APRObjectPage"},{"pattern":"PAN_Details_APR({key})/tab1tovendor_data({key2}):?query:","name":"PAN_Details_APR_tab1tovendor_dataObjectPage","target":"PAN_Details_APR_tab1tovendor_dataObjectPage"}],"targets":{"PAN_Details_APRList":{"type":"Component","id":"PAN_Details_APRList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/PAN_Details_APR","variantManagement":"None","navigation":{"PAN_Details_APR":{"detail":{"route":"PAN_Details_APRObjectPage"}}},"initialLoad":"Enabled","controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"GridTable"},"columns":{"DataField::PAN_Number":{"width":"200px"},"DataField::SBG":{"width":"100px"},"DataField::SBU":{"width":"100px"},"DataField::Plant_Code":{"width":"150px"},"DataField::BUORPurchasing_Group":{"width":"300px"},"DataField::submitted_by":{"width":"300px"},"DataField::submitted_date":{"width":"150px"}}}},"defaultTemplateAnnotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#table"}}},"PAN_Details_APRObjectPage":{"type":"Component","id":"PAN_Details_APRObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/PAN_Details_APR","navigation":{"tab1tovendor_data":{"detail":{"route":"PAN_Details_APR_tab1tovendor_dataObjectPage"}}},"content":{"body":{"sections":{"WFFrag":{"template":"panapproval.ext.fragment.WFFrag","position":{"placement":"After","anchor":"VendorData"},"title":"Workflow History","type":"XMLFragment"},"Attachment":{"template":"panapproval.ext.fragment.Attachment","position":{"placement":"Before","anchor":"WFFrag"},"title":"Attachments","type":"XMLFragment"}}},"footer":{"actions":{"approve1":{"press":"panapproval.ext.controller.Approve1.Approve","visible":true,"enabled":true,"text":"Approve"},"reject1":{"press":"panapproval.ext.controller.Reject1.reject","visible":true,"enabled":true,"text":"Reject","position":{"placement":"Before","anchor":"approve1"}},"clarification1":{"press":"panapproval.ext.controller.Clarification1.clarification","visible":true,"enabled":true,"text":"Need for Clarification","position":{"placement":"Before","anchor":"reject1"}}}},"header":{"actions":{"nav1":{"press":"panapproval.ext.controller.Nav1.llink","visible":true,"enabled":true,"position":{"placement":"Before","anchor":"DeleteAction"},"text":"Comparative Statement"}}}},"controlConfiguration":{"tab1totab2/@com.sap.vocabularies.UI.v1.LineItem#_":{"tableSettings":{"type":"GridTable"},"columns":{"DataField::eventNo":{"width":"250px"},"DataField::number":{"width":"250px"},"DataField::date":{"width":"150px"},"DataField::numberOfVendorsParticipated":{"width":"250px"},"DataField::l1AmountObtained":{"width":"200px"}}},"tab1totab3/@com.sap.vocabularies.UI.v1.LineItem#PANTYPE":{"tableSettings":{"type":"GridTable"},"columns":{"DataField::typeNo":{"width":"200px"},"DataField::required":{"width":"200px"},"DataField::submittedOn":{"width":"200px"},"DataField::receivedOn":{"width":"200px"},"DataField::timeTakenForApproval":{"width":"200px"}}},"tab1tovendor_data/@com.sap.vocabularies.UI.v1.LineItem#VendorData":{"tableSettings":{"type":"GridTable"},"columns":{"DataField::Awarded_Vendor":{"width":"130px"},"DataField::Vendor_Name":{"width":"300px"},"DataField::Client_Approved":{"width":"300px"},"DataField::Original_quote":{"width":"150px"},"DataField::Final_Quote":{"width":"150px"},"DataField::Order_amount_OR_Split_order_amount":{"width":"250px"},"DataField::Discount_Amount":{"width":"175px"},"DataField::Discount_percentage":{"width":"175px"},"DataField::Technically_Approved":{"width":"200px"},"DataField::Vendor_Location":{"width":"400px"},"DataField::Rank":{"width":"60px"}}},"tab1topdf/@com.sap.vocabularies.UI.v1.LineItem#ATTACHMENTSINTERNALTOPANFORAPPROVERS":{"tableSettings":{"type":"GridTable"}}}}}},"PAN_Details_APR_tab1tovendor_dataObjectPage":{"type":"Component","id":"PAN_Details_APR_tab1tovendor_dataObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/PAN_Details_APR/tab1tovendor_data","navigation":{},"controlConfiguration":{"vendtoptd/@com.sap.vocabularies.UI.v1.LineItem#PAYMENT_TERM_DETAILS":{"tableSettings":{"type":"GridTable"}},"vendtopd/@com.sap.vocabularies.UI.v1.LineItem#PRICEDETAILS":{"tableSettings":{"type":"GridTable"}}}}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{"sap.fe.templates.ObjectPage.ObjectPageController#panapproval::PAN_Details_APRObjectPage":{"controllerName":"panapproval.ext.controller.PanDetailsObj"},"sap.fe.templates.ListReport.ListReportController#panapproval::PAN_Details_APRList":{"controllerName":"panapproval.ext.controller.ListController"},"sap.fe.templates.ObjectPage.ObjectPageController#panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage":{"controllerName":"panapproval.ext.controller.Secobj"}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"approval_form"}}'
}});
