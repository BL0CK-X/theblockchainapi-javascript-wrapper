/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/BlockchainAP1\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 50,000 free credits each month.</b> Each endpoint costs a certain amount credits. Scroll below to any endpoint (i.e., function) to see how much each endpoint costs. (Or CMD+F `Cost: 0 Credit`, for example)  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-csharp-wrapper\" target = \"_blank\">C#</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-dart-wrapper\" target = \"_blank\">Dart</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
 *
 * The version of the OpenAPI document: null
 * Contact: info@blockchainapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EthereumTransaction from './EthereumTransaction';
import SolanaTransaction from './SolanaTransaction';

/**
 * The GeneralTransaction model module.
 * @module model/GeneralTransaction
 * @version 1.0.9407
 */
class GeneralTransaction {
    /**
     * Constructs a new <code>GeneralTransaction</code>.
     * @alias module:model/GeneralTransaction
     * @implements module:model/EthereumTransaction
     * @implements module:model/SolanaTransaction
     */
    constructor() { 
        EthereumTransaction.initialize(this);SolanaTransaction.initialize(this);
        GeneralTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeneralTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralTransaction} obj Optional instance to populate.
     * @return {module:model/GeneralTransaction} The populated <code>GeneralTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralTransaction();
            EthereumTransaction.constructFromObject(data, obj);
            SolanaTransaction.constructFromObject(data, obj);

