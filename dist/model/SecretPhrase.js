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
 * The SecretPhrase model module.
 * @module model/SecretPhrase
 * @version 1.0.9407
 */
var SecretPhrase = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecretPhrase</code>.
   * @alias module:model/SecretPhrase
   */
  function SecretPhrase() {
    _classCallCheck(this, SecretPhrase);

    SecretPhrase.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecretPhrase, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecretPhrase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretPhrase} obj Optional instance to populate.
     * @return {module:model/SecretPhrase} The populated <code>SecretPhrase</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecretPhrase();

        if (data.hasOwnProperty('secret_recovery_phrase')) {
          obj['secret_recovery_phrase'] = _ApiClient["default"].convertToType(data['secret_recovery_phrase'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecretPhrase;
}();
/**
 * The twelve word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a public key with a private key.
 * @member {String} secret_recovery_phrase
 */


SecretPhrase.prototype['secret_recovery_phrase'] = undefined;
var _default = SecretPhrase;
exports["default"] = _default;