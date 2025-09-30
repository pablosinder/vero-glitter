sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.veroglitter",
		defaults: {
			page: "ui5://test-resources/com/veroglitter/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/veroglitter/",
				never: "test-resources/com/veroglitter/"
			},
			loader: {
				paths: {
					"com/veroglitter": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.veroglitter"
			},
			"integration/opaTests": {
				title: "Integration tests for com.veroglitter"
			}
		}
	};
});
