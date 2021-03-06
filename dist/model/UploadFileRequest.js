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
 * The UploadFileRequest model module.
 * @module model/UploadFileRequest
 * @version 1.0.9
 */
var UploadFileRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UploadFileRequest</code>.
   * @alias module:model/UploadFileRequest
   */
  function UploadFileRequest() {
    _classCallCheck(this, UploadFileRequest);

    UploadFileRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UploadFileRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UploadFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadFileRequest} obj Optional instance to populate.
     * @return {module:model/UploadFileRequest} The populated <code>UploadFileRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UploadFileRequest();

        if (data.hasOwnProperty('upload_method')) {
          obj['upload_method'] = _ApiClient["default"].convertToType(data['upload_method'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UploadFileRequest;
}();
/**
 * @member {module:model/UploadFileRequest.UploadMethodEnum} upload_method
 * @default 'IPFS'
 */


UploadFileRequest.prototype['upload_method'] = 'IPFS';
/**
 * Allowed values for the <code>upload_method</code> property.
 * @enum {String}
 * @readonly
 */

UploadFileRequest['UploadMethodEnum'] = {
  /**
   * value: "IPFS"
   * @const
   */
  "IPFS": "IPFS",

  /**
   * value: "Arweave"
   * @const
   */
  "Arweave": "Arweave",

  /**
   * value: "Filecoin"
   * @const
   */
  "Filecoin": "Filecoin"
};
var _default = UploadFileRequest;
exports["default"] = _default;