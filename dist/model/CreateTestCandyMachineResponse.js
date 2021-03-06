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
 * The CreateTestCandyMachineResponse model module.
 * @module model/CreateTestCandyMachineResponse
 * @version 1.0.9
 */
var CreateTestCandyMachineResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTestCandyMachineResponse</code>.
   * @alias module:model/CreateTestCandyMachineResponse
   * @param candyMachineId {String} The ID of the candy machine created
   */
  function CreateTestCandyMachineResponse(candyMachineId) {
    _classCallCheck(this, CreateTestCandyMachineResponse);

    CreateTestCandyMachineResponse.initialize(this, candyMachineId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateTestCandyMachineResponse, null, [{
    key: "initialize",
    value: function initialize(obj, candyMachineId) {
      obj['candy_machine_id'] = candyMachineId;
    }
    /**
     * Constructs a <code>CreateTestCandyMachineResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestCandyMachineResponse} obj Optional instance to populate.
     * @return {module:model/CreateTestCandyMachineResponse} The populated <code>CreateTestCandyMachineResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      try {
        data = JSON.parse(data);
      } catch (_unused) {}

      if (data) {
        obj = obj || new CreateTestCandyMachineResponse();

        if (data.hasOwnProperty('candy_machine_id')) {
          obj['candy_machine_id'] = _ApiClient["default"].convertToType(data['candy_machine_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateTestCandyMachineResponse;
}();
/**
 * The ID of the candy machine created
 * @member {String} candy_machine_id
 */


CreateTestCandyMachineResponse.prototype['candy_machine_id'] = undefined;
var _default = CreateTestCandyMachineResponse;
exports["default"] = _default;