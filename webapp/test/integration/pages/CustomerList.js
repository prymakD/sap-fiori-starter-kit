sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";
    var sViewName = "CustomerList";
    Opa5.createPageObjects({
        onTheCustomersList: {
            actions: {
                iPressCreate: function () {
                    return this.waitFor({
                        id: "createButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not press the button"
                    });
                }
            },
            assertions: {

                iShouldSeeCustomerListView: function () {
					return this.waitFor({
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},

                iShouldSeeTheCarousel: function () {
                    return this.waitFor({
                        id: "idCustomerCarousel",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The carousel is displayed");
                        },
                        errorMessage: "Did not find the carousel"
                    });
                },

                iShouldSeeTheTable: function () {
                    return this.waitFor({
                        controlType: "sap.m.Table",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The table is displayed");
                            // Fix needed
                            // var iItemsCount = oTable[0].getItems().length;
                            // Opa5.assert.notStrictEqual(iItemsCount, 0, "Table ahs items: " + iItemsCount);
                        },
                        errorMessage: "Did not find the table"
                    });
                },

                iShouldSeeTheCreateButton: function () {
                    return this.waitFor({
                        id: "createButton",
                        controlType: "sap.m.Button",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The create button is displayed");
                        },
                        errorMessage: "Did not find the create button"
                    });
                }
            }
        }
    })
});