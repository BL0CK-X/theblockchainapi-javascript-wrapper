/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/_BlockX_\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 500 free credits.</b>  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
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
import B58PrivateKey from './B58PrivateKey';
import PrivateKey from './PrivateKey';
import SecretRecoveryPhrase from './SecretRecoveryPhrase';

/**
 * The Wallet model module.
 * @module model/Wallet
 * @version 1.0.9
 */
class Wallet {
    /**
     * Constructs a new <code>Wallet</code>.
     * The wallet authentication information required to sign transactions.  Click the &#x60;&gt;&#x60; arrow next to \&quot;wallet\&quot; on the left to see more details. See our Security section &lt;a href&#x3D;\&quot;#section/Security\&quot;&gt;here&lt;/a&gt;. 
     * @alias module:model/Wallet
     * @implements module:model/SecretRecoveryPhrase
     * @implements module:model/PrivateKey
     * @implements module:model/B58PrivateKey
     * @param secretRecoveryPhrase {String} The twelve word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a public key with a private key.
     * @param privateKey {Object} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
     * @param b58PrivateKey {String} A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
     */
    constructor(secretRecoveryPhrase, privateKey, b58PrivateKey) { 
        SecretRecoveryPhrase.initialize(this, secretRecoveryPhrase);PrivateKey.initialize(this, privateKey);B58PrivateKey.initialize(this, b58PrivateKey);
        Wallet.initialize(this, secretRecoveryPhrase, privateKey, b58PrivateKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretRecoveryPhrase, privateKey, b58PrivateKey) { 
        obj['secret_recovery_phrase'] = secretRecoveryPhrase;
        obj['private_key'] = privateKey;
        obj['b58_private_key'] = b58PrivateKey;
    }

    /**
     * Constructs a <code>Wallet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Wallet} obj Optional instance to populate.
     * @return {module:model/Wallet} The populated <code>Wallet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Wallet();
            SecretRecoveryPhrase.constructFromObject(data, obj);
            PrivateKey.constructFromObject(data, obj);
            B58PrivateKey.constructFromObject(data, obj);

            if (data.hasOwnProperty('secret_recovery_phrase')) {
                obj['secret_recovery_phrase'] = ApiClient.convertToType(data['secret_recovery_phrase'], 'String');
            }
            if (data.hasOwnProperty('derivation_path')) {
                obj['derivation_path'] = ApiClient.convertToType(data['derivation_path'], 'String');
            }
            if (data.hasOwnProperty('passphrase')) {
                obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], Object);
            }
            if (data.hasOwnProperty('b58_private_key')) {
                obj['b58_private_key'] = ApiClient.convertToType(data['b58_private_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The twelve word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a public key with a private key.
 * @member {String} secret_recovery_phrase
 */
Wallet.prototype['secret_recovery_phrase'] = undefined;

/**
 * Derivation paths are used to derive the public key from the secret recovery phrase. Only certain paths are accepted.  If you provide the empty string \"\" as the value for the derivation path, then we will derive your public key with the same behavior as the default behavior of the Solana CLI.  By default, we use \"m/44/501/0/0\". This is the path that the Phantom and Sollet wallets use.  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ... AND/OR \"m/44/501/1/0\", \"m/44/501/2/0\", ...).  Phantom's Wallet increments the first digit (e.g., \"m/44/501/0/0\", \"m/44/501/1/0\", \"m/44/501/2/0\", ...) to generate more public key addresses.  The SolFlare recommended path is \"m/44/501/0\".  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 * @default 'm/44/501/0/0'
 */
Wallet.prototype['derivation_path'] = 'm/44/501/0/0';

/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */
Wallet.prototype['passphrase'] = '';

/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
 * @member {Object} private_key
 */
Wallet.prototype['private_key'] = undefined;

/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
 * @member {String} b58_private_key
 */
Wallet.prototype['b58_private_key'] = undefined;


// Implement SecretRecoveryPhrase interface:
/**
 * The twelve word phrase that can be used to derive many public key addresses (e.g., bottom army bless castle alter habit dish embody child flame smooth zone).  To derive a public key, you need a secret recovery phrase, a derivation path, and an optional passphrase.   Alternatively, you can derive a public key with a private key.
 * @member {String} secret_recovery_phrase
 */
SecretRecoveryPhrase.prototype['secret_recovery_phrase'] = undefined;
/**
 * Derivation paths are used to derive the public key from the secret recovery phrase. Only certain paths are accepted.  If you provide the empty string \"\" as the value for the derivation path, then we will derive your public key with the same behavior as the default behavior of the Solana CLI.  By default, we use \"m/44/501/0/0\". This is the path that the Phantom and Sollet wallets use.  You can also arbitrarily increment the default path (\"m/44/501/0/0\") to generate more wallets (e.g., \"m/44/501/0/1\", \"m/44/501/0/2\", ... AND/OR \"m/44/501/1/0\", \"m/44/501/2/0\", ...).  Phantom's Wallet increments the first digit (e.g., \"m/44/501/0/0\", \"m/44/501/1/0\", \"m/44/501/2/0\", ...) to generate more public key addresses.  The SolFlare recommended path is \"m/44/501/0\".  To learn more about derivation paths, check out <a href=\"https://learnmeabitcoin.com/technical/derivation-paths\" target=\"_blank\">this tutorial</a>.
 * @member {String} derivation_path
 * @default 'm/44/501/0/0'
 */
SecretRecoveryPhrase.prototype['derivation_path'] = 'm/44/501/0/0';
/**
 * PASSPHRASE != PASSWORD. This is NOT your Phantom password or any other password. It is an optional string you use when creating a wallet. This provides an additional layer of security because a hacker would need both the secret recovery phrase and the passphrase to access the output public key. By default, most wallet UI extensions do not use a passphrase. (You probably did not use a passphrase.) Limited to 500 characters. 
 * @member {String} passphrase
 * @default ''
 */
SecretRecoveryPhrase.prototype['passphrase'] = '';
// Implement PrivateKey interface:
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A private key is an array of integers (e.g.,   `[185,108,153,165,57,193,166,167,58,148,133,121,92,252,242,13,233,246,35,103,185,20,27,56,111,169,12,50,50,36,83,156,173,195,143,75,135,78,204,129,217,231,58,129,69,180,185,86,119,43,200,193,94,112,31,135,68,128,207,26,85,150,68,181]`).  <a href=\"https://solflare.com\" target=\"_blank\">Solflare</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
 * @member {Object} private_key
 */
PrivateKey.prototype['private_key'] = undefined;
// Implement B58PrivateKey interface:
/**
 * A private key corresponds to exactly one public key address. A private key can be used to move assets out of the wallet and sign transaction with the corresponding public key.  A base58-encoded private key is a base58-encoded version of the typical private key. It is represented as a string (e.g., `4waBTVeAVWEAczSdx36uMrR19668ACgQDs7r386vrUes3UCzvXCQ2FPSCVGb1zJrwcULgpNzgABreyQaWSpGBwfx`).  <a href=\"https://phantom.app\" target=\"_blank\">Phantom</a> is a popular wallet interface on Solana that allows you to export your private key in this format.
 * @member {String} b58_private_key
 */
B58PrivateKey.prototype['b58_private_key'] = undefined;




export default Wallet;

