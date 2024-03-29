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
 * The NFTData model module.
 * @module model/NFTData
 * @version 1.0.9407
 */
var NFTData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTData</code>.
   * @alias module:model/NFTData
   */
  function NFTData() {
    _classCallCheck(this, NFTData);

    NFTData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTData} obj Optional instance to populate.
     * @return {module:model/NFTData} The populated <code>NFTData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      try {
        data = JSON.parse(data);
      } catch (_unused) {}

      if (data) {
        obj = obj || new NFTData();

        if (data.hasOwnProperty('creators')) {
          obj['creators'] = _ApiClient["default"].convertToType(data['creators'], ['String']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('share')) {
          obj['share'] = _ApiClient["default"].convertToType(data['share'], ['Number']);
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('uri')) {
          obj['uri'] = _ApiClient["default"].convertToType(data['uri'], 'String');
        }

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return NFTData;
}();
/**
 * The creators of the NFT 
 * @member {Array.<String>} creators
 */


NFTData.prototype['creators'] = undefined;
/**
 * The name of the NFT 
 * @member {String} name
 */

NFTData.prototype['name'] = undefined;
/**
 * The portion of the seller fee that each creator receives. Index 0 corresponds to creator at index 0 in the creator array, and so on. Length of share array must be the same as the length of the creator array. 
 * @member {Array.<Number>} share
 */

NFTData.prototype['share'] = undefined;
/**
 * The symbol of the NFT 
 * @member {String} symbol
 */

NFTData.prototype['symbol'] = undefined;
/**
 * The URI of the NFT 
 * @member {String} uri
 */

NFTData.prototype['uri'] = undefined;
/**
 * Whether or not the respective creator has signed the minting transaction of the NFT. Index 0 corresponds to creator at index 0 in the creator array, and so on. Length of verified array must be the same as the length of the creator array. 
 * @member {Array.<Number>} verified
 */

NFTData.prototype['verified'] = undefined;
var _default = NFTData;
exports["default"] = _default;