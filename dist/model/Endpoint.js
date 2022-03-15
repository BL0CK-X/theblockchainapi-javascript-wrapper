"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ParameterSpecification = _interopRequireDefault(require("./ParameterSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Endpoint model module.
 * @module model/Endpoint
 * @version 1.0.9
 */
var Endpoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Endpoint</code>.
   * @alias module:model/Endpoint
   * @param projectId {String} The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
   * @param version {String} The project version under which the endpoint exists 
   * @param path {String} The path of the endpoint 
   * @param operationId {String} The operation ID of the endpoint. 
   * @param readableName {String} The name of the endpoint formatted in a readable way (e.g., Get Endpoint Metadata). 
   * @param credits {Number} The price of the endpoint. Valid values are integers from 1 to 100. 
   * @param inputSpecification {Array.<module:model/ParameterSpecification>} A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
   * @param inputExamples {Object} An example of the JSON input that a user might send. Limited to one example currently. 
   * @param outputSpecification {Array.<module:model/ParameterSpecification>} A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
   * @param outputExamples {Object} An example of the JSON output that a user might send. Limited to one example currently. 
   */
  function Endpoint(projectId, version, path, operationId, readableName, credits, inputSpecification, inputExamples, outputSpecification, outputExamples) {
    _classCallCheck(this, Endpoint);

    Endpoint.initialize(this, projectId, version, path, operationId, readableName, credits, inputSpecification, inputExamples, outputSpecification, outputExamples);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Endpoint, null, [{
    key: "initialize",
    value: function initialize(obj, projectId, version, path, operationId, readableName, credits, inputSpecification, inputExamples, outputSpecification, outputExamples) {
      obj['project_id'] = projectId;
      obj['version'] = version;
      obj['path'] = path;
      obj['operation_id'] = operationId;
      obj['readable_name'] = readableName;
      obj['credits'] = credits;
      obj['input_specification'] = inputSpecification;
      obj['input_examples'] = inputExamples;
      obj['output_specification'] = outputSpecification;
      obj['output_examples'] = outputExamples;
    }
    /**
     * Constructs a <code>Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Endpoint} obj Optional instance to populate.
     * @return {module:model/Endpoint} The populated <code>Endpoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Endpoint();

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('operation_id')) {
          obj['operation_id'] = _ApiClient["default"].convertToType(data['operation_id'], 'String');
        }

        if (data.hasOwnProperty('readable_name')) {
          obj['readable_name'] = _ApiClient["default"].convertToType(data['readable_name'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('credits')) {
          obj['credits'] = _ApiClient["default"].convertToType(data['credits'], 'Number');
        }

        if (data.hasOwnProperty('group_name')) {
          obj['group_name'] = _ApiClient["default"].convertToType(data['group_name'], 'String');
        }

        if (data.hasOwnProperty('input_specification')) {
          obj['input_specification'] = _ApiClient["default"].convertToType(data['input_specification'], [_ParameterSpecification["default"]]);
        }

        if (data.hasOwnProperty('input_examples')) {
          obj['input_examples'] = _ApiClient["default"].convertToType(data['input_examples'], Object);
        }

        if (data.hasOwnProperty('output_specification')) {
          obj['output_specification'] = _ApiClient["default"].convertToType(data['output_specification'], [_ParameterSpecification["default"]]);
        }

        if (data.hasOwnProperty('output_examples')) {
          obj['output_examples'] = _ApiClient["default"].convertToType(data['output_examples'], Object);
        }
      }

      return obj;
    }
  }]);

  return Endpoint;
}();
/**
 * The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
 * @member {String} project_id
 */


Endpoint.prototype['project_id'] = undefined;
/**
 * The project version under which the endpoint exists 
 * @member {String} version
 */

Endpoint.prototype['version'] = undefined;
/**
 * The path of the endpoint 
 * @member {String} path
 */

Endpoint.prototype['path'] = undefined;
/**
 * The operation ID of the endpoint. 
 * @member {String} operation_id
 */

Endpoint.prototype['operation_id'] = undefined;
/**
 * The name of the endpoint formatted in a readable way (e.g., Get Endpoint Metadata). 
 * @member {String} readable_name
 */

Endpoint.prototype['readable_name'] = undefined;
/**
 * The summary of the endpoint to be displayed in the sidebar on the left of the mini-API's documentation 
 * @member {String} summary
 */

Endpoint.prototype['summary'] = undefined;
/**
 * A description of what the endpoint does. This will be shown in the mini-API documentation. 
 * @member {String} description
 */

Endpoint.prototype['description'] = undefined;
/**
 * The price of the endpoint. Valid values are integers from 1 to 100. 
 * @member {Number} credits
 */

Endpoint.prototype['credits'] = undefined;
/**
 * The name of the group of endpoints that the endpoint comes from 
 * @member {String} group_name
 */

Endpoint.prototype['group_name'] = undefined;
/**
 * A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
 * @member {Array.<module:model/ParameterSpecification>} input_specification
 */

Endpoint.prototype['input_specification'] = undefined;
/**
 * An example of the JSON input that a user might send. Limited to one example currently. 
 * @member {Object} input_examples
 */

Endpoint.prototype['input_examples'] = undefined;
/**
 * A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
 * @member {Array.<module:model/ParameterSpecification>} output_specification
 */

Endpoint.prototype['output_specification'] = undefined;
/**
 * An example of the JSON output that a user might send. Limited to one example currently. 
 * @member {Object} output_examples
 */

Endpoint.prototype['output_examples'] = undefined;
var _default = Endpoint;
exports["default"] = _default;