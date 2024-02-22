sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';
	var i = 0;

	return ControllerExtension.extend('approval.ext.controller.Form', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf approval.ext.controller.Form
			 */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing: {
				onBeforeBinding:async function () {debugger
					this.getView().getContent()[0].getSections()[2].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getItems()[1].setUploadEnabled(false);
					var oModel = this.base.getExtensionAPI().getModel();

					var complete_url = window.location.href;
					   var pieces = complete_url.split("(");
					   var res = pieces[1];
					//    var res = pieces[1];
            		   var res1 = res.split("'");
					   let data = res1[1];
					//    var Name = "getuserinfo";
					//    let oFunction = oModel.bindContext(`/${Name}(...)`);
					//    oFunction.setParameter("ID",data);
					// 	await oFunction.execute();debugger
						//  var oContext = oFunction.getBoundContext();
						 
						//  var res = oContext.getObject();
						//  debugger
						// await oFunction.execute();
						//  debugger
						// let oContext = oFunction.getBoundContext();
						 
						// let result = oContext.getObject();
						// result = JSON.parse(result);

					var Name = 'getData';
					let oFunction = oModel.bindContext(`/${Name}(...)`);
						oFunction.setParameter("ID",data);
						await oFunction.execute();debugger
						//  var oContext = oFunction.getBoundContext();
						 
						//  var res = oContext.getObject();
						//  debugger
						// await oFunction.execute();
						 debugger
						let oContext1 = oFunction.getBoundContext();
						 
						let result1 = oContext1.getObject();
					// 	oFunction.setParameter("ID",data);
						// await oFunction.execute();debugger
						//  var oContext = oFunction.getBoundContext();
						 
						//  var res = oContext.getObject();
						//  debugger
						// await oFunction.execute();
						//  debugger
				
						// if(email===result){
					if((result1.value=='Approved')||(result1.value=='Rejected')||(result1.value=='Need For Justification')){debugger

						this.getView().getContent()[0].getFooter().setVisible(false);
					// debugger
					// console.log(oBindingContext);
				
						// }
						// else{
						// 	that.getView().getContent()[0].setVisible(false);
						// }
					}
					else if(result1.value=='Pending for Approval'){
						this.getView().getContent()[0].getFooter().setVisible(true);
						this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().setEditable(true);
						this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().setEditMode('Editable');
						this.getView().getContent()[0].mAggregations.sections[5].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().getFormContainers()[0].getFormElements()[0].getFields()[0].getContent().getContentEdit()[0].setEditable(true);
					}
					else{
						// console.log("thanks");
						this.getView().getContent()[0].getFooter().setVisible(false);
					}
					// $.ajax({
					// 	url: "/odata/v4/catalog/tab1", success: function (result) {
					// 		console.log(result);
							
					// 	}
					// });

// Assuming your field is named 'myField'
// var oField = this.getView().byId("__field4");

// Set the edit mode to ReadOnly
// oField.setEditMode(sap.ui.mdc.enums.FieldEditMode.ReadOnly);

				},
			// 	onAfterBinding: function () {
			// 		debugger
			// 		console.log(this);
			// 		this.getView().getContent()[0].mAggregations.sections[3].mAggregations._grid.getContent()[0].mAggregations._grid.getContent()[0].getContent().getContent().mAggregations.columns[1].mAggregations.template.setEditMode(sap.ui.mdc.enums.FieldEditMode.ReadOnly);
			// 	}
			// },


			
			}}});
});
