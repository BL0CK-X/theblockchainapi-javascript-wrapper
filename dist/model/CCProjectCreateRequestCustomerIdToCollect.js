"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CCProjectCreateRequestCustomerIdToCollect model module.
 * @module model/CCProjectCreateRequestCustomerIdToCollect
 * @version 1.0.9407
 */
var CCProjectCreateRequestCustomerIdToCollect = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CCProjectCreateRequestCustomerIdToCollect</code>.
   * The customer ID to collect during checkout. This could be a Twitter handle, a Telegram handle -- anything you use to identify your customers. We will collect it before they pay and link the payment to this ID. If you do not provide this, we will only be able to link the payment through either the customer&#39;s payment validation code, or their wallet&#39;s public key. If the users are signing in with their wallet in your application, then you can simply check whether they have paid through that. 
   * @alias module:model/CCProjectCreateRequestCustomerIdToCollect
   * @param idType {module:model/CCProjectCreateRequestCustomerIdToCollect.IdTypeEnum} What type of identifier you are collecting, either an \"email\" or \"misc\"ellanous. Miscellanous simply means you are collecting something other than an email.  
   * @param name {String} The name of the customer ID input presented to the user 
   */
  function CCProjectCreateRequestCustomerIdToCollect(idType, name) {
    _classCallCheck(this, CCProjectCreateRequestCustomerIdToCollect);

    CCProjectCreateRequestCustomerIdToCollect.initialize(this, idType, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CCProjectCreateRequestCustomerIdToCollect, null, [{
    key: "initialize",
    value: function initialize(obj, idType, name) {
      obj['id_type'] = idType;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>CCProjectCreateRequestCustomerIdToCollect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CCProjectCreateRequestCustomerIdToCollect} obj Optional instance to populate.
     * @return {module:model/CCProjectCreateRequestCustomerIdToCollect} The populated <code>CCProjectCreateRequestCustomerIdToCollect</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CCProjectCreateRequestCustomerIdToCollect();

        if (data.hasOwnProperty('id_type')) {
          obj['id_type'] = _ApiClient["default"].convertToType(data['id_type'], 'String');
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

  return CCProjectCreateRequestCustomerIdToCollect;
}();
/**
 * What type of identifier you are collecting, either an \"email\" or \"misc\"ellanous. Miscellanous simply means you are collecting something other than an email.  
 * @member {module:model/CCProjectCreateRequestCustomerIdToCollect.IdTypeEnum} id_type
 */


CCProjectCreateRequestCustomerIdToCollect.prototype['id_type'] = undefined;
/**
 * The name of the customer ID input presented to the user 
 * @member {String} name
 */

CCProjectCreateRequestCustomerIdToCollect.prototype['name'] = undefined;
/**
 * The description / stated purpose of the customer ID input presented to the user 
 * @member {String} description
 * @default ''
 */

CCProjectCreateRequestCustomerIdToCollect.prototype['description'] = '';
/**
 * Whether to require the customer ID 
 * @member {Boolean} required
 * @default false
 */

CCProjectCreateRequestCustomerIdToCollect.prototype['required'] = false;
/**
 * Allowed values for the <code>id_type</code> property.
 * @enum {String}
 * @readonly
 */

CCProjectCreateRequestCustomerIdToCollect['IdTypeEnum'] = {
  /**
   * value: "misc"
   * @const
   */
  "misc": "misc",

  /**
   * value: "email"
   * @const
   */
  "email": "email"
};
var _default = CCProjectCreateRequestCustomerIdToCollect;
exports["default"] = _default;