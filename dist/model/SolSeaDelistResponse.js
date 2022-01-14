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
 * The SolSeaDelistResponse model module.
 * @module model/SolSeaDelistResponse
 * @version 1.0.9
 */
var SolSeaDelistResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SolSeaDelistResponse</code>.
   * @alias module:model/SolSeaDelistResponse
   */
  function SolSeaDelistResponse() {
    _classCallCheck(this, SolSeaDelistResponse);

    SolSeaDelistResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SolSeaDelistResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SolSeaDelistResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolSeaDelistResponse} obj Optional instance to populate.
     * @return {module:model/SolSeaDelistResponse} The populated <code>SolSeaDelistResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SolSeaDelistResponse();

        if (data.hasOwnProperty('transaction_signature')) {
          obj['transaction_signature'] = _ApiClient["default"].convertToType(data['transaction_signature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SolSeaDelistResponse;
}();
/**
 * The signature of the `delist` transaction 
 * @member {String} transaction_signature
 */


SolSeaDelistResponse.prototype['transaction_signature'] = undefined;
var _default = SolSeaDelistResponse;
exports["default"] = _default;