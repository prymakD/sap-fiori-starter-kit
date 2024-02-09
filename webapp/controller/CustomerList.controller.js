sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomerList", {
      onInit: function () {},

      onCustomerPress: function (oEvent) {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("CustomerDetails", {
          CustomerID: oEvent.getSource().getBindingContext().getObject()
            .CustomerID
        });
      },

      onOpenCreateCustomer: function () {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("CreateCustomer");
    },
      onPressPerformance: function (){
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("CustomerPerformance");
      } 
    
    });
  }
);
