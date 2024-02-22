sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    var oBusyDialog=new sap.m.BusyDialog("oBusyDialog");
    return {
        needforclarification:async function(oEvent) {
            oBusyDialog.open();
            let oModel = oEvent.getModel();
            let sFunctionName = "Reject";
            let appr_url = window.location.href;
            var pieces = appr_url.split("(");
			var res = pieces[1];
            var res1 = res.split("'");
            let oFunction = oModel.bindContext(`/${sFunctionName}(...)`);
            // let docNumber = oEvent.sPath.match(/'([^']+)'/)[1];
            let body={
                "buttonClicked" : "Need For Clarification"
            };
            oFunction.setParameter("data",JSON.stringify(body));
            await oFunction.execute();
            let oContext = oFunction.getBoundContext();
						 
			let result = oContext.getObject();
            console.log(result);
            oBusyDialog.close();
            MessageToast.show("PAN From is Send Back For More Clarification");
            window.location.reload();
        }
    };
});
