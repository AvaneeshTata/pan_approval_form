sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onInit: function(oEvent) {debugger
            MessageToast.show("Switch has been triggered.");
        }
    };
});
