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
 * The StatItem model module.
 * @module model/StatItem
 * @version 1.0.9
 */
var StatItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StatItem</code>.
   * @alias module:model/StatItem
   */
  function StatItem() {
    _classCallCheck(this, StatItem);

    StatItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StatItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StatItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StatItem} obj Optional instance to populate.
     * @return {module:model/StatItem} The populated <code>StatItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StatItem();

        if (data.hasOwnProperty('uid')) {
          obj['uid'] = _ApiClient["default"].convertToType(data['uid'], 'String');
        }

        if (data.hasOwnProperty('time_stamp')) {
          obj['time_stamp'] = _ApiClient["default"].convertToType(data['time_stamp'], 'Number');
        }

        if (data.hasOwnProperty('endpoint_id')) {
          obj['endpoint_id'] = _ApiClient["default"].convertToType(data['endpoint_id'], 'String');
        }

        if (data.hasOwnProperty('api_calls')) {
          obj['api_calls'] = _ApiClient["default"].convertToType(data['api_calls'], 'Number');
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

  return StatItem;
}();
/**
 * The anonymous ID of the user who called your endpoint 
 * @member {String} uid
 */


StatItem.prototype['uid'] = undefined;
/**
 * The time stamp of the ten-minute interval 
 * @member {Number} time_stamp
 */

StatItem.prototype['time_stamp'] = undefined;
/**
 * The full path of the endpoint (e.g., `project_id`/`version`/`path`) 
 * @member {String} endpoint_id
 */

StatItem.prototype['endpoint_id'] = undefined;
/**
 * The number of API calls by this user to this endpoint for the ten-minute interval 
 * @member {Number} api_calls
 */

StatItem.prototype['api_calls'] = undefined;
/**
 * The version of the endpoint
 * @member {String} version
 */

StatItem.prototype['version'] = undefined;
/**
 * The path of the endpoint (not inclusive of the `version` or `project_id`)
 * @member {String} path
 */

StatItem.prototype['path'] = undefined;
var _default = StatItem;
exports["default"] = _default;