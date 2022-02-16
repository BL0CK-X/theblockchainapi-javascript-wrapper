/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/_BlockX_\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 500 free credits. Each user can call endpoints that cost 0 credits up to 50 requests/min before being rate-limited. Thereafter, they can upgrade to have a higher rate limit. </b>  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-csharp-wrapper\" target = \"_blank\">C#</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-dart-wrapper\" target = \"_blank\">Dart</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
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
import Wallet from './Wallet';

/**
 * The NFTMintRequest model module.
 * @module model/NFTMintRequest
 * @version 1.0.9
 */
class NFTMintRequest {
    /**
     * Constructs a new <code>NFTMintRequest</code>.
     * @alias module:model/NFTMintRequest
     * @param wallet {module:model/Wallet} 
     */
    constructor(wallet) { 
        
        NFTMintRequest.initialize(this, wallet);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, wallet) { 
        obj['wallet'] = wallet;
    }

    /**
     * Constructs a <code>NFTMintRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NFTMintRequest} obj Optional instance to populate.
     * @return {module:model/NFTMintRequest} The populated <code>NFTMintRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NFTMintRequest();

            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = Wallet.constructFromObject(data['wallet']);
            }
            if (data.hasOwnProperty('nft_name')) {
                obj['nft_name'] = ApiClient.convertToType(data['nft_name'], 'String');
            }
            if (data.hasOwnProperty('nft_symbol')) {
                obj['nft_symbol'] = ApiClient.convertToType(data['nft_symbol'], 'String');
            }
            if (data.hasOwnProperty('nft_description')) {
                obj['nft_description'] = ApiClient.convertToType(data['nft_description'], 'String');
            }
            if (data.hasOwnProperty('nft_url')) {
                obj['nft_url'] = ApiClient.convertToType(data['nft_url'], 'String');
            }
            if (data.hasOwnProperty('nft_metadata')) {
                obj['nft_metadata'] = ApiClient.convertToType(data['nft_metadata'], 'String');
            }
            if (data.hasOwnProperty('nft_upload_method')) {
                obj['nft_upload_method'] = ApiClient.convertToType(data['nft_upload_method'], 'String');
            }
            if (data.hasOwnProperty('is_mutable')) {
                obj['is_mutable'] = ApiClient.convertToType(data['is_mutable'], 'Boolean');
            }
            if (data.hasOwnProperty('is_master_edition')) {
                obj['is_master_edition'] = ApiClient.convertToType(data['is_master_edition'], 'Boolean');
            }
            if (data.hasOwnProperty('seller_fee_basis_points')) {
                obj['seller_fee_basis_points'] = ApiClient.convertToType(data['seller_fee_basis_points'], 'Number');
            }
            if (data.hasOwnProperty('creators')) {
                obj['creators'] = ApiClient.convertToType(data['creators'], ['String']);
            }
            if (data.hasOwnProperty('share')) {
                obj['share'] = ApiClient.convertToType(data['share'], ['Number']);
            }
            if (data.hasOwnProperty('mint_to_public_key')) {
                obj['mint_to_public_key'] = ApiClient.convertToType(data['mint_to_public_key'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Wallet} wallet
 */
NFTMintRequest.prototype['wallet'] = undefined;

/**
 * The name of the token. Limited to 32 characters. Stored on the blockchain.
 * @member {String} nft_name
 * @default ''
 */
NFTMintRequest.prototype['nft_name'] = '';

/**
 * The symbol of the token. Limited to 10 characters. Stored on the blockchain.
 * @member {String} nft_symbol
 * @default ''
 */
NFTMintRequest.prototype['nft_symbol'] = '';

/**
 * The description of the token. Limited to 2000 characters. Not stored on the blockchain.  This is stored in S3 in a bucket we own, and the link to that file is stored on the blockchain.  If you provide your own link, the link is also stored in that S3 file, which is publicly accessible. However, if you choose the NFT upload method \"LINK\" instead of \"S3\", then we upload the link you  provide for nft_url directly to the blockchain, and S3 is not used at all. Thus, when you provide the \"LINK\" option, the value nft_description is ignored and not used. The Metaplex API does not provide functionality to store any data about your NFT besides a URL. 
 * @member {String} nft_description
 * @default ''
 */
NFTMintRequest.prototype['nft_description'] = '';

/**
 * The URL you provided. Limited to 200 characters. This does not need to be a valid URL. Whether or not this is  stored on the blockchain depends on which upload method you choose. If you choose LINK, then this is stored on the  blockchain directly. If you choose S3, then this link is embedded in a public S3 text file that also contains the metadata, the name,  the symbol, and the description of the NFT. 
 * @member {String} nft_url
 * @default ''
 */
NFTMintRequest.prototype['nft_url'] = '';

/**
 * Any data you provide. Must be a string and properly encoded json. Will be viewable on S3. Limited to 2000 bytes. Not stored on the blockchain.  This is stored in S3 in a bucket we own, and the link to that file is stored on the blockchain.  If you provide your own link, the link is also stored in that S3 file, which is publicly accessible. However, if you choose the NFT upload method \"LINK\" instead of \"S3\", then we upload the link you  provide for nft_url directly to the blockchain, and S3 is not used at all. Thus, when you provide the \"LINK\" option, the value nft_metadata is ignored and not used. The Metaplex API does not provide functionality to store any data about your NFT besides a URL. 
 * @member {String} nft_metadata
 * @default '{}'
 */
NFTMintRequest.prototype['nft_metadata'] = '{}';

/**
 * When you choose S3, all of the nft_description, nft_name, nft_symbol, nft_metadata, and nft_url are put into a json dictionary and uploaded to S3 as a text file.  This is uploaded to an AWS S3 bucket we own, and is an option we provide at no charge. The S3 link to this file is stored on the NFT on the blockchain.   When you choose LINK, the nft_url you provide is stored on the blockchain, and the nft_metadata and nft_description are ignored and not stored anywhere. S3 is then NOT used. 
 * @member {module:model/NFTMintRequest.NftUploadMethodEnum} nft_upload_method
 * @default 'S3'
 */
NFTMintRequest.prototype['nft_upload_method'] = 'S3';

/**
 * Indicates whether or not the NFT created is mutable. If mutable, the NFT can be updated later. Once set to immutable, the NFT is unable to be changed. 
 * @member {Boolean} is_mutable
 * @default true
 */
NFTMintRequest.prototype['is_mutable'] = true;

/**
 * Whether or not the NFT is a master edition NFT. Saves about 0.001 SOL in transaction costs when set to false. 
 * @member {Boolean} is_master_edition
 * @default true
 */
NFTMintRequest.prototype['is_master_edition'] = true;

/**
 * Valid values from 0 to 10000. Must be an integer.  Represents the number of basis points that the seller receives as a fee upon sale.  E.g., 100 indicates a 1% seller fee. Seller does not receive a fee when \"primary_sale_has_happened\" is set to true.  Will be set to false after first sale has occurred. 
 * @member {Number} seller_fee_basis_points
 * @default 0
 */
NFTMintRequest.prototype['seller_fee_basis_points'] = 0;

/**
 * A JSON encoded string representing an array / list.  The designated creators of the NFT. Length of the creator list must match length of the list of share.  Valid lengths of the list range from 1 to 5. Each item in the list must be a valid public key address.    Only the public key corresponding to the seed phrase provided will be marked as verified. Any other creators supplied will be marked as unverified. 
 * @member {Array.<String>} creators
 */
NFTMintRequest.prototype['creators'] = undefined;

/**
 * A JSON encoded string representing an array / list.  The share of the royalty that each creator gets. Valid values range from 0 to 100.  Sum of the values must equal 100.  Only integer value accepted. Length of the share list must match length of the list of creators. 
 * @member {Array.<Number>} share
 */
NFTMintRequest.prototype['share'] = undefined;

/**
 * Assign ownership of the NFT to the public key address given by `mint_to_public_key` 
 * @member {String} mint_to_public_key
 * @default 'The public key of the wallet provided'
 */
NFTMintRequest.prototype['mint_to_public_key'] = 'The public key of the wallet provided';

/**
 * This determines which network you choose to run the API calls on. We recommend first testing on the devnet, because minting an NFT costs a little above 0.01 SOL, which is about $1.60 at the time of this writing.  When you run on the mainnet-beta, each successful call will deduct approximately that much. When you run on the devnet, that amount is deducted from a simulated amount, so you are not paying with real SOL. To get SOL on the devnet,   airdrop SOL to this address using the CLI. Keep in mind that you can only do this every so often. If you are rate-limited, consider using a VPN and trying again, or just waiting. To get SOL on the mainnet-beta, you    must transfer real SOL to this account from another wallet (e.g., from another wallet you own, from an exchange, etc.). We hope to make this process easier in the future, and if you have any suggestions, please add them    as an issue on our <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">GitHub repository</a> for the API. To get a fee estimate, make a GET requests to the <a href=\"#tag/Solana-NFT/paths/~1solana~1nft~1mint~1fee/get\">v1/solana/nft/mint/fee endpoint</a> (details in sidebar). 
 * @member {module:model/NFTMintRequest.NetworkEnum} network
 * @default 'devnet'
 */
NFTMintRequest.prototype['network'] = 'devnet';





/**
 * Allowed values for the <code>nft_upload_method</code> property.
 * @enum {String}
 * @readonly
 */
NFTMintRequest['NftUploadMethodEnum'] = {

    /**
     * value: "S3"
     * @const
     */
    "S3": "S3",

    /**
     * value: "LINK"
     * @const
     */
    "LINK": "LINK"
};


/**
 * Allowed values for the <code>network</code> property.
 * @enum {String}
 * @readonly
 */
NFTMintRequest['NetworkEnum'] = {

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



export default NFTMintRequest;

