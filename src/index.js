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


import ApiClient from './ApiClient';
import ATAResponse from './model/ATAResponse';
import Account from './model/Account';
import AccountContext from './model/AccountContext';
import AccountIsCandyMachine from './model/AccountIsCandyMachine';
import AccountIsNFT from './model/AccountIsNFT';
import AccountValue from './model/AccountValue';
import AirdropRequest from './model/AirdropRequest';
import AvalancheCChainPublicAddress from './model/AvalancheCChainPublicAddress';
import AvalancheXPChainPublicAddress from './model/AvalancheXPChainPublicAddress';
import B58PrivateKey from './model/B58PrivateKey';
import BSCPublicAddress from './model/BSCPublicAddress';
import BalanceRequest from './model/BalanceRequest';
import BalanceResponse from './model/BalanceResponse';
import CCPayment from './model/CCPayment';
import CCPaymentBlockchainPaymentDetails from './model/CCPaymentBlockchainPaymentDetails';
import CCProject from './model/CCProject';
import CCProjectCreateRequest from './model/CCProjectCreateRequest';
import CCProjectCreateRequestCustomerIdToCollect from './model/CCProjectCreateRequestCustomerIdToCollect';
import CCProjectCreateRequestPayoutMethod from './model/CCProjectCreateRequestPayoutMethod';
import CCWebhook from './model/CCWebhook';
import CCWebhookValidateRequest from './model/CCWebhookValidateRequest';
import CandyMachineSearchRequest from './model/CandyMachineSearchRequest';
import DoubleTransferResponse from './model/DoubleTransferResponse';
import EthereumPublicAddress from './model/EthereumPublicAddress';
import EthereumTransaction from './model/EthereumTransaction';
import EthereumTransactionCompiledResponse from './model/EthereumTransactionCompiledResponse';
import EthereumTransactionMadeResponse from './model/EthereumTransactionMadeResponse';
import FeePayerWallet from './model/FeePayerWallet';
import GeneralAirdropRequest from './model/GeneralAirdropRequest';
import GeneralB58PrivateKey from './model/GeneralB58PrivateKey';
import GeneralBalanceRequest from './model/GeneralBalanceRequest';
import GeneralBalanceResponse from './model/GeneralBalanceResponse';
import GeneralFeePayerWallet from './model/GeneralFeePayerWallet';
import GeneralGeneratePrivateKeyResponse from './model/GeneralGeneratePrivateKeyResponse';
import GeneralPrivateKey from './model/GeneralPrivateKey';
import GeneralSecretPhrase from './model/GeneralSecretPhrase';
import GeneralSecretRecoveryPhrase from './model/GeneralSecretRecoveryPhrase';
import GeneralTransaction from './model/GeneralTransaction';
import GeneralTransactionMadeResponse from './model/GeneralTransactionMadeResponse';
import GeneralTransactionResponse from './model/GeneralTransactionResponse';
import GeneralTransferRequest from './model/GeneralTransferRequest';
import GeneralWallet from './model/GeneralWallet';
import GeneratePrivateKey from './model/GeneratePrivateKey';
import GenerateSeedPhraseRequest from './model/GenerateSeedPhraseRequest';
import GetAllNFTsResponse from './model/GetAllNFTsResponse';
import GetAllNFTsResponseMintedNfts from './model/GetAllNFTsResponseMintedNfts';
import GetAllNFTsResponseUnmintedNfts from './model/GetAllNFTsResponseUnmintedNfts';
import GetCandyMachineIDRequest from './model/GetCandyMachineIDRequest';
import GetCandyMachineIDResponse from './model/GetCandyMachineIDResponse';
import GetCandyMetadataErrorResponse from './model/GetCandyMetadataErrorResponse';
import GetCandyMetadataRequest from './model/GetCandyMetadataRequest';
import GetCandyMetadataResponse from './model/GetCandyMetadataResponse';
import GetCandyMetadataResponseCreators from './model/GetCandyMetadataResponseCreators';
import GetPublicKeyRequest from './model/GetPublicKeyRequest';
import GetSPLTokenResponse from './model/GetSPLTokenResponse';
import HexPrivateKey from './model/HexPrivateKey';
import InputBlockchainIdentifier from './model/InputBlockchainIdentifier';
import InputName from './model/InputName';
import ListNFTsResponse from './model/ListNFTsResponse';
import NFT from './model/NFT';
import NFTCollection from './model/NFTCollection';
import NFTData from './model/NFTData';
import NFTMintErrorResponse from './model/NFTMintErrorResponse';
import NFTMintFee from './model/NFTMintFee';
import NFTMintRequest from './model/NFTMintRequest';
import NFTOwnerAdvancedResponse from './model/NFTOwnerAdvancedResponse';
import NFTOwnerAdvancedResponseContract from './model/NFTOwnerAdvancedResponseContract';
import NFTOwnerResponse from './model/NFTOwnerResponse';
import NFTSearchRequest from './model/NFTSearchRequest';
import NFTSearchResponse from './model/NFTSearchResponse';
import NearPublicKey from './model/NearPublicKey';
import PrivateKey from './model/PrivateKey';
import PublicKey from './model/PublicKey';
import SecretPhrase from './model/SecretPhrase';
import SecretRecoveryPhrase from './model/SecretRecoveryPhrase';
import SolanaPublicKey from './model/SolanaPublicKey';
import SolanaTransaction from './model/SolanaTransaction';
import SolanaTransactionCompiledResponse from './model/SolanaTransactionCompiledResponse';
import SolanaTransactionMadeResponse from './model/SolanaTransactionMadeResponse';
import SupplyWalletRequest from './model/SupplyWalletRequest';
import TokenMetadataResponse from './model/TokenMetadataResponse';
import Transaction from './model/Transaction';
import TransactionResult from './model/TransactionResult';
import TransferRequest from './model/TransferRequest';
import TransferResponse from './model/TransferResponse';
import TransferResponseCompiled from './model/TransferResponseCompiled';
import Wallet from './model/Wallet';
import WalletIdentifiers from './model/WalletIdentifiers';
import CCPaymentApi from './api/CCPaymentApi';
import CCProjectApi from './api/CCProjectApi';
import CCWebhookApi from './api/CCWebhookApi';
import NameServiceApi from './api/NameServiceApi';
import SolanaAccountApi from './api/SolanaAccountApi';
import SolanaCandyMachineApi from './api/SolanaCandyMachineApi';
import SolanaNFTApi from './api/SolanaNFTApi';
import SolanaSPLTokenApi from './api/SolanaSPLTokenApi';
import SolanaTransactionApi from './api/SolanaTransactionApi';
import SolanaWalletApi from './api/SolanaWalletApi';
import TokenApi from './api/TokenApi';
import TransactionApi from './api/TransactionApi';
import WalletApi from './api/WalletApi';


