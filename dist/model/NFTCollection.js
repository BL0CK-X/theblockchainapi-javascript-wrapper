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
 * The NFTCollection model module.
 * @module model/NFTCollection
 * @version 1.0.9
 */
var NFTCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NFTCollection</code>.
   * @alias module:model/NFTCollection
   */
  function NFTCollection() {
    _classCallCheck(this, NFTCollection);

    NFTCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NFTCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NFTCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTCollection} obj Optional instance to populate.
     * @return {module:model/NFTCollection} The populated <code>NFTCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NFTCollection();

        if (data.hasOwnProperty('verified')) {
          obj['verified'] = _ApiClient["default"].convertToType(data['verified'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NFTCollection;
}();
/**
 * A `0` or `1` indicating whether or not the associated collection is verified. 
 * @member {Number} verified
 */


NFTCollection.prototype['verified'] = undefined;
/**
 * Will return `11111111111111111111111111111111` if no associated `collection_id`. Otherwise it will return the `collection_id`, which is a public key representing the verified Metaplex collection. See more [here](https://collections.metaplex.com). 
 * @member {String} key
 */

NFTCollection.prototype['key'] = undefined;
var _default = NFTCollection;
exports["default"] = _default;