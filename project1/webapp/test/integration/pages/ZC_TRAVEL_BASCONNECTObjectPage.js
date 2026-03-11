sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'project1',
            componentId: 'ZC_TRAVEL_BASCONNECTObjectPage',
            contextPath: '/ZC_TRAVEL_BASCONNECT'
        },
        CustomPageDefinitions
    );
});