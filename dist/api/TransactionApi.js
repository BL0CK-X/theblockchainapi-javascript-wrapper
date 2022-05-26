"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeneralTransaction = _interopRequireDefault(require("../model/GeneralTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Transaction service.
* @module api/TransactionApi
* @version 1.0.9
*/
var TransactionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransactionApi. 
  * @alias module:api/TransactionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransactionApi(apiClient) {
    _classCallCheck(this, TransactionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the details of a transaction made on a blockchain
   * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the details of a transaction made on the specified blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {module:model/String} blockchain The blockchain you want to use 
   * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
   * @param {String} transactionBlockchainIdentifier The transaction signature of the transaction.  Examples: - Solana: `5wHu1qwD7q5ifaN5nwdcDqNFo53GJqa7nLp2BeeEpcHCusb4GzARz4GjgzsEHMkBMgCJMGa6GSQ1VG96Exv8kt2W` - Ethereum: `0x5f36b787daa57bfe8568d69e24eae54ccb00720c6edfc826bd4a7b19c525eef4`
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralTransaction} and HTTP response
   */


  _createClass(TransactionApi, [{
    key: "getTransactionWithHttpInfo",
    value: function getTransactionWithHttpInfo(blockchain, network, transactionBlockchainIdentifier) {
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTransaction");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTransaction");
      } // verify the required parameter 'transactionBlockchainIdentifier' is set


      if (transactionBlockchainIdentifier === undefined || transactionBlockchainIdentifier === null) {
        throw new Error("Missing the required parameter 'transactionBlockchainIdentifier' when calling getTransaction");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'transaction_blockchain_identifier': transactionBlockchainIdentifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GeneralTransaction["default"];
      return this.apiClient.callApi('/{blockchain}/transaction/{network}/{transaction_blockchain_identifier}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details of a transaction made on a blockchain
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the details of a transaction made on the specified blockchain.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @param {String} transactionBlockchainIdentifier The transaction signature of the transaction.  Examples: - Solana: `5wHu1qwD7q5ifaN5nwdcDqNFo53GJqa7nLp2BeeEpcHCusb4GzARz4GjgzsEHMkBMgCJMGa6GSQ1VG96Exv8kt2W` - Ethereum: `0x5f36b787daa57bfe8568d69e24eae54ccb00720c6edfc826bd4a7b19c525eef4`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralTransaction}
     */

  }, {
    key: "getTransaction",
    value: function getTransaction(blockchain, network, transactionBlockchainIdentifier) {
      return this.getTransactionWithHttpInfo(blockchain, network, transactionBlockchainIdentifier).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TransactionApi;
}();

exports["default"] = TransactionApi;