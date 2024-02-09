sap.ui.define([], function() {
    'use strict';
    return {
        formatName: function (sFirstName, sLastName) {
            return sFirstName[0] + ". " + sLastName;
        },

        countOrders: function (aOrders) {
            return aOrders ? aOrders.length : 0;
        }
    }
});