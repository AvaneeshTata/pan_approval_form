sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog;var a=new sap.m.Text({text:"  Comments are mandatory!"});var n=new sap.m.Text({text:" Are you sure you want to Reject this form ?"});var s="action";var r=new sap.m.Dialog({type:sap.m.DialogType.Message,title:"Error",state:"Error",content:a,beginButton:new sap.m.Button({text:"OK",press:function(){r.close()}.bind(this)})});return{reject:async function(a){let o=new Promise(e=>{var t=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Warning",title:"Warning",content:n,beginButton:new sap.m.Button({type:sap.m.ButtonType.Emphasized,text:"OK",press:function(){s="action";t.close();e()}.bind(this)}),endButton:new sap.m.Button({text:"Close",press:function(){s=null;t.close();e()}.bind(this)})});t.open()});let i=await o;if(s==null)return"not confirmed";t.open();var l=a.getModel();var p="getuser";var c="Reject";let u=l.bindContext(`/${c}(...)`);var m=a.sPath.match(/'([^']+)'/)?.[1];m={key:m,status:"Rejected",urll:window.location.href};m=JSON.stringify(m);u.setParameter("ID",m);await u.execute();let g=l.bindContext(`/${p}(...)`);g.setParameter("ID",m);await g.execute();let d=g.getBoundContext();let f=d.getObject();f=JSON.parse(f.value);if(f.status=="mandt"){t.close();r.open();return"errr"}t.close();if(f.status=="er")alert("Sorry, we're experiencing technical difficulties. Please try again later.");else{sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FooterBar").setEnabled(false);sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FormContainer::ApprovalComments::FormElement::DataField::Comments::Field-edit").setEnabled(false)}var v=await sap.ushell.Container.getServiceAsync("Navigation");v.navigate({target:{semanticObject:"pan_approval",action:"display"}});if(f.status!="er")e.show("PAN Form has been Rejected.")}}});