"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Endpoint = _interopRequireDefault(require("./Endpoint"));

var _Group = _interopRequireDefault(require("./Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Project model module.
 * @module model/Project
 * @version 1.0.9
 */
var Project = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   */
  function Project() {
    _classCallCheck(this, Project);

    Project.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Project, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Project();

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('project_name')) {
          obj['project_name'] = _ApiClient["default"].convertToType(data['project_name'], 'String');
        }

        if (data.hasOwnProperty('project_description')) {
          obj['project_description'] = _ApiClient["default"].convertToType(data['project_description'], 'String');
        }

        if (data.hasOwnProperty('contact_email')) {
          obj['contact_email'] = _ApiClient["default"].convertToType(data['contact_email'], 'String');
        }

        if (data.hasOwnProperty('current_documentation_version')) {
          obj['current_documentation_version'] = _ApiClient["default"].convertToType(data['current_documentation_version'], 'String');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], ['String']);
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_Group["default"]]);
        }

        if (data.hasOwnProperty('endpoints')) {
          obj['endpoints'] = _ApiClient["default"].convertToType(data['endpoints'], [_Endpoint["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Project;
}();
/**
 * The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
 * @member {String} project_id
 */


Project.prototype['project_id'] = undefined;
/**
 * The name of the mini-API. This will be shown at the top of the mini-API's documentation. 
 * @member {String} project_name
 */

Project.prototype['project_name'] = undefined;
/**
 * The description of the mini-API. This will be shown at the top of the mini-API's documentation, below the title. 
 * @member {String} project_description
 */

Project.prototype['project_description'] = undefined;
/**
 * The email where users of your mini-API can contact you. This will be shown at the top of the mini-API's documentation. 
 * @member {String} contact_email
 */

Project.prototype['contact_email'] = undefined;
/**
 * The version of the API that the documentation is updated for. You can set the documentation version to any valid version. To see how to format the version string, see the description for `versions`. 
 * @member {String} current_documentation_version
 */

Project.prototype['current_documentation_version'] = undefined;
/**
 * The live versions of the project. An array of strings. We use Python's `version` package to see if it's a valid version and to compare versions (to see which is higher).  Read more about this Python package <a href=\"https://packaging.pypa.io/en/latest/version.html#packaging.version.parse\" target=\"_blank\">here</a>.
 * @member {Array.<String>} versions
 */

Project.prototype['versions'] = undefined;
/**
 * A list of groups. A section contains groups, and groups contain API endpoints.  
 * @member {Array.<module:model/Group>} groups
 */

Project.prototype['groups'] = undefined;
/**
 * A list of groups. A section contains groups, and groups contain API endpoints.  
 * @member {Array.<module:model/Endpoint>} endpoints
 */

Project.prototype['endpoints'] = undefined;
var _default = Project;
exports["default"] = _default;