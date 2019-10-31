sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/core/Fragment",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function (Controller, Filter, Fragment, FilterOperator, JSONModel) {
	"use strict";

	return Controller.extend("controls.loginPage.controller.View1", {
		onInit: function () {
			var oDetails = {
				"details": [{
					"key": "101",
					"text": "Rasika",
					"data": [{
						"sno": "101",
						"fname": "RASIKA",
						"sname": "SHINDE",
						"contact": "100",
						"address": "BHANDUP",
						"city": "MUMBAI",
						"quali": "B.Tech"
					}]
				}, {
					"key": "102",
					"text": "Snehal",
					"data": [{
						"sno": "102",
						"fname": "Snehal",
						"sname": "Hande",
						"contact": "200",
						"address": "Ghatkopar",
						"city": "MUMBAI",
						"quali": "B.Tech"
					}]
				}, {
					"key": "103",
					"text": "Shruti",
					"data": [{
						"sno": "103",
						"fname": "Shruti",
						"sname": "Gurav",
						"contact": "300",
						"address": "Thane",
						"city": "Thane",
						"quali": "B.Tech"
					}]
				}, {
					"key": "104",
					"text": "Hithun",
					"data": [{
						"sno": "104",
						"fname": "Hithun",
						"sname": "H.",
						"contact": "400",
						"address": "Bhandup",
						"city": "Mumbai",
						"quali": "B.Tech"
					}]
				}, {
					"key": "105",
					"text": "Shital",
					"data": [{
						"sno": "105",
						"fname": "Shital",
						"sname": "Patil",
						"contact": "500",
						"address": "Dwarka",
						"city": "Delhi",
						"quali": "BCA"
					}]
				}, {
					"key": "106",
					"text": "Rahul",
					"data": [{
						"sno": "106",
						"fname": "Rahul",
						"sname": "Midha",
						"contact": "106",
						"address": "Dwarka",
						"city": "Delhi",
						"quali": "12"
					}]
				}, {
					"key": "107",
					"text": "Shivangi",
					"data": [{
						"sno": "107",
						"fname": "Shivangi",
						"sname": "Kocchar",
						"contact": "107",
						"address": "Mumbai",
						"city": "Mumbai",
						"quali": "BCA"
					}]
				}, {
					"key": "108",
					"text": "Shubhangi",
					"data": [{
						"sno": "108",
						"fname": "Shubhangi",
						"sname": "Singh",
						"contact": "108",
						"address": "Delhi",
						"city": "Delhi",
						"quali": "M.Tech"
					}]
				}]
			};

			var oModel2 = new JSONModel(oDetails);
			this.getView().setModel(oModel2);
		},
		onObjectItemPress: function (oEvent) {

			var oItem = oEvent.getSource();
			var oCtx = oItem.getBindingContext();
			var path = oCtx.getPath();
			this.getView().byId("tbData").bindElement(path);

		},
		onPressDetailBack: function () {
			sap.m.MessageToast.show("Saved");
		}

	});
});