"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ATAResponse = _interopRequireDefault(require("../model/ATAResponse"));

var _AirdropRequest = _interopRequireDefault(require("../model/AirdropRequest"));

var _BalanceRequest = _interopRequireDefault(require("../model/BalanceRequest"));

var _BalanceResponse = _interopRequireDefault(require("../model/BalanceResponse"));

var _DoubleTransferResponse = _interopRequireDefault(require("../model/DoubleTransferResponse"));

var _GeneratePrivateKey = _interopRequireDefault(require("../model/GeneratePrivateKey"));

var _GetPublicKeyRequest = _interopRequireDefault(require("../model/GetPublicKeyRequest"));

var _ListNFTsResponse = _interopRequireDefault(require("../model/ListNFTsResponse"));

var _PublicKey = _interopRequireDefault(require("../model/PublicKey"));

var _SecretPhrase = _interopRequireDefault(require("../model/SecretPhrase"));

var _TransferRequest = _interopRequireDefault(require("../model/TransferRequest"));

var _TransferResponse = _interopRequireDefault(require("../model/TransferResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SolanaWallet service.
* @module api/SolanaWalletApi
* @version 1.0.9
*/
var SolanaWalletApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SolanaWalletApi. 
  * @alias module:api/SolanaWalletApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SolanaWalletApi(apiClient) {
    _classCallCheck(this, SolanaWalletApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Derive an associated token account address
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} publicKey The public key of the wallet
   * @param {String} mintAddress The mint address of the token (either SPL or NFT)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ATAResponse} and HTTP response
   */


  _createClass(SolanaWalletApi, [{
    key: "solanaDeriveAssociatedTokenAccountAddressWithHttpInfo",
    value: function solanaDeriveAssociatedTokenAccountAddressWithHttpInfo(publicKey, mintAddress) {
      var postBody = null; // verify the required parameter 'publicKey' is set

      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaDeriveAssociatedTokenAccountAddress");
      } // verify the required parameter 'mintAddress' is set


      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaDeriveAssociatedTokenAccountAddress");
      }

      var pathParams = {
        'public_key': publicKey,
        'mint_address': mintAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ATAResponse["default"];
      return this.apiClient.callApi('/solana/wallet/{public_key}/associated_token_account/{mint_address}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Derive an associated token account address
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-associated-token-account-address\" target=\"_blank\">See example (Python, JavaScript)</a>.      *Each wallet can own tokens, but in Solana, each token is actually held by an <a href=\"https://spl.solana.com/associated-token-account\" target=\"_blank\">associated token account</a> (ATA), which is an account specific for a token owned by the wallet. When you transfer an SPL token, such as Serum, or transfer an NFT, you're transfering from an ATA you own to another person's ATA for that specific token. With this endpoint, you can derive an associated token address given a wallet and a token address.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} publicKey The public key of the wallet
     * @param {String} mintAddress The mint address of the token (either SPL or NFT)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ATAResponse}
     */

  }, {
    key: "solanaDeriveAssociatedTokenAccountAddress",
    value: function solanaDeriveAssociatedTokenAccountAddress(publicKey, mintAddress) {
      return this.solanaDeriveAssociatedTokenAccountAddressWithHttpInfo(publicKey, mintAddress).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Derive private key
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a private key array and a base58-encoded private key given wallet authentication.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/GetPublicKeyRequest} getPublicKeyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneratePrivateKey} and HTTP response
     */

  }, {
    key: "solanaDerivePrivateKeyWithHttpInfo",
    value: function solanaDerivePrivateKeyWithHttpInfo(getPublicKeyRequest) {
      var postBody = getPublicKeyRequest; // verify the required parameter 'getPublicKeyRequest' is set

      if (getPublicKeyRequest === undefined || getPublicKeyRequest === null) {
        throw new Error("Missing the required parameter 'getPublicKeyRequest' when calling solanaDerivePrivateKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GeneratePrivateKey["default"];
      return this.apiClient.callApi('/solana/wallet/private_key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Derive private key
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a private key array and a base58-encoded private key given wallet authentication.  A wallet is defined by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path. Thus, with a single secret recovery phrase, you can generate many public keys. If you are just starting, just supply the secret recovery phrase you generated with the Solana Wallet Secret Recovery Phrase endpoint.*  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/GetPublicKeyRequest} getPublicKeyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneratePrivateKey}
     */

  }, {
    key: "solanaDerivePrivateKey",
    value: function solanaDerivePrivateKey(getPublicKeyRequest) {
      return this.solanaDerivePrivateKeyWithHttpInfo(getPublicKeyRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Derive public key
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given wallet authentication.  A wallet is identified by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.   It can also be derived from a private key.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path; or from a private key. Thus, with a single secret recovery phrase, you can generate many public keys; however, with a private key, you can only generate one public key. If you are just starting, generate a <a href=\"#operation/solanaGenerateSecretRecoveryPhrase\">secret recovery phrase</a> or <a href=\"#operation/solanaGeneratePrivateKey\">private key</a>.  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase; or just use the private key. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/GetPublicKeyRequest} getPublicKeyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicKey} and HTTP response
     */

  }, {
    key: "solanaDerivePublicKeyWithHttpInfo",
    value: function solanaDerivePublicKeyWithHttpInfo(getPublicKeyRequest) {
      var postBody = getPublicKeyRequest; // verify the required parameter 'getPublicKeyRequest' is set

      if (getPublicKeyRequest === undefined || getPublicKeyRequest === null) {
        throw new Error("Missing the required parameter 'getPublicKeyRequest' when calling solanaDerivePublicKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PublicKey["default"];
      return this.apiClient.callApi('/solana/wallet/public_key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Derive public key
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/derive-public-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Returns a public key given wallet authentication.  A wallet is identified by a public key. A public key is derived from a combination of seed phrase, derivation path, and passphrase. Changing any *one* of these three will change the public key output.   It can also be derived from a private key.  *You can generate a unique public key with each combination of secret recovery phrase, passphrase, and derivation path; or from a private key. Thus, with a single secret recovery phrase, you can generate many public keys; however, with a private key, you can only generate one public key. If you are just starting, generate a <a href=\"#operation/solanaGenerateSecretRecoveryPhrase\">secret recovery phrase</a> or <a href=\"#operation/solanaGeneratePrivateKey\">private key</a>.  *If you are trying to get a public key that already exists (e.g., created in the Phantom wallet), make sure you use the correct derivation path and passphrase; or just use the private key. To read more about that, see the descriptions of those parameters below.*  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/GetPublicKeyRequest} getPublicKeyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicKey}
     */

  }, {
    key: "solanaDerivePublicKey",
    value: function solanaDerivePublicKey(getPublicKeyRequest) {
      return this.solanaDerivePublicKeyWithHttpInfo(getPublicKeyRequest).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate private key
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a Solana wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneratePrivateKey} and HTTP response
     */

  }, {
    key: "solanaGeneratePrivateKeyWithHttpInfo",
    value: function solanaGeneratePrivateKeyWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GeneratePrivateKey["default"];
      return this.apiClient.callApi('/solana/wallet/generate/private_key', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate private key
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-private-key\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a private key for a Solana wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneratePrivateKey}
     */

  }, {
    key: "solanaGeneratePrivateKey",
    value: function solanaGeneratePrivateKey() {
      return this.solanaGeneratePrivateKeyWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate secret phrase
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SecretPhrase} and HTTP response
     */

  }, {
    key: "solanaGenerateSecretRecoveryPhraseWithHttpInfo",
    value: function solanaGenerateSecretRecoveryPhraseWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SecretPhrase["default"];
      return this.apiClient.callApi('/solana/wallet/generate/secret_recovery_phrase', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate secret phrase
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/generate-secret-phrase\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to securely and randomly generate a secret recovery phrase for a Solana wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SecretPhrase}
     */

  }, {
    key: "solanaGenerateSecretRecoveryPhrase",
    value: function solanaGenerateSecretRecoveryPhrase() {
      return this.solanaGenerateSecretRecoveryPhraseWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get an airdrop on devnet
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/AirdropRequest} opts.airdropRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransferResponse} and HTTP response
     */

  }, {
    key: "solanaGetAirdropWithHttpInfo",
    value: function solanaGetAirdropWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['airdropRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TransferResponse["default"];
      return this.apiClient.callApi('/solana/wallet/airdrop', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get an airdrop on devnet
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-airdrop\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015,  which is the minimum amount of SOL you need to mint a Metaplex NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/AirdropRequest} opts.airdropRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransferResponse}
     */

  }, {
    key: "solanaGetAirdrop",
    value: function solanaGetAirdrop(opts) {
      return this.solanaGetAirdropWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get wallet's balance in SOL or any SPL
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in SOL or any SPL token.  To get the balance of an SPL token, supply the `mint_address` of the SPL token. The list of SPL tokens can be viewed <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `mint_address` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT. This works in most cases, but we are aware of one edge case where a balance of \"0\" will show up for a person who is actually the owner of the NFT. We just recommend using the <a href=\"#operation/solanaGetNFTOwner\">getNFTOwner</a> endpoint and comparing that output to the expected address.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/BalanceRequest} opts.balanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BalanceResponse} and HTTP response
     */

  }, {
    key: "solanaGetBalanceWithHttpInfo",
    value: function solanaGetBalanceWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['balanceRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BalanceResponse["default"];
      return this.apiClient.callApi('/solana/wallet/balance', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get wallet's balance in SOL or any SPL
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-balance\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the balance of a wallet in SOL or any SPL token.  To get the balance of an SPL token, supply the `mint_address` of the SPL token. The list of SPL tokens can be viewed <a href=\"https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json\" target=\"_blank\">here</a>.  You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `mint_address` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT. This works in most cases, but we are aware of one edge case where a balance of \"0\" will show up for a person who is actually the owner of the NFT. We just recommend using the <a href=\"#operation/solanaGetNFTOwner\">getNFTOwner</a> endpoint and comparing that output to the expected address.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/BalanceRequest} opts.balanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BalanceResponse}
     */

  }, {
    key: "solanaGetBalance",
    value: function solanaGetBalance(opts) {
      return this.solanaGetBalanceWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get address's NFTs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account whose list of owned NFTs you want to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListNFTsResponse} and HTTP response
     */

  }, {
    key: "solanaGetNFTsBelongingToWalletWithHttpInfo",
    value: function solanaGetNFTsBelongingToWalletWithHttpInfo(network, publicKey) {
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetNFTsBelongingToWallet");
      } // verify the required parameter 'publicKey' is set


      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaGetNFTsBelongingToWallet");
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
      var returnType = _ListNFTsResponse["default"];
      return this.apiClient.callApi('/solana/wallet/{network}/{public_key}/nfts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get address's NFTs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-nfts\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the NFTs that belong to a given public key address  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account whose list of owned NFTs you want to get
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListNFTsResponse}
     */

  }, {
    key: "solanaGetNFTsBelongingToWallet",
    value: function solanaGetNFTsBelongingToWallet(network, publicKey) {
      return this.solanaGetNFTsBelongingToWalletWithHttpInfo(network, publicKey).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get address's tokens and respective balances
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-token-holdings\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the token holdings of a given public key address  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account whose list of owned NFTs you want to get
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeNfts Whether or not to include NFTs in the response (default to false)
     * @param {Boolean} opts.includeZeroBalanceHoldings Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<Object>} and HTTP response
     */

  }, {
    key: "solanaGetTokensBelongingToWalletWithHttpInfo",
    value: function solanaGetTokensBelongingToWalletWithHttpInfo(network, publicKey, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'network' is set

      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetTokensBelongingToWallet");
      } // verify the required parameter 'publicKey' is set


      if (publicKey === undefined || publicKey === null) {
        throw new Error("Missing the required parameter 'publicKey' when calling solanaGetTokensBelongingToWallet");
      }

      var pathParams = {
        'network': network,
        'public_key': publicKey
      };
      var queryParams = {
        'include_nfts': opts['includeNfts'],
        'include_zero_balance_holdings': opts['includeZeroBalanceHoldings']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];
      return this.apiClient.callApi('/solana/wallet/{network}/{public_key}/tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get address's tokens and respective balances
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/get-wallet-token-holdings\" target=\"_blank\">See examples (Python, JavaScript)</a>.      See the token holdings of a given public key address  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} publicKey The public key of the account whose list of owned NFTs you want to get
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeNfts Whether or not to include NFTs in the response (default to false)
     * @param {Boolean} opts.includeZeroBalanceHoldings Whether or not to include holdings that have zero balance. This indicates that the wallet held this token or NFT in the past, but no longer holds it. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<Object>}
     */

  }, {
    key: "solanaGetTokensBelongingToWallet",
    value: function solanaGetTokensBelongingToWallet(network, publicKey, opts) {
      return this.solanaGetTokensBelongingToWalletWithHttpInfo(network, publicKey, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Transfer SOL, a token, or an NFT to another address
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it. This function can send SOL, send an SPL token, or send an NFT. You can set the fee payer of the transaction; you can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom; no private keys required in this case).  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_public_key`). If `return_compiled_transaction = true`, we compile the transaction (one of `wallet` or `sender_public_key` is required in this case; do not provide both).  RECIPIENT: `recipient_address` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction.  FEE_PAYER: The fee payer of the transaction defaults to `wallet` (or `sender_public_key`). To set a different fee payer, provide a value for `fee_payer_wallet`.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/TransferRequest} opts.transferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DoubleTransferResponse} and HTTP response
     */

  }, {
    key: "solanaTransferWithHttpInfo",
    value: function solanaTransferWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['transferRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _DoubleTransferResponse["default"];
      return this.apiClient.callApi('/solana/wallet/transfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Transfer SOL, a token, or an NFT to another address
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-sol\" target=\"_blank\">See transfer SOL example (Python, JavaScript)</a>.  <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-wallet/transfer-nft\" target=\"_blank\">See transfer NFT example (can also be used for SPL token) (Python, JavaScript)</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it. This function can send SOL, send an SPL token, or send an NFT. You can set the fee payer of the transaction; you can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom; no private keys required in this case).  Transfer SOL, a token or an NFT to another address. If you're transferring an NFT, supply the `mint` (the address of the mint) for the `token_address`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_public_key`). If `return_compiled_transaction = true`, we compile the transaction (one of `wallet` or `sender_public_key` is required in this case; do not provide both).  RECIPIENT: `recipient_address` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction.  FEE_PAYER: The fee payer of the transaction defaults to `wallet` (or `sender_public_key`). To set a different fee payer, provide a value for `fee_payer_wallet`.  If you're transfering a token, supply the token address found on the explorer (e.g., see `SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt` for <a href=\"https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\" target=\"_blank\">Serum Token</a>) for the `token_address`. If you're transferring SOL, do not supply a value for `token_address`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/TransferRequest} opts.transferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DoubleTransferResponse}
     */

  }, {
    key: "solanaTransfer",
    value: function solanaTransfer(opts) {
      return this.solanaTransferWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SolanaWalletApi;
}();

exports["default"] = SolanaWalletApi;