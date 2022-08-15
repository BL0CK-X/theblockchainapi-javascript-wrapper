"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CCProjectCreateRequestCustomerIdToCollect = _interopRequireDefault(require("./CCProjectCreateRequestCustomerIdToCollect"));

var _CCProjectCreateRequestPayoutMethod = _interopRequireDefault(require("./CCProjectCreateRequestPayoutMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CCProject model module.
 * @module model/CCProject
 * @version 1.0.9407
 */
var CCProject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CCProject</code>.
   * You can change any of these parameters after creating the project. None of these parameters are required. 
   * @alias module:model/CCProject
   * @param projectId {String} The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
   * @param name {String} The name of the project. This is shown to your users and should identify your company or organization. 
   */
  function CCProject(projectId, name) {
    _classCallCheck(this, CCProject);

    CCProject.initialize(this, projectId, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CCProject, null, [{
    key: "initialize",
    value: function initialize(obj, projectId, name) {
      obj['project_id'] = projectId;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>CCProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CCProject} obj Optional instance to populate.
     * @return {module:model/CCProject} The populated <code>CCProject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CCProject();

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('webhook')) {
          obj['webhook'] = _ApiClient["default"].convertToType(data['webhook'], 'String');
        }

        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }

        if (data.hasOwnProperty('discord_webhook')) {
          obj['discord_webhook'] = _ApiClient["default"].convertToType(data['discord_webhook'], 'String');
        }

        if (data.hasOwnProperty('logo_url')) {
          obj['logo_url'] = _ApiClient["default"].convertToType(data['logo_url'], 'String');
        }

        if (data.hasOwnProperty('customer_id_to_collect')) {
          obj['customer_id_to_collect'] = _CCProjectCreateRequestCustomerIdToCollect["default"].constructFromObject(data['customer_id_to_collect']);
        }

        if (data.hasOwnProperty('success_url')) {
          obj['success_url'] = _ApiClient["default"].convertToType(data['success_url'], 'String');
        }

        if (data.hasOwnProperty('payout_method')) {
          obj['payout_method'] = _CCProjectCreateRequestPayoutMethod["default"].constructFromObject(data['payout_method']);
        }
      }

      return obj;
    }
  }]);

  return CCProject;
}();
/**
 * The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
 * @member {String} project_id
 */


CCProject.prototype['project_id'] = undefined;
/**
 * The name of the project. This is shown to your users and should identify your company or organization. 
 * @member {String} name
 */

CCProject.prototype['name'] = undefined;
/**
 * The description of your project / company. 
 * @member {String} description
 */

CCProject.prototype['description'] = undefined;
/**
 * A URL that identifies where we should make an API request to notify you of a new payment (e.g., api.myproject.com/crypto_payments/webhook). Learn more [here](#tag/CC-Webhook/operation/getCCWebhook). 
 * @member {String} webhook
 */

CCProject.prototype['webhook'] = undefined;
/**
 * The website of your project / company. 
 * @member {String} website
 */

CCProject.prototype['website'] = undefined;
/**
 * A Discord webhook. We will send a message to this channel to notify of payment. Learn more [here](). 
 * @member {String} discord_webhook
 */

CCProject.prototype['discord_webhook'] = undefined;
/**
 * A URL of your logo. 
 * @member {String} logo_url
 */

CCProject.prototype['logo_url'] = undefined;
/**
 * @member {module:model/CCProjectCreateRequestCustomerIdToCollect} customer_id_to_collect
 */

CCProject.prototype['customer_id_to_collect'] = undefined;
/**
 * Where to redirect customers after payment. If not supplied, customers will be redirected to checkout.blockchainapi.com/me to view their subscriptions. 
 * @member {String} success_url
 */

CCProject.prototype['success_url'] = undefined;
/**
 * @member {module:model/CCProjectCreateRequestPayoutMethod} payout_method
 */

CCProject.prototype['payout_method'] = undefined;
var _default = CCProject;
exports["default"] = _default;