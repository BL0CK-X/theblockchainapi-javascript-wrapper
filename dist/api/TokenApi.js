"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TokenMetadataResponse = _interopRequireDefault(require("../model/TokenMetadataResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Token service.
* @module api/TokenApi
* @version 1.0.9407
*/
var TokenApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TokenApi. 
  * @alias module:api/TokenApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TokenApi(apiClient) {
    _classCallCheck(this, TokenApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get a token's metadata
   * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/tokens/get-token-metadata\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the metadata of a token.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {module:model/String} blockchain The blockchain you want to use 
   * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
   * @param {module:model/String} tokenBlockchainIdentifier The identifier of the token (e.g., `mint_address` on `Solana` or `token_address` on `Ethereum`) 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TokenMetadataResponse} and HTTP response
   */


  _createClass(TokenApi, [{
    key: "getTokenMetadataWithHttpInfo",
    value: function getTokenMetadataWithHttpInfo(blockchain, network, tokenBlockchainIdentifier) {
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getTokenMetadata");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling getTokenMetadata");
      } // verify the required parameter 'tokenBlockchainIdentifier' is set


      if (tokenBlockchainIdentifier === undefined || tokenBlockchainIdentifier === null) {
        throw new Error("Missing the required parameter 'tokenBlockchainIdentifier' when calling getTokenMetadata");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network,
        'token_blockchain_identifier': tokenBlockchainIdentifier
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TokenMetadataResponse["default"];
      return this.apiClient.callApi('/{blockchain}/{network}/token/{token_blockchain_identifier}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a token's metadata
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/tokens/get-token-metadata\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      Get the metadata of a token.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @param {module:model/String} tokenBlockchainIdentifier The identifier of the token (e.g., `mint_address` on `Solana` or `token_address` on `Ethereum`) 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TokenMetadataResponse}
     */

  }, {
    key: "getTokenMetadata",
    value: function getTokenMetadata(blockchain, network, tokenBlockchainIdentifier) {
      return this.getTokenMetadataWithHttpInfo(blockchain, network, tokenBlockchainIdentifier).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all tokens
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/tokens/get-all-tokens\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      List all tokens.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TokenMetadataResponse>} and HTTP response
     */

  }, {
    key: "listAllTokensWithHttpInfo",
    value: function listAllTokensWithHttpInfo(blockchain, network) {
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling listAllTokens");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling listAllTokens");
      }

      var pathParams = {
        'blockchain': blockchain,
        'network': network
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_TokenMetadataResponse["default"]];
      return this.apiClient.callApi('/{blockchain}/{network}/all_tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all tokens
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/tokens/get-all-tokens\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      List all tokens.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {String} network The network of the blockchain you selected  - Solana: `devnet`, `mainnet-beta` - Ethereum: `ropsten`, `mainnet`  Defaults when not provided (not applicable to path parameters): - Solana: `devnet` - Ethereum: `ropsten`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TokenMetadataResponse>}
     */

  }, {
    key: "listAllTokens",
    value: function listAllTokens(blockchain, network) {
      return this.listAllTokensWithHttpInfo(blockchain, network).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TokenApi;
}();

exports["default"] = TokenApi;