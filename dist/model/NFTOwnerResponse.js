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
 * The NFTOwnerResponse model module.
 * @module model/NFTOwnerResponse
 * @version null
 */
var NFTOwnerResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTOwnerResponse</code>.
   * @alias module:model/NFTOwnerResponse
   * @param nftOwner {String} The public key address of the wallet that has ownership over the provided NFT
   */
  function NFTOwnerResponse(nftOwner) {
    _classCallCheck(this, NFTOwnerResponse);

    NFTOwnerResponse.initialize(this, nftOwner);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTOwnerResponse, null, [{
    key: "initialize",
    value: function initialize(obj, nftOwner) {
      obj['nft_owner'] = nftOwner;
    }
    /**
     * Constructs a <code>NFTOwnerResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTOwnerResponse} obj Optional instance to populate.
     * @return {module:model/NFTOwnerResponse} The populated <code>NFTOwnerResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTOwnerResponse();

        if (data.hasOwnProperty('nft_owner')) {
          obj['nft_owner'] = _ApiClient["default"].convertToType(data['nft_owner'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTOwnerResponse;
}();
/**
 * The public key address of the wallet that has ownership over the provided NFT
 * @member {String} nft_owner
 */


NFTOwnerResponse.prototype['nft_owner'] = undefined;
var _default = NFTOwnerResponse;
exports["default"] = _default;