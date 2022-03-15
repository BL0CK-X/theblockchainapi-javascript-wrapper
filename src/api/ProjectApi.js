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
import Project from '../model/Project';
import ProjectCreateRequest from '../model/ProjectCreateRequest';
import ProjectDeploymentURL from '../model/ProjectDeploymentURL';
import StatItem from '../model/StatItem';
import UNKNOWN_BASE_TYPE from '../model/UNKNOWN_BASE_TYPE';

/**
* Project service.
* @module api/ProjectApi
* @version 1.0.9
*/
export default class ProjectApi {

    /**
    * Constructs a new ProjectApi. 
    * @alias module:api/ProjectApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  A project is an entire mini-API.  When you create a project, this initializes the project in our database and the API documentation for the project.  After initialization, you can <a href=\"#operation/createEndpoint\">add endpoints</a> to the documentation and deploy the project's mini-API to our servers. Learn more <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    createProjectWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = opts['projectCreateRequest'];

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
      let returnType = Project;
      return this.apiClient.callApi(
        '/project', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  A project is an entire mini-API.  When you create a project, this initializes the project in our database and the API documentation for the project.  After initialization, you can <a href=\"#operation/createEndpoint\">add endpoints</a> to the documentation and deploy the project's mini-API to our servers. Learn more <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    createProject(opts) {
      return this.createProjectWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a new project version 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create a new version for the project. The version must be higher than all existing versions. This will duplicate the existing project's latest version and auto-deploy it. To update these endpoints, simply redeploy on this project's versions.  When a project is first created, it uses the default \"0.0.1\" version.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    createProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling createProjectVersion");
      }
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME2' is set
      if (UNKNOWN_PARAMETER_NAME2 === undefined || UNKNOWN_PARAMETER_NAME2 === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME2' when calling createProjectVersion");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME,
        'version': UNKNOWN_PARAMETER_NAME2
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}/{version}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a new project version 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create a new version for the project. The version must be higher than all existing versions. This will duplicate the existing project's latest version and auto-deploy it. To update these endpoints, simply redeploy on this project's versions.  When a project is first created, it uses the default \"0.0.1\" version.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    createProjectVersion(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      return this.createProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes a project. This will remove the mini-API entirely from our system.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling deleteProject");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['APIKeyID', 'APISecretKey'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/project/{project_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes a project. This will remove the mini-API entirely from our system.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProject(UNKNOWN_PARAMETER_NAME) {
      return this.deleteProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a project version 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Delete a version for the project. There must always be at least one version deployed, so you cannot delete the last remaining version of the project. This will auto-deploy the project and update its documentation, if necessary.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    deleteProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling deleteProjectVersion");
      }
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME2' is set
      if (UNKNOWN_PARAMETER_NAME2 === undefined || UNKNOWN_PARAMETER_NAME2 === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME2' when calling deleteProjectVersion");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME,
        'version': UNKNOWN_PARAMETER_NAME2
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}/{version}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a project version 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Delete a version for the project. There must always be at least one version deployed, so you cannot delete the last remaining version of the project. This will auto-deploy the project and update its documentation, if necessary.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    deleteProjectVersion(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      return this.deleteProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a project's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    getProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProject");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a project's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    getProject(UNKNOWN_PARAMETER_NAME) {
      return this.getProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get deployment status 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment status for the project after uploading the binary. Will be: `DEPLOYED` or NOT `DEPLOYED`.  After it is `DEPLOYED`, you can then make requests to your API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    getProjectDeploymentStatusWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProjectDeploymentStatus");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
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
        '/project/{project_id}/deploy/status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get deployment status 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment status for the project after uploading the binary. Will be: `DEPLOYED` or NOT `DEPLOYED`.  After it is `DEPLOYED`, you can then make requests to your API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    getProjectDeploymentStatus(UNKNOWN_PARAMETER_NAME) {
      return this.getProjectDeploymentStatusWithHttpInfo(UNKNOWN_PARAMETER_NAME)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the deployment URL 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment URL for the project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectDeploymentURL} and HTTP response
     */
    getProjectDeploymentURLWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts) {
      opts = opts || {};
      let postBody = opts['UNKNOWN_BASE_TYPE'];
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProjectDeploymentURL");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
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
      let returnType = ProjectDeploymentURL;
      return this.apiClient.callApi(
        '/project/{project_id}/deploy/url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get the deployment URL 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment URL for the project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectDeploymentURL}
     */
    getProjectDeploymentURL(UNKNOWN_PARAMETER_NAME, opts) {
      return this.getProjectDeploymentURLWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a project's stats 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the usage stats for your mini-API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StatItem>} and HTTP response
     */
    getProjectStatsWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProjectStats");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
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
      let returnType = [StatItem];
      return this.apiClient.callApi(
        '/project/{project_id}/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a project's stats 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the usage stats for your mini-API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StatItem>}
     */
    getProjectStats(UNKNOWN_PARAMETER_NAME) {
      return this.getProjectStatsWithHttpInfo(UNKNOWN_PARAMETER_NAME)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List projects 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all projects associated with your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Project>} and HTTP response
     */
    listProjectsWithHttpInfo() {
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
      let returnType = [Project];
      return this.apiClient.callApi(
        '/project/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List projects 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all projects associated with your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Project>}
     */
    listProjects() {
      return this.listProjectsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    updateProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts) {
      opts = opts || {};
      let postBody = opts['projectCreateRequest'];
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling updateProject");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    updateProject(UNKNOWN_PARAMETER_NAME, opts) {
      return this.updateProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update the project's documentation 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's documentation.   Your project's documentation can only represent *one* version of your API.  Thus, when you call this, the `current_documentation_version` attribute of your project is set to the version supplied in the call.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */
    updateProjectDocumentationWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      let postBody = null;
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set
      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling updateProjectDocumentation");
      }
      // verify the required parameter 'UNKNOWN_PARAMETER_NAME2' is set
      if (UNKNOWN_PARAMETER_NAME2 === undefined || UNKNOWN_PARAMETER_NAME2 === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME2' when calling updateProjectDocumentation");
      }

      let pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME,
        'version': UNKNOWN_PARAMETER_NAME2
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/project/{project_id}/{version}/documentation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update the project's documentation 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's documentation.   Your project's documentation can only represent *one* version of your API.  Thus, when you call this, the `current_documentation_version` attribute of your project is set to the version supplied in the call.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */
    updateProjectDocumentation(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      return this.updateProjectDocumentationWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
