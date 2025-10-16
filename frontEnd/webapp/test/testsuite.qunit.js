sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: org.myui5app",
		defaults: {
			page: "ui5://test-resources/org/myui5app/Test.qunit.html?testsuite={suite}&test={name}",
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
				only: "org/myui5app/",
				never: "test-resources/org/myui5app/"
			},
			loader: {
				paths: {
					"org/myui5app": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for org.myui5app"
			},
			"integration/opaTests": {
				title: "Integration tests for org.myui5app"
			}
		}
	};
});
