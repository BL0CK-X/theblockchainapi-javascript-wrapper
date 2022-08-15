"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CCPayment = _interopRequireDefault(require("../model/CCPayment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* CCPayment service.
* @module api/CCPaymentApi
* @version 1.0.9407
*/
var CCPaymentApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CCPaymentApi. 
  * @alias module:api/CCPaymentApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CCPaymentApi(apiClient) {
    _classCallCheck(this, CCPaymentApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get a payment 
   * Retrieve a specific payment, either by its `payment_id` or `payment_validation_code`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} projectId The ID of the project. Created and returned when a project is created.
   * @param {String} paymentIdentifier You can supply either `payment_id` or `payment_validation_code`.  The `payment_id` is only visible by you and uniquely identifies a payment.  The `payment_validation_code` is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the `payment_validation_code`.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CCPayment} and HTTP response
   */


  _createClass(CCPaymentApi, [{
    key: "getCCPaymentWithHttpInfo",
    value: function getCCPaymentWithHttpInfo(projectId, paymentIdentifier) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getCCPayment");
      } // verify the required parameter 'paymentIdentifier' is set


      if (paymentIdentifier === undefined || paymentIdentifier === null) {
        throw new Error("Missing the required parameter 'paymentIdentifier' when calling getCCPayment");
      }

      var pathParams = {
        'project_id': projectId,
        'payment_identifier': paymentIdentifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CCPayment["default"];
      return this.apiClient.callApi('/checkout/v1/project/{project_id}/payment/{payment_identifier}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a payment 
     * Retrieve a specific payment, either by its `payment_id` or `payment_validation_code`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {String} paymentIdentifier You can supply either `payment_id` or `payment_validation_code`.  The `payment_id` is only visible by you and uniquely identifies a payment.  The `payment_validation_code` is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the `payment_validation_code`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CCPayment}
     */

  }, {
    key: "getCCPayment",
    value: function getCCPayment(projectId, paymentIdentifier) {
      return this.getCCPaymentWithHttpInfo(projectId, paymentIdentifier).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all payments  
     * List all payments associated with your account (across all projects).  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CCPayment>} and HTTP response
     */

  }, {
    key: "listAllCCPaymentsWithHttpInfo",
    value: function listAllCCPaymentsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CCPayment["default"]];
      return this.apiClient.callApi('/checkout/v1/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all payments  
     * List all payments associated with your account (across all projects).  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CCPayment>}
     */

  }, {
    key: "listAllCCPayments",
    value: function listAllCCPayments() {
      return this.listAllCCPaymentsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List a project's payments 
     * List all payments associated with a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME Filter payments by a user's wallet identifier (i.e., Solana public key) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CCPayment>} and HTTP response
     */

  }, {
    key: "listCCProjectPaymentsWithHttpInfo",
    value: function listCCProjectPaymentsWithHttpInfo(projectId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling listCCProjectPayments");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {
        'blockchain_identifier': opts['UNKNOWN_PARAMETER_NAME']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CCPayment["default"]];
      return this.apiClient.callApi('/checkout/v1/project/{project_id}/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List a project's payments 
     * List all payments associated with a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME Filter payments by a user's wallet identifier (i.e., Solana public key) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CCPayment>}
     */

  }, {
    key: "listCCProjectPayments",
    value: function listCCProjectPayments(projectId, opts) {
      return this.listCCProjectPaymentsWithHttpInfo(projectId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CCPaymentApi;
}();

exports["default"] = CCPaymentApi;