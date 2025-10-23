sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/gherkin/opa5TestHarness",
	"./arrangements/component/Startup",
	"sap/ui/test/gherkin/StepDefinitions",
	"com/veroglitter/localService/mockserver",
	// QUnit additions
	"sap/ui/qunit/qunit-css",
	"sap/ui/qunit/qunit-junit",
	"sap/ui/qunit/qunit-coverage",
	// Page Objects
	"./pages/Home",
	"./pages/Welcome",
	"./pages/Category",
	"./pages/Product",
	"./pages/Cart",
	"./pages/Dialog",
	"./pages/Checkout",
	"./pages/OrderCompleted"
], (Opa5, testHarness, Startup, StepDefinitions) => {
	"use strict";

	const startupInstance = new Startup();
	const Steps = StepDefinitions.extend("GherkinWithOPA5.Steps", {
		init() {
			this.register(
				/^I start my App with the hash "(.*)" (.*)/i,
				(sHash, sStorage) => {
					startupInstance.iStartMyApp({
						keepStorage: sStorage.includes("keeping"),
						hash: sHash
					});
				}
			);
		}
	});

	testHarness.test({featurePath: "com/veroglitter/test/integration/DeleteProduct", generateMissingSteps: true});
	testHarness.test({featurePath: "com/veroglitter/test/integration/BuyProduct", generateMissingSteps: true, steps: Steps});
	testHarness.test({featurePath: "com/veroglitter/test/integration/SaveForLater", generateMissingSteps: true});
	testHarness.test({featurePath: "com/veroglitter/test/integration/ProductsFilter", generateMissingSteps: true});

	Opa5.extendConfig({
		arrangements: startupInstance,
		viewNamespace: "com.veroglitter.view.",
		autoWait: true
	});
});