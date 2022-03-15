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
 * The EndpointReference model module.
 * @module model/EndpointReference
 * @version 1.0.9
 */
var EndpointReference = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndpointReference</code>.
   * @alias module:model/EndpointReference
   * @param projectId {String} The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
   * @param version {String} The project version under which the endpoint exists 
   * @param path {String} The path of the endpoint 
   */
  function EndpointReference(projectId, version, path) {
    _classCallCheck(this, EndpointReference);

    EndpointReference.initialize(this, projectId, version, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndpointReference, null, [{
    key: "initialize",
    value: function initialize(obj, projectId, version, path) {
      obj['project_id'] = projectId;
      obj['version'] = version;
      obj['path'] = path;
    }
    /**
     * Constructs a <code>EndpointReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointReference} obj Optional instance to populate.
     * @return {module:model/EndpointReference} The populated <code>EndpointReference</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndpointReference();

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EndpointReference;
}();
/**
 * The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
 * @member {String} project_id
 */


EndpointReference.prototype['project_id'] = undefined;
/**
 * The project version under which the endpoint exists 
 * @member {String} version
 */

EndpointReference.prototype['version'] = undefined;
/**
 * The path of the endpoint 
 * @member {String} path
 */

EndpointReference.prototype['path'] = undefined;
var _default = EndpointReference;
exports["default"] = _default;