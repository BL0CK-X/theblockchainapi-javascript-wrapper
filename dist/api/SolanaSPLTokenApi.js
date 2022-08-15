"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GetSPLTokenResponse = _interopRequireDefault(require("../model/GetSPLTokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* SolanaSPLToken service.
* @module api/SolanaSPLTokenApi
* @version 1.0.9407
*/
var SolanaSPLTokenApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaSPLTokenApi. 
  * @alias module:api/SolanaSPLTokenApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaSPLTokenApi(apiClient) {
    _classCallCheck(this, SolanaSPLTokenApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get SPL token metadata
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-spl-token/get-spl-token\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Retrieves basic information about an SPL token given its `mint_address`.  You can see the mint addresses of popular SPL tokens <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  Some example mint addresses of SPL tokens: - USDC: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v - Mango: MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac - Serum: SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt - Raydium: 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R - wSOL: So11111111111111111111111111111111111111112 - ATLAS: ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} publicKey The public key of the token
   * @param {String} network The network ID (devnet, mainnet-beta)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetSPLTokenResponse} and HTTP response
   */


  _createClass(SolanaSPLTokenApi, [{
    key: "solanaGetSPLTokenWithHttpInfo",
    value: function solanaGetSPLTokenWithHttpInfo(publicKey, network) {
      var postBody = null; // verify the required parameter 'publicKey' is set

      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaGetSPLToken");
      } // verify the required parameter 'network' is set


      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetSPLToken");
      }

      var pathParams = {
        'public_key': publicKey,
        'network': network
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GetSPLTokenResponse["default"];
      return this.apiClient.callApi('/solana/spl-token/{network}/{public_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get SPL token metadata
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-spl-token/get-spl-token\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Retrieves basic information about an SPL token given its `mint_address`.  You can see the mint addresses of popular SPL tokens <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  Some example mint addresses of SPL tokens: - USDC: EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v - Mango: MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac - Serum: SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt - Raydium: 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R - wSOL: So11111111111111111111111111111111111111112 - ATLAS: ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} publicKey The public key of the token
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetSPLTokenResponse}
     */

  }, {
    key: "solanaGetSPLToken",
    value: function solanaGetSPLToken(publicKey, network) {
      return this.solanaGetSPLTokenWithHttpInfo(publicKey, network).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaSPLTokenApi;
}();

exports["default"] = SolanaSPLTokenApi;