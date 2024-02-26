sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    var oBusyDialog=new sap.m.BusyDialog();
    return {
        reject:async function(oEvent) {
            oBusyDialog.open();
            var oModel = oEvent.getModel();
            var Name = 'getuser';
					let oFunction = oModel.bindContext(`/${Name}(...)`);
                    var key = oEvent.sPath.match(/'([^']+)'/)?.[1];
                    key = {key : key,status : "Rejected" ,urll : window.location.href };
                    key = JSON.stringify(key);
                    oFunction.setParameter("ID",key);
                    await oFunction.execute(); 
                    let oContext1 = oFunction.getBoundContext();
						let result1 = oContext1.getObject();
                            result1 = JSON.parse(result1.value);


            
            // await $.ajax({
            //     url: `/odata/v4/pan-approval${oEvent.sPath}`,
            //     method: 'GET',
            //     success: async function(response) {
            //         console.log('1 GET Success:', response);
            //         response.Current_level_of_approval = result1.currentLevel;
            //         response.Sap_workitem_id = result1.workitemId;
            //         if(result1.status == "Rejected")
            //         response.status = result1.status;
                    
            //         if(response.Comments != null){
            //             var p_data = {
            //                 PAN_Number : response.PAN_Number, 
            //                 user : result1.user,
            //                 Comments : response.Comments, 
            //                 status: response.status
            //             };
            //             await $.ajax({
            //                 url: `/odata/v4/pan-approval/PAN_Comments_APR`,
            //                 method: 'POST',
            //                 contentType: 'application/json',
            //                 data: JSON.stringify(p_data),
            //                 success: function(response) {
            //                     console.log('POST Success:', response);
                                
            //                 },
            //                 error: function(xhr, status, error) {
            //                     console.error('POST Error:', error);
                                
            //                 }
            //             });
            //             // window.history.go(-1);
            //             // window.location.reload();
            //         }
            //         delete response.PAN_Number;
            //         delete response.Comments;
            //         var updatee = response;
            //       await  $.ajax({
            //             url: `/odata/v4/pan-approval${oEvent.sPath}`,
            //             method: 'PUT',
            //             contentType: 'application/json',
            //             data: JSON.stringify(updatee),
            //             success: function(response) {
            //                 console.log('PUT Success:', response);
                    
            //             },
            //             error: function(xhr, status, error) {
            //                 console.error('PUT Error:', error);
                        
            //             }
            //         });
                    
            //     },
            //     error: function(xhr, status, error) {
            //         console.error('1 GET Error:', error);
            //         // Handling errors
            //     }
            // });
            //
            oBusyDialog.close();
            var href_For_Product_display = await sap.ushell.Container.getServiceAsync("Navigation");
										
								href_For_Product_display.navigate({
									target : { semanticObject : "pan_approval", action : "display" }
								});

          // window.location.href = previousPageUrl;
            
            MessageToast.show("PAN Form has been Rejected.");
        }
    };
});
