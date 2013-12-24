/* global define, exports, location */
(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports === 'object') {
        factory(exports);
    } else {
        factory(root);
    }

}(this, function(exports) {

    var previousEdmundsApi = exports.EdmundsApi,test;

    /**
     * @class EdmundsApi
     * @param {String} apiKey
     * @constructor
     */
    function EdmundsApi(apiKey) {

        var
            /**
             * @private
             * @property _apiKey
             * @type {String}
             */
            _apiKey = apiKey,

            /**
             * @private
             * @property _baseUrl
             * @type {String}
             */
            _baseUrl = (location && location.protocol === 'https:' ? 'https' : 'http') + '://api.edmunds.com';

        /**
         * @method getApiKey
         * @return {String}
         */
        this.getApiKey = function() {
            return _apiKey;
        };

        /**
         * @method getBaseUrl
         * @return {String}
         */
        this.getBaseUrl = function() {
            return _baseUrl;
        };

    }

    /**
     * @static
     * @method extend
     * @param {Object} prototypeProperties
     * @param {Object} staticProperties
     * @return {EdmundsApi}
     */
    EdmundsApi.extend = function(prototypeProperties, staticProperties) {

    };

    /**
     * @static
     * @method noConflict
     * @return {EdmundsApi}
     */
    EdmundsApi.noConflict = function() {
        exports.EdmundsApi = previousEdmundsApi;
        return this;
    };

    /**
     * @static
     * @property
     * @type {String}
     */
    EdmundsApi.VERSION = '0.0.1';

    /**
     * @method fetch
     * @param {String} method
     * @param {Object} options
     * @param {Function} successCallback
     * @param {Function} errorCallback
     * @async
     */
    EdmundsApi.prototype.fetch = function(method, options, successCallback, errorCallback) {

    };

    exports.EdmundsApi = EdmundsApi;

}));
