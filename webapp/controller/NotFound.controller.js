sap.ui.define([
	"./BaseController",
	"sap/ui/core/UIComponent"
], (BaseController, UIComponent) => {
	"use strict";

	return BaseController.extend("com.veroglitter.controller.NotFound", {
		onInit() {
			this._router = UIComponent.getRouterFor(this);
		}
	});
});
