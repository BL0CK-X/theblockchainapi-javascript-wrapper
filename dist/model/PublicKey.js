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
 * The PublicKey model module.
 * @module model/PublicKey
 * @version 1.0.9407
 */
var PublicKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublicKey</code>.
   * @alias module:model/PublicKey
   * @param publicKey {String} 
   */
  function PublicKey(publicKey) {
    _classCallCheck(this, PublicKey);

    PublicKey.initialize(this, publicKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublicKey, null, [{
    key: "initialize",
    value: function initialize(obj, publicKey) {
      obj['public_key'] = publicKey;
    }
    /**
     * Constructs a <code>PublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicKey} obj Optional instance to populate.
     * @return {module:model/PublicKey} The populated <code>PublicKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublicKey();

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PublicKey;
}();
/**
 * @member {String} public_key
 */


PublicKey.prototype['public_key'] = undefined;
var _default = PublicKey;
exports["default"] = _default;