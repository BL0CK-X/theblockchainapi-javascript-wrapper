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
 * The CandyMachineSearchRequest model module.
 * @module model/CandyMachineSearchRequest
 * @version 1.0.9
 */
var CandyMachineSearchRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CandyMachineSearchRequest</code>.
   * @alias module:model/CandyMachineSearchRequest
   */
  function CandyMachineSearchRequest() {
    _classCallCheck(this, CandyMachineSearchRequest);

    CandyMachineSearchRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CandyMachineSearchRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CandyMachineSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandyMachineSearchRequest} obj Optional instance to populate.
     * @return {module:model/CandyMachineSearchRequest} The populated <code>CandyMachineSearchRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CandyMachineSearchRequest();

        if (data.hasOwnProperty('update_authority')) {
          obj['update_authority'] = _ApiClient["default"].convertToType(data['update_authority'], 'String');
        }

        if (data.hasOwnProperty('update_authority_search_method')) {
          obj['update_authority_search_method'] = _ApiClient["default"].convertToType(data['update_authority_search_method'], 'String');
        }

        if (data.hasOwnProperty('config_address')) {
          obj['config_address'] = _ApiClient["default"].convertToType(data['config_address'], 'String');
        }

        if (data.hasOwnProperty('config_address_search_method')) {
          obj['config_address_search_method'] = _ApiClient["default"].convertToType(data['config_address_search_method'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('uuid_search_method')) {
          obj['uuid_search_method'] = _ApiClient["default"].convertToType(data['uuid_search_method'], 'String');
        }

        if (data.hasOwnProperty('symbol')) {
          obj['symbol'] = _ApiClient["default"].convertToType(data['symbol'], 'String');
        }

        if (data.hasOwnProperty('symbol_search_method')) {
          obj['symbol_search_method'] = _ApiClient["default"].convertToType(data['symbol_search_method'], 'String');
        }

        if (data.hasOwnProperty('nft_name')) {
          obj['nft_name'] = _ApiClient["default"].convertToType(data['nft_name'], 'String');
        }

        if (data.hasOwnProperty('nft_name_index')) {
          obj['nft_name_index'] = _ApiClient["default"].convertToType(data['nft_name_index'], 'String');
        }

        if (data.hasOwnProperty('nft_name_search_method')) {
          obj['nft_name_search_method'] = _ApiClient["default"].convertToType(data['nft_name_search_method'], 'String');
        }

        if (data.hasOwnProperty('network')) {
          obj['network'] = _ApiClient["default"].convertToType(data['network'], 'String');
        }

        if (data.hasOwnProperty('candy_machine_contract_version')) {
          obj['candy_machine_contract_version'] = _ApiClient["default"].convertToType(data['candy_machine_contract_version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CandyMachineSearchRequest;
}();
/**
 * The public key of the update authority of the candy machine
 * @member {String} update_authority
 */


CandyMachineSearchRequest.prototype['update_authority'] = undefined;
/**
 * Only `exact_match` supported at this time
 * @member {module:model/CandyMachineSearchRequest.UpdateAuthoritySearchMethodEnum} update_authority_search_method
 * @default 'exact_match'
 */

CandyMachineSearchRequest.prototype['update_authority_search_method'] = 'exact_match';
/**
 * The public key of the configuration of the candy machine
 * @member {String} config_address
 */

CandyMachineSearchRequest.prototype['config_address'] = undefined;
/**
 * Only `exact_match` supported at this time
 * @member {module:model/CandyMachineSearchRequest.ConfigAddressSearchMethodEnum} config_address_search_method
 * @default 'exact_match'
 */

CandyMachineSearchRequest.prototype['config_address_search_method'] = 'exact_match';
/**
 * The alphanumeric string of length six that corresponds to the candy machine. This is NOT the candy machine ID.  This is the first six letters of the configuration address and is also used to identify the candy machine. An example is `4zKV6i`. 
 * @member {String} uuid
 */

CandyMachineSearchRequest.prototype['uuid'] = undefined;
/**
 * Only `exact_match` supported at this time
 * @member {module:model/CandyMachineSearchRequest.UuidSearchMethodEnum} uuid_search_method
 * @default 'exact_match'
 */

CandyMachineSearchRequest.prototype['uuid_search_method'] = 'exact_match';
/**
 * The symbol associated with the candy machine
 * @member {String} symbol
 */

CandyMachineSearchRequest.prototype['symbol'] = undefined;
/**
 * @member {module:model/CandyMachineSearchRequest.SymbolSearchMethodEnum} symbol_search_method
 * @default 'exact_match'
 */

CandyMachineSearchRequest.prototype['symbol_search_method'] = 'exact_match';
/**
 * The name of an NFT on the candy machine, minted or unminted. For example, to find The Solana Money Boys candy machine, you already know that each NFT is named \"Solana Money Boy #0\", \"Solana Money Boy #1\", and so on. So you could search with  nft_name=\"Solana Money Boy #0\", nft_name_index=0, nft_name_search_method='exact_match', for example, which would return the candy machine ID. This also works with candy machines that are not live but are uploaded. 
 * @member {String} nft_name
 */

CandyMachineSearchRequest.prototype['nft_name'] = undefined;
/**
 * The index of the NFT to check, e.g., the 2nd NFT would have an index of 1. We cannot search all NFTs on a candy machine currently, so you must search an NFT at a particular position, such as the first, second, and so on. In general, nft_name_index=0 works for most use cases. 
 * @member {String} nft_name_index
 * @default '0'
 */

CandyMachineSearchRequest.prototype['nft_name_index'] = '0';
/**
 * @member {module:model/CandyMachineSearchRequest.NftNameSearchMethodEnum} nft_name_search_method
 * @default 'exact_match'
 */

CandyMachineSearchRequest.prototype['nft_name_search_method'] = 'exact_match';
/**
 * @member {module:model/CandyMachineSearchRequest.NetworkEnum} network
 * @default 'devnet'
 */

CandyMachineSearchRequest.prototype['network'] = 'devnet';
/**
 * The candy machine contract you want to search.  If you want to search `v1` candy machines, set this to `v1`. If you want to search `v2` candy machines. set this to `v2`. 
 * @member {module:model/CandyMachineSearchRequest.CandyMachineContractVersionEnum} candy_machine_contract_version
 * @default 'v1'
 */

CandyMachineSearchRequest.prototype['candy_machine_contract_version'] = 'v1';
/**
 * Allowed values for the <code>update_authority_search_method</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['UpdateAuthoritySearchMethodEnum'] = {
  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>config_address_search_method</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['ConfigAddressSearchMethodEnum'] = {
  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>uuid_search_method</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['UuidSearchMethodEnum'] = {
  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>symbol_search_method</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['SymbolSearchMethodEnum'] = {
  /**
   * value: "begins_with"
   * @const
   */
  "begins_with": "begins_with",

  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>nft_name_search_method</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['NftNameSearchMethodEnum'] = {
  /**
   * value: "begins_with"
   * @const
   */
  "begins_with": "begins_with",

  /**
   * value: "exact_match"
   * @const
   */
  "exact_match": "exact_match"
};
/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['NetworkEnum'] = {
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
/**
 * Allowed values for the <code>candy_machine_contract_version</code> property.
 * @enum {String}
 * @readonly
 */

CandyMachineSearchRequest['CandyMachineContractVersionEnum'] = {
  /**
   * value: "v1"
   * @const
   */
  "v1": "v1",

  /**
   * value: "v2"
   * @const
   */
  "v2": "v2"
};
var _default = CandyMachineSearchRequest;
exports["default"] = _default;