"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InputBlockchainIdentifier = _interopRequireDefault(require("../model/InputBlockchainIdentifier"));

var _InputName = _interopRequireDefault(require("../model/InputName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* NameService service.
* @module api/NameServiceApi
* @version 1.0.9
*/
var NameServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NameServiceApi. 
  * @alias module:api/NameServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NameServiceApi(apiClient) {
    _classCallCheck(this, NameServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the identifier
   * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the blockchain identifier from a name.  e.g., Input `vitalik.eth` and output `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {module:model/String} blockchain The blockchain you want to use 
   * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
   * @param {Object} opts Optional parameters
   * @param {module:model/InputName} opts.inputName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InputBlockchainIdentifier} and HTTP response
   */


  _createClass(NameServiceApi, [{
    key: "getBlockchainIdentifierFromNameWithHttpInfo",
    value: function getBlockchainIdentifierFromNameWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['inputName']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBlockchainIdentifierFromName");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getBlockchainIdentifierFromName");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InputBlockchainIdentifier["default"];
      return this.apiClient.callApi('/{blockchain}/{network}/name_service/name_to_blockchain_identifier', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the identifier
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the blockchain identifier from a name.  e.g., Input `vitalik.eth` and output `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @param {Object} opts Optional parameters
     * @param {module:model/InputName} opts.inputName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InputBlockchainIdentifier}
     */

  }, {
    key: "getBlockchainIdentifierFromName",
    value: function getBlockchainIdentifierFromName(blockchain, network, opts) {
      return this.getBlockchainIdentifierFromNameWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the name
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the name from a blockchain identifier.  e.g., Input `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` and output `vitalik.eth`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @param {Object} opts Optional parameters
     * @param {module:model/InputBlockchainIdentifier} opts.inputBlockchainIdentifier 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InputName} and HTTP response
     */

  }, {
    key: "getNameForBlockchainIdentifierWithHttpInfo",
    value: function getNameForBlockchainIdentifierWithHttpInfo(blockchain, network, opts) {
      opts = opts || {};
      var postBody = opts['inputBlockchainIdentifier']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getNameForBlockchainIdentifier");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getNameForBlockchainIdentifier");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InputName["default"];
      return this.apiClient.callApi('/{blockchain}/{network}/name_service/blockchain_identifier_to_name', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the name
     * <a href=\"https://github.com/BL0CK-X/blockchain-api\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the name from a blockchain identifier.  e.g., Input `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` and output `vitalik.eth`  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @param {Object} opts Optional parameters
     * @param {module:model/InputBlockchainIdentifier} opts.inputBlockchainIdentifier 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InputName}
     */

  }, {
    key: "getNameForBlockchainIdentifier",
    value: function getNameForBlockchainIdentifier(blockchain, network, opts) {
      return this.getNameForBlockchainIdentifierWithHttpInfo(blockchain, network, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return NameServiceApi;
}();

exports["default"] = NameServiceApi;