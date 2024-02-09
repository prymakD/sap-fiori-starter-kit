sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, Fragment) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerDetails", {
            formatter: Formatter,
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            },

            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        expand: "Orders"
                    }
                });
            },

            handleNavButtonPress: function (){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerList");
            },

            onOpenCustomerDetails: function (oEvent) {
                var oView = this.getView();

                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment(oView.getId(), "stk.starterkit.view.ContactInfoDialog");
                    oView.addDependent(this._oDialog);
                }
                this._oDialog.open();
            },

            onCloseCustomerDetails: function () {
                console.log("Closed");
                this._oDialog.close();
            }
        });
    });
