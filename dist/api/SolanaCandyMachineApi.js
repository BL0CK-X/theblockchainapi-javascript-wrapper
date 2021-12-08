"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateTestCandyMachineRequest = _interopRequireDefault(require("../model/CreateTestCandyMachineRequest"));

var _CreateTestCandyMachineResponse = _interopRequireDefault(require("../model/CreateTestCandyMachineResponse"));

var _GetAllNFTsResponse = _interopRequireDefault(require("../model/GetAllNFTsResponse"));

var _GetCandyDetailsErrorResponse = _interopRequireDefault(require("../model/GetCandyDetailsErrorResponse"));

var _GetCandyDetailsRequest = _interopRequireDefault(require("../model/GetCandyDetailsRequest"));

var _GetCandyDetailsResponse = _interopRequireDefault(require("../model/GetCandyDetailsResponse"));

var _GetConfigInfoRequest = _interopRequireDefault(require("../model/GetConfigInfoRequest"));

var _GetConfigInfoResponse = _interopRequireDefault(require("../model/GetConfigInfoResponse"));

var _GetMintedNFTsRequest = _interopRequireDefault(require("../model/GetMintedNFTsRequest"));

var _GetMintedNFTsResponse = _interopRequireDefault(require("../model/GetMintedNFTsResponse"));

var _MintNFTErrorResponse = _interopRequireDefault(require("../model/MintNFTErrorResponse"));

var _MintNFTRequest = _interopRequireDefault(require("../model/MintNFTRequest"));

var _MintNFTResponse = _interopRequireDefault(require("../model/MintNFTResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SolanaCandyMachine service.
* @module api/SolanaCandyMachineApi
* @version 1.0.9
*/
var SolanaCandyMachineApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaCandyMachineApi. 
  * @alias module:api/SolanaCandyMachineApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaCandyMachineApi(apiClient) {
    _classCallCheck(this, SolanaCandyMachineApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a test candy machine 
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {Object} opts Optional parameters
   * @param {module:model/CreateTestCandyMachineRequest} opts.createTestCandyMachineRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateTestCandyMachineResponse} and HTTP response
   */


  _createClass(SolanaCandyMachineApi, [{
    key: "solanaCreateTestCandyMachineWithHttpInfo",
    value: function solanaCreateTestCandyMachineWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['createTestCandyMachineRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreateTestCandyMachineResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a test candy machine 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestCandyMachineRequest} opts.createTestCandyMachineRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateTestCandyMachineResponse}
     */

  }, {
    key: "solanaCreateTestCandyMachine",
    value: function solanaCreateTestCandyMachine(opts) {
      return this.solanaCreateTestCandyMachineWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} candyMachineId The ID of the candy machine
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAllNFTsResponse} and HTTP response
     */

  }, {
    key: "solanaGetAllNFTsFromCandyMachineWithHttpInfo",
    value: function solanaGetAllNFTsFromCandyMachineWithHttpInfo(network, candyMachineId) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetAllNFTsFromCandyMachine");
      } // verify the required parameter 'candyMachineId' is set


      if (candyMachineId === undefined || candyMachineId === null) {
        throw new Error("Missing the required parameter 'candyMachineId' when calling solanaGetAllNFTsFromCandyMachine");
      }

      var pathParams = {
        'network': network,
        'candy_machine_id': candyMachineId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetAllNFTsResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine/{network}/{candy_machine_id}/nfts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  `Cost: 3 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} candyMachineId The ID of the candy machine
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAllNFTsResponse}
     */

  }, {
    key: "solanaGetAllNFTsFromCandyMachine",
    value: function solanaGetAllNFTsFromCandyMachine(network, candyMachineId) {
      return this.solanaGetAllNFTsFromCandyMachineWithHttpInfo(network, candyMachineId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the details of a Solana Candy Machine configuration 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the details of a Solana Candy Machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetConfigInfoRequest} opts.getConfigInfoRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetConfigInfoResponse} and HTTP response
     */

  }, {
    key: "solanaGetCandyMachineConfigurationDetailsWithHttpInfo",
    value: function solanaGetCandyMachineConfigurationDetailsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['getConfigInfoRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GetConfigInfoResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine/config/info', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details of a Solana Candy Machine configuration 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the details of a Solana Candy Machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetConfigInfoRequest} opts.getConfigInfoRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetConfigInfoResponse}
     */

  }, {
    key: "solanaGetCandyMachineConfigurationDetails",
    value: function solanaGetCandyMachineConfigurationDetails(opts) {
      return this.solanaGetCandyMachineConfigurationDetailsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a Metaplex candy machine's details 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyDetailsRequest} opts.getCandyDetailsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCandyDetailsResponse} and HTTP response
     */

  }, {
    key: "solanaGetCandyMachineDetailsWithHttpInfo",
    value: function solanaGetCandyMachineDetailsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['getCandyDetailsRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GetCandyDetailsResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine/info', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a Metaplex candy machine's details 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyDetailsRequest} opts.getCandyDetailsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCandyDetailsResponse}
     */

  }, {
    key: "solanaGetCandyMachineDetails",
    value: function solanaGetCandyMachineDetails(opts) {
      return this.solanaGetCandyMachineDetailsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the list of NFTs minted from a Solana Candy Machine 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetMintedNFTsRequest} opts.getMintedNFTsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GetMintedNFTsResponse>} and HTTP response
     */

  }, {
    key: "solanaGetNFTsMintedFromCandyMachineWithHttpInfo",
    value: function solanaGetNFTsMintedFromCandyMachineWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['getMintedNFTsRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_GetMintedNFTsResponse["default"]];
      return this.apiClient.callApi('/solana/nft/candy_machine/nfts', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the list of NFTs minted from a Solana Candy Machine 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetMintedNFTsRequest} opts.getMintedNFTsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GetMintedNFTsResponse>}
     */

  }, {
    key: "solanaGetNFTsMintedFromCandyMachine",
    value: function solanaGetNFTsMintedFromCandyMachine(opts) {
      return this.solanaGetNFTsMintedFromCandyMachineWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mint an NFT from a Metaplex candy machine
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  `Cost: 10 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/MintNFTRequest} opts.mintNFTRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MintNFTResponse} and HTTP response
     */

  }, {
    key: "solanaMintFromCandyMachineWithHttpInfo",
    value: function solanaMintFromCandyMachineWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['mintNFTRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MintNFTResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine/mint', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Mint an NFT from a Metaplex candy machine
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  `Cost: 10 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/MintNFTRequest} opts.mintNFTRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MintNFTResponse}
     */

  }, {
    key: "solanaMintFromCandyMachine",
    value: function solanaMintFromCandyMachine(opts) {
      return this.solanaMintFromCandyMachineWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaCandyMachineApi;
}();

exports["default"] = SolanaCandyMachineApi;