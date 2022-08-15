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
 * The GeneralAirdropRequest model module.
 * @module model/GeneralAirdropRequest
 * @version 1.0.9407
 */
var GeneralAirdropRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GeneralAirdropRequest</code>.
   * @alias module:model/GeneralAirdropRequest
   * @param recipientBlockchainIdentifier {String} The address/public key to which to send the airdrop.  Examples: - Solana: `GKNcUmNacSJo4S2Kq3DuYRYRGw3sNUfJ4tyqd198t6vQ` - Ethereum: `0xa84b9478d203cd25dF722e83C87590f8028f6aAA`
   */
  function GeneralAirdropRequest(recipientBlockchainIdentifier) {
    _classCallCheck(this, GeneralAirdropRequest);

    GeneralAirdropRequest.initialize(this, recipientBlockchainIdentifier);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GeneralAirdropRequest, null, [{
    key: "initialize",
    value: function initialize(obj, recipientBlockchainIdentifier) {
      obj['recipient_blockchain_identifier'] = recipientBlockchainIdentifier;
    }
    /**
     * Constructs a <code>GeneralAirdropRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralAirdropRequest} obj Optional instance to populate.
     * @return {module:model/GeneralAirdropRequest} The populated <code>GeneralAirdropRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GeneralAirdropRequest();

        if (data.hasOwnProperty('recipient_blockchain_identifier')) {
          obj['recipient_blockchain_identifier'] = _ApiClient["default"].convertToType(data['recipient_blockchain_identifier'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GeneralAirdropRequest;
}();
/**
 * The address/public key to which to send the airdrop.  Examples: - Solana: `GKNcUmNacSJo4S2Kq3DuYRYRGw3sNUfJ4tyqd198t6vQ` - Ethereum: `0xa84b9478d203cd25dF722e83C87590f8028f6aAA`
 * @member {String} recipient_blockchain_identifier
 */


GeneralAirdropRequest.prototype['recipient_blockchain_identifier'] = undefined;
var _default = GeneralAirdropRequest;
exports["default"] = _default;