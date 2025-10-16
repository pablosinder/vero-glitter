sap.ui.define([
	"./BaseController", 
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
],


	function (BaseController, MessageBox, JSONModel, axios) {
		"use strict";

		return BaseController.extend("org.myui5app.controller.Main", {
			onInit: function () {
				var oMainData = {
					items: [
						{ name: "test1", upvote: 0 },
						{ name: "test2", upvote: 0 },
						{ name: "test3", upvote: 0 },
					],
				};

				this.getView().setModel(new JSONModel(oMainData), "MainModel");

				// try {
				// 	this._axiosCall();
					
				// } catch (error) {
				// 	console.error(error);
				// }
				this.initTodoModel();
			},

			initTodoModel : function() {  
				var oModel = this.getModel("MainModel");
				jQuery.ajax({
					type : "GET",
					contentType : "application/json",
					crossDomain: true,
					url : "https://glowing-space-pancake-7x95j6jrwq4cr9xr-8000.app.github.dev/api/hello",
					dataType : "json",
					success : function(data,textStatus, jqXHR) {
						oModel.setData({items: data}); 
					},
					error: function (error){
						console.log(error);
					}
	
				});
			},
	
	

			// _axiosCall: async function () {
			// 	debugger;
			// 	var oResponse = await axios.get("https://glowing-space-pancake-7x95j6jrwq4cr9xr-8000.app.github.dev/hello");
			// 	console.log(oResponse);
			// },

			onUpvotePress: function (oEvent) {
				var sPath = oEvent.getSource().getBindingContext("MainModel").sPath;
				var oItem = this.getModel("MainModel").getProperty(sPath);
				// ++oItem.upvote;
				// this.getModel("MainModel").setProperty(sPath, oItem);

				this.updateUpVotes(oItem.name);

			},

			updateUpVotes: function (sName){
				var that = this;
				jQuery.ajax({
					type : "PUT",
					url : `https://glowing-space-pancake-7x95j6jrwq4cr9xr-8000.app.github.dev/api/articles/${sName}/upvote`,
					success : function(data,textStatus, jqXHR) {
						// oModel.setData({items: data}); 
						console.log(data)
						that.initTodoModel();
					},
					error: function (error){
						console.log(error);
					}
	
				});
			},
			sayHello: function () {
				MessageBox.show("Hello World!");
			},
		});
	}
);
