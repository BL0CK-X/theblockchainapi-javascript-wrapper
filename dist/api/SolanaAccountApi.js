"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("../model/Account"));

var _AccountIsCandyMachine = _interopRequireDefault(require("../model/AccountIsCandyMachine"));

var _AccountIsNFT = _interopRequireDefault(require("../model/AccountIsNFT"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SolanaAccount service.
* @module api/SolanaAccountApi
* @version 1.0.9
*/
var SolanaAccountApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaAccountApi. 
  * @alias module:api/SolanaAccountApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaAccountApi(apiClient) {
    _classCallCheck(this, SolanaAccountApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the details of an account on Solana
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} network The network ID (devnet, mainnet-beta)
   * @param {String} publicKey The public key of the account
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Account} and HTTP response
   */


  _createClass(SolanaAccountApi, [{
    key: "solanaGetAccountWithHttpInfo",
    value: function solanaGetAccountWithHttpInfo(network, publicKey) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetAccount");
      } // verify the required parameter 'publicKey' is set


      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaGetAccount");
      }

      var pathParams = {
        'network': network,
        'public_key': publicKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Account["default"];
      return this.apiClient.callApi('/solana/account/{network}/{public_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the details of an account on Solana
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-account/get-account\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the details of an account on Solana. Learn more about accounts <a href=\"https://docs.solana.com/developing/programming-model/accounts\" target=\"_blank\">here</a>.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Account}
     */

  }, {
    key: "solanaGetAccount",
    value: function solanaGetAccount(network, publicKey) {
      return this.solanaGetAccountWithHttpInfo(network, publicKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get if account is candy machine
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountIsCandyMachine} and HTTP response
     */

  }, {
    key: "solanaGetAccountIsCandyMachineWithHttpInfo",
    value: function solanaGetAccountIsCandyMachineWithHttpInfo(network, publicKey) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetAccountIsCandyMachine");
      } // verify the required parameter 'publicKey' is set


      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaGetAccountIsCandyMachine");
      }

      var pathParams = {
        'network': network,
        'public_key': publicKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountIsCandyMachine["default"];
      return this.apiClient.callApi('/solana/account/{network}/{public_key}/is_candy_machine', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get if account is candy machine
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key address corresponds to a candy machine ID or candy machine configuration.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountIsCandyMachine}
     */

  }, {
    key: "solanaGetAccountIsCandyMachine",
    value: function solanaGetAccountIsCandyMachine(network, publicKey) {
      return this.solanaGetAccountIsCandyMachineWithHttpInfo(network, publicKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get if account is NFT
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AccountIsNFT} and HTTP response
     */

  }, {
    key: "solanaGetAccountIsNFTWithHttpInfo",
    value: function solanaGetAccountIsNFTWithHttpInfo(network, publicKey) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetAccountIsNFT");
      } // verify the required parameter 'publicKey' is set


      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaGetAccountIsNFT");
      }

      var pathParams = {
        'network': network,
        'public_key': publicKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccountIsNFT["default"];
      return this.apiClient.callApi('/solana/account/{network}/{public_key}/is_nft', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get if account is NFT
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.      Determine whether or not a public key is an NFT `mint address`  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AccountIsNFT}
     */

  }, {
    key: "solanaGetAccountIsNFT",
    value: function solanaGetAccountIsNFT(network, publicKey) {
      return this.solanaGetAccountIsNFTWithHttpInfo(network, publicKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaAccountApi;
}();

exports["default"] = SolanaAccountApi;