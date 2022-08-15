"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CCProject = _interopRequireDefault(require("../model/CCProject"));

var _CCProjectCreateRequest = _interopRequireDefault(require("../model/CCProjectCreateRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* CCProject service.
* @module api/CCProjectApi
* @version 1.0.9407
*/
var CCProjectApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CCProjectApi. 
  * @alias module:api/CCProjectApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CCProjectApi(apiClient) {
    _classCallCheck(this, CCProjectApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Create a project 
   * A project represents that project or company that is accepting payments.  A project can have products, which can have multiple plans (prices) each.  To create a project, you just need to supply a name and a Solana public key to receive payments.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {Object} opts Optional parameters
   * @param {module:model/CCProjectCreateRequest} opts.cCProjectCreateRequest 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CCProject} and HTTP response
   */


  _createClass(CCProjectApi, [{
    key: "createCCProjectWithHttpInfo",
    value: function createCCProjectWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = opts['cCProjectCreateRequest'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CCProject["default"];
      return this.apiClient.callApi('/checkout/v1/project', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a project 
     * A project represents that project or company that is accepting payments.  A project can have products, which can have multiple plans (prices) each.  To create a project, you just need to supply a name and a Solana public key to receive payments.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {Object} opts Optional parameters
     * @param {module:model/CCProjectCreateRequest} opts.cCProjectCreateRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CCProject}
     */

  }, {
    key: "createCCProject",
    value: function createCCProject(opts) {
      return this.createCCProjectWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a project 
     * Delete a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "deleteCCProjectWithHttpInfo",
    value: function deleteCCProjectWithHttpInfo(projectId) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling deleteCCProject");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/checkout/v1/project/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a project 
     * Delete a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "deleteCCProject",
    value: function deleteCCProject(projectId) {
      return this.deleteCCProjectWithHttpInfo(projectId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a project 
     * Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CCProject} and HTTP response
     */

  }, {
    key: "getCCProjectWithHttpInfo",
    value: function getCCProjectWithHttpInfo(projectId) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getCCProject");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CCProject["default"];
      return this.apiClient.callApi('/checkout/v1/project/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a project 
     * Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CCProject}
     */

  }, {
    key: "getCCProject",
    value: function getCCProject(projectId) {
      return this.getCCProjectWithHttpInfo(projectId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List projects 
     * List all projects associated with an account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CCProject>} and HTTP response
     */

  }, {
    key: "listCCProjectsWithHttpInfo",
    value: function listCCProjectsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_CCProject["default"]];
      return this.apiClient.callApi('/checkout/v1/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List projects 
     * List all projects associated with an account.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CCProject>}
     */

  }, {
    key: "listCCProjects",
    value: function listCCProjects() {
      return this.listCCProjectsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update a project 
     * Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/CCProject} opts.cCProject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CCProject} and HTTP response
     */

  }, {
    key: "updateCCProjectWithHttpInfo",
    value: function updateCCProjectWithHttpInfo(projectId, opts) {
      opts = opts || {};
      var postBody = opts['cCProject']; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling updateCCProject");
      }

      var pathParams = {
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CCProject["default"];
      return this.apiClient.callApi('/checkout/v1/project/{project_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update a project 
     * Retrieve a project.  `Cost: 0 Credit` (Free) (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} projectId The ID of the project. Created and returned when a project is created.
     * @param {Object} opts Optional parameters
     * @param {module:model/CCProject} opts.cCProject 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CCProject}
     */

  }, {
    key: "updateCCProject",
    value: function updateCCProject(projectId, opts) {
      return this.updateCCProjectWithHttpInfo(projectId, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CCProjectApi;
}();

exports["default"] = CCProjectApi;