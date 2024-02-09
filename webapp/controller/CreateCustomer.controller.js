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

        // Assuming you have a JSON model for simplicity
        var oModel = this.getView().getModel();

        // Assuming your OData service supports creating a new customer entity
        oModel.create(
          "/Customers",
          {
            CustomerID: sId,
            CompanyName: sName,
          },
          {
            success: function () {
              // Handle success
              console.log("Customer created successfully!");
              MessageToast.show("Customer created successfully!");

              // Navigate to the "CustomerList" view after successful creation
              var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
              oRouter.navTo("CustomerList");
            }.bind(this),
            error: function (oError) {
              // Handle error
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
