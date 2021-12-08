"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Task = _interopRequireDefault(require("../model/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Task service.
* @module api/TaskApi
* @version 1.0.9
*/
var TaskApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TaskApi. 
  * @alias module:api/TaskApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TaskApi(apiClient) {
    _classCallCheck(this, TaskApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Get the result of a task
   * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the result of a task. Replace `task_id` with the ID of your task.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
   * @param {String} taskId The ID of the task
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Task} and HTTP response
   */


  _createClass(TaskApi, [{
    key: "getTaskWithHttpInfo",
    value: function getTaskWithHttpInfo(taskId) {
      var postBody = null; // verify the required parameter 'taskId' is set

      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling getTask");
      }

      var pathParams = {
        'task_id': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyID', 'APISecretKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Task["default"];
      return this.apiClient.callApi('/task/{task_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get the result of a task
     * <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\" target=\"_blank\">See examples (Python, JavaScript)</a>.      Get the result of a task. Replace `task_id` with the ID of your task.  `Cost: 1 Credit` (<a href=\"#section/Pricing\">See Pricing</a>)
     * @param {String} taskId The ID of the task
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Task}
     */

  }, {
    key: "getTask",
    value: function getTask(taskId) {
      return this.getTaskWithHttpInfo(taskId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TaskApi;
}();

exports["default"] = TaskApi;