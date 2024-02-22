sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    var oBusyDialog=new sap.m.BusyDialog("oBusyDialog");

    return {
        reject:async function(oEvent) {
            oBusyDialog.open();
            let oModel = oEvent.getModel();
            let sFunctionName = "finalApprove";
            let appr_url = window.location.href;
            var pieces = appr_url.split("(");
			var res = pieces[1];
            var res1 = res.split("'");
            let oFunction = oModel.bindContext(`/${sFunctionName}(...)`);
            // let docNumber = oEvent.sPath.match(/'([^']+)'/)[1];
            let body={
                "pankey" : res1[1],
                "flag" : "X",
                "buttonClicked" : "Rejected"
            };
            oFunction.setParameter("data",JSON.stringify(body));
            await oFunction.execute();
            let oContext = oFunction.getBoundContext();
						 
			let result = oContext.getObject();
            console.log(result);
            MessageToast.show("PAN Form Has Successfully Rejected");
            oBusyDialog.close();

            
            // MessageToast.show("Rejected");
            window.location.reload();
        }
    };
});
