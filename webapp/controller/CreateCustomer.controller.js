sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   * @param {typeof sap.m.MessageToast} MessageToast
   */
  function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CreateCustomer", {
      onInit: function () {},

      onSaveNewCustomer: function () {
        var sId = this.getView().byId("CustomerID").getValue();
        var sName = this.getView().byId("CustomerName").getValue();

        var oModel = this.getView().getModel();

        oModel.create(
          "/Customers",
          {
            CustomerID: sId,
            CompanyName: sName,
          },
          {
            success: function () {
              console.log("Customer created successfully!");
              MessageToast.show("Customer created successfully!");

              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              // oRouter.navTo("CustomerList");
            }.bind(this),
            error: function (oError) {
              console.error("Error creating customer:", oError);
              MessageToast.show("Error creating customer:", oError);
            },
          }
        );
      },

      handleNavButtonPress: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("CustomerList");
      }

    });
  }
);
