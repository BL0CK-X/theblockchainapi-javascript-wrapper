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

/**
 * The CandyMachineSearchRequest model module.
 * @module model/CandyMachineSearchRequest
 * @version 1.0.9
 */
class CandyMachineSearchRequest {
    /**
     * Constructs a new <code>CandyMachineSearchRequest</code>.
     * @alias module:model/CandyMachineSearchRequest
     */
    constructor() { 
        
        CandyMachineSearchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CandyMachineSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CandyMachineSearchRequest} obj Optional instance to populate.
     * @return {module:model/CandyMachineSearchRequest} The populated <code>CandyMachineSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CandyMachineSearchRequest();

            if (data.hasOwnProperty('update_authority')) {
                obj['update_authority'] = ApiClient.convertToType(data['update_authority'], 'String');
            }
            if (data.hasOwnProperty('update_authority_search_method')) {
                obj['update_authority_search_method'] = ApiClient.convertToType(data['update_authority_search_method'], 'String');
            }
            if (data.hasOwnProperty('config_address')) {
                obj['config_address'] = ApiClient.convertToType(data['config_address'], 'String');
            }
            if (data.hasOwnProperty('config_address_search_method')) {
                obj['config_address_search_method'] = ApiClient.convertToType(data['config_address_search_method'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('uuid_search_method')) {
                obj['uuid_search_method'] = ApiClient.convertToType(data['uuid_search_method'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('symbol_search_method')) {
                obj['symbol_search_method'] = ApiClient.convertToType(data['symbol_search_method'], 'String');
            }
            if (data.hasOwnProperty('nft_name')) {
                obj['nft_name'] = ApiClient.convertToType(data['nft_name'], 'String');
            }
            if (data.hasOwnProperty('nft_name_index')) {
                obj['nft_name_index'] = ApiClient.convertToType(data['nft_name_index'], 'String');
            }
            if (data.hasOwnProperty('nft_name_search_method')) {
                obj['nft_name_search_method'] = ApiClient.convertToType(data['nft_name_search_method'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('candy_machine_contract_version')) {
                obj['candy_machine_contract_version'] = ApiClient.convertToType(data['candy_machine_contract_version'], 'String');
            }
        }
        return obj;
    }


}

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



export default CandyMachineSearchRequest;

