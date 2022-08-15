"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CCWebhook = _interopRequireDefault(require("../model/CCWebhook"));

var _CCWebhookValidateRequest = _interopRequireDefault(require("../model/CCWebhookValidateRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* CCWebhook service.
* @module api/CCWebhookApi
* @version 1.0.9407
*/
var CCWebhookApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CCWebhookApi. 
  * @alias module:api/CCWebhookApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CCWebhookApi(apiClient) {
    _classCallCheck(this, CCWebhookApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get a webhook 
   * Retrieve the details of a webhook sent to you.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} projectId The ID of the project. Created and returned when a project is created.
   * @param {String} webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CCWebhook} and HTTP response
   */


  _createClass(CCWebhookApi, [{
    key: "getCCWebhookWithHttpInfo",
    value: function getCCWebhookWithHttpInfo(projectId, webhookIdentifier) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getCCWebhook");
      } // verify the required parameter 'webhookIdentifier' is set


      if (webhookIdentifier === undefined || webhookIdentifier === null) {
        throw new Error("Missing the required parameter 'webhookIdentifier' when calling getCCWebhook");
      }

      var pathParams = {
        'project_id': projectId,
        'webhook_identifier': webhookIdentifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CCWebhook["default"];
      return this.apiClient.callApi('/webhook/v1/project/{project_id}/webhook/{webhook_identifier}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a webhook 
     * Retrieve the details of a webhook sent to you.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {String} webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CCWebhook}
     */

  }, {
    key: "getCCWebhook",
    value: function getCCWebhook(projectId, webhookIdentifier) {
      return this.getCCWebhookWithHttpInfo(projectId, webhookIdentifier).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List project's webhooks 
     * List all webhooks sent to you and their respective responses from your server.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CCWebhook>} and HTTP response
     */

  }, {
    key: "listCCProjectWebhooksWithHttpInfo",
    value: function listCCProjectWebhooksWithHttpInfo(projectId) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listCCProjectWebhooks");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CCWebhook["default"]];
      return this.apiClient.callApi('/webhook/v1/project/{project_id}/webhooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List project's webhooks 
     * List all webhooks sent to you and their respective responses from your server.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CCWebhook>}
     */

  }, {
    key: "listCCProjectWebhooks",
    value: function listCCProjectWebhooks(projectId) {
      return this.listCCProjectWebhooksWithHttpInfo(projectId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Validate a webhook 
     * Validate whether a webhook you received was actually sent from us.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {String} webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     * @param {Object} opts Optional parameters
     * @param {module:model/CCWebhookValidateRequest} opts.cCWebhookValidateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "validateCCWebhookWithHttpInfo",
    value: function validateCCWebhookWithHttpInfo(projectId, webhookIdentifier, opts) {
      opts = opts || {};
      var postBody = opts['cCWebhookValidateRequest']; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling validateCCWebhook");
      } // verify the required parameter 'webhookIdentifier' is set


      if (webhookIdentifier === undefined || webhookIdentifier === null) {
        throw new Error("Missing the required parameter 'webhookIdentifier' when calling validateCCWebhook");
      }

      var pathParams = {
        'project_id': projectId,
        'webhook_identifier': webhookIdentifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/webhook/v1/project/{project_id}/webhook/{webhook_identifier}/validate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Validate a webhook 
     * Validate whether a webhook you received was actually sent from us.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {String} webhookIdentifier The ID of the webhook. Created and returned when a webhook is sent.
     * @param {Object} opts Optional parameters
     * @param {module:model/CCWebhookValidateRequest} opts.cCWebhookValidateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "validateCCWebhook",
    value: function validateCCWebhook(projectId, webhookIdentifier, opts) {
      return this.validateCCWebhookWithHttpInfo(projectId, webhookIdentifier, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CCWebhookApi;
}();

exports["default"] = CCWebhookApi;