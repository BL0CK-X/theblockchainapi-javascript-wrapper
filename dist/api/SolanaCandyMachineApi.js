"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CandyMachineSearchRequest = _interopRequireDefault(require("../model/CandyMachineSearchRequest"));

var _CreateTestCandyMachineRequest = _interopRequireDefault(require("../model/CreateTestCandyMachineRequest"));

var _CreateTestCandyMachineResponse = _interopRequireDefault(require("../model/CreateTestCandyMachineResponse"));

var _GetAllNFTsResponse = _interopRequireDefault(require("../model/GetAllNFTsResponse"));

var _GetCandyMetadataErrorResponse = _interopRequireDefault(require("../model/GetCandyMetadataErrorResponse"));

var _GetCandyMetadataRequest = _interopRequireDefault(require("../model/GetCandyMetadataRequest"));

var _GetCandyMetadataResponse = _interopRequireDefault(require("../model/GetCandyMetadataResponse"));

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
   * Create a test CM
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
     * Create a test CM
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
     * Get CM's NFTs  
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
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
     * Get CM's NFTs  
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
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
     * Get a CM's metadata 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get metadata about a Metaplex candy machine. This includes the goLiveDate, itemsAvailable, and itemsRedeemed. To see what is included, expand the green successful response below.  NOTE: Supply exactly one of `candy_machine_id`, `config_address`, or `uuid`. If you provide more than one, you will receive a `400` error.   `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyMetadataRequest} opts.getCandyMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCandyMetadataResponse} and HTTP response
     */

  }, {
    key: "solanaGetCandyMachineMetadataWithHttpInfo",
    value: function solanaGetCandyMachineMetadataWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['getCandyMetadataRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GetCandyMetadataResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine/metadata', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a CM's metadata 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get metadata about a Metaplex candy machine. This includes the goLiveDate, itemsAvailable, and itemsRedeemed. To see what is included, expand the green successful response below.  NOTE: Supply exactly one of `candy_machine_id`, `config_address`, or `uuid`. If you provide more than one, you will receive a `400` error.   `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyMetadataRequest} opts.getCandyMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCandyMetadataResponse}
     */

  }, {
    key: "solanaGetCandyMachineMetadata",
    value: function solanaGetCandyMachineMetadata(opts) {
      return this.solanaGetCandyMachineMetadataWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "solanaListAllCandyMachinesWithHttpInfo",
    value: function solanaListAllCandyMachinesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/solana/nft/candy_machine/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List all CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "solanaListAllCandyMachines",
    value: function solanaListAllCandyMachines() {
      return this.solanaListAllCandyMachinesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Mint from a CM
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.   `Cost: 8 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
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
     * Mint from a CM
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.   `Cost: 8 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
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
    /**
     * Search CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CandyMachineSearchRequest} opts.candyMachineSearchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */

  }, {
    key: "solanaSearchCandyMachinesWithHttpInfo",
    value: function solanaSearchCandyMachinesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['candyMachineSearchRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];
      return this.apiClient.callApi('/solana/nft/candy_machine/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CandyMachineSearchRequest} opts.candyMachineSearchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */

  }, {
    key: "solanaSearchCandyMachines",
    value: function solanaSearchCandyMachines(opts) {
      return this.solanaSearchCandyMachinesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaCandyMachineApi;
}();

exports["default"] = SolanaCandyMachineApi;