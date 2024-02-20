/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/CreateCustomer",
	"./pages/CustomerList"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		Given.iStartMyApp();

		Then.onTheCustomersList.iShouldSeeCustomerListView();

		Then.iTeardownMyApp();
	});

	opaTest("Should navigate to create new customer", function (Given, When, Then) {
        Given.iStartMyApp();

        When.onTheCustomersList.iPressCreate();

        Then.onCreateCustomer.iShouldSeeCreateCustomerView();

        Then.iTeardownMyApp();
    });
});
