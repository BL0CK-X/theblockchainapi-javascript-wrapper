"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Transaction = _interopRequireDefault(require("../model/Transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* SolanaTransaction service.
* @module api/SolanaTransactionApi
* @version 1.0.9407
*/
var SolanaTransactionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaTransactionApi. 
  * @alias module:api/SolanaTransactionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaTransactionApi(apiClient) {
    _classCallCheck(this, SolanaTransactionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the details of a transaction made on Solana
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} network The network ID (devnet, mainnet-beta)
   * @param {String} txSignature The transaction signature of the transaction
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Transaction} and HTTP response
   */


  _createClass(SolanaTransactionApi, [{
    key: "solanaGetTransactionWithHttpInfo",
    value: function solanaGetTransactionWithHttpInfo(network, txSignature) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetTransaction");
      } // verify the required parameter 'txSignature' is set


      if (txSignature === undefined || txSignature === null) {
        throw new Error("Missing the required parameter 'txSignature' when calling solanaGetTransaction");
      }

      var pathParams = {
        'network': network,
        'tx_signature': txSignature
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Transaction["default"];
      return this.apiClient.callApi('/solana/transaction/{network}/{tx_signature}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details of a transaction made on Solana
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-transaction/get-transaction\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of a transaction made on Solana.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} txSignature The transaction signature of the transaction
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Transaction}
     */

  }, {
    key: "solanaGetTransaction",
    value: function solanaGetTransaction(network, txSignature) {
      return this.solanaGetTransactionWithHttpInfo(network, txSignature).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaTransactionApi;
}();

exports["default"] = SolanaTransactionApi;