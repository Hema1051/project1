sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/ZC_TRAVEL_BASCONNECTList",
	"project1/test/integration/pages/ZC_TRAVEL_BASCONNECTObjectPage"
], function (JourneyRunner, ZC_TRAVEL_BASCONNECTList, ZC_TRAVEL_BASCONNECTObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_TRAVEL_BASCONNECTList: ZC_TRAVEL_BASCONNECTList,
			onTheZC_TRAVEL_BASCONNECTObjectPage: ZC_TRAVEL_BASCONNECTObjectPage
        },
        async: true
    });

    return runner;
});

