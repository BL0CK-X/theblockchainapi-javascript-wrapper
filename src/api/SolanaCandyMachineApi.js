/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/_BlockX_\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 500 free credits.</b>  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
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
import CandyMachineSearchRequest from '../model/CandyMachineSearchRequest';
import CreateTestCandyMachineRequest from '../model/CreateTestCandyMachineRequest';
import CreateTestCandyMachineResponse from '../model/CreateTestCandyMachineResponse';
import GetAllNFTsResponse from '../model/GetAllNFTsResponse';
import GetCandyMetadataErrorResponse from '../model/GetCandyMetadataErrorResponse';
import GetCandyMetadataRequest from '../model/GetCandyMetadataRequest';
import GetCandyMetadataResponse from '../model/GetCandyMetadataResponse';
import MintNFTErrorResponse from '../model/MintNFTErrorResponse';
import MintNFTRequest from '../model/MintNFTRequest';
import MintNFTResponse from '../model/MintNFTResponse';

/**
* SolanaCandyMachine service.
* @module api/SolanaCandyMachineApi
* @version 1.0.9
*/
export default class SolanaCandyMachineApi {

    /**
    * Constructs a new SolanaCandyMachineApi. 
    * @alias module:api/SolanaCandyMachineApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a test CM
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestCandyMachineRequest} opts.createTestCandyMachineRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateTestCandyMachineResponse} and HTTP response
     */
    solanaCreateTestCandyMachineWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['createTestCandyMachineRequest'];

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
      let returnType = CreateTestCandyMachineResponse;
      return this.apiClient.callApi(
        '/solana/nft/candy_machine', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a test CM
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.   Use this endpoint to create a test candy machine so that you can test your minting bot.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestCandyMachineRequest} opts.createTestCandyMachineRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateTestCandyMachineResponse}
     */
    solanaCreateTestCandyMachine(opts) {
      return this.solanaCreateTestCandyMachineWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get CM's NFTs  
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} candyMachineId The ID of the candy machine
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetAllNFTsResponse} and HTTP response
     */
    solanaGetAllNFTsFromCandyMachineWithHttpInfo(network, candyMachineId) {
      let postBody = null;
      // verify the required parameter 'network' is set
      if (network === undefined || network === null) {
        throw new Error("Missing the required parameter 'network' when calling solanaGetAllNFTsFromCandyMachine");
      }
      // verify the required parameter 'candyMachineId' is set
      if (candyMachineId === undefined || candyMachineId === null) {
        throw new Error("Missing the required parameter 'candyMachineId' when calling solanaGetAllNFTsFromCandyMachine");
      }

      let pathParams = {
        'network': network,
        'candy_machine_id': candyMachineId
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
      let returnType = GetAllNFTsResponse;
      return this.apiClient.callApi(
        '/solana/nft/candy_machine/{network}/{candy_machine_id}/nfts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get CM's NFTs  
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\" target=\"_blank\"> See examples (Python, JavaScript)</a>.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  This works for `v1` and `v2` candy machines.   *However*, for `v2` only the value for `all_nfts` is provided. To determine which are minted and unminted follow this example.  You do not need to specify `v1` or `v2` for this endpoint as it will automatically determine it from the candy machine ID.  See example for how to get the list of NFT hashes <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\" target=\"_blank\">here</a>.    `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} network The network ID (devnet, mainnet-beta)
     * @param {String} candyMachineId The ID of the candy machine
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetAllNFTsResponse}
     */
    solanaGetAllNFTsFromCandyMachine(network, candyMachineId) {
      return this.solanaGetAllNFTsFromCandyMachineWithHttpInfo(network, candyMachineId)
        .then(function(response_and_data) {
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
    solanaGetCandyMachineMetadataWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['getCandyMetadataRequest'];

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
      let returnType = GetCandyMetadataResponse;
      return this.apiClient.callApi(
        '/solana/nft/candy_machine/metadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a CM's metadata 
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-metadata\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to get metadata about a Metaplex candy machine. This includes the goLiveDate, itemsAvailable, and itemsRedeemed. To see what is included, expand the green successful response below.  NOTE: Supply exactly one of `candy_machine_id`, `config_address`, or `uuid`. If you provide more than one, you will receive a `400` error.   `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCandyMetadataRequest} opts.getCandyMetadataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetCandyMetadataResponse}
     */
    solanaGetCandyMachineMetadata(opts) {
      return this.solanaGetCandyMachineMetadataWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    solanaListAllCandyMachinesWithHttpInfo() {
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
        '/solana/nft/candy_machine/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/list-all-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can list all candy machines published to Solana mainnet.  We update this data every 15 minutes.  The output is a list of config addresses, currently about 17000 in length.  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    solanaListAllCandyMachines() {
      return this.solanaListAllCandyMachinesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Mint from a CM
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.  `Cost: 8 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/MintNFTRequest} opts.mintNFTRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MintNFTResponse} and HTTP response
     */
    solanaMintFromCandyMachineWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['mintNFTRequest'];

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
      let returnType = MintNFTResponse;
      return this.apiClient.callApi(
        '/solana/nft/candy_machine/mint', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Mint from a CM
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  This only works for `v1` and `v2` candy machines, and does not work for candy machines of any other type such as Magic Eden candy machines.  In order to achieve speed, this endpoint sends the transaction without checking whether or not it confirmed. It could still fail, for example, because the candy machine ran out of available mints. You should check the status of the transaction using our <a href=\"#operation/solanaGetTransaction\">getTransaction</a> endpoint. <a href=\"https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d\" target=\"_blank\">Here's an example</a> of how to do this.  Mint transactions for candy machines that have capatcha/Civic enabled will fail. There is a gatekeeper functionality where you must manually verify through Civic and captcha in order to mint from a candy machine. In this functionality, Civic signs the transaction. Therefore, if the gatekeeper functionality is enabled, our “Mint from candy machine” endpoint will fail because it is missing a signer. If it is not enabled, then our “Mint from candy machine” endpoint will succeed. One caveat is the attribute “expireOnUse”. If this is True, then you have to solve a captcha each time. In this case, the “Mint from candy machine” endpoint will fail. If this is False, then your first verification is sufficient for further mints. In which case, after verifying manually the first time, you can use our endpoint thereafter.   You can check if the gatekeeper functionality is enabled with this <a href=\"#operation/solanaGetCandyMachineMetadata\">endpoint</a>.  `Cost: 8 Credits`, Limited to $29/mo plans and above. (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/MintNFTRequest} opts.mintNFTRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MintNFTResponse}
     */
    solanaMintFromCandyMachine(opts) {
      return this.solanaMintFromCandyMachineWithHttpInfo(opts)
        .then(function(response_and_data) {
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
    solanaSearchCandyMachinesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['candyMachineSearchRequest'];

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
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/solana/nft/candy_machine/search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search CMs
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/search-candy-machines\" target=\"_blank\">See examples (Python, JavaScript)</a>.  With this endpoint, you can search candy machines by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of config addresses.  You can also provide multiple search clauses, such as the update authority (`update_authority=\"G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\"`) and symbol begins with \"Sol\" (`symbol=\"Sol\", symbol_search_method='begins_with'`).  `Cost: 2 Credits` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CandyMachineSearchRequest} opts.candyMachineSearchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    solanaSearchCandyMachines(opts) {
      return this.solanaSearchCandyMachinesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
