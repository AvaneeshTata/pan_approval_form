sap.ui.define(["sap/ui/core/mvc/ControllerExtension"],function(e){"use strict";return e.extend("panapproval.ext.controller.Secobj",{override:{onInit:function(){var e=this.base.getExtensionAPI().getModel()},routing:{onAfterBinding:async function(){ ;let e={sorters:[{descending:false,name:"Property::slNo"}]};await sap.ui.getCore().byId("panapproval::PAN_Details_APR_tab1tovendor_dataObjectPage--fe::table::vendtoptd::LineItem::PAYMENT_TERM_DETAILS").setSortConditions(e);var t=this.base.getView().getContent()[0];t.attachSectionChange(function(){ ;var e=this.getScrollingSectionId(); ;var t=sap.ui.getCore().byId(`${e}`).mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.content.mAggregations.columns;if(t!=undefined)t.forEach(t=>{var n=t.mProperties.dataProperty;var g=t.getHeader();var o=g.length;var r=sap.ui.getCore().byId(`${e}`).mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.content.mAggregations._content.mBindingInfos.rows.binding.oCache.getValue();const a=Math.max(...r.map(e=>e[n]?.length??8));if(a>o)o=a;const i=o*8+20+"px";t.setWidth(i)})})}}}})});