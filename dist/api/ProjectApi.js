"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Project = _interopRequireDefault(require("../model/Project"));

var _ProjectCreateRequest = _interopRequireDefault(require("../model/ProjectCreateRequest"));

var _ProjectDeploymentURL = _interopRequireDefault(require("../model/ProjectDeploymentURL"));

var _StatItem = _interopRequireDefault(require("../model/StatItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Project service.
* @module api/ProjectApi
* @version 1.0.9
*/
var ProjectApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectApi. 
  * @alias module:api/ProjectApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectApi(apiClient) {
    _classCallCheck(this, ProjectApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a project 
   * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  A project is an entire mini-API.  When you create a project, this initializes the project in our database and the API documentation for the project.  After initialization, you can <a href=\"#operation/createEndpoint\">add endpoints</a> to the documentation and deploy the project's mini-API to our servers. Learn more <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {Object} opts Optional parameters
   * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
   */


  _createClass(ProjectApi, [{
    key: "createProjectWithHttpInfo",
    value: function createProjectWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['projectCreateRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  A project is an entire mini-API.  When you create a project, this initializes the project in our database and the API documentation for the project.  After initialization, you can <a href=\"#operation/createEndpoint\">add endpoints</a> to the documentation and deploy the project's mini-API to our servers. Learn more <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "createProject",
    value: function createProject(opts) {
      return this.createProjectWithHttpInfo(opts).then(function (response_and_data) {
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

  }, {
    key: "createProjectVersionWithHttpInfo",
    value: function createProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling createProjectVersion");
      } // verify the required parameter 'UNKNOWN_PARAMETER_NAME2' is set


      if (UNKNOWN_PARAMETER_NAME2 === undefined || UNKNOWN_PARAMETER_NAME2 === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME2' when calling createProjectVersion");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME,
        'version': UNKNOWN_PARAMETER_NAME2
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{project_id}/{version}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a new project version 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Create a new version for the project. The version must be higher than all existing versions. This will duplicate the existing project's latest version and auto-deploy it. To update these endpoints, simply redeploy on this project's versions.  When a project is first created, it uses the default \"0.0.1\" version.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "createProjectVersion",
    value: function createProjectVersion(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      return this.createProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes a project. This will remove the mini-API entirely from our system.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteProjectWithHttpInfo",
    value: function deleteProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling deleteProject");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Deletes a project. This will remove the mini-API entirely from our system.   `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteProject",
    value: function deleteProject(UNKNOWN_PARAMETER_NAME) {
      return this.deleteProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME).then(function (response_and_data) {
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

  }, {
    key: "deleteProjectVersionWithHttpInfo",
    value: function deleteProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling deleteProjectVersion");
      } // verify the required parameter 'UNKNOWN_PARAMETER_NAME2' is set


      if (UNKNOWN_PARAMETER_NAME2 === undefined || UNKNOWN_PARAMETER_NAME2 === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME2' when calling deleteProjectVersion");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME,
        'version': UNKNOWN_PARAMETER_NAME2
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{project_id}/{version}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a project version 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Delete a version for the project. There must always be at least one version deployed, so you cannot delete the last remaining version of the project. This will auto-deploy the project and update its documentation, if necessary.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "deleteProjectVersion",
    value: function deleteProjectVersion(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      return this.deleteProjectVersionWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a project's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Project} and HTTP response
     */

  }, {
    key: "getProjectWithHttpInfo",
    value: function getProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProject");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a project's metadata 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "getProject",
    value: function getProject(UNKNOWN_PARAMETER_NAME) {
      return this.getProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get deployment status 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment status for the project after uploading the binary. Will be: `DEPLOYED` or NOT `DEPLOYED`.  After it is `DEPLOYED`, you can then make requests to your API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */

  }, {
    key: "getProjectDeploymentStatusWithHttpInfo",
    value: function getProjectDeploymentStatusWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProjectDeploymentStatus");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/project/{project_id}/deploy/status', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get deployment status 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment status for the project after uploading the binary. Will be: `DEPLOYED` or NOT `DEPLOYED`.  After it is `DEPLOYED`, you can then make requests to your API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */

  }, {
    key: "getProjectDeploymentStatus",
    value: function getProjectDeploymentStatus(UNKNOWN_PARAMETER_NAME) {
      return this.getProjectDeploymentStatusWithHttpInfo(UNKNOWN_PARAMETER_NAME).then(function (response_and_data) {
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

  }, {
    key: "getProjectDeploymentURLWithHttpInfo",
    value: function getProjectDeploymentURLWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProjectDeploymentURL");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectDeploymentURL["default"];
      return this.apiClient.callApi('/project/{project_id}/deploy/url', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the deployment URL 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the deployment URL for the project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectDeploymentURL}
     */

  }, {
    key: "getProjectDeploymentURL",
    value: function getProjectDeploymentURL(UNKNOWN_PARAMETER_NAME, opts) {
      return this.getProjectDeploymentURLWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a project's stats 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the usage stats for your mini-API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/StatItem>} and HTTP response
     */

  }, {
    key: "getProjectStatsWithHttpInfo",
    value: function getProjectStatsWithHttpInfo(UNKNOWN_PARAMETER_NAME) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling getProjectStats");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_StatItem["default"]];
      return this.apiClient.callApi('/project/{project_id}/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a project's stats 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Get the usage stats for your mini-API.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/StatItem>}
     */

  }, {
    key: "getProjectStats",
    value: function getProjectStats(UNKNOWN_PARAMETER_NAME) {
      return this.getProjectStatsWithHttpInfo(UNKNOWN_PARAMETER_NAME).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List projects 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all projects associated with your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Project>} and HTTP response
     */

  }, {
    key: "listProjectsWithHttpInfo",
    value: function listProjectsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Project["default"]];
      return this.apiClient.callApi('/project/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List projects 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  List all projects associated with your account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Project>}
     */

  }, {
    key: "listProjects",
    value: function listProjects() {
      return this.listProjectsWithHttpInfo().then(function (response_and_data) {
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

  }, {
    key: "updateProjectWithHttpInfo",
    value: function updateProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts) {
      opts = opts || {};
      var postBody = opts['projectCreateRequest']; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling updateProject");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{project_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a project 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's metadata. None of these parameters are required. Just provide the parameters that you would like to update.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectCreateRequest} opts.projectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "updateProject",
    value: function updateProject(UNKNOWN_PARAMETER_NAME, opts) {
      return this.updateProjectWithHttpInfo(UNKNOWN_PARAMETER_NAME, opts).then(function (response_and_data) {
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

  }, {
    key: "updateProjectDocumentationWithHttpInfo",
    value: function updateProjectDocumentationWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      var postBody = null; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling updateProjectDocumentation");
      } // verify the required parameter 'UNKNOWN_PARAMETER_NAME2' is set


      if (UNKNOWN_PARAMETER_NAME2 === undefined || UNKNOWN_PARAMETER_NAME2 === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME2' when calling updateProjectDocumentation");
      }

      var pathParams = {
        'project_id': UNKNOWN_PARAMETER_NAME,
        'version': UNKNOWN_PARAMETER_NAME2
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{project_id}/{version}/documentation', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update the project's documentation 
     * A complete example and walkthrough of the program can be found <a href=\"https://github.com/BL0CK-X/api-developer-program\" target=\"_blank\">here</a>.  Update your project's documentation.   Your project's documentation can only represent *one* version of your API.  Thus, when you call this, the `current_documentation_version` attribute of your project is set to the version supplied in the call.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME The ID of the project. Created and returned when a project is created.
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME2 The version of the project.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Project}
     */

  }, {
    key: "updateProjectDocumentation",
    value: function updateProjectDocumentation(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2) {
      return this.updateProjectDocumentationWithHttpInfo(UNKNOWN_PARAMETER_NAME, UNKNOWN_PARAMETER_NAME2).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProjectApi;
}();

exports["default"] = ProjectApi;