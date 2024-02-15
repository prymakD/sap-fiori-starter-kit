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

            onShowContactInfoButtonPress: function (oEvent) {
                var oView = this.getView();

                if (!this.byId("contactDialog")) {
                    var that = this
                    Fragment.load({
                        id: oView.getId(),
                        name: "stk.starterkit.view.ContactInfoDialog",
                        controller: that
                    }).then(function (oDialog) {
                        console.log(that)
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this.byId("contactDialog").open();
                }
            },

            onCloseButtonPress: function () {
                var oDialog = this.byId("contactDialog");
                if (oDialog) {
                    oDialog.close();
                }
            }

        });
    });