            if (data.hasOwnProperty('access_list')) {
                obj['access_list'] = ApiClient.convertToType(data['access_list'], Object);
            }
            if (data.hasOwnProperty('block_hash')) {
                obj['block_hash'] = ApiClient.convertToType(data['block_hash'], 'String');
            }
            if (data.hasOwnProperty('block_number')) {
                obj['block_number'] = ApiClient.convertToType(data['block_number'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('gas')) {
                obj['gas'] = ApiClient.convertToType(data['gas'], 'String');
            }
            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('input')) {
                obj['input'] = ApiClient.convertToType(data['input'], 'String');
            }
            if (data.hasOwnProperty('max_fee_per_gas')) {
                obj['max_fee_per_gas'] = ApiClient.convertToType(data['max_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('max_priority_fee_per_gas')) {
                obj['max_priority_fee_per_gas'] = ApiClient.convertToType(data['max_priority_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'String');
            }
            if (data.hasOwnProperty('r')) {
                obj['r'] = ApiClient.convertToType(data['r'], 'String');
            }
            if (data.hasOwnProperty('s')) {
                obj['s'] = ApiClient.convertToType(data['s'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('transaction_index')) {
                obj['transaction_index'] = ApiClient.convertToType(data['transaction_index'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('v')) {
                obj['v'] = ApiClient.convertToType(data['v'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('block_time')) {
                obj['block_time'] = ApiClient.convertToType(data['block_time'], 'Number');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
            if (data.hasOwnProperty('slot')) {
                obj['slot'] = ApiClient.convertToType(data['slot'], 'Number');
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = ApiClient.convertToType(data['transaction'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Object} access_list
 */
GeneralTransaction.prototype['access_list'] = undefined;

/**
 * @member {String} block_hash
 */
GeneralTransaction.prototype['block_hash'] = undefined;

/**
 * @member {String} block_number
 */
GeneralTransaction.prototype['block_number'] = undefined;

/**
 * @member {String} chain_id
 */
GeneralTransaction.prototype['chain_id'] = undefined;

/**
 * @member {String} from
 */
GeneralTransaction.prototype['from'] = undefined;

/**
 * @member {String} gas
 */
GeneralTransaction.prototype['gas'] = undefined;

/**
 * @member {String} gas_price
 */
GeneralTransaction.prototype['gas_price'] = undefined;

/**
 * @member {String} hash
 */
GeneralTransaction.prototype['hash'] = undefined;

/**
 * @member {String} input
 */
GeneralTransaction.prototype['input'] = undefined;

/**
 * @member {String} max_fee_per_gas
 */
GeneralTransaction.prototype['max_fee_per_gas'] = undefined;

/**
 * @member {String} max_priority_fee_per_gas
 */
GeneralTransaction.prototype['max_priority_fee_per_gas'] = undefined;

/**
 * @member {String} nonce
 */
GeneralTransaction.prototype['nonce'] = undefined;

/**
 * @member {String} r
 */
GeneralTransaction.prototype['r'] = undefined;

/**
 * @member {String} s
 */
GeneralTransaction.prototype['s'] = undefined;

/**
 * @member {String} to
 */
GeneralTransaction.prototype['to'] = undefined;

/**
 * @member {String} transaction_index
 */
GeneralTransaction.prototype['transaction_index'] = undefined;

/**
 * @member {String} type
 */
GeneralTransaction.prototype['type'] = undefined;

/**
 * @member {String} v
 */
GeneralTransaction.prototype['v'] = undefined;

/**
 * @member {String} value
 */
GeneralTransaction.prototype['value'] = undefined;

/**
 * @member {Number} block_time
 */
GeneralTransaction.prototype['block_time'] = undefined;

/**
 * @member {Object} meta
 */
GeneralTransaction.prototype['meta'] = undefined;

/**
 * @member {Number} slot
 */
GeneralTransaction.prototype['slot'] = undefined;

/**
 * @member {Object} transaction
 */
GeneralTransaction.prototype['transaction'] = undefined;


// Implement EthereumTransaction interface:
/**
 * @member {Object} access_list
 */
EthereumTransaction.prototype['access_list'] = undefined;
/**
 * @member {String} block_hash
 */
EthereumTransaction.prototype['block_hash'] = undefined;
/**
 * @member {String} block_number
 */
EthereumTransaction.prototype['block_number'] = undefined;
/**
 * @member {String} chain_id
 */
EthereumTransaction.prototype['chain_id'] = undefined;
/**
 * @member {String} from
 */
EthereumTransaction.prototype['from'] = undefined;
/**
 * @member {String} gas
 */
EthereumTransaction.prototype['gas'] = undefined;
/**
 * @member {String} gas_price
 */
EthereumTransaction.prototype['gas_price'] = undefined;
/**
 * @member {String} hash
 */
EthereumTransaction.prototype['hash'] = undefined;
/**
 * @member {String} input
 */
EthereumTransaction.prototype['input'] = undefined;
/**
 * @member {String} max_fee_per_gas
 */
EthereumTransaction.prototype['max_fee_per_gas'] = undefined;
/**
 * @member {String} max_priority_fee_per_gas
 */
EthereumTransaction.prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {String} nonce
 */
EthereumTransaction.prototype['nonce'] = undefined;
/**
 * @member {String} r
 */
EthereumTransaction.prototype['r'] = undefined;
/**
 * @member {String} s
 */
EthereumTransaction.prototype['s'] = undefined;
/**
 * @member {String} to
 */
EthereumTransaction.prototype['to'] = undefined;
/**
 * @member {String} transaction_index
 */
EthereumTransaction.prototype['transaction_index'] = undefined;
/**
 * @member {String} type
 */
EthereumTransaction.prototype['type'] = undefined;
/**
 * @member {String} v
 */
EthereumTransaction.prototype['v'] = undefined;
/**
 * @member {String} value
 */
EthereumTransaction.prototype['value'] = undefined;
// Implement SolanaTransaction interface:
/**
 * @member {Number} block_time
 */
SolanaTransaction.prototype['block_time'] = undefined;
/**
 * @member {Object} meta
 */
SolanaTransaction.prototype['meta'] = undefined;
/**
 * @member {Number} slot
 */
SolanaTransaction.prototype['slot'] = undefined;
/**
 * @member {Object} transaction
 */
SolanaTransaction.prototype['transaction'] = undefined;




export default GeneralTransaction;

