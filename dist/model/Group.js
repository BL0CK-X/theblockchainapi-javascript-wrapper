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
 * The Group model module.
 * @module model/Group
 * @version 1.0.9
 */
var Group = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Group</code>.
   * A group is a group of endpoints. 
   * @alias module:model/Group
   */
  function Group() {
    _classCallCheck(this, Group);

    Group.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Group, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();

        if (data.hasOwnProperty('section_name')) {
          obj['section_name'] = _ApiClient["default"].convertToType(data['section_name'], 'String');
        }

        if (data.hasOwnProperty('group_name')) {
          obj['group_name'] = _ApiClient["default"].convertToType(data['group_name'], 'String');
        }

        if (data.hasOwnProperty('group_description')) {
          obj['group_description'] = _ApiClient["default"].convertToType(data['group_description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Group;
}();
/**
 * The name of the section under which this group is listed. A section contains several groups. 
 * @member {String} section_name
 */


Group.prototype['section_name'] = undefined;
/**
 * The name of the group 
 * @member {String} group_name
 */

Group.prototype['group_name'] = undefined;
/**
 * The description of the group 
 * @member {String} group_description
 */

Group.prototype['group_description'] = undefined;
var _default = Group;
exports["default"] = _default;