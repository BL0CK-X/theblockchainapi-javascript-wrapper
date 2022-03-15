/**
 * The Blockchain API
 * # About  Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly.   You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>  # How to Use the API  To use the API, you simply need to create an API key pair.  Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.  # Feature Requests  Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).  # Contact  <figure>     <img          width=\"40px\"         height=\"40px\"          src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"     />     <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption> </figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"         />         <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>     </figure> </a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"         />         <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>     </figure> </a> <a href=\"https://twitter.com/_BlockX_\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"         />          <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>     </figure> </a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">     <figure>         <img              width=\"40px\"             height=\"40px\"              src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"         />         <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>     </figure> </a>  # Security  Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet.   <b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b>   How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.  We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.  Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.  Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.  # Pricing  <b>Each user receives 100 free credits. Each user can call endpoints that cost 0 credits up to 50 requests/min before being rate-limited.</b> Thereafter, they can upgrade to have a higher rate limit. The purpose of this is to act like a free trial -- not to function like a freemium model where one can stay on the free tier indefinitely.  You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>.   We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.  If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.  # SDKs / API Wrappers  We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.  We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.  `pip install theblockchainapi`  We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.  `npm install theblockchainapi`  We also have auto-generated wrappers for the following languages: - <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-csharp-wrapper\" target = \"_blank\">C#</a> - <a href=\"https://github.com/BL0CK-X/theblockchainapi-dart-wrapper\" target = \"_blank\">Dart</a>  If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.  If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
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
import ParameterSpecification from './ParameterSpecification';

/**
 * The Endpoint model module.
 * @module model/Endpoint
 * @version 1.0.9
 */
class Endpoint {
    /**
     * Constructs a new <code>Endpoint</code>.
     * @alias module:model/Endpoint
     * @param projectId {String} The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
     * @param version {String} The project version under which the endpoint exists 
     * @param path {String} The path of the endpoint 
     * @param operationId {String} The operation ID of the endpoint. 
     * @param readableName {String} The name of the endpoint formatted in a readable way (e.g., Get Endpoint Metadata). 
     * @param credits {Number} The price of the endpoint. Valid values are integers from 1 to 100. 
     * @param inputSpecification {Array.<module:model/ParameterSpecification>} A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
     * @param inputExamples {Object} An example of the JSON input that a user might send. Limited to one example currently. 
     * @param outputSpecification {Array.<module:model/ParameterSpecification>} A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
     * @param outputExamples {Object} An example of the JSON output that a user might send. Limited to one example currently. 
     */
    constructor(projectId, version, path, operationId, readableName, credits, inputSpecification, inputExamples, outputSpecification, outputExamples) { 
        
        Endpoint.initialize(this, projectId, version, path, operationId, readableName, credits, inputSpecification, inputExamples, outputSpecification, outputExamples);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, projectId, version, path, operationId, readableName, credits, inputSpecification, inputExamples, outputSpecification, outputExamples) { 
        obj['project_id'] = projectId;
        obj['version'] = version;
        obj['path'] = path;
        obj['operation_id'] = operationId;
        obj['readable_name'] = readableName;
        obj['credits'] = credits;
        obj['input_specification'] = inputSpecification;
        obj['input_examples'] = inputExamples;
        obj['output_specification'] = outputSpecification;
        obj['output_examples'] = outputExamples;
    }

    /**
     * Constructs a <code>Endpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Endpoint} obj Optional instance to populate.
     * @return {module:model/Endpoint} The populated <code>Endpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Endpoint();

            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('operation_id')) {
                obj['operation_id'] = ApiClient.convertToType(data['operation_id'], 'String');
            }
            if (data.hasOwnProperty('readable_name')) {
                obj['readable_name'] = ApiClient.convertToType(data['readable_name'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], 'Number');
            }
            if (data.hasOwnProperty('group_name')) {
                obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
            }
            if (data.hasOwnProperty('input_specification')) {
                obj['input_specification'] = ApiClient.convertToType(data['input_specification'], [ParameterSpecification]);
            }
            if (data.hasOwnProperty('input_examples')) {
                obj['input_examples'] = ApiClient.convertToType(data['input_examples'], Object);
            }
            if (data.hasOwnProperty('output_specification')) {
                obj['output_specification'] = ApiClient.convertToType(data['output_specification'], [ParameterSpecification]);
            }
            if (data.hasOwnProperty('output_examples')) {
                obj['output_examples'] = ApiClient.convertToType(data['output_examples'], Object);
            }
        }
        return obj;
    }


}

/**
 * The ID of the project. This is auto-generated upon project creation and cannot currently be changed. 
 * @member {String} project_id
 */
Endpoint.prototype['project_id'] = undefined;

/**
 * The project version under which the endpoint exists 
 * @member {String} version
 */
Endpoint.prototype['version'] = undefined;

/**
 * The path of the endpoint 
 * @member {String} path
 */
Endpoint.prototype['path'] = undefined;

/**
 * The operation ID of the endpoint. 
 * @member {String} operation_id
 */
Endpoint.prototype['operation_id'] = undefined;

/**
 * The name of the endpoint formatted in a readable way (e.g., Get Endpoint Metadata). 
 * @member {String} readable_name
 */
Endpoint.prototype['readable_name'] = undefined;

/**
 * The summary of the endpoint to be displayed in the sidebar on the left of the mini-API's documentation 
 * @member {String} summary
 */
Endpoint.prototype['summary'] = undefined;

/**
 * A description of what the endpoint does. This will be shown in the mini-API documentation. 
 * @member {String} description
 */
Endpoint.prototype['description'] = undefined;

/**
 * The price of the endpoint. Valid values are integers from 1 to 100. 
 * @member {Number} credits
 */
Endpoint.prototype['credits'] = undefined;

/**
 * The name of the group of endpoints that the endpoint comes from 
 * @member {String} group_name
 */
Endpoint.prototype['group_name'] = undefined;

/**
 * A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
 * @member {Array.<module:model/ParameterSpecification>} input_specification
 */
Endpoint.prototype['input_specification'] = undefined;

/**
 * An example of the JSON input that a user might send. Limited to one example currently. 
 * @member {Object} input_examples
 */
Endpoint.prototype['input_examples'] = undefined;

/**
 * A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter.
 * @member {Array.<module:model/ParameterSpecification>} output_specification
 */
Endpoint.prototype['output_specification'] = undefined;

/**
 * An example of the JSON output that a user might send. Limited to one example currently. 
 * @member {Object} output_examples
 */
Endpoint.prototype['output_examples'] = undefined;






export default Endpoint;

