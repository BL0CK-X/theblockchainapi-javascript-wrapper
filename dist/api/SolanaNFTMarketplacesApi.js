"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BuyRequest = _interopRequireDefault(require("../model/BuyRequest"));

var _BuyResponse = _interopRequireDefault(require("../model/BuyResponse"));

var _DelistRequest = _interopRequireDefault(require("../model/DelistRequest"));

var _DelistResponse = _interopRequireDefault(require("../model/DelistResponse"));

var _GetNFTListingResponse = _interopRequireDefault(require("../model/GetNFTListingResponse"));

var _ListRequest = _interopRequireDefault(require("../model/ListRequest"));

var _ListResponse = _interopRequireDefault(require("../model/ListResponse"));

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
   * Buy
   * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {module:model/String} network The network ID
   * @param {module:model/String} exchange The NFT exchange to interact with
   * @param {String} mintAddress The mint address of the NFT you want to buy
   * @param {Object} opts Optional parameters
   * @param {module:model/BuyRequest} opts.buyRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BuyResponse} and HTTP response
   */


  _createClass(SolanaNFTMarketplacesApi, [{
    key: "solanaBuyNFTWithHttpInfo",
    value: function solanaBuyNFTWithHttpInfo(network, exchange, mintAddress, opts) {
      opts = opts || {};
      var postBody = opts['buyRequest']; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaBuyNFT");
      } // verify the required parameter 'exchange' is set


      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling solanaBuyNFT");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaBuyNFT");
      }

      var pathParams = {
        'network': network,
        'exchange': exchange,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BuyResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Buy
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/BuyRequest} opts.buyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyResponse}
     */

  }, {
    key: "solanaBuyNFT",
    value: function solanaBuyNFT(network, exchange, mintAddress, opts) {
      return this.solanaBuyNFTWithHttpInfo(network, exchange, mintAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delist
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/DelistRequest} opts.delistRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DelistResponse} and HTTP response
     */

  }, {
    key: "solanaDelistNFTWithHttpInfo",
    value: function solanaDelistNFTWithHttpInfo(network, exchange, mintAddress, opts) {
      opts = opts || {};
      var postBody = opts['delistRequest']; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaDelistNFT");
      } // verify the required parameter 'exchange' is set


      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling solanaDelistNFT");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaDelistNFT");
      }

      var pathParams = {
        'network': network,
        'exchange': exchange,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DelistResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delist
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 8 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/DelistRequest} opts.delistRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DelistResponse}
     */

  }, {
    key: "solanaDelistNFT",
    value: function solanaDelistNFT(network, exchange, mintAddress, opts) {
      return this.solanaDelistNFTWithHttpInfo(network, exchange, mintAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get NFT Listing
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
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
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
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
     * List
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/ListRequest} opts.listRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListResponse} and HTTP response
     */

  }, {
    key: "solanaListNFTWithHttpInfo",
    value: function solanaListNFTWithHttpInfo(network, exchange, mintAddress, opts) {
      opts = opts || {};
      var postBody = opts['listRequest']; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaListNFT");
      } // verify the required parameter 'exchange' is set


      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling solanaListNFT");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaListNFT");
      }

      var pathParams = {
        'network': network,
        'exchange': exchange,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ListResponse["default"];
      return this.apiClient.callApi('/solana/nft/marketplaces/{exchange}/list/{network}/{mint_address}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  `Cost: 12 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/ListRequest} opts.listRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListResponse}
     */

  }, {
    key: "solanaListNFT",
    value: function solanaListNFT(network, exchange, mintAddress, opts) {
      return this.solanaListNFTWithHttpInfo(network, exchange, mintAddress, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaNFTMarketplacesApi;
}();

exports["default"] = SolanaNFTMarketplacesApi;