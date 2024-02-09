/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	//AMD
	sap.ui.require([
		"stk/starterkit/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
