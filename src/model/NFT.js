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
import NFTCollection from './NFTCollection';
import NFTData from './NFTData';

/**
 * The NFT model module.
 * @module model/NFT
 * @version 1.0.9407
 */
class NFT {
    /**
     * Constructs a new <code>NFT</code>.
     * @alias module:model/NFT
     */
    constructor() { 
        
        NFT.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NFT</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFT} obj Optional instance to populate.
     * @return {module:model/NFT} The populated <code>NFT</code> instance.
     */
    static constructFromObject(data, obj) {
        try { data = JSON.parse(data); } catch (_unused) { }
        
        if (data) {
            obj = obj || new NFT();

            if (data.hasOwnProperty('confirmed')) {
                obj['confirmed'] = ApiClient.convertToType(data['confirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = NFTData.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('is_mutable')) {
                obj['is_mutable'] = ApiClient.convertToType(data['is_mutable'], 'Boolean');
            }
            if (data.hasOwnProperty('mint')) {
                obj['mint'] = ApiClient.convertToType(data['mint'], 'String');
            }
            if (data.hasOwnProperty('primary_sale_happened')) {
                obj['primary_sale_happened'] = ApiClient.convertToType(data['primary_sale_happened'], 'Boolean');
            }
            if (data.hasOwnProperty('update_authority')) {
                obj['update_authority'] = ApiClient.convertToType(data['update_authority'], 'String');
            }
            if (data.hasOwnProperty('seller_fee_basis_points')) {
                obj['seller_fee_basis_points'] = ApiClient.convertToType(data['seller_fee_basis_points'], 'Number');
            }
            if (data.hasOwnProperty('mint_secret_recovery_phrase')) {
                obj['mint_secret_recovery_phrase'] = ApiClient.convertToType(data['mint_secret_recovery_phrase'], 'String');
            }
            if (data.hasOwnProperty('explorer_url')) {
                obj['explorer_url'] = ApiClient.convertToType(data['explorer_url'], 'String');
            }
            if (data.hasOwnProperty('metadata_account')) {
                obj['metadata_account'] = ApiClient.convertToType(data['metadata_account'], 'String');
            }
            if (data.hasOwnProperty('edition_nonce')) {
                obj['edition_nonce'] = ApiClient.convertToType(data['edition_nonce'], 'Number');
            }
            if (data.hasOwnProperty('token_standard')) {
                obj['token_standard'] = ApiClient.convertToType(data['token_standard'], 'Number');
            }
            if (data.hasOwnProperty('collection')) {
                obj['collection'] = NFTCollection.constructFromObject(data['collection']);
            }
            if (data.hasOwnProperty('uses')) {
                obj['uses'] = ApiClient.convertToType(data['uses'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Whether or not the NFT mint was confirmed or simply submitted for processing. The status depends on your input for `wait_for_confirmation`. This only is returned when you are minting an NFT, not when searching or retrieving the metadata.
 * @member {Boolean} confirmed
 */
NFT.prototype['confirmed'] = undefined;

/**
 * @member {module:model/NFTData} data
 */
NFT.prototype['data'] = undefined;

/**
 * @member {Boolean} is_mutable
 */
NFT.prototype['is_mutable'] = undefined;

/**
 * The public key address of the NFT 
 * @member {String} mint
 */
NFT.prototype['mint'] = undefined;

/**
 * @member {Boolean} primary_sale_happened
 */
NFT.prototype['primary_sale_happened'] = undefined;

/**
 * A public key address that is usually that of the person who minted the NFT 
 * @member {String} update_authority
 */
NFT.prototype['update_authority'] = undefined;

/**
 * @member {Number} seller_fee_basis_points
 */
NFT.prototype['seller_fee_basis_points'] = undefined;

/**
 * @member {String} mint_secret_recovery_phrase
 */
NFT.prototype['mint_secret_recovery_phrase'] = undefined;

/**
 * @member {String} explorer_url
 */
NFT.prototype['explorer_url'] = undefined;

/**
 * The metadata account of the NFT 
 * @member {String} metadata_account
 */
NFT.prototype['metadata_account'] = undefined;

/**
 * @member {Number} edition_nonce
 */
NFT.prototype['edition_nonce'] = undefined;

/**
 * @member {Number} token_standard
 */
NFT.prototype['token_standard'] = undefined;

/**
 * @member {module:model/NFTCollection} collection
 */
NFT.prototype['collection'] = undefined;

/**
 * @member {Number} uses
 */
NFT.prototype['uses'] = undefined;






export default NFT;

