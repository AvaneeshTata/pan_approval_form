sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('approval.ext.controller.PanDetailsList', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf approval.ext.controller.PanDetailsList
             */
			onInit: function () {debugger
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
				// if (!this._sIdPrefix) {
				// 	this._sIdPrefix =
				// 		"approval::sap.suite.ui.generic.template.ListReport.view.ListReport::tab1--";
				// }
			},
		// 	onAfterRendering: function (oEvent) {debugger

		// 		var oContentTable = oEvent.oSource.getContent()[0].getContent().getContent();
				

		// 		oContentTable.attachBeforeExport(this._onBusyStateChanged);
		
		// 	},
		// 	_onBusyStateChanged: function (oEvent) {debugger

		// 		var bBusy = oEvent.getParameter("busy");
		// 		if (!bBusy && !this._bColumnOptimizationDone) {
		// 	var oTable = oEvent.getSource();
		// 	var oTpc = null;
		// 	if (sap.ui.table.TablePointerExtension) {
		// 		oTpc = new sap.ui.table.TablePointerExtension(oTable);
		// 	} else {
		// 		oTpc = new sap.ui.table.extensions.Pointer(oTable);
		// 	}
		// 	var aColumns = oTable.getColumns();
		// 	for (var i = aColumns.length; i >= 0; i--) {
		// 		oTpc.doAutoResizeColumn(i);
		// 	}
		// 	//This line can be commented if you want the columns to be adjusted on every scroll
		// 	//this._bColumnOptimizationDone = true;
		// 	}
	
		// }
		}
	});
});
