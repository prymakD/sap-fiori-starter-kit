sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter) {
        "use strict";

        return Controller.extend("stk.starterkit.controller.CustomerPerformance", {
            formatter: Formatter,
            onInit: function () {
            },
            handleNavButtonPress: function (){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CustomerList");
            },
            handleEmailSending: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<>.com";
                var sSubject = "Good Job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            },
            onPressMotivate: function (oEvent){
                console.log("sBody");

                // $.ajax({
                //     url: "/evilinsult/generate_insult.php",
                //     data: {
                //         lang: "en",
                //         type: "json"
                //     },
                //     success: function (oResponse) {
                //         var oEmployee = oEvent.getSource().getBindingContext().getObject();
                //         var sEmail = "prymakdn@gmail.com";
                //         var sSubject = "Good Job!";
                //         var sBody = JSON.parse(oResponse).insult;
                //         sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                //     }
                // })

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("/evilinsult/generate_insult.php", {
                    lang: "en",
                    type: "json"
                }).then(function () {
                    var sBody = oModel.getData().insult;
                    var sEmail = "prymakdn@gmail.com";
                    var sSubject = "Good Job!";
                    sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                })
            },
            onPressFire: function (oEvent){
                $.ajax({
                    url: "https://evilinsult.com/generate_insult.php",
                    data: {
                        lang: "en",
                        type: "json"
                    },
                    success: function (oResponse) {
                        var oEmployee = oEvent.getSource().getBindingContext().getObject();
                        var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<>.com";
                        var sSubject = "We are dissapointed!";
                        var sBody = JSON.parse(oResponse).insult;
                        console.log("sBody");
                        sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                    }
                })
            }
        });
    });
