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
 * The AirdropRequest model module.
 * @module model/AirdropRequest
 * @version 1.0.9407
 */
var AirdropRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AirdropRequest</code>.
   * @alias module:model/AirdropRequest
   * @param recipientAddress {String} The address to which to send the airdrop of 0.015 SOL
   */
  function AirdropRequest(recipientAddress) {
    _classCallCheck(this, AirdropRequest);

    AirdropRequest.initialize(this, recipientAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AirdropRequest, null, [{
    key: "initialize",
    value: function initialize(obj, recipientAddress) {
      obj['recipient_address'] = recipientAddress;
    }
    /**
     * Constructs a <code>AirdropRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AirdropRequest} obj Optional instance to populate.
     * @return {module:model/AirdropRequest} The populated <code>AirdropRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AirdropRequest();

        if (data.hasOwnProperty('recipient_address')) {
          obj['recipient_address'] = _ApiClient["default"].convertToType(data['recipient_address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AirdropRequest;
}();
/**
 * The address to which to send the airdrop of 0.015 SOL
 * @member {String} recipient_address
 */


AirdropRequest.prototype['recipient_address'] = undefined;
var _default = AirdropRequest;
exports["default"] = _default;