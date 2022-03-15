"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Group = _interopRequireDefault(require("./Group"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectCreateRequest model module.
 * @module model/ProjectCreateRequest
 * @version 1.0.9
 */
var ProjectCreateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectCreateRequest</code>.
   * You can change any of these parameters after creating the project. None of these parameters are required. 
   * @alias module:model/ProjectCreateRequest
   */
  function ProjectCreateRequest() {
    _classCallCheck(this, ProjectCreateRequest);

    ProjectCreateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectCreateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectCreateRequest} obj Optional instance to populate.
     * @return {module:model/ProjectCreateRequest} The populated <code>ProjectCreateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectCreateRequest();

        if (data.hasOwnProperty('project_name')) {
          obj['project_name'] = _ApiClient["default"].convertToType(data['project_name'], 'String');
        }

        if (data.hasOwnProperty('project_description')) {
          obj['project_description'] = _ApiClient["default"].convertToType(data['project_description'], 'String');
        }

        if (data.hasOwnProperty('contact_email')) {
          obj['contact_email'] = _ApiClient["default"].convertToType(data['contact_email'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_Group["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ProjectCreateRequest;
}();
/**
 * The name of the mini-API. This will be shown at the top of the mini-API's documentation. 
 * @member {String} project_name
 */


ProjectCreateRequest.prototype['project_name'] = undefined;
/**
 * The description of the mini-API. This will be shown at the top of the mini-API's documentation, below the title. 
 * @member {String} project_description
 */

ProjectCreateRequest.prototype['project_description'] = undefined;
/**
 * The email where users of your mini-API can contact you. This will be shown at the top of the mini-API's documentation. 
 * @member {String} contact_email
 */

ProjectCreateRequest.prototype['contact_email'] = undefined;
/**
 * A list of groups. A section contains groups, and groups contain API endpoints.  
 * @member {Array.<module:model/Group>} groups
 */

ProjectCreateRequest.prototype['groups'] = undefined;
var _default = ProjectCreateRequest;
exports["default"] = _default;