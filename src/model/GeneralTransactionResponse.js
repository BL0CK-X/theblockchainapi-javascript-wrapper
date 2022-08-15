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
import EthereumTransactionCompiledResponse from './EthereumTransactionCompiledResponse';
import EthereumTransactionMadeResponse from './EthereumTransactionMadeResponse';
import SolanaTransactionCompiledResponse from './SolanaTransactionCompiledResponse';
import SolanaTransactionMadeResponse from './SolanaTransactionMadeResponse';

/**
 * The GeneralTransactionResponse model module.
 * @module model/GeneralTransactionResponse
 * @version 1.0.9407
 */
class GeneralTransactionResponse {
    /**
     * Constructs a new <code>GeneralTransactionResponse</code>.
     * @alias module:model/GeneralTransactionResponse
     * @implements module:model/SolanaTransactionMadeResponse
     * @implements module:model/SolanaTransactionCompiledResponse
     * @implements module:model/EthereumTransactionMadeResponse
     * @implements module:model/EthereumTransactionCompiledResponse
     */
    constructor() { 
        SolanaTransactionMadeResponse.initialize(this);SolanaTransactionCompiledResponse.initialize(this);EthereumTransactionMadeResponse.initialize(this);EthereumTransactionCompiledResponse.initialize(this);
        GeneralTransactionResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeneralTransactionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeneralTransactionResponse} obj Optional instance to populate.
     * @return {module:model/GeneralTransactionResponse} The populated <code>GeneralTransactionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeneralTransactionResponse();
            SolanaTransactionMadeResponse.constructFromObject(data, obj);
            SolanaTransactionCompiledResponse.constructFromObject(data, obj);
            EthereumTransactionMadeResponse.constructFromObject(data, obj);
            EthereumTransactionCompiledResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('transaction_blockchain_identifier')) {
                obj['transaction_blockchain_identifier'] = ApiClient.convertToType(data['transaction_blockchain_identifier'], 'String');
            }
            if (data.hasOwnProperty('transaction_confirmed')) {
                obj['transaction_confirmed'] = ApiClient.convertToType(data['transaction_confirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('b58_compiled_transaction')) {
                obj['b58_compiled_transaction'] = ApiClient.convertToType(data['b58_compiled_transaction'], 'String');
            }
            if (data.hasOwnProperty('compiled_transaction')) {
                obj['compiled_transaction'] = ApiClient.convertToType(data['compiled_transaction'], Object);
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('gas')) {
                obj['gas'] = ApiClient.convertToType(data['gas'], 'Number');
            }
            if (data.hasOwnProperty('max_fee_per_gas')) {
                obj['max_fee_per_gas'] = ApiClient.convertToType(data['max_fee_per_gas'], 'Number');
            }
            if (data.hasOwnProperty('max_priority_fee_per_gas')) {
                obj['max_priority_fee_per_gas'] = ApiClient.convertToType(data['max_priority_fee_per_gas'], 'Number');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */
GeneralTransactionResponse.prototype['transaction_blockchain_identifier'] = undefined;

/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */
GeneralTransactionResponse.prototype['transaction_confirmed'] = undefined;

/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */
GeneralTransactionResponse.prototype['b58_compiled_transaction'] = undefined;

/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */
GeneralTransactionResponse.prototype['compiled_transaction'] = undefined;

/**
 * Indicates the chain that the transaction was compiled for (e.g., ropsten or mainnet). 
 * @member {String} chain_id
 */
GeneralTransactionResponse.prototype['chain_id'] = undefined;

/**
 * The transaction data 
 * @member {String} data
 */
GeneralTransactionResponse.prototype['data'] = undefined;

/**
 * The address expected to sign and submit the transaction 
 * @member {String} from
 */
GeneralTransactionResponse.prototype['from'] = undefined;

/**
 * The contract. This should match your provided value for `token_blockchain_identifier`. 
 * @member {String} to
 */
GeneralTransactionResponse.prototype['to'] = undefined;

/**
 * @member {Number} gas
 */
GeneralTransactionResponse.prototype['gas'] = undefined;

/**
 * @member {Number} max_fee_per_gas
 */
GeneralTransactionResponse.prototype['max_fee_per_gas'] = undefined;

/**
 * @member {Number} max_priority_fee_per_gas
 */
GeneralTransactionResponse.prototype['max_priority_fee_per_gas'] = undefined;

/**
 * @member {Number} nonce
 */
GeneralTransactionResponse.prototype['nonce'] = undefined;

/**
 * @member {Number} value
 */
GeneralTransactionResponse.prototype['value'] = undefined;


// Implement SolanaTransactionMadeResponse interface:
/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */
SolanaTransactionMadeResponse.prototype['transaction_blockchain_identifier'] = undefined;
/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */
SolanaTransactionMadeResponse.prototype['transaction_confirmed'] = undefined;
// Implement SolanaTransactionCompiledResponse interface:
/**
 * A base58 encoded byte array in string representation. Really easy to submit to Phantom. See <a href=\"https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\" target=\"_blank\">here</a> for an example on how to submit it to a Phantom wallet for signing.
 * @member {String} b58_compiled_transaction
 */
SolanaTransactionCompiledResponse.prototype['b58_compiled_transaction'] = undefined;
/**
 * An array of integers representing the bytes of the transaction
 * @member {Object} compiled_transaction
 */
SolanaTransactionCompiledResponse.prototype['compiled_transaction'] = undefined;
// Implement EthereumTransactionMadeResponse interface:
/**
 * The identifier of the transaction
 * @member {String} transaction_blockchain_identifier
 */
EthereumTransactionMadeResponse.prototype['transaction_blockchain_identifier'] = undefined;
/**
 * Whether or not the transaction was confirmed
 * @member {Boolean} transaction_confirmed
 */
EthereumTransactionMadeResponse.prototype['transaction_confirmed'] = undefined;
// Implement EthereumTransactionCompiledResponse interface:
/**
 * Indicates the chain that the transaction was compiled for (e.g., ropsten or mainnet). 
 * @member {String} chain_id
 */
EthereumTransactionCompiledResponse.prototype['chain_id'] = undefined;
/**
 * The transaction data 
 * @member {String} data
 */
EthereumTransactionCompiledResponse.prototype['data'] = undefined;
/**
 * The address expected to sign and submit the transaction 
 * @member {String} from
 */
EthereumTransactionCompiledResponse.prototype['from'] = undefined;
/**
 * The contract. This should match your provided value for `token_blockchain_identifier`. 
 * @member {String} to
 */
EthereumTransactionCompiledResponse.prototype['to'] = undefined;
/**
 * @member {Number} gas
 */
EthereumTransactionCompiledResponse.prototype['gas'] = undefined;
/**
 * @member {Number} max_fee_per_gas
 */
EthereumTransactionCompiledResponse.prototype['max_fee_per_gas'] = undefined;
/**
 * @member {Number} max_priority_fee_per_gas
 */
EthereumTransactionCompiledResponse.prototype['max_priority_fee_per_gas'] = undefined;
/**
 * @member {Number} nonce
 */
EthereumTransactionCompiledResponse.prototype['nonce'] = undefined;
/**
 * @member {Number} value
 */
EthereumTransactionCompiledResponse.prototype['value'] = undefined;




export default GeneralTransactionResponse;

