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
 * The GenerateSeedPhraseRequest model module.
 * @module model/GenerateSeedPhraseRequest
 * @version 1.0.9407
 */
var GenerateSeedPhraseRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GenerateSeedPhraseRequest</code>.
   * @alias module:model/GenerateSeedPhraseRequest
   */
  function GenerateSeedPhraseRequest() {
    _classCallCheck(this, GenerateSeedPhraseRequest);

    GenerateSeedPhraseRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GenerateSeedPhraseRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GenerateSeedPhraseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateSeedPhraseRequest} obj Optional instance to populate.
     * @return {module:model/GenerateSeedPhraseRequest} The populated <code>GenerateSeedPhraseRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GenerateSeedPhraseRequest();

        if (data.hasOwnProperty('n_words')) {
          obj['n_words'] = _ApiClient["default"].convertToType(data['n_words'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GenerateSeedPhraseRequest;
}();
/**
 * The number of words to generate. Must be one of: 12, 15, 18, 21, or 24. Avalanche's default is 24. All other chains we support default to 12. 
 * @member {Number} n_words
 */


GenerateSeedPhraseRequest.prototype['n_words'] = undefined;
var _default = GenerateSeedPhraseRequest;
exports["default"] = _default;