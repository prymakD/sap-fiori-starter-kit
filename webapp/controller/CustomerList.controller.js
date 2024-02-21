sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomerList", {
      onInit: function () {
        this.oSF = this.getView().byId("searchField");
      },

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
    }, 

    onSearch : function (oEvent) {

      var aFilter = [];
      var sQuery = oEvent.getParameter("query");
      if (sQuery) {
        aFilter.push(new Filter("Country", FilterOperator.Contains, sQuery));
      }

      var oList = this.byId("customersTable");
      var oBinding = oList.getBinding("items");
      oBinding.filter(aFilter);
    },

    onSuggest: function (oEvent) {
      debugger
			var sValue = oEvent.getParameter("suggestValue"),
				aFilters = [];
			if (sValue) {
				aFilters = [
					new Filter([
						new Filter("CustomerID", function (sText) {
							return (sText || "").toUpperCase().indexOf(sValue.toUpperCase()) > -1;
						}),
						new Filter("Country", function (sDes) {
							return (sDes || "").toUpperCase().indexOf(sValue.toUpperCase()) > -1;
						})
					], false)
				];
			}

			this.oSF.getBinding("suggestionItems").filter(aFilters);
			this.oSF.suggest();
		}
    
    });
  }
);
