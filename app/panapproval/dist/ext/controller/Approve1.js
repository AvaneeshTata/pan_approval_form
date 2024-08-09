sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";var t=new sap.m.BusyDialog;var a=new sap.m.Text({text:"   Comments are mandatory!"});var n=new sap.m.Text({text:"Are you sure you want to Approve this form ?"});var r="action";var s=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Error",title:"Error",content:a,beginButton:new sap.m.Button({text:"OK",press:function(){s.close()}.bind(this)})});return{Approve:async function(a){;let o=new Promise(e=>{var t=new sap.m.Dialog({type:sap.m.DialogType.Message,state:"Warning",title:"Warning",content:n,beginButton:new sap.m.Button({type:sap.m.ButtonType.Emphasized,text:"OK",press:function(){;r="action";t.close();e()}.bind(this)}),endButton:new sap.m.Button({text:"Close",press:function(){;r=null;t.close();e()}.bind(this)})});t.open()});let i=await o;;if(r==null)return"not confirmed";t.open();var l=a.getModel();var p="getuser";var u="Reject";let c=l.bindContext(`/${u}(...)`);var g=a.sPath.match(/'([^']+)'/)?.[1];g={key:g,status:"Approved",urll:window.location.href};g=JSON.stringify(g);c.setParameter("ID",g);await c.execute();let m=l.bindContext(`/${p}(...)`);m.setParameter("ID",g);await m.execute();let d=m.getBoundContext();let v=d.getObject();v=JSON.parse(v.value);if(v.status=="mandt"){t.close();s.open();return"errr"}var f=document.referrer;console.log(f);t.close();if(v.status=="er")alert("Sorry, we're experiencing technical difficulties. Please try again later.");else{sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FooterBar").setEnabled(false);sap.ui.getCore().byId("panapproval::PAN_Details_APRObjectPage--fe::FormContainer::ApprovalComments::FormElement::DataField::Comments::Field-edit").setEnabled(false)}var b=await sap.ushell.Container.getServiceAsync("Navigation");b.navigate({target:{semanticObject:"pan_approval",action:"display"}});if(v.status!="er"){e.show("PAN Form has been Approved.")}}}});