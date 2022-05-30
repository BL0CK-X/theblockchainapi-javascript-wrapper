"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GeneralAirdropRequest = _interopRequireDefault(require("../model/GeneralAirdropRequest"));

var _GeneralBalanceRequest = _interopRequireDefault(require("../model/GeneralBalanceRequest"));

var _GeneralBalanceResponse = _interopRequireDefault(require("../model/GeneralBalanceResponse"));

var _GeneralGeneratePrivateKeyResponse = _interopRequireDefault(require("../model/GeneralGeneratePrivateKeyResponse"));

var _GeneralSecretPhrase = _interopRequireDefault(require("../model/GeneralSecretPhrase"));

var _GeneralTransactionMadeResponse = _interopRequireDefault(require("../model/GeneralTransactionMadeResponse"));

var _GeneralTransactionResponse = _interopRequireDefault(require("../model/GeneralTransactionResponse"));

var _GeneralTransferRequest = _interopRequireDefault(require("../model/GeneralTransferRequest"));

var _GenerateSeedPhraseRequest = _interopRequireDefault(require("../model/GenerateSeedPhraseRequest"));

var _SupplyWalletRequest = _interopRequireDefault(require("../model/SupplyWalletRequest"));

var _WalletIdentifiers = _interopRequireDefault(require("../model/WalletIdentifiers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Wallet service.
* @module api/WalletApi
* @version 1.0.9
*/
var WalletApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WalletApi. 
  * @alias module:api/WalletApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WalletApi(apiClient) {
    _classCallCheck(this, WalletApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Derive private key
   * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {module:model/String} blockchain The blockchain you want to use 
   * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralGeneratePrivateKeyResponse} and HTTP response
   */


  _createClass(WalletApi, [{
    key: "derivePrivateKeyWithHttpInfo",
    value: function derivePrivateKeyWithHttpInfo(blockchain, supplyWalletRequest) {
      var postBody = supplyWalletRequest; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling derivePrivateKey");
      } // verify the required parameter 'supplyWalletRequest' is set


      if (supplyWalletRequest === undefined || supplyWalletRequest === null) {
        throw new Error("Missing the required parameter 'supplyWalletRequest' when calling derivePrivateKey");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeneralGeneratePrivateKeyResponse["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/private_key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Derive private key
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralGeneratePrivateKeyResponse}
     */

  }, {
    key: "derivePrivateKey",
    value: function derivePrivateKey(blockchain, supplyWalletRequest) {
      return this.derivePrivateKeyWithHttpInfo(blockchain, supplyWalletRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Derive wallet identifier
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-wallet-identifier\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletIdentifiers} and HTTP response
     */

  }, {
    key: "deriveWalletIdentifierWithHttpInfo",
    value: function deriveWalletIdentifierWithHttpInfo(blockchain, supplyWalletRequest) {
      var postBody = supplyWalletRequest; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deriveWalletIdentifier");
      } // verify the required parameter 'supplyWalletRequest' is set


      if (supplyWalletRequest === undefined || supplyWalletRequest === null) {
        throw new Error("Missing the required parameter 'supplyWalletRequest' when calling deriveWalletIdentifier");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WalletIdentifiers["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/identifier', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Derive wallet identifier
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/derive-wallet-identifier\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletIdentifiers}
     */

  }, {
    key: "deriveWalletIdentifier",
    value: function deriveWalletIdentifier(blockchain, supplyWalletRequest) {
      return this.deriveWalletIdentifierWithHttpInfo(blockchain, supplyWalletRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate private key
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralGeneratePrivateKeyResponse} and HTTP response
     */

  }, {
    key: "generatePrivateKeyWithHttpInfo",
    value: function generatePrivateKeyWithHttpInfo(blockchain) {
      var postBody = null; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generatePrivateKey");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GeneralGeneratePrivateKeyResponse["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/generate/private_key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate private key
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralGeneratePrivateKeyResponse}
     */

  }, {
    key: "generatePrivateKey",
    value: function generatePrivateKey(blockchain) {
      return this.generatePrivateKeyWithHttpInfo(blockchain).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate seed phrase
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateSeedPhraseRequest} opts.generateSeedPhraseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralSecretPhrase} and HTTP response
     */

  }, {
    key: "generateSeedPhraseWithHttpInfo",
    value: function generateSeedPhraseWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      var postBody = opts['generateSeedPhraseRequest']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generateSeedPhrase");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeneralSecretPhrase["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/generate/secret_recovery_phrase', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate seed phrase
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateSeedPhraseRequest} opts.generateSeedPhraseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralSecretPhrase}
     */

  }, {
    key: "generateSeedPhrase",
    value: function generateSeedPhrase(blockchain, opts) {
      return this.generateSeedPhraseWithHttpInfo(blockchain, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an airdrop
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralAirdropRequest} opts.generalAirdropRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralTransactionMadeResponse} and HTTP response
     */

  }, {
    key: "getAirdropWithHttpInfo",
    value: function getAirdropWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      var postBody = opts['generalAirdropRequest']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAirdrop");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeneralTransactionMadeResponse["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/airdrop', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an airdrop
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralAirdropRequest} opts.generalAirdropRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralTransactionMadeResponse}
     */

  }, {
    key: "getAirdrop",
    value: function getAirdrop(blockchain, opts) {
      return this.getAirdropWithHttpInfo(blockchain, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get wallet's balance of X
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralBalanceRequest} opts.generalBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralBalanceResponse} and HTTP response
     */

  }, {
    key: "getBalanceWithHttpInfo",
    value: function getBalanceWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      var postBody = opts['generalBalanceRequest']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBalance");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeneralBalanceResponse["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/balance', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get wallet's balance of X
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralBalanceRequest} opts.generalBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralBalanceResponse}
     */

  }, {
    key: "getBalance",
    value: function getBalance(blockchain, opts) {
      return this.getBalanceWithHttpInfo(blockchain, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Transfer crypto, a token, or an NFT to another wallet
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralTransferRequest} opts.generalTransferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralTransactionResponse} and HTTP response
     */

  }, {
    key: "transferWithHttpInfo",
    value: function transferWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      var postBody = opts['generalTransferRequest']; // verify the required parameter 'blockchain' is set

      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling transfer");
      }

      var pathParams = {
        'blockchain': blockchain
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeneralTransactionResponse["default"];
      return this.apiClient.callApi('/{blockchain}/wallet/transfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Transfer crypto, a token, or an NFT to another wallet
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/wallet/transfer-crypto-token-or-nft\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralTransferRequest} opts.generalTransferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralTransactionResponse}
     */

  }, {
    key: "transfer",
    value: function transfer(blockchain, opts) {
      return this.transferWithHttpInfo(blockchain, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WalletApi;
}();

exports["default"] = WalletApi;