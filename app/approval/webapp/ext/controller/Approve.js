sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    var oBusyDialog=new sap.m.BusyDialog("oBusyDialog");
    return {
        approve: async function(oEvent) {debugger
            oBusyDialog.open();
         

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
                "buttonClicked" : "Approved"
            };
            oFunction.setParameter("data",JSON.stringify(body));
            await oFunction.execute();
            let oContext = oFunction.getBoundContext();
						 
			let result = oContext.getObject();
            console.log(result);

            // let oModel = oEvent.getModel();
            // let sFunctionName1 = "Comments";
            // let oFunction1 = oModel.bindContext(`/${sFunctionName1}(...)`);
            // oFunction1.setParameter("data", res1[1]);
            // await oFunction.execute();

            MessageToast.show("PAN Form Has Successfully Approved");
            oBusyDialog.close();

            
            window.location.reload();
            // window.history.go(-1);

        }
    };
});
