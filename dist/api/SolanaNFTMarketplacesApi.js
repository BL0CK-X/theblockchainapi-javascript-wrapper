"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetNFTListingResponse = _interopRequireDefault(require("../model/GetNFTListingResponse"));

var _SolSeaBuyRequest = _interopRequireDefault(require("../model/SolSeaBuyRequest"));

var _SolSeaBuyResponse = _interopRequireDefault(require("../model/SolSeaBuyResponse"));

var _SolSeaDelistRequest = _interopRequireDefault(require("../model/SolSeaDelistRequest"));

var _SolSeaDelistResponse = _interopRequireDefault(require("../model/SolSeaDelistResponse"));

var _SolSeaListRequest = _interopRequireDefault(require("../model/SolSeaListRequest"));

var _SolSeaListResponse = _interopRequireDefault(require("../model/SolSeaListResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SolanaNFTMarketplaces service.
* @module api/SolanaNFTMarketplacesApi
* @version 1.0.9
*/
var SolanaNFTMarketplacesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaNFTMarketplacesApi. 
  * @alias module:api/SolanaNFTMarketplacesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaNFTMarketplacesApi(apiClient) {
    _classCallCheck(this, SolanaNFTMarketplacesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Buy from SolSea
   * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  Buy an NFT from SolSea.  **We are not responsible for any SOL or NFT lost.**  `Cost: 50 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} network The network ID (devnet, mainnet-beta)
   * @param {String} mintAddress The mint address of the NFT you want to buy
   * @param {Object} opts Optional parameters
   * @param {module:model/SolSeaBuyRequest} opts.solSeaBuyRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SolSeaBuyResponse} and HTTP response
   */


  _createClass(SolanaNFTMarketplacesApi, [{
    key: "solanaBuyNFTFromSolSeaWithHttpInfo",
    value: function solanaBuyNFTFromSolSeaWithHttpInfo(network, mintAddress, opts) {
      opts = opts || {};
      var postBody = opts['solSeaBuyRequest']; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaBuyNFTFromSolSea");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaBuyNFTFromSolSea");
      }

      var pathParams = {
        'network': network,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SolSeaBuyResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/solsea/buy/{network}/{mint_address}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Buy from SolSea
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  Buy an NFT from SolSea.  **We are not responsible for any SOL or NFT lost.**  `Cost: 50 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/SolSeaBuyRequest} opts.solSeaBuyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SolSeaBuyResponse}
     */

  }, {
    key: "solanaBuyNFTFromSolSea",
    value: function solanaBuyNFTFromSolSea(network, mintAddress, opts) {
      return this.solanaBuyNFTFromSolSeaWithHttpInfo(network, mintAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delist from SolSea
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  Delist an NFT from SolSea.  **We are not responsible for any SOL or NFT lost.**  `Cost: 8 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/SolSeaDelistRequest} opts.solSeaDelistRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SolSeaDelistResponse} and HTTP response
     */

  }, {
    key: "solanaDelistNFTFromSolSeaWithHttpInfo",
    value: function solanaDelistNFTFromSolSeaWithHttpInfo(network, mintAddress, opts) {
      opts = opts || {};
      var postBody = opts['solSeaDelistRequest']; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaDelistNFTFromSolSea");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaDelistNFTFromSolSea");
      }

      var pathParams = {
        'network': network,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SolSeaDelistResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/solsea/delist/{network}/{mint_address}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delist from SolSea
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  Delist an NFT from SolSea.  **We are not responsible for any SOL or NFT lost.**  `Cost: 8 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/SolSeaDelistRequest} opts.solSeaDelistRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SolSeaDelistResponse}
     */

  }, {
    key: "solanaDelistNFTFromSolSea",
    value: function solanaDelistNFTFromSolSea(network, mintAddress, opts) {
      return this.solanaDelistNFTFromSolSeaWithHttpInfo(network, mintAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get NFT Listing
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea  `Cost: 3 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetNFTListingResponse} and HTTP response
     */

  }, {
    key: "solanaGetNFTListingWithHttpInfo",
    value: function solanaGetNFTListingWithHttpInfo(network, mintAddress) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetNFTListing");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaGetNFTListing");
      }

      var pathParams = {
        'network': network,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetNFTListingResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/listing/{network}/{mint_address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get NFT Listing
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea  `Cost: 3 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNFTListingResponse}
     */

  }, {
    key: "solanaGetNFTListing",
    value: function solanaGetNFTListing(network, mintAddress) {
      return this.solanaGetNFTListingWithHttpInfo(network, mintAddress).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List on SolSea
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  List NFT on SolSea.  **We are not responsible for any SOL or NFT lost.**  `Cost: 12 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/SolSeaListRequest} opts.solSeaListRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SolSeaListResponse} and HTTP response
     */

  }, {
    key: "solanaListNFTOnSolSeaWithHttpInfo",
    value: function solanaListNFTOnSolSeaWithHttpInfo(network, mintAddress, opts) {
      opts = opts || {};
      var postBody = opts['solSeaListRequest']; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaListNFTOnSolSea");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaListNFTOnSolSea");
      }

      var pathParams = {
        'network': network,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SolSeaListResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/solsea/list/{network}/{mint_address}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List on SolSea
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.  List NFT on SolSea.  **We are not responsible for any SOL or NFT lost.**  `Cost: 12 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/SolSeaListRequest} opts.solSeaListRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SolSeaListResponse}
     */

  }, {
    key: "solanaListNFTOnSolSea",
    value: function solanaListNFTOnSolSea(network, mintAddress, opts) {
      return this.solanaListNFTOnSolSeaWithHttpInfo(network, mintAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaNFTMarketplacesApi;
}();

exports["default"] = SolanaNFTMarketplacesApi;