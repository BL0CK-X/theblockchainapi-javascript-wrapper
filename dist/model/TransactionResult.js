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
 * The TransactionResult model module.
 * @module model/TransactionResult
 * @version 1.0.9
 */
var TransactionResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TransactionResult</code>.
   * @alias module:model/TransactionResult
   */
  function TransactionResult() {
    _classCallCheck(this, TransactionResult);

    TransactionResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TransactionResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TransactionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionResult} obj Optional instance to populate.
     * @return {module:model/TransactionResult} The populated <code>TransactionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TransactionResult();

        if (data.hasOwnProperty('block_time')) {
          obj['block_time'] = _ApiClient["default"].convertToType(data['block_time'], 'Number');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], Object);
        }

        if (data.hasOwnProperty('slot')) {
          obj['slot'] = _ApiClient["default"].convertToType(data['slot'], 'Number');
        }

        if (data.hasOwnProperty('transaction')) {
          obj['transaction'] = _ApiClient["default"].convertToType(data['transaction'], Object);
        }
      }

      return obj;
    }
  }]);

  return TransactionResult;
}();
/**
 * @member {Number} block_time
 */


TransactionResult.prototype['block_time'] = undefined;
/**
 * @member {Object} meta
 */

TransactionResult.prototype['meta'] = undefined;
/**
 * @member {Number} slot
 */

TransactionResult.prototype['slot'] = undefined;
/**
 * @member {Object} transaction
 */

TransactionResult.prototype['transaction'] = undefined;
var _default = TransactionResult;
exports["default"] = _default;