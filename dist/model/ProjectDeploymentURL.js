"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectDeploymentURL model module.
 * @module model/ProjectDeploymentURL
 * @version 1.0.9
 */
var ProjectDeploymentURL = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectDeploymentURL</code>.
   * @alias module:model/ProjectDeploymentURL
   */
  function ProjectDeploymentURL() {
    _classCallCheck(this, ProjectDeploymentURL);

    ProjectDeploymentURL.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectDeploymentURL, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectDeploymentURL</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectDeploymentURL} obj Optional instance to populate.
     * @return {module:model/ProjectDeploymentURL} The populated <code>ProjectDeploymentURL</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectDeploymentURL();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('deployment_version')) {
          obj['deployment_version'] = _ApiClient["default"].convertToType(data['deployment_version'], 'String');
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], Object);
        }
      }

      return obj;
    }
  }]);

  return ProjectDeploymentURL;
}();
/**
 * The URL of the bucket where you will upload your binary 
 * @member {String} url
 */


ProjectDeploymentURL.prototype['url'] = undefined;
/**
 * An internal version tracking the version of the binary uploaded 
 * @member {String} deployment_version
 */

ProjectDeploymentURL.prototype['deployment_version'] = undefined;
/**
 * Information necessary to sign the upload URL 
 * @member {Object} fields
 */

ProjectDeploymentURL.prototype['fields'] = undefined;
var _default = ProjectDeploymentURL;
exports["default"] = _default;