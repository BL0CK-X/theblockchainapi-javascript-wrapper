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
 * The GetCandyDetailsRequest model module.
 * @module model/GetCandyDetailsRequest
 * @version 1.0.9
 */
var GetCandyDetailsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GetCandyDetailsRequest</code>.
   * @alias module:model/GetCandyDetailsRequest
   * @param candyMachineId {String} The ID of the candy machine 
   */
  function GetCandyDetailsRequest(candyMachineId) {
    _classCallCheck(this, GetCandyDetailsRequest);

    GetCandyDetailsRequest.initialize(this, candyMachineId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetCandyDetailsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, candyMachineId) {
      obj['candy_machine_id'] = candyMachineId;
    }
    /**
     * Constructs a <code>GetCandyDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyDetailsRequest} obj Optional instance to populate.
     * @return {module:model/GetCandyDetailsRequest} The populated <code>GetCandyDetailsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetCandyDetailsRequest();

        if (data.hasOwnProperty('candy_machine_id')) {
          obj['candy_machine_id'] = _ApiClient["default"].convertToType(data['candy_machine_id'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetCandyDetailsRequest;
}();
/**
 * The ID of the candy machine 
 * @member {String} candy_machine_id
 */


GetCandyDetailsRequest.prototype['candy_machine_id'] = undefined;
/**
 * @member {module:model/GetCandyDetailsRequest.NetworkEnum} network
 * @default 'devnet'
 */

GetCandyDetailsRequest.prototype['network'] = 'devnet';
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

GetCandyDetailsRequest['NetworkEnum'] = {
  /**
   * value: "devnet"
   * @const
   */
  "devnet": "devnet",

  /**
   * value: "mainnet-beta"
   * @const
   */
  "mainnet-beta": "mainnet-beta"
};
var _default = GetCandyDetailsRequest;
exports["default"] = _default;