sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomerList"
], function (opaTest) {
    "use strict";

    QUnit.module("Customer List Journey");

    opaTest("Should see the carousel, table and create button of CustomerList view", function (Given, When, Then) {
        Given.iStartMyApp();

        Then.onTheCustomersList.iShouldSeeTheCarousel();
        Then.onTheCustomersList.iShouldSeeTheTable();
        Then.onTheCustomersList.iShouldSeeTheCreateButton();

        Then.iTeardownMyApp();
    });
});