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
 * The ParameterSpecification model module.
 * @module model/ParameterSpecification
 * @version 1.0.9
 */
var ParameterSpecification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParameterSpecification</code>.
   * @alias module:model/ParameterSpecification
   */
  function ParameterSpecification() {
    _classCallCheck(this, ParameterSpecification);

    ParameterSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParameterSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ParameterSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterSpecification} obj Optional instance to populate.
     * @return {module:model/ParameterSpecification} The populated <code>ParameterSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParameterSpecification();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ParameterSpecification;
}();
/**
 * The type of the parameter
 * @member {module:model/ParameterSpecification.TypeEnum} type
 */


ParameterSpecification.prototype['type'] = undefined;
/**
 * The name of the parameter
 * @member {String} name
 */

ParameterSpecification.prototype['name'] = undefined;
/**
 * The name of the parameter
 * @member {String} description
 */

ParameterSpecification.prototype['description'] = undefined;
/**
 * Whether or not this parameter is required
 * @member {Boolean} required
 */

ParameterSpecification.prototype['required'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ParameterSpecification['TypeEnum'] = {
  /**
   * value: "string"
   * @const
   */
  "string": "string",

  /**
   * value: "number"
   * @const
   */
  "number": "number",

  /**
   * value: "boolean"
   * @const
   */
  "boolean": "boolean",

  /**
   * value: "array"
   * @const
   */
  "array": "array"
};
var _default = ParameterSpecification;
exports["default"] = _default;