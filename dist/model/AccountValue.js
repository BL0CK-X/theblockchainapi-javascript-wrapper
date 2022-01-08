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
 * The AccountValue model module.
 * @module model/AccountValue
 * @version 1.0.9
 */
var AccountValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountValue</code>.
   * @alias module:model/AccountValue
   */
  function AccountValue() {
    _classCallCheck(this, AccountValue);

    AccountValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountValue} obj Optional instance to populate.
     * @return {module:model/AccountValue} The populated <code>AccountValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountValue();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }

        if (data.hasOwnProperty('executable')) {
          obj['executable'] = _ApiClient["default"].convertToType(data['executable'], 'Boolean');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'String');
        }

        if (data.hasOwnProperty('rent_epoch')) {
          obj['rent_epoch'] = _ApiClient["default"].convertToType(data['rent_epoch'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AccountValue;
}();
/**
 * More info about the account. What are included depends on the type of account. See examples.
 * @member {Object} data
 */


AccountValue.prototype['data'] = undefined;
/**
 * Whether or not this account is marked as executable
 * @member {Boolean} executable
 */

AccountValue.prototype['executable'] = undefined;
/**
 * The owner of the account
 * @member {String} owner
 */

AccountValue.prototype['owner'] = undefined;
/**
 * @member {Number} rent_epoch
 */

AccountValue.prototype['rent_epoch'] = undefined;
var _default = AccountValue;
exports["default"] = _default;