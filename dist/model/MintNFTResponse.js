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
 * The MintNFTResponse model module.
 * @module model/MintNFTResponse
 * @version 1.0.9
 */
var MintNFTResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MintNFTResponse</code>.
   * @alias module:model/MintNFTResponse
   */
  function MintNFTResponse() {
    _classCallCheck(this, MintNFTResponse);

    MintNFTResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MintNFTResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MintNFTResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MintNFTResponse} obj Optional instance to populate.
     * @return {module:model/MintNFTResponse} The populated <code>MintNFTResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      try {
        data = JSON.parse(data);
      } catch (_unused) {}

      if (data) {
        obj = obj || new MintNFTResponse();

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MintNFTResponse;
}();
/**
 * The signature of the transaction. Just because this is returned does not mean it was successful.  To determine if the mint was successful, use this Gist: https://gist.github.com/joshwolff1/298e8251e43ff9b4815028683b1ca17d 
 * @member {String} transaction_signature
 */


MintNFTResponse.prototype['transaction_signature'] = undefined;
var _default = MintNFTResponse;
exports["default"] = _default;