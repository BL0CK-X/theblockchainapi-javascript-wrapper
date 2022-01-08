"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetCandyMachineIDRequest = _interopRequireDefault(require("../model/GetCandyMachineIDRequest"));

var _GetCandyMachineIDResponse = _interopRequireDefault(require("../model/GetCandyMachineIDResponse"));

var _NFT = _interopRequireDefault(require("../model/NFT"));

var _NFTMintErrorResponse = _interopRequireDefault(require("../model/NFTMintErrorResponse"));

var _NFTMintFee = _interopRequireDefault(require("../model/NFTMintFee"));

var _NFTMintRequest = _interopRequireDefault(require("../model/NFTMintRequest"));

var _NFTOwnerResponse = _interopRequireDefault(require("../model/NFTOwnerResponse"));

var _NFTSearchRequest = _interopRequireDefault(require("../model/NFTSearchRequest"));

var _NFTSearchResponse = _interopRequireDefault(require("../model/NFTSearchResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SolanaNFT service.
* @module api/SolanaNFTApi
* @version 1.0.9
*/
var SolanaNFTApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaNFTApi. 
  * @alias module:api/SolanaNFTApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaNFTApi(apiClient) {
    _classCallCheck(this, SolanaNFTApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create an NFT on Solana
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana. Read more on this <a href=\"https://blog.theblockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  To add attributes to the NFT, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. The JSON file should follow this format: <a href=\"https://docs.metaplex.com/nft-standard\" target=\"_blank\">NFT Standard.</a> (See the \"URI JSON Schema\" section in that article). Then supply the link to the JSON file in `nft_url`. You don't need to use `nft_metadata`.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {Object} opts Optional parameters
   * @param {module:model/NFTMintRequest} opts.nFTMintRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NFT} and HTTP response
   */


  _createClass(SolanaNFTApi, [{
    key: "solanaCreateNFTWithHttpInfo",
    value: function solanaCreateNFTWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['nFTMintRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NFT["default"];
      return this.apiClient.callApi('/solana/nft', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create an NFT on Solana
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Create a Metaplex NFT on Solana. Read more on this <a href=\"https://blog.theblockchainapi.com/2021/11/16/a-note-on-nfts.html\" target=\"_blank\">here</a>.  To add attributes to the NFT, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. The JSON file should follow this format: <a href=\"https://docs.metaplex.com/nft-standard\" target=\"_blank\">NFT Standard.</a> (See the \"URI JSON Schema\" section in that article). Then supply the link to the JSON file in `nft_url`. You don't need to use `nft_metadata`.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/NFTMintRequest} opts.nFTMintRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NFT}
     */

  }, {
    key: "solanaCreateNFT",
    value: function solanaCreateNFT(opts) {
      return this.solanaCreateNFTWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an NFT's metadata
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NFT} and HTTP response
     */

  }, {
    key: "solanaGetNFTWithHttpInfo",
    value: function solanaGetNFTWithHttpInfo(network, mintAddress) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetNFT");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaGetNFT");
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
      var returnType = _NFT["default"];
      return this.apiClient.callApi('/solana/nft/{network}/{mint_address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an NFT's metadata
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the metadata of an NFT.  If you're looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NFT}
     */

  }, {
    key: "solanaGetNFT",
    value: function solanaGetNFT(network, mintAddress) {
      return this.solanaGetNFTWithHttpInfo(network, mintAddress).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the NFT mint fee
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NFTMintFee} and HTTP response
     */

  }, {
    key: "solanaGetNFTMintFeeWithHttpInfo",
    value: function solanaGetNFTMintFeeWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NFTMintFee["default"];
      return this.apiClient.callApi('/solana/nft/mint/fee', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the NFT mint fee
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NFTMintFee}
     */

  }, {
    key: "solanaGetNFTMintFee",
    value: function solanaGetNFTMintFee() {
      return this.solanaGetNFTMintFeeWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get owner of an NFT
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NFTOwnerResponse} and HTTP response
     */

  }, {
    key: "solanaGetNFTOwnerWithHttpInfo",
    value: function solanaGetNFTOwnerWithHttpInfo(network, mintAddress) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetNFTOwner");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaGetNFTOwner");
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
      var returnType = _NFTOwnerResponse["default"];
      return this.apiClient.callApi('/solana/nft/{network}/{mint_address}/owner', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get owner of an NFT
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\" target=\"_blank\">See examples (Python, JavaScript)</a>.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using <a href=\"#operation/solanaDeriveAssociatedTokenAccountAddress\">this endpoint</a>.  `Cost: 1 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} mintAddress The mint address of the NFT
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NFTOwnerResponse}
     */

  }, {
    key: "solanaGetNFTOwner",
    value: function solanaGetNFTOwner(network, mintAddress) {
      return this.solanaGetNFTOwnerWithHttpInfo(network, mintAddress).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get the ID of the candy machine of an NFT 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyMachineIDRequest} opts.getCandyMachineIDRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetCandyMachineIDResponse} and HTTP response
     */

  }, {
    key: "solanaGetNFTsCandyMachineIdWithHttpInfo",
    value: function solanaGetNFTsCandyMachineIdWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['getCandyMachineIDRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GetCandyMachineIDResponse["default"];
      return this.apiClient.callApi('/solana/nft/candy_machine_id', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the ID of the candy machine of an NFT 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It's also possible that we return \"Not Found\" when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyMachineIDRequest} opts.getCandyMachineIDRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCandyMachineIDResponse}
     */

  }, {
    key: "solanaGetNFTsCandyMachineId",
    value: function solanaGetNFTsCandyMachineId(opts) {
      return this.solanaGetNFTsCandyMachineIdWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search NFTs on Solana
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/NFTSearchRequest} opts.nFTSearchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NFTSearchResponse>} and HTTP response
     */

  }, {
    key: "solanaSearchNFTsWithHttpInfo",
    value: function solanaSearchNFTsWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['nFTSearchRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_NFTSearchResponse["default"]];
      return this.apiClient.callApi('/solana/nft/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search NFTs on Solana
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/NFTSearchRequest} opts.nFTSearchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NFTSearchResponse>}
     */

  }, {
    key: "solanaSearchNFTs",
    value: function solanaSearchNFTs(opts) {
      return this.solanaSearchNFTsWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaNFTApi;
}();

exports["default"] = SolanaNFTApi;