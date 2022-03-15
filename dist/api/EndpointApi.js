"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Endpoint = _interopRequireDefault(require("../model/Endpoint"));

var _EndpointReference = _interopRequireDefault(require("../model/EndpointReference"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Endpoint service.
* @module api/EndpointApi
* @version 1.0.9
*/
var EndpointApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EndpointApi. 
  * @alias module:api/EndpointApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EndpointApi(apiClient) {
    _classCallCheck(this, EndpointApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete an endpoint 
   * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes an endpoint from a project. This endpoint removes the endpoint from the project's documentation. However, this does un-deploy the endpoint. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {Object} opts Optional parameters
   * @param {module:model/EndpointReference} opts.endpointReference 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
   */


  _createClass(EndpointApi, [{
    key: "deleteEndpointWithHttpInfo",
    value: function deleteEndpointWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['endpointReference'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/endpoint/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes an endpoint from a project. This endpoint removes the endpoint from the project's documentation. However, this does un-deploy the endpoint. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteEndpoint",
    value: function deleteEndpoint(opts) {
      return this.deleteEndpointWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an endpoint's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get an endpoint's metadata from a project.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Endpoint} and HTTP response
     */

  }, {
    key: "getEndpointWithHttpInfo",
    value: function getEndpointWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['endpointReference'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Endpoint["default"];
      return this.apiClient.callApi('/endpoint/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an endpoint's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get an endpoint's metadata from a project.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Endpoint}
     */

  }, {
    key: "getEndpoint",
    value: function getEndpoint(opts) {
      return this.getEndpointWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all endpoints 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all endpoints that you have added under your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Endpoint>} and HTTP response
     */

  }, {
    key: "listEndpointsWithHttpInfo",
    value: function listEndpointsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Endpoint["default"]];
      return this.apiClient.callApi('/endpoint/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all endpoints 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all endpoints that you have added under your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Endpoint>}
     */

  }, {
    key: "listEndpoints",
    value: function listEndpoints() {
      return this.listEndpointsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create / update an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create or update an `endpoint` for a `project`.   An `endpoint` is a function that is a part of a mini-API `project`.  This endpoint adds the `endpoint` to the `project`'s documentation. However, this does not deploy the `endpoint`. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  All attributes except `group_name` are required if **creating** an `endpoint`.  Only `path`, `project_id`, and `version` are required if **updating** an `endpoint`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/Endpoint} opts.endpoint 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Endpoint} and HTTP response
     */

  }, {
    key: "setEndpointWithHttpInfo",
    value: function setEndpointWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['endpoint'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Endpoint["default"];
      return this.apiClient.callApi('/endpoint', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create / update an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create or update an `endpoint` for a `project`.   An `endpoint` is a function that is a part of a mini-API `project`.  This endpoint adds the `endpoint` to the `project`'s documentation. However, this does not deploy the `endpoint`. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  All attributes except `group_name` are required if **creating** an `endpoint`.  Only `path`, `project_id`, and `version` are required if **updating** an `endpoint`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/Endpoint} opts.endpoint 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Endpoint}
     */

  }, {
    key: "setEndpoint",
    value: function setEndpoint(opts) {
      return this.setEndpointWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return EndpointApi;
}();

exports["default"] = EndpointApi;