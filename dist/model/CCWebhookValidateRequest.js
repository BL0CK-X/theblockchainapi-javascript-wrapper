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
 * The CCWebhookValidateRequest model module.
 * @module model/CCWebhookValidateRequest
 * @version 1.0.9407
 */
var CCWebhookValidateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CCWebhookValidateRequest</code>.
   * @alias module:model/CCWebhookValidateRequest
   * @param webhookId {String} The unique identifier of the webhook. 
   * @param webhookSignature {Object} The signature we inluded in the webhook. The signature is from the Blockchain API and it ensures that the webhook is from us and not a malicioius actor. 
   * @param timeSent {Number} The time the webhook was sent. 
   */
  function CCWebhookValidateRequest(webhookId, webhookSignature, timeSent) {
    _classCallCheck(this, CCWebhookValidateRequest);

    CCWebhookValidateRequest.initialize(this, webhookId, webhookSignature, timeSent);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CCWebhookValidateRequest, null, [{
    key: "initialize",
    value: function initialize(obj, webhookId, webhookSignature, timeSent) {
      obj['webhook_id'] = webhookId;
      obj['webhook_signature'] = webhookSignature;
      obj['time_sent'] = timeSent;
    }
    /**
     * Constructs a <code>CCWebhookValidateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CCWebhookValidateRequest} obj Optional instance to populate.
     * @return {module:model/CCWebhookValidateRequest} The populated <code>CCWebhookValidateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CCWebhookValidateRequest();

        if (data.hasOwnProperty('webhook_id')) {
          obj['webhook_id'] = _ApiClient["default"].convertToType(data['webhook_id'], 'String');
        }

        if (data.hasOwnProperty('webhook_signature')) {
          obj['webhook_signature'] = _ApiClient["default"].convertToType(data['webhook_signature'], Object);
        }

        if (data.hasOwnProperty('time_sent')) {
          obj['time_sent'] = _ApiClient["default"].convertToType(data['time_sent'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CCWebhookValidateRequest;
}();
/**
 * The unique identifier of the webhook. 
 * @member {String} webhook_id
 */


CCWebhookValidateRequest.prototype['webhook_id'] = undefined;
/**
 * The signature we inluded in the webhook. The signature is from the Blockchain API and it ensures that the webhook is from us and not a malicioius actor. 
 * @member {Object} webhook_signature
 */

CCWebhookValidateRequest.prototype['webhook_signature'] = undefined;
/**
 * The time the webhook was sent. 
 * @member {Number} time_sent
 */

CCWebhookValidateRequest.prototype['time_sent'] = undefined;
var _default = CCWebhookValidateRequest;
exports["default"] = _default;