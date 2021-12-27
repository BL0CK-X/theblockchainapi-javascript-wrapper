/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.theblockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@theblockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@theblockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@theblockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/_BlockX_\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 500 free credits.</b>  You can learn more about our pricing <a href=\"https://dashboard.theblockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
 *
 * The version of the OpenAPI document: null
 * Contact: info@theblockchainapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetCandyMetadataResponseCreators from './GetCandyMetadataResponseCreators';

/**
 * The GetCandyMetadataResponse model module.
 * @module model/GetCandyMetadataResponse
 * @version null
 */
class GetCandyMetadataResponse {
    /**
     * Constructs a new <code>GetCandyMetadataResponse</code>.
     * @alias module:model/GetCandyMetadataResponse
     */
    constructor() { 
        
        GetCandyMetadataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCandyMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCandyMetadataResponse} obj Optional instance to populate.
     * @return {module:model/GetCandyMetadataResponse} The populated <code>GetCandyMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCandyMetadataResponse();

            if (data.hasOwnProperty('authority')) {
                obj['authority'] = ApiClient.convertToType(data['authority'], 'String');
            }
            if (data.hasOwnProperty('bump')) {
                obj['bump'] = ApiClient.convertToType(data['bump'], 'Number');
            }
            if (data.hasOwnProperty('candy_machine_id')) {
                obj['candy_machine_id'] = ApiClient.convertToType(data['candy_machine_id'], 'String');
            }
            if (data.hasOwnProperty('config_address')) {
                obj['config_address'] = ApiClient.convertToType(data['config_address'], 'String');
            }
            if (data.hasOwnProperty('creators')) {
                obj['creators'] = ApiClient.convertToType(data['creators'], [GetCandyMetadataResponseCreators]);
            }
            if (data.hasOwnProperty('go_live_date')) {
                obj['go_live_date'] = ApiClient.convertToType(data['go_live_date'], 'Number');
            }
            if (data.hasOwnProperty('is_mutable')) {
                obj['is_mutable'] = ApiClient.convertToType(data['is_mutable'], 'Boolean');
            }
            if (data.hasOwnProperty('items_available')) {
                obj['items_available'] = ApiClient.convertToType(data['items_available'], 'Number');
            }
            if (data.hasOwnProperty('items_redeemed')) {
                obj['items_redeemed'] = ApiClient.convertToType(data['items_redeemed'], 'Number');
            }
            if (data.hasOwnProperty('max_number_of_lines')) {
                obj['max_number_of_lines'] = ApiClient.convertToType(data['max_number_of_lines'], 'Number');
            }
            if (data.hasOwnProperty('max_supply')) {
                obj['max_supply'] = ApiClient.convertToType(data['max_supply'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('retain_authority')) {
                obj['retain_authority'] = ApiClient.convertToType(data['retain_authority'], 'Boolean');
            }
            if (data.hasOwnProperty('seller_fee_basis_points')) {
                obj['seller_fee_basis_points'] = ApiClient.convertToType(data['seller_fee_basis_points'], 'Number');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('token_mint')) {
                obj['token_mint'] = ApiClient.convertToType(data['token_mint'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = ApiClient.convertToType(data['wallet'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The update authority of the candy machine
 * @member {String} authority
 */
GetCandyMetadataResponse.prototype['authority'] = undefined;

/**
 * @member {Number} bump
 */
GetCandyMetadataResponse.prototype['bump'] = undefined;

/**
 * The ID of the candy machine 
 * @member {String} candy_machine_id
 */
GetCandyMetadataResponse.prototype['candy_machine_id'] = undefined;

/**
 * The configuration public key address of the candy machine 
 * @member {String} config_address
 */
GetCandyMetadataResponse.prototype['config_address'] = undefined;

/**
 * @member {Array.<module:model/GetCandyMetadataResponseCreators>} creators
 */
GetCandyMetadataResponse.prototype['creators'] = undefined;

/**
 * The unix timestamp of the start date of the candy machine 
 * @member {Number} go_live_date
 */
GetCandyMetadataResponse.prototype['go_live_date'] = undefined;

/**
 * @member {Boolean} is_mutable
 */
GetCandyMetadataResponse.prototype['is_mutable'] = undefined;

/**
 * The number of NFTs available for mint from the candy machine 
 * @member {Number} items_available
 */
GetCandyMetadataResponse.prototype['items_available'] = undefined;

/**
 * The number of NFTs minted already from the candy machine 
 * @member {Number} items_redeemed
 */
GetCandyMetadataResponse.prototype['items_redeemed'] = undefined;

/**
 * @member {Number} max_number_of_lines
 */
GetCandyMetadataResponse.prototype['max_number_of_lines'] = undefined;

/**
 * @member {Number} max_supply
 */
GetCandyMetadataResponse.prototype['max_supply'] = undefined;

/**
 * The price in Lamports for minting an NFT from the candy machine. 1e9 Lamport  = 1 SOL 
 * @member {Number} price
 */
GetCandyMetadataResponse.prototype['price'] = undefined;

/**
 * @member {Boolean} retain_authority
 */
GetCandyMetadataResponse.prototype['retain_authority'] = undefined;

/**
 * The royalty the creators receive on each sale after the primary sale (the initial minting) (denominated in basis points (e.g., 75 basis points = 0.75%)) 
 * @member {Number} seller_fee_basis_points
 */
GetCandyMetadataResponse.prototype['seller_fee_basis_points'] = undefined;

/**
 * @member {String} symbol
 */
GetCandyMetadataResponse.prototype['symbol'] = undefined;

/**
 * @member {String} token_mint
 */
GetCandyMetadataResponse.prototype['token_mint'] = undefined;

/**
 * The uuid of the candy machine
 * @member {String} uuid
 */
GetCandyMetadataResponse.prototype['uuid'] = undefined;

/**
 * The public key address of the wallet that recevies the proceeds from NFT mints 
 * @member {String} wallet
 */
GetCandyMetadataResponse.prototype['wallet'] = undefined;






export default GetCandyMetadataResponse;

