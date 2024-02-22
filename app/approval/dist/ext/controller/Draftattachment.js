sap.ui.define(["sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,t,n,r){"use strict";function a(n,r){var a;function o(e){a&&a.getBeginButton().setEnabled(e)}function i(e){a.setBusy(e)}function s(){a&&a.close()}function g(t,n,r){e.error("Upload failed",{title:"Error"})}function l(e){return sap.ui.core.Fragment.byId("excelUploadDialog",e)}return{onFileUploadDone:function(e){debugger},onBeforeOpen:function(e){a=e.getSource();n.addDependent(a)},onAfterClose:function(e){n.removeDependent(a);a.destroy();a=undefined},onAfterBinding:async function(e){debugger;const t=this.base.getExtensionAPI();oModel=t.getModel();sFunctionName="getattachments";oFunction=oModel.bindContext(`/${sFunctionName}(...)`)},_getBaseURL:function(){debugger;var e=this.getOwnerComponent().getManifestEntry("/sap.app/id").replaceAll(".","/");return jQuery.sap.getModulePath(e)},onFileChange:function(e){debugger;var t=e.getParameters("files").files[0];this.file=t},onFileUploadDone:function(e){debugger},onOk:function(e){debugger;let t=e.oSource.oPropagatedProperties.oModels.pageInternal.mContexts["/pages/approval::tab1ObjectPage/controls/fe::table::tab1tovendor_data::LineItem::VendorData"].oModel.oData.currentCtxt.sPath;const n=/'([^']+)'/;const r=t.match(n);const a=r[1];var o=l("__fileUploader");let i=e.oSource;var s=new FileReader;s.onload=function(e){debugger;var t=this.file;this.content=e.currentTarget.result;this.createfile(a,i)}.bind(this);s.readAsDataURL(this.file)},createfile:async function(t,n){debugger;var r=this;var t=t;var a=this.file;debugger;var o={PAN_Number:t,contentS:this.content,mediaType:this.file.type,fileName:this.file.name};debugger;let i=n.getParent().getParent().getParent().oContainer.getParent().getParent().getParent().getManifestObject()._oBaseUri._string;var g={url:"/odata/v4/catalog/attachments",method:"POST",headers:{"Content-type":"application/json"},data:JSON.stringify(o)};debugger;const l=async()=>{var t=new sap.m.BusyDialog({text:"Uploading file..."});t.open();return new Promise((r,a)=>{$.ajax(g).done(async(a,o,i)=>{var s=o;if(s=="success"){t.close();var g="FILE UPLOADED SUCCESSFULLY";e.success(g)}else{var l="ERROR UPLOADING THE FILE";e.error(l)}debugger;r(a.ID);debugger;let u=n;if(n?.getParent()?.getBindingContext()!=undefined){debugger;await n.getParent().getBindingContext().refresh}else{debugger}}).fail(e=>{debugger;a(e)})})};debugger;await l();debugger;s()},onCancel:function(e){s()},onTypeMismatch:function(e){var t=e.getSource().getFileType().map(function(e){return"*."+e}).join(", ");g("The file type *."+e.getParameter("fileType")+" is not supported. Choose one of the following types: "+t)},onFileAllowed:function(e){o(true)},onFileEmpty:function(e){o(false)},onUploadComplete:function(e){var r=e.getParameter("status");var a=e.getSource();a.clear();o(false);i(false);if(r>=400){var l;try{l=JSON.parse(e.getParameter("responseRaw"))}catch(t){l=e.getParameter("responseRaw")}if(l&&l.error&&l.error.message){g(l.error.code,l.error.target,l&&l.error&&l.error.message)}}else{t.show("File uploaded successfully");n.refresh();s()}}}}return{upload:function(e,t){this.loadFragment({id:"excelUploadDialog",name:"approval.ext.fragment.Draftattachment",controller:a(this,"MediaFile")}).then(function(e){e.open()})}}});