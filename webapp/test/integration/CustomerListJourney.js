sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomerList"
], function (opaTest) {
    "use strict";

    QUnit.module("Customer List Journey");

    opaTest("Should see the initial page of the app", function (Given, When, Then) {
        Given.iStartMyApp();

        Then.onTheCustomersList.iShouldSeeTheCarousel();
        Then.onTheCustomersList.iShouldSeeTheTable();
        Then.onTheCustomersList.iShouldSeeTheCreateButton();

        Then.iTeardownMyApp();
    });

    opaTest("Should navigate to create new customer", function (Given, When, Then) {
        Given.iStartMyApp();

        Given.onTheCustomersList.iPressCreate();

        Then.onCreateCustomer.iShouldSeeThePage();

        Then.iTeardownMyApp();
    });
});