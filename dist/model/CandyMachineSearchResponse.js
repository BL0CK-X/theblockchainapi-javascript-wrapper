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
 * The CandyMachineSearchResponse model module.
 * @module model/CandyMachineSearchResponse
 * @version null
 */
var CandyMachineSearchResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandyMachineSearchResponse</code>.
   * @alias module:model/CandyMachineSearchResponse
   * @param configAddress {String} The config address of the candy machine
   */
  function CandyMachineSearchResponse(configAddress) {
    _classCallCheck(this, CandyMachineSearchResponse);

    CandyMachineSearchResponse.initialize(this, configAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandyMachineSearchResponse, null, [{
    key: "initialize",
    value: function initialize(obj, configAddress) {
      obj['config_address'] = configAddress;
    }
    /**
     * Constructs a <code>CandyMachineSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandyMachineSearchResponse} obj Optional instance to populate.
     * @return {module:model/CandyMachineSearchResponse} The populated <code>CandyMachineSearchResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandyMachineSearchResponse();

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CandyMachineSearchResponse;
}();
/**
 * The config address of the candy machine
 * @member {String} config_address
 */


CandyMachineSearchResponse.prototype['config_address'] = undefined;
var _default = CandyMachineSearchResponse;
exports["default"] = _default;