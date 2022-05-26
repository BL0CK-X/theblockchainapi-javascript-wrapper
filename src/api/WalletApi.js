/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/_BlockX_\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 100 free credits. Each user can call endpoints that cost 0 credits up to 50 requests/min before being rate-limited.</b> Thereafter, they can upgrade to have a higher rate limit. The purpose of this is to act like a free trial -- not to function like a freemium model where one can stay on the free tier indefinitely.  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-csharp-wrapper\" target = \"_blank\">C#</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-dart-wrapper\" target = \"_blank\">Dart</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
 *
 * The version of the OpenAPI document: null
 * Contact: info@blockchainapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GeneralAirdropRequest from '../model/GeneralAirdropRequest';
import GeneralBalanceRequest from '../model/GeneralBalanceRequest';
import GeneralBalanceResponse from '../model/GeneralBalanceResponse';
import GeneralGeneratePrivateKeyResponse from '../model/GeneralGeneratePrivateKeyResponse';
import GeneralSecretPhrase from '../model/GeneralSecretPhrase';
import GeneralTransactionMadeResponse from '../model/GeneralTransactionMadeResponse';
import GeneralTransactionResponse from '../model/GeneralTransactionResponse';
import GeneralTransferRequest from '../model/GeneralTransferRequest';
import GenerateSeedPhraseRequest from '../model/GenerateSeedPhraseRequest';
import SupplyWalletRequest from '../model/SupplyWalletRequest';
import WalletIdentifiers from '../model/WalletIdentifiers';

/**
* Wallet service.
* @module api/WalletApi
* @version 1.0.9
*/
export default class WalletApi {

    /**
    * Constructs a new WalletApi. 
    * @alias module:api/WalletApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Derive private key
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralGeneratePrivateKeyResponse} and HTTP response
     */
    derivePrivateKeyWithHttpInfo(blockchain, supplyWalletRequest) {
      let postBody = supplyWalletRequest;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling derivePrivateKey");
      }
      // verify the required parameter 'supplyWalletRequest' is set
      if (supplyWalletRequest === undefined || supplyWalletRequest === null) {
        throw new Error("Missing the required parameter 'supplyWalletRequest' when calling derivePrivateKey");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GeneralGeneratePrivateKeyResponse;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/private_key', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Derive private key
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralGeneratePrivateKeyResponse}
     */
    derivePrivateKey(blockchain, supplyWalletRequest) {
      return this.derivePrivateKeyWithHttpInfo(blockchain, supplyWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Derive wallet identifier
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WalletIdentifiers} and HTTP response
     */
    deriveWalletIdentifierWithHttpInfo(blockchain, supplyWalletRequest) {
      let postBody = supplyWalletRequest;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling deriveWalletIdentifier");
      }
      // verify the required parameter 'supplyWalletRequest' is set
      if (supplyWalletRequest === undefined || supplyWalletRequest === null) {
        throw new Error("Missing the required parameter 'supplyWalletRequest' when calling deriveWalletIdentifier");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WalletIdentifiers;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/identifier', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Derive wallet identifier
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Derive the identifier for a wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {module:model/SupplyWalletRequest} supplyWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WalletIdentifiers}
     */
    deriveWalletIdentifier(blockchain, supplyWalletRequest) {
      return this.deriveWalletIdentifierWithHttpInfo(blockchain, supplyWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate private key
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralGeneratePrivateKeyResponse} and HTTP response
     */
    generatePrivateKeyWithHttpInfo(blockchain) {
      let postBody = null;
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generatePrivateKey");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GeneralGeneratePrivateKeyResponse;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/generate/private_key', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate private key
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Use this endpoint to securely and randomly generate a private key for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralGeneratePrivateKeyResponse}
     */
    generatePrivateKey(blockchain) {
      return this.generatePrivateKeyWithHttpInfo(blockchain)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Generate seed phrase
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateSeedPhraseRequest} opts.generateSeedPhraseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralSecretPhrase} and HTTP response
     */
    generateSeedPhraseWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      let postBody = opts['generateSeedPhraseRequest'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling generateSeedPhrase");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GeneralSecretPhrase;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/generate/secret_recovery_phrase', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate seed phrase
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [COMING SOON]</a>.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GenerateSeedPhraseRequest} opts.generateSeedPhraseRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralSecretPhrase}
     */
    generateSeedPhrase(blockchain, opts) {
      return this.generateSeedPhraseWithHttpInfo(blockchain, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an airdrop
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralAirdropRequest} opts.generalAirdropRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralTransactionMadeResponse} and HTTP response
     */
    getAirdropWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      let postBody = opts['generalAirdropRequest'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getAirdrop");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GeneralTransactionMadeResponse;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/airdrop', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an airdrop
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming Soon]</a>.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralAirdropRequest} opts.generalAirdropRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralTransactionMadeResponse}
     */
    getAirdrop(blockchain, opts) {
      return this.getAirdropWithHttpInfo(blockchain, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get wallet's balance of X
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming soon]</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralBalanceRequest} opts.generalBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralBalanceResponse} and HTTP response
     */
    getBalanceWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      let postBody = opts['generalBalanceRequest'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling getBalance");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GeneralBalanceResponse;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/balance', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get wallet's balance of X
     * <a href=\"\" target=\"_blank\">See examples (Python, JavaScript) [Coming soon]</a>.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the `token_blockchain_identifier` of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the `token_blockchain_identifier` of the NFT. A balance of \"1\" means the person owns the NFT, and a balance of \"0\" means the person does not own the NFT.  `Cost: 0.25 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralBalanceRequest} opts.generalBalanceRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralBalanceResponse}
     */
    getBalance(blockchain, opts) {
      return this.getBalanceWithHttpInfo(blockchain, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transfer crypto, a token, or an NFT to another wallet
     * <a href=\"\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript) [Coming Soon]</a>.  <a href=\"\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript) [Coming Soon]</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralTransferRequest} opts.generalTransferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GeneralTransactionResponse} and HTTP response
     */
    transferWithHttpInfo(blockchain, opts) {
      opts = opts || {};
      let postBody = opts['generalTransferRequest'];
      // verify the required parameter 'blockchain' is set
      if (blockchain === undefined || blockchain === null) {
        throw new Error("Missing the required parameter 'blockchain' when calling transfer");
      }

      let pathParams = {
        'blockchain': blockchain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GeneralTransactionResponse;
      return this.apiClient.callApi(
        '/{blockchain}/wallet/transfer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Transfer crypto, a token, or an NFT to another wallet
     * <a href=\"\" target=\"_blank\">See transfer ETH/SOL/crypto example (Python, JavaScript) [Coming Soon]</a>.  <a href=\"\" target=\"_blank\">See transfer NFT/token example (Python, JavaScript) [Coming Soon]</a>.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you're transferring an NFT or a token, supply its respective `token_blockchain_identifier`.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If `return_compiled_transaction = false`, we sign and submit the transaction (`wallet` is required in this case; do not provide a value for `sender_blockchain_identifier`). If `return_compiled_transaction = true`, we compile the transaction (`sender_blockchain_identifier` is required in this case; do not provide `wallet`).  RECIPIENT: `recipient_blockchain_identifier` identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to `wallet` (or `sender_blockchain_identifier`). To set a different fee payer, provide a value for `fee_payer_wallet`.  `Cost: 2 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} blockchain The blockchain you want to use 
     * @param {Object} opts Optional parameters
     * @param {module:model/GeneralTransferRequest} opts.generalTransferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GeneralTransactionResponse}
     */
    transfer(blockchain, opts) {
      return this.transferWithHttpInfo(blockchain, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
