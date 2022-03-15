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
import Endpoint from '../model/Endpoint';
import EndpointReference from '../model/EndpointReference';

/**
* Endpoint service.
* @module api/EndpointApi
* @version 1.0.9
*/
export default class EndpointApi {

    /**
    * Constructs a new EndpointApi. 
    * @alias module:api/EndpointApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes an endpoint from a project. This endpoint removes the endpoint from the project's documentation. However, this does un-deploy the endpoint. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteEndpointWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['endpointReference'];

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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/endpoint/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes an endpoint from a project. This endpoint removes the endpoint from the project's documentation. However, this does un-deploy the endpoint. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteEndpoint(opts) {
      return this.deleteEndpointWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get an endpoint's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get an endpoint's metadata from a project.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Endpoint} and HTTP response
     */
    getEndpointWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['endpointReference'];

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
      let returnType = Endpoint;
      return this.apiClient.callApi(
        '/endpoint/metadata', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get an endpoint's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get an endpoint's metadata from a project.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/EndpointReference} opts.endpointReference 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Endpoint}
     */
    getEndpoint(opts) {
      return this.getEndpointWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all endpoints 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all endpoints that you have added under your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Endpoint>} and HTTP response
     */
    listEndpointsWithHttpInfo() {
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
      let returnType = [Endpoint];
      return this.apiClient.callApi(
        '/endpoint/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all endpoints 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all endpoints that you have added under your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Endpoint>}
     */
    listEndpoints() {
      return this.listEndpointsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create / update an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create or update an `endpoint` for a `project`.   An `endpoint` is a function that is a part of a mini-API `project`.  This endpoint adds the `endpoint` to the `project`'s documentation. However, this does not deploy the `endpoint`. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  All attributes except `group_name` are required if **creating** an `endpoint`.  Only `path`, `project_id`, and `version` are required if **updating** an `endpoint`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/Endpoint} opts.endpoint 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Endpoint} and HTTP response
     */
    setEndpointWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['endpoint'];

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
      let returnType = Endpoint;
      return this.apiClient.callApi(
        '/endpoint', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create / update an endpoint 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create or update an `endpoint` for a `project`.   An `endpoint` is a function that is a part of a mini-API `project`.  This endpoint adds the `endpoint` to the `project`'s documentation. However, this does not deploy the `endpoint`. To do so, you must <a href=\"#operation/deployProject\">deploy the project</a>.  All attributes except `group_name` are required if **creating** an `endpoint`.  Only `path`, `project_id`, and `version` are required if **updating** an `endpoint`.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/Endpoint} opts.endpoint 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Endpoint}
     */
    setEndpoint(opts) {
      return this.setEndpointWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
