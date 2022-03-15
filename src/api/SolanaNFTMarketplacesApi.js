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
import BuyRequest from '../model/BuyRequest';
import BuyResponse from '../model/BuyResponse';
import DelistRequest from '../model/DelistRequest';
import DelistResponse from '../model/DelistResponse';
import GetNFTListingResponse from '../model/GetNFTListingResponse';
import ListRequest from '../model/ListRequest';
import ListResponse from '../model/ListResponse';
import NFTAnalyticsRequest from '../model/NFTAnalyticsRequest';
import NFTAnalyticsResponse from '../model/NFTAnalyticsResponse';
import NFTTransaction from '../model/NFTTransaction';

/**
* SolanaNFTMarketplaces service.
* @module api/SolanaNFTMarketplacesApi
* @version 1.0.9
*/
export default class SolanaNFTMarketplacesApi {

    /**
    * Constructs a new SolanaNFTMarketplacesApi. 
    * @alias module:api/SolanaNFTMarketplacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Buy
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Edennpm  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/BuyRequest} opts.buyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BuyResponse} and HTTP response
     */
    solanaBuyNFTWithHttpInfo(network, exchange, mintAddress, opts) {
      opts = opts || {};
      let postBody = opts['buyRequest'];
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaBuyNFT");
      }
      // verify the required parameter 'exchange' is set
      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling solanaBuyNFT");
      }
      // verify the required parameter 'mintAddress' is set
      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaBuyNFT");
      }

      let pathParams = {
        'network': network,
        'exchange': exchange,
        'mint_address': mintAddress
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
      let returnType = BuyResponse;
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Buy
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Edennpm  `Cost: 25 Credits`, `Cost: 3 Credits on Devnet` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {module:model/String} exchange The NFT exchange to interact with
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @param {Object} opts Optional parameters
     * @param {module:model/BuyRequest} opts.buyRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BuyResponse}
     */
    solanaBuyNFT(network, exchange, mintAddress, opts) {
      return this.solanaBuyNFTWithHttpInfo(network, exchange, mintAddress, opts)
        .then(function(response_and_data) {
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
    solanaDelistNFTWithHttpInfo(network, exchange, mintAddress, opts) {
      opts = opts || {};
      let postBody = opts['delistRequest'];
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaDelistNFT");
      }
      // verify the required parameter 'exchange' is set
      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling solanaDelistNFT");
      }
      // verify the required parameter 'mintAddress' is set
      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaDelistNFT");
      }

      let pathParams = {
        'network': network,
        'exchange': exchange,
        'mint_address': mintAddress
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
      let returnType = DelistResponse;
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    solanaDelistNFT(network, exchange, mintAddress, opts) {
      return this.solanaDelistNFTWithHttpInfo(network, exchange, mintAddress, opts)
        .then(function(response_and_data) {
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
    solanaGetNFTListingWithHttpInfo(network, mintAddress) {
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetNFTListing");
      }
      // verify the required parameter 'mintAddress' is set
      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaGetNFTListing");
      }

      let pathParams = {
        'network': network,
        'mint_address': mintAddress
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
      let returnType = GetNFTListingResponse;
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/listing/{network}/{mint_address}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get NFT Listing
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 1 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/String} network The network ID
     * @param {String} mintAddress The mint address of the NFT you want to buy
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetNFTListingResponse}
     */
    solanaGetNFTListing(network, mintAddress) {
      return this.solanaGetNFTListingWithHttpInfo(network, mintAddress)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get NFT Analytics
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/analytics\" target=\"_blank\">See examples (Python, JavaScript)</a>.  A collection is a list of NFTs.  Any collection can thus be defined as a list of mint addresses.  This endpoint takes in a list of mint addresses (effectively, a collection), a start time (optional), and an end time (optional) and outputs the floor for that period, the volume for that period, and the transaction history for each NFT in the list (buy, list, delist, update price) for that period.  We are currently compiling a dictionary of collection names to list of mint addresses for public use. Please contribute <a href=\"https://github.com/BL0CK-X/solana-nft-collection-mint-addresses\" target=\"_blank\">here</a>.  Currently scans the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 15 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/NFTAnalyticsRequest} opts.nFTAnalyticsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NFTAnalyticsResponse} and HTTP response
     */
    solanaGetNFTMarketplaceAnalyticsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['nFTAnalyticsRequest'];

      let pathParams = {
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
      let returnType = NFTAnalyticsResponse;
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/analytics', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get NFT Analytics
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/analytics\" target=\"_blank\">See examples (Python, JavaScript)</a>.  A collection is a list of NFTs.  Any collection can thus be defined as a list of mint addresses.  This endpoint takes in a list of mint addresses (effectively, a collection), a start time (optional), and an end time (optional) and outputs the floor for that period, the volume for that period, and the transaction history for each NFT in the list (buy, list, delist, update price) for that period.  We are currently compiling a dictionary of collection names to list of mint addresses for public use. Please contribute <a href=\"https://github.com/BL0CK-X/solana-nft-collection-mint-addresses\" target=\"_blank\">here</a>.  Currently scans the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 15 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/NFTAnalyticsRequest} opts.nFTAnalyticsRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NFTAnalyticsResponse}
     */
    solanaGetNFTMarketplaceAnalytics(opts) {
      return this.solanaGetNFTMarketplaceAnalyticsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Marketplace Market Share
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/market-share\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 3 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    solanaGetNFTMarketplaceMarketShareWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/analytics/market_share', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Marketplace Market Share
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/market-share\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 3 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    solanaGetNFTMarketplaceMarketShare() {
      return this.solanaGetNFTMarketplaceMarketShareWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Recent NFT Transactions
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/recent-transactions\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get all NFT transactions across all major marketplaces in the last 30 minutes.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 15 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NFTTransaction>} and HTTP response
     */
    solanaGetNFTMarketplaceRecentTransactionsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
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
      let returnType = [NFTTransaction];
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/analytics/recent_transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Recent NFT Transactions
     * <a href=\"https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/recent-transactions\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Get all NFT transactions across all major marketplaces in the last 30 minutes.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  `Cost: 15 Credits`, (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NFTTransaction>}
     */
    solanaGetNFTMarketplaceRecentTransactions() {
      return this.solanaGetNFTMarketplaceRecentTransactionsWithHttpInfo()
        .then(function(response_and_data) {
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
    solanaListNFTWithHttpInfo(network, exchange, mintAddress, opts) {
      opts = opts || {};
      let postBody = opts['listRequest'];
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaListNFT");
      }
      // verify the required parameter 'exchange' is set
      if (exchange === undefined || exchange === null) {
        throw new Error("Missing the required parameter 'exchange' when calling solanaListNFT");
      }
      // verify the required parameter 'mintAddress' is set
      if (mintAddress === undefined || mintAddress === null) {
        throw new Error("Missing the required parameter 'mintAddress' when calling solanaListNFT");
      }

      let pathParams = {
        'network': network,
        'exchange': exchange,
        'mint_address': mintAddress
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
      let returnType = ListResponse;
      return this.apiClient.callApi(
        '/solana/nft/marketplaces/{exchange}/list/{network}/{mint_address}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    solanaListNFT(network, exchange, mintAddress, opts) {
      return this.solanaListNFTWithHttpInfo(network, exchange, mintAddress, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