/**
* _AboutOur_vision_is_to_make_it_super_easy_to_interact_with_the_decentralized_web__We_want_you_to_be_able_to_do_this_in_any_coding_language_and_do_it_easily_and_quickly__Youre_a_key_part_of_our_vision__We_love_feature_requests_a_hrefsection_Feature_RequestsMake_one_a_How_to_Use_the_APITo_use_the_API_you_simply_need_to_create_an_API_key_pair_Doing_so_takes_less_than_a_minute__Simply_go_to_a_target_blank_hrefhttps__dashboard_blockchainapi_comthe_dashboard_a_create_an_account_and_generate_a_key_pair__You_can_now_use_this_pair_to_make_API_requests__You_must_create_your_first_pair_via_the_dashboard__Feature_RequestsGot_a_feature_request_Submit_it_as_an_issue_on_a_target_blank_hrefhttps__github_com_BL0CK_X_the_blockchain_api_issues_new_chooseour_GitHub_repo_a_or__email_us_mailtoinfoblockchainapi_com__Contactfigure____img_________width40px________height40px_________srchttps__theblockchainapi_docs_s3_amazonaws_com_icons_phone_svg_________figcaption_styletextAligncenterText___Call_1__415_888_4745__figcaption_figure_a_hrefmailtoinfoblockchainapi_com_target_blank____figure________img_____________width40px____________height40px_____________srchttps__theblockchainapi_docs_s3_amazonaws_com_icons_email_svg_________________figcaption_styletextAligncenterEmail_us_infoblockchainapi_com_figcaption_____figure_a_a_hrefhttps__discord_gg_d49yzrZRAF_target_blank____figure________img_____________width40px____________height40px_____________srchttps__theblockchainapi_docs_s3_amazonaws_com_icons_discord_svg_________________figcaption_styletextAligncenterJoin_our_Discord_figcaption_____figure_a_a_hrefhttps__twitter_com_BlockchainAP1_target_blank____figure________img_____________width40px____________height40px_____________srchttps__theblockchainapi_docs_s3_amazonaws_com_icons_twitter_svg__________________figcaption_styletextAligncenterFollow_us_on_Twitter_figcaption_____figure_a_a_hrefhttps__github_com_BL0CK_X_the_blockchain_api_target_blank____figure________img_____________width40px____________height40px_____________srchttps__theblockchainapi_docs_s3_amazonaws_com_icons_github_svg_________________figcaption_styletextAligncenterStar_us_on_Github_figcaption_____figure_a_SecurityCommon_dogma_is_to_never_give_out_your_seed_phrase__We_agree__Its_a_matter_of_security_and_anyone_who_has_your_seed_phrase_can_irreversibly_empty_your_wallet__bWhen_using_an_API_endpoint_that_requires_a_seed_phrase_we_highly_recommend_that_users_use_or_create_a_wallet_that_they_do_not_use_as_their_primary_wallet__b_How_you_make_this_work_depends_on_what_youre_doing__If_youre_minting_an_NFT_for_example_we_recommend_creating_a_new_wallet_and_then_transferring_just_enough_SOL_to_that_wallet_to_mint_the_NFT__This_is_possible_on_Solana_because_such_transactions_cost_less_than_a_penny__We_will_have_more_tutorials_in_the_future_that_make_it_easier_for_you_to_be_secure_when_using_our_API_We_have_easy_to_use_endpoints_for_a_hreftag_Solana_Wallet_paths_1solana1wallet1secret_recovery_phrase_postcreating_a_new_seed_phrase_a_and_then_a_hreftag_Solana_Wallet_paths_1solana1wallet1public_key_postderiving_a_public_key_a_to_enable_you_to_transfer_to_that_new_wallet_Lets_have_a_constructive_dialog_about_this__Feel_free_to_a_hrefsection_Contactcontact_us_a__I_made_a_video_discussing_this_matter_a_target_blank_hrefhttps__youtu_be_m9unUb8Z9qUhere_a_Note_We_have_had_a_couple_of_individuals_harrass_and_threaten_us__These_individuals_did_bnot_b_try_our_API_or_speak_to_anyone_who_has_used_it__They_simply_saw_that_we_require_a_seed_phrase_for_certain_endpoints_and_figured_that_the_proper_response_was_to_attack_us___I_explain_why_we_do_a_target_blank_hrefhttps__youtu_be_m9unUb8Z9qUhere_a__Such_harrassment_and_threats_are_not_only_harmful_but_they_are_also_illegal_and_we_will_report_offenders__Do_not_harrass_us__Rather_feel_free_to_discuss_your_concerns_with_us_and_we_will_be_more_than_happy_to_work_with_you_to_come_up_with_a_solution__PricingbEach_user_receives_50000_free_credits_each_month__b_Each_endpoint_costs_a_certain_amount_credits__Scroll_below_to_any_endpoint__i_e__function_to_see_how_much_each_endpoint_costs___Or_CMDF_Cost_0_Credit_for_exampleYou_can_learn_more_about_our_pricing_a_hrefhttps__dashboard_blockchainapi_com_billing_target_blankhere_a__We_frequently_do_custom_plans__If_our_pricing_doesnt_work_for_you_a_hrefsection_Contactcontact_us_a_If_you_have_questions_concerns_feedback_or_ideas_a_hrefsection_Contactcontact_us_a__SDKs___API_WrappersWe_have_examples_using_both_our_a_hrefhttps__github_com_BL0CK_X_the_blockchain_api_tree_main_examples_target_blankPython_wrapper_and_our_JavaScript_wrapper_here_a_We_have_built_a_custom_a_hrefhttps__github_com_BL0CK_X_the_blockchain_api_python_wrapper_target_blankPython_wrapper_a_pip_install_theblockchainapiWe_also_have_published_a_a_hrefhttps__github_com_BL0CK_X_theblockchainapi_javascript_wrapper_target_blankJavaScript_Wrapper_a_npm_install_theblockchainapiWe_also_have_auto_generated_wrappers_for_the_following_languages__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_go_wrapper_target___blankGo_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_java_wrapper_target___blankJava_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_kotlin_wrapper_target___blankKotlin_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_php_wrapper_target___blankPHP_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_swift_wrapper_target___blankSwift5_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_typescript_wrapper_target___blankTypeScript_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_csharp_wrapper_target___blankC_a__a_hrefhttps__github_com_BL0CK_X_theblockchainapi_dart_wrapper_target___blankDart_aIf_you_would_like_a_different_language_as_well_submit_an_issue_a_hrefhttps__github_com_BL0CK_X_theblockchainapi_wrappers_issues_new_target_blankhere_a_If_you_run_into_any_bugs_with_the_wrappers_submit_an_issue_a_hrefhttps__github_com_BL0CK_X_theblockchainapi_wrappers_issues_new_target_blankhere_a_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var theblockchainapi = require('index'); // See note below*.
* var xxxSvc = new theblockchainapi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new theblockchainapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new theblockchainapi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new theblockchainapi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.9407
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ATAResponse model constructor.
     * @property {module:model/ATAResponse}
     */
    ATAResponse,

    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account,

    /**
     * The AccountContext model constructor.
     * @property {module:model/AccountContext}
     */
    AccountContext,

    /**
     * The AccountIsCandyMachine model constructor.
     * @property {module:model/AccountIsCandyMachine}
     */
    AccountIsCandyMachine,

    /**
     * The AccountIsNFT model constructor.
     * @property {module:model/AccountIsNFT}
     */
    AccountIsNFT,

    /**
     * The AccountValue model constructor.
     * @property {module:model/AccountValue}
     */
    AccountValue,

    /**
     * The AirdropRequest model constructor.
     * @property {module:model/AirdropRequest}
     */
    AirdropRequest,

    /**
     * The AvalancheCChainPublicAddress model constructor.
     * @property {module:model/AvalancheCChainPublicAddress}
     */
    AvalancheCChainPublicAddress,

    /**
     * The AvalancheXPChainPublicAddress model constructor.
     * @property {module:model/AvalancheXPChainPublicAddress}
     */
    AvalancheXPChainPublicAddress,

    /**
     * The B58PrivateKey model constructor.
     * @property {module:model/B58PrivateKey}
     */
    B58PrivateKey,

    /**
     * The BSCPublicAddress model constructor.
     * @property {module:model/BSCPublicAddress}
     */
    BSCPublicAddress,

    /**
     * The BalanceRequest model constructor.
     * @property {module:model/BalanceRequest}
     */
    BalanceRequest,

    /**
     * The BalanceResponse model constructor.
     * @property {module:model/BalanceResponse}
     */
    BalanceResponse,

    /**
     * The CCPayment model constructor.
     * @property {module:model/CCPayment}
     */
    CCPayment,

    /**
     * The CCPaymentBlockchainPaymentDetails model constructor.
     * @property {module:model/CCPaymentBlockchainPaymentDetails}
     */
    CCPaymentBlockchainPaymentDetails,

    /**
     * The CCProject model constructor.
     * @property {module:model/CCProject}
     */
    CCProject,

    /**
     * The CCProjectCreateRequest model constructor.
     * @property {module:model/CCProjectCreateRequest}
     */
    CCProjectCreateRequest,

    /**
     * The CCProjectCreateRequestCustomerIdToCollect model constructor.
     * @property {module:model/CCProjectCreateRequestCustomerIdToCollect}
     */
    CCProjectCreateRequestCustomerIdToCollect,

    /**
     * The CCProjectCreateRequestPayoutMethod model constructor.
     * @property {module:model/CCProjectCreateRequestPayoutMethod}
     */
    CCProjectCreateRequestPayoutMethod,

    /**
     * The CCWebhook model constructor.
     * @property {module:model/CCWebhook}
     */
    CCWebhook,

    /**
     * The CCWebhookValidateRequest model constructor.
     * @property {module:model/CCWebhookValidateRequest}
     */
    CCWebhookValidateRequest,

    /**
     * The CandyMachineSearchRequest model constructor.
     * @property {module:model/CandyMachineSearchRequest}
     */
    CandyMachineSearchRequest,

    /**
     * The DoubleTransferResponse model constructor.
     * @property {module:model/DoubleTransferResponse}
     */
    DoubleTransferResponse,

    /**
     * The EthereumPublicAddress model constructor.
     * @property {module:model/EthereumPublicAddress}
     */
    EthereumPublicAddress,

    /**
     * The EthereumTransaction model constructor.
     * @property {module:model/EthereumTransaction}
     */
    EthereumTransaction,

    /**
     * The EthereumTransactionCompiledResponse model constructor.
     * @property {module:model/EthereumTransactionCompiledResponse}
     */
    EthereumTransactionCompiledResponse,

    /**
     * The EthereumTransactionMadeResponse model constructor.
     * @property {module:model/EthereumTransactionMadeResponse}
     */
    EthereumTransactionMadeResponse,

    /**
     * The FeePayerWallet model constructor.
     * @property {module:model/FeePayerWallet}
     */
    FeePayerWallet,

    /**
     * The GeneralAirdropRequest model constructor.
     * @property {module:model/GeneralAirdropRequest}
     */
    GeneralAirdropRequest,

    /**
     * The GeneralB58PrivateKey model constructor.
     * @property {module:model/GeneralB58PrivateKey}
     */
    GeneralB58PrivateKey,

    /**
     * The GeneralBalanceRequest model constructor.
     * @property {module:model/GeneralBalanceRequest}
     */
    GeneralBalanceRequest,

    /**
     * The GeneralBalanceResponse model constructor.
     * @property {module:model/GeneralBalanceResponse}
     */
    GeneralBalanceResponse,

    /**
     * The GeneralFeePayerWallet model constructor.
     * @property {module:model/GeneralFeePayerWallet}
     */
    GeneralFeePayerWallet,

    /**
     * The GeneralGeneratePrivateKeyResponse model constructor.
     * @property {module:model/GeneralGeneratePrivateKeyResponse}
     */
    GeneralGeneratePrivateKeyResponse,

    /**
     * The GeneralPrivateKey model constructor.
     * @property {module:model/GeneralPrivateKey}
     */
    GeneralPrivateKey,

    /**
     * The GeneralSecretPhrase model constructor.
     * @property {module:model/GeneralSecretPhrase}
     */
    GeneralSecretPhrase,

    /**
     * The GeneralSecretRecoveryPhrase model constructor.
     * @property {module:model/GeneralSecretRecoveryPhrase}
     */
    GeneralSecretRecoveryPhrase,

    /**
     * The GeneralTransaction model constructor.
     * @property {module:model/GeneralTransaction}
     */
    GeneralTransaction,

    /**
     * The GeneralTransactionMadeResponse model constructor.
     * @property {module:model/GeneralTransactionMadeResponse}
     */
    GeneralTransactionMadeResponse,

    /**
     * The GeneralTransactionResponse model constructor.
     * @property {module:model/GeneralTransactionResponse}
     */
    GeneralTransactionResponse,

    /**
     * The GeneralTransferRequest model constructor.
     * @property {module:model/GeneralTransferRequest}
     */
    GeneralTransferRequest,

    /**
     * The GeneralWallet model constructor.
     * @property {module:model/GeneralWallet}
     */
    GeneralWallet,

    /**
     * The GeneratePrivateKey model constructor.
     * @property {module:model/GeneratePrivateKey}
     */
    GeneratePrivateKey,

    /**
     * The GenerateSeedPhraseRequest model constructor.
     * @property {module:model/GenerateSeedPhraseRequest}
     */
    GenerateSeedPhraseRequest,

    /**
     * The GetAllNFTsResponse model constructor.
     * @property {module:model/GetAllNFTsResponse}
     */
    GetAllNFTsResponse,

    /**
     * The GetAllNFTsResponseMintedNfts model constructor.
     * @property {module:model/GetAllNFTsResponseMintedNfts}
     */
    GetAllNFTsResponseMintedNfts,

    /**
     * The GetAllNFTsResponseUnmintedNfts model constructor.
     * @property {module:model/GetAllNFTsResponseUnmintedNfts}
     */
    GetAllNFTsResponseUnmintedNfts,

    /**
     * The GetCandyMachineIDRequest model constructor.
     * @property {module:model/GetCandyMachineIDRequest}
     */
    GetCandyMachineIDRequest,

    /**
     * The GetCandyMachineIDResponse model constructor.
     * @property {module:model/GetCandyMachineIDResponse}
     */
    GetCandyMachineIDResponse,

    /**
     * The GetCandyMetadataErrorResponse model constructor.
     * @property {module:model/GetCandyMetadataErrorResponse}
     */
    GetCandyMetadataErrorResponse,

    /**
     * The GetCandyMetadataRequest model constructor.
     * @property {module:model/GetCandyMetadataRequest}
     */
    GetCandyMetadataRequest,

    /**
     * The GetCandyMetadataResponse model constructor.
     * @property {module:model/GetCandyMetadataResponse}
     */
    GetCandyMetadataResponse,

    /**
     * The GetCandyMetadataResponseCreators model constructor.
     * @property {module:model/GetCandyMetadataResponseCreators}
     */
    GetCandyMetadataResponseCreators,

    /**
     * The GetPublicKeyRequest model constructor.
     * @property {module:model/GetPublicKeyRequest}
     */
    GetPublicKeyRequest,

    /**
     * The GetSPLTokenResponse model constructor.
     * @property {module:model/GetSPLTokenResponse}
     */
    GetSPLTokenResponse,

    /**
     * The HexPrivateKey model constructor.
     * @property {module:model/HexPrivateKey}
     */
    HexPrivateKey,

    /**
     * The InputBlockchainIdentifier model constructor.
     * @property {module:model/InputBlockchainIdentifier}
     */
    InputBlockchainIdentifier,

    /**
     * The InputName model constructor.
     * @property {module:model/InputName}
     */
    InputName,

    /**
     * The ListNFTsResponse model constructor.
     * @property {module:model/ListNFTsResponse}
     */
    ListNFTsResponse,

    /**
     * The NFT model constructor.
     * @property {module:model/NFT}
     */
    NFT,

    /**
     * The NFTCollection model constructor.
     * @property {module:model/NFTCollection}
     */
    NFTCollection,

    /**
     * The NFTData model constructor.
     * @property {module:model/NFTData}
     */
    NFTData,

    /**
     * The NFTMintErrorResponse model constructor.
     * @property {module:model/NFTMintErrorResponse}
     */
    NFTMintErrorResponse,

    /**
     * The NFTMintFee model constructor.
     * @property {module:model/NFTMintFee}
     */
    NFTMintFee,

    /**
     * The NFTMintRequest model constructor.
     * @property {module:model/NFTMintRequest}
     */
    NFTMintRequest,

    /**
     * The NFTOwnerAdvancedResponse model constructor.
     * @property {module:model/NFTOwnerAdvancedResponse}
     */
    NFTOwnerAdvancedResponse,

    /**
     * The NFTOwnerAdvancedResponseContract model constructor.
     * @property {module:model/NFTOwnerAdvancedResponseContract}
     */
    NFTOwnerAdvancedResponseContract,

    /**
     * The NFTOwnerResponse model constructor.
     * @property {module:model/NFTOwnerResponse}
     */
    NFTOwnerResponse,

    /**
     * The NFTSearchRequest model constructor.
     * @property {module:model/NFTSearchRequest}
     */
    NFTSearchRequest,

    /**
     * The NFTSearchResponse model constructor.
     * @property {module:model/NFTSearchResponse}
     */
    NFTSearchResponse,

    /**
     * The NearPublicKey model constructor.
     * @property {module:model/NearPublicKey}
     */
    NearPublicKey,

    /**
     * The PrivateKey model constructor.
     * @property {module:model/PrivateKey}
     */
    PrivateKey,

    /**
     * The PublicKey model constructor.
     * @property {module:model/PublicKey}
     */
    PublicKey,

    /**
     * The SecretPhrase model constructor.
     * @property {module:model/SecretPhrase}
     */
    SecretPhrase,

    /**
     * The SecretRecoveryPhrase model constructor.
     * @property {module:model/SecretRecoveryPhrase}
     */
    SecretRecoveryPhrase,

    /**
     * The SolanaPublicKey model constructor.
     * @property {module:model/SolanaPublicKey}
     */
    SolanaPublicKey,

    /**
     * The SolanaTransaction model constructor.
     * @property {module:model/SolanaTransaction}
     */
    SolanaTransaction,

    /**
     * The SolanaTransactionCompiledResponse model constructor.
     * @property {module:model/SolanaTransactionCompiledResponse}
     */
    SolanaTransactionCompiledResponse,

    /**
     * The SolanaTransactionMadeResponse model constructor.
     * @property {module:model/SolanaTransactionMadeResponse}
     */
    SolanaTransactionMadeResponse,

    /**
     * The SupplyWalletRequest model constructor.
     * @property {module:model/SupplyWalletRequest}
     */
    SupplyWalletRequest,

    /**
     * The TokenMetadataResponse model constructor.
     * @property {module:model/TokenMetadataResponse}
     */
    TokenMetadataResponse,

    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction,

    /**
     * The TransactionResult model constructor.
     * @property {module:model/TransactionResult}
     */
    TransactionResult,

    /**
     * The TransferRequest model constructor.
     * @property {module:model/TransferRequest}
     */
    TransferRequest,

    /**
     * The TransferResponse model constructor.
     * @property {module:model/TransferResponse}
     */
    TransferResponse,

    /**
     * The TransferResponseCompiled model constructor.
     * @property {module:model/TransferResponseCompiled}
     */
    TransferResponseCompiled,

    /**
     * The Wallet model constructor.
     * @property {module:model/Wallet}
     */
    Wallet,

    /**
     * The WalletIdentifiers model constructor.
     * @property {module:model/WalletIdentifiers}
     */
    WalletIdentifiers,

    /**
    * The CCPaymentApi service constructor.
    * @property {module:api/CCPaymentApi}
    */
    CCPaymentApi,

    /**
    * The CCProjectApi service constructor.
    * @property {module:api/CCProjectApi}
    */
    CCProjectApi,

    /**
    * The CCWebhookApi service constructor.
    * @property {module:api/CCWebhookApi}
    */
    CCWebhookApi,

    /**
    * The NameServiceApi service constructor.
    * @property {module:api/NameServiceApi}
    */
    NameServiceApi,

    /**
    * The SolanaAccountApi service constructor.
    * @property {module:api/SolanaAccountApi}
    */
    SolanaAccountApi,

    /**
    * The SolanaCandyMachineApi service constructor.
    * @property {module:api/SolanaCandyMachineApi}
    */
    SolanaCandyMachineApi,

    /**
    * The SolanaNFTApi service constructor.
    * @property {module:api/SolanaNFTApi}
    */
    SolanaNFTApi,

    /**
    * The SolanaSPLTokenApi service constructor.
    * @property {module:api/SolanaSPLTokenApi}
    */
    SolanaSPLTokenApi,

    /**
    * The SolanaTransactionApi service constructor.
    * @property {module:api/SolanaTransactionApi}
    */
    SolanaTransactionApi,

    /**
    * The SolanaWalletApi service constructor.
    * @property {module:api/SolanaWalletApi}
    */
    SolanaWalletApi,

    /**
    * The TokenApi service constructor.
    * @property {module:api/TokenApi}
    */
    TokenApi,

    /**
    * The TransactionApi service constructor.
    * @property {module:api/TransactionApi}
    */
    TransactionApi,

    /**
    * The WalletApi service constructor.
    * @property {module:api/WalletApi}
    */
    WalletApi
};
