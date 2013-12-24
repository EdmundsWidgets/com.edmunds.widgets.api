(function(global) {

    var apiKey = 'api_key',
        api;

    module('core', {
        setup: function() {
            api = new EdmundsApi(apiKey);
        }
    });

    test('getApiKey', 2, function() {
        equal(api.getApiKey(), apiKey);
        api = new EdmundsApi();
        equal(typeof api.getApiKey(), 'undefined');
    });

    test('getBaseUrl', 1, function() {
        var expectedUrl = (location.protocol === 'https:' ? 'https' : 'http') + '://api.edmunds.com';
        equal(api.getBaseUrl(), expectedUrl);
    });

    test('extend', 0, function() {

    });

    test('fetch', 0, function() {

    });

    test('noConflict', 2, function() {
        var NoConflictEdmundsApi = EdmundsApi.noConflict();
        equal(typeof global.EdmundsApi, 'undefined', 'Returned global EdmundsApi');
        global.EdmundsApi = NoConflictEdmundsApi;
        equal(global.EdmundsApi, NoConflictEdmundsApi, 'EdmundsApi is still the original EdmundsApi');
    });

}(this));
