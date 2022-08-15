# theblockchainapi

theblockchainapi - JavaScript client for theblockchainapi
# About

Our vision is to make it super easy to interact with the decentralized web. We want you to be able to do this in any coding language and do it easily and quickly. 

You're a key part of our vision. We love feature requests! <a href=\"#section/Feature-Requests\">Make one!</a>

# How to Use the API

To use the API, you simply need to create an API key pair.

Doing so takes less than a minute. Simply go to <a target=\"_blank\" href=\"https://dashboard.blockchainapi.com\">the dashboard</a>, create an account, and generate a key pair. You can now use this pair to make API requests. You must create your first pair via the dashboard.

# Feature Requests

Got a feature request? Submit it as an issue on <a target=\"_blank\" href=\"https://github.com/BL0CK-X/the-blockchain-api/issues/new/choose\">our GitHub repo</a> or [email us](mailto:info@blockchainapi.com).

# Contact

<figure>
    <img 
        width=\"40px\"
        height=\"40px\" 
        src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/phone.svg\"
    />
    <figcaption style=\"textAlign:center;\">Text / Call: +1 (415) 888 4745 </figcaption>
</figure> <a href=\"mailto:info@blockchainapi.com\" target=\"_blank\">
    <figure>
        <img 
            width=\"40px\"
            height=\"40px\" 
            src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/email.svg\"
        />
        <figcaption style=\"textAlign:center;\">Email us: info@blockchainapi.com</figcaption>
    </figure>
</a> <a href=\"https://discord.gg/d49yzrZRAF\" target=\"_blank\">
    <figure>
        <img 
            width=\"40px\"
            height=\"40px\" 
            src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/discord.svg\"
        />
        <figcaption style=\"textAlign:center;\">Join our Discord</figcaption>
    </figure>
</a> <a href=\"https://twitter.com/BlockchainAP1\" target=\"_blank\">
    <figure>
        <img 
            width=\"40px\"
            height=\"40px\" 
            src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/twitter.svg\"
        />
         <figcaption style=\"textAlign:center;\">Follow us on Twitter</figcaption>
    </figure>
</a> <a href=\"https://github.com/BL0CK-X/the-blockchain-api\" target=\"_blank\">
    <figure>
        <img 
            width=\"40px\"
            height=\"40px\" 
            src=\"https://theblockchainapi-docs.s3.amazonaws.com/icons/github.svg\"
        />
        <figcaption style=\"textAlign:center;\">Star us on Github</figcaption>
    </figure>
</a>

# Security

Common dogma is to never give out your seed phrase. We agree. It's a matter of security, and anyone who has your seed phrase can irreversibly empty your wallet. 

<b>When using an API endpoint that requires a seed phrase, we highly recommend that users use or create a wallet that they do not use as their primary wallet.</b> 

How you make this work depends on what you're doing. If you're minting an NFT for example, we recommend creating a new wallet and then transferring just enough SOL to that wallet to mint the NFT. This is possible on Solana because such transactions cost less than a penny. We will have more tutorials in the future that make it easier for you to be secure when using our API.

We have easy-to-use endpoints for <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1secret_recovery_phrase/post\">creating a new seed phrase</a> and then <a href=\"#tag/Solana-Wallet/paths/~1solana~1wallet~1public_key/post\">deriving a public key</a> to enable you to transfer to that new wallet.

Let's have a constructive dialog about this. Feel free to <a href=\"#section/Contact\">contact us</a>. I made a video discussing this matter <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.

Note: We have had a couple of individuals harrass and threaten us. These individuals did <b>not</b> try our API or speak to anyone who has used it. They simply saw that we require a seed phrase for certain endpoints and figured that the proper response was to attack us. (I explain why we do <a target=\"_blank\" href=\"https://youtu.be/m9unUb8Z9qU\">here</a>.) Such harrassment and threats are not only harmful, but they are also illegal, and we will report offenders. Do not harrass us. Rather, feel free to discuss your concerns with us and we will be more than happy to work with you to come up with a solution.

# Pricing

<b>Each user receives 50,000 free credits each month.</b> Each endpoint costs a certain amount credits. Scroll below to any endpoint (i.e., function) to see how much each endpoint costs. (Or CMD+F `Cost: 0 Credit`, for example)

You can learn more about our pricing <a href=\"https://dashboard.blockchainapi.com/billing\" target=\"_blank\">here</a>. 

We frequently do custom plans. If our pricing doesn't work for you, <a href=\"#section/Contact\">contact us</a>.

If you have questions, concerns, feedback, or ideas, <a href=\"#section/Contact\">contact us</a>.

# SDKs / API Wrappers

We have examples using both our <a href=\"https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples\" target=\"_blank\">Python wrapper and our JavaScript wrapper here</a>.

We have built a custom <a href=\"https://github.com/BL0CK-X/the-blockchain-api-python-wrapper\" target=\"_blank\">Python wrapper</a>.

`pip install theblockchainapi`

We also have published a <a href=\"https://github.com/BL0CK-X/theblockchainapi-javascript-wrapper\" target=\"_blank\">JavaScript Wrapper</a>.

`npm install theblockchainapi`

We also have auto-generated wrappers for the following languages:
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-go-wrapper\" target = \"_blank\">Go</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-java-wrapper\" target = \"_blank\">Java</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-kotlin-wrapper\" target = \"_blank\">Kotlin</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-php-wrapper\" target = \"_blank\">PHP</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-swift-wrapper\" target = \"_blank\">Swift5</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-typescript-wrapper\" target = \"_blank\">TypeScript</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-csharp-wrapper\" target = \"_blank\">C#</a>
- <a href=\"https://github.com/BL0CK-X/theblockchainapi-dart-wrapper\" target = \"_blank\">Dart</a>

If you would like a different language as well, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.

If you run into any bugs with the wrappers, submit an issue <a href=\"https://github.com/BL0CK-X/theblockchainapi-wrappers/issues/new\" target=\"_blank\">here</a>.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: null
- Package version: 1.0.9407
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install theblockchainapi --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your theblockchainapi from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var theblockchainapi = require('theblockchainapi');

var defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
var APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix['APIKeyID'] = "Token"
// Configure API key authorization: APISecretKey
var APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix['APISecretKey'] = "Token"

var api = new theblockchainapi.CCPaymentApi()
var projectId = project_WDQskRIfHQxj53N5mk5K; // {String} The ID of the project. Created and returned when a project is created.
var paymentIdentifier = ["payment_97jA1szpVjrSI5EvOb5zxNQFq5CfrC"]; // {String} You can supply either `payment_id` or `payment_validation_code`.  The `payment_id` is only visible by you and uniquely identifies a payment.  The `payment_validation_code` is shown exclusively to the customer and the owner of the project. It can be used to redeem a payment. You can verify a payment by pulling the payment with the `payment_validation_code`.
api.getCCPayment(projectId, paymentIdentifier).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.blockchainapi.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*theblockchainapi.CCPaymentApi* | [**getCCPayment**](docs/CCPaymentApi.md#getCCPayment) | **GET** /checkout/v1/project/{project_id}/payment/{payment_identifier} | Get a payment 
*theblockchainapi.CCPaymentApi* | [**listAllCCPayments**](docs/CCPaymentApi.md#listAllCCPayments) | **GET** /checkout/v1/payments | List all payments  
*theblockchainapi.CCPaymentApi* | [**listCCProjectPayments**](docs/CCPaymentApi.md#listCCProjectPayments) | **GET** /checkout/v1/project/{project_id}/payments | List a project&#39;s payments 
*theblockchainapi.CCProjectApi* | [**createCCProject**](docs/CCProjectApi.md#createCCProject) | **POST** /checkout/v1/project | Create a project 
*theblockchainapi.CCProjectApi* | [**deleteCCProject**](docs/CCProjectApi.md#deleteCCProject) | **DELETE** /checkout/v1/project/{project_id} | Delete a project 
*theblockchainapi.CCProjectApi* | [**getCCProject**](docs/CCProjectApi.md#getCCProject) | **GET** /checkout/v1/project/{project_id} | Get a project 
*theblockchainapi.CCProjectApi* | [**listCCProjects**](docs/CCProjectApi.md#listCCProjects) | **GET** /checkout/v1/projects | List projects 
*theblockchainapi.CCProjectApi* | [**updateCCProject**](docs/CCProjectApi.md#updateCCProject) | **PUT** /checkout/v1/project/{project_id} | Update a project 
*theblockchainapi.CCWebhookApi* | [**getCCWebhook**](docs/CCWebhookApi.md#getCCWebhook) | **POST** /webhook/v1/project/{project_id}/webhook/{webhook_identifier} | Get a webhook 
*theblockchainapi.CCWebhookApi* | [**listCCProjectWebhooks**](docs/CCWebhookApi.md#listCCProjectWebhooks) | **POST** /webhook/v1/project/{project_id}/webhooks | List project&#39;s webhooks 
*theblockchainapi.CCWebhookApi* | [**validateCCWebhook**](docs/CCWebhookApi.md#validateCCWebhook) | **POST** /webhook/v1/project/{project_id}/webhook/{webhook_identifier}/validate | Validate a webhook 
*theblockchainapi.NameServiceApi* | [**getBlockchainIdentifierFromName**](docs/NameServiceApi.md#getBlockchainIdentifierFromName) | **POST** /{blockchain}/{network}/name_service/name_to_blockchain_identifier | Get the identifier
*theblockchainapi.NameServiceApi* | [**getNameForBlockchainIdentifier**](docs/NameServiceApi.md#getNameForBlockchainIdentifier) | **POST** /{blockchain}/{network}/name_service/blockchain_identifier_to_name | Get the name
*theblockchainapi.SolanaAccountApi* | [**solanaGetAccount**](docs/SolanaAccountApi.md#solanaGetAccount) | **GET** /solana/account/{network}/{public_key} | Get the details of an account on Solana
*theblockchainapi.SolanaAccountApi* | [**solanaGetAccountIsCandyMachine**](docs/SolanaAccountApi.md#solanaGetAccountIsCandyMachine) | **GET** /solana/account/{network}/{public_key}/is_candy_machine | Get if account is candy machine
*theblockchainapi.SolanaAccountApi* | [**solanaGetAccountIsNFT**](docs/SolanaAccountApi.md#solanaGetAccountIsNFT) | **GET** /solana/account/{network}/{public_key}/is_nft | Get if account is NFT
*theblockchainapi.SolanaCandyMachineApi* | [**solanaGetAllNFTsFromCandyMachine**](docs/SolanaCandyMachineApi.md#solanaGetAllNFTsFromCandyMachine) | **GET** /solana/nft/candy_machine/{network}/{candy_machine_id}/nfts | Get CM&#39;s NFTs  
*theblockchainapi.SolanaCandyMachineApi* | [**solanaGetCandyMachineMetadata**](docs/SolanaCandyMachineApi.md#solanaGetCandyMachineMetadata) | **POST** /solana/nft/candy_machine/metadata | Get a CM&#39;s metadata 
*theblockchainapi.SolanaCandyMachineApi* | [**solanaListAllCandyMachines**](docs/SolanaCandyMachineApi.md#solanaListAllCandyMachines) | **GET** /solana/nft/candy_machine/list | List all CMs
*theblockchainapi.SolanaCandyMachineApi* | [**solanaSearchCandyMachines**](docs/SolanaCandyMachineApi.md#solanaSearchCandyMachines) | **POST** /solana/nft/candy_machine/search | Search CMs
*theblockchainapi.SolanaNFTApi* | [**solanaCreateNFT**](docs/SolanaNFTApi.md#solanaCreateNFT) | **POST** /solana/nft | Create an NFT on Solana
*theblockchainapi.SolanaNFTApi* | [**solanaGetNFT**](docs/SolanaNFTApi.md#solanaGetNFT) | **GET** /solana/nft/{network}/{mint_address} | Get an NFT&#39;s metadata
*theblockchainapi.SolanaNFTApi* | [**solanaGetNFTMintFee**](docs/SolanaNFTApi.md#solanaGetNFTMintFee) | **GET** /solana/nft/mint/fee | Get the NFT mint fee
*theblockchainapi.SolanaNFTApi* | [**solanaGetNFTOwner**](docs/SolanaNFTApi.md#solanaGetNFTOwner) | **GET** /solana/nft/{network}/{mint_address}/owner | Get owner of an NFT
*theblockchainapi.SolanaNFTApi* | [**solanaGetNFTOwnerAdvanced**](docs/SolanaNFTApi.md#solanaGetNFTOwnerAdvanced) | **GET** /solana/nft/{network}/{mint_address}/owner_advanced | Get owner of an NFT (advanced)
*theblockchainapi.SolanaNFTApi* | [**solanaGetNFTsCandyMachineId**](docs/SolanaNFTApi.md#solanaGetNFTsCandyMachineId) | **POST** /solana/nft/candy_machine_id | Get the ID of the candy machine of an NFT 
*theblockchainapi.SolanaNFTApi* | [**solanaSearchNFTs**](docs/SolanaNFTApi.md#solanaSearchNFTs) | **POST** /solana/nft/search | Search NFTs on Solana
*theblockchainapi.SolanaSPLTokenApi* | [**solanaGetSPLToken**](docs/SolanaSPLTokenApi.md#solanaGetSPLToken) | **GET** /solana/spl-token/{network}/{public_key} | Get SPL token metadata
*theblockchainapi.SolanaTransactionApi* | [**solanaGetTransaction**](docs/SolanaTransactionApi.md#solanaGetTransaction) | **GET** /solana/transaction/{network}/{tx_signature} | Get the details of a transaction made on Solana
*theblockchainapi.SolanaWalletApi* | [**solanaDeriveAssociatedTokenAccountAddress**](docs/SolanaWalletApi.md#solanaDeriveAssociatedTokenAccountAddress) | **GET** /solana/wallet/{public_key}/associated_token_account/{mint_address} | Derive an associated token account address
*theblockchainapi.SolanaWalletApi* | [**solanaDerivePrivateKey**](docs/SolanaWalletApi.md#solanaDerivePrivateKey) | **POST** /solana/wallet/private_key | Derive private key
*theblockchainapi.SolanaWalletApi* | [**solanaDerivePublicKey**](docs/SolanaWalletApi.md#solanaDerivePublicKey) | **POST** /solana/wallet/public_key | Derive public key
*theblockchainapi.SolanaWalletApi* | [**solanaGeneratePrivateKey**](docs/SolanaWalletApi.md#solanaGeneratePrivateKey) | **POST** /solana/wallet/generate/private_key | Generate private key
*theblockchainapi.SolanaWalletApi* | [**solanaGenerateSecretRecoveryPhrase**](docs/SolanaWalletApi.md#solanaGenerateSecretRecoveryPhrase) | **POST** /solana/wallet/generate/secret_recovery_phrase | Generate secret phrase
*theblockchainapi.SolanaWalletApi* | [**solanaGetAirdrop**](docs/SolanaWalletApi.md#solanaGetAirdrop) | **POST** /solana/wallet/airdrop | Get an airdrop on devnet
*theblockchainapi.SolanaWalletApi* | [**solanaGetBalance**](docs/SolanaWalletApi.md#solanaGetBalance) | **POST** /solana/wallet/balance | Get wallet&#39;s balance in SOL or any SPL
*theblockchainapi.SolanaWalletApi* | [**solanaGetNFTsBelongingToWallet**](docs/SolanaWalletApi.md#solanaGetNFTsBelongingToWallet) | **GET** /solana/wallet/{network}/{public_key}/nfts | Get address&#39;s NFTs
*theblockchainapi.SolanaWalletApi* | [**solanaGetTokensBelongingToWallet**](docs/SolanaWalletApi.md#solanaGetTokensBelongingToWallet) | **GET** /solana/wallet/{network}/{public_key}/tokens | Get address&#39;s tokens and respective balances
*theblockchainapi.SolanaWalletApi* | [**solanaGetWalletTransactions**](docs/SolanaWalletApi.md#solanaGetWalletTransactions) | **GET** /solana/wallet/{network}/{public_key}/transactions | Get address&#39;s associated transaction signatures
*theblockchainapi.SolanaWalletApi* | [**solanaTransfer**](docs/SolanaWalletApi.md#solanaTransfer) | **POST** /solana/wallet/transfer | Transfer SOL, a token, or an NFT to another address
*theblockchainapi.TokenApi* | [**getTokenMetadata**](docs/TokenApi.md#getTokenMetadata) | **GET** /{blockchain}/{network}/token/{token_blockchain_identifier} | Get a token&#39;s metadata
*theblockchainapi.TokenApi* | [**listAllTokens**](docs/TokenApi.md#listAllTokens) | **GET** /{blockchain}/{network}/all_tokens | List all tokens
*theblockchainapi.TransactionApi* | [**getTransaction**](docs/TransactionApi.md#getTransaction) | **GET** /{blockchain}/transaction/{network}/{transaction_blockchain_identifier} | Get the details of a transaction made on a blockchain
*theblockchainapi.WalletApi* | [**derivePrivateKey**](docs/WalletApi.md#derivePrivateKey) | **POST** /{blockchain}/wallet/private_key | Derive private key
*theblockchainapi.WalletApi* | [**deriveWalletIdentifier**](docs/WalletApi.md#deriveWalletIdentifier) | **POST** /{blockchain}/wallet/identifier | Derive wallet identifier
*theblockchainapi.WalletApi* | [**generatePrivateKey**](docs/WalletApi.md#generatePrivateKey) | **POST** /{blockchain}/wallet/generate/private_key | Generate private key
*theblockchainapi.WalletApi* | [**generateSeedPhrase**](docs/WalletApi.md#generateSeedPhrase) | **POST** /{blockchain}/wallet/generate/secret_recovery_phrase | Generate seed phrase
*theblockchainapi.WalletApi* | [**getAirdrop**](docs/WalletApi.md#getAirdrop) | **POST** /{blockchain}/wallet/airdrop | Get an airdrop
*theblockchainapi.WalletApi* | [**getBalance**](docs/WalletApi.md#getBalance) | **POST** /{blockchain}/wallet/balance | Get wallet&#39;s balance of X
*theblockchainapi.WalletApi* | [**transfer**](docs/WalletApi.md#transfer) | **POST** /{blockchain}/wallet/transfer | Transfer crypto, a token, or an NFT to another wallet


## Documentation for Models

 - [theblockchainapi.ATAResponse](docs/ATAResponse.md)
 - [theblockchainapi.Account](docs/Account.md)
 - [theblockchainapi.AccountContext](docs/AccountContext.md)
 - [theblockchainapi.AccountIsCandyMachine](docs/AccountIsCandyMachine.md)
 - [theblockchainapi.AccountIsNFT](docs/AccountIsNFT.md)
 - [theblockchainapi.AccountValue](docs/AccountValue.md)
 - [theblockchainapi.AirdropRequest](docs/AirdropRequest.md)
 - [theblockchainapi.AvalancheCChainPublicAddress](docs/AvalancheCChainPublicAddress.md)
 - [theblockchainapi.AvalancheXPChainPublicAddress](docs/AvalancheXPChainPublicAddress.md)
 - [theblockchainapi.B58PrivateKey](docs/B58PrivateKey.md)
 - [theblockchainapi.BSCPublicAddress](docs/BSCPublicAddress.md)
 - [theblockchainapi.BalanceRequest](docs/BalanceRequest.md)
 - [theblockchainapi.BalanceResponse](docs/BalanceResponse.md)
 - [theblockchainapi.CCPayment](docs/CCPayment.md)
 - [theblockchainapi.CCPaymentBlockchainPaymentDetails](docs/CCPaymentBlockchainPaymentDetails.md)
 - [theblockchainapi.CCProject](docs/CCProject.md)
 - [theblockchainapi.CCProjectCreateRequest](docs/CCProjectCreateRequest.md)
 - [theblockchainapi.CCProjectCreateRequestCustomerIdToCollect](docs/CCProjectCreateRequestCustomerIdToCollect.md)
 - [theblockchainapi.CCProjectCreateRequestPayoutMethod](docs/CCProjectCreateRequestPayoutMethod.md)
 - [theblockchainapi.CCWebhook](docs/CCWebhook.md)
 - [theblockchainapi.CCWebhookValidateRequest](docs/CCWebhookValidateRequest.md)
 - [theblockchainapi.CandyMachineSearchRequest](docs/CandyMachineSearchRequest.md)
 - [theblockchainapi.DoubleTransferResponse](docs/DoubleTransferResponse.md)
 - [theblockchainapi.EthereumPublicAddress](docs/EthereumPublicAddress.md)
 - [theblockchainapi.EthereumTransaction](docs/EthereumTransaction.md)
 - [theblockchainapi.EthereumTransactionCompiledResponse](docs/EthereumTransactionCompiledResponse.md)
 - [theblockchainapi.EthereumTransactionMadeResponse](docs/EthereumTransactionMadeResponse.md)
 - [theblockchainapi.FeePayerWallet](docs/FeePayerWallet.md)
 - [theblockchainapi.GeneralAirdropRequest](docs/GeneralAirdropRequest.md)
 - [theblockchainapi.GeneralB58PrivateKey](docs/GeneralB58PrivateKey.md)
 - [theblockchainapi.GeneralBalanceRequest](docs/GeneralBalanceRequest.md)
 - [theblockchainapi.GeneralBalanceResponse](docs/GeneralBalanceResponse.md)
 - [theblockchainapi.GeneralFeePayerWallet](docs/GeneralFeePayerWallet.md)
 - [theblockchainapi.GeneralGeneratePrivateKeyResponse](docs/GeneralGeneratePrivateKeyResponse.md)
 - [theblockchainapi.GeneralPrivateKey](docs/GeneralPrivateKey.md)
 - [theblockchainapi.GeneralSecretPhrase](docs/GeneralSecretPhrase.md)
 - [theblockchainapi.GeneralSecretRecoveryPhrase](docs/GeneralSecretRecoveryPhrase.md)
 - [theblockchainapi.GeneralTransaction](docs/GeneralTransaction.md)
 - [theblockchainapi.GeneralTransactionMadeResponse](docs/GeneralTransactionMadeResponse.md)
 - [theblockchainapi.GeneralTransactionResponse](docs/GeneralTransactionResponse.md)
 - [theblockchainapi.GeneralTransferRequest](docs/GeneralTransferRequest.md)
 - [theblockchainapi.GeneralWallet](docs/GeneralWallet.md)
 - [theblockchainapi.GeneratePrivateKey](docs/GeneratePrivateKey.md)
 - [theblockchainapi.GenerateSeedPhraseRequest](docs/GenerateSeedPhraseRequest.md)
 - [theblockchainapi.GetAllNFTsResponse](docs/GetAllNFTsResponse.md)
 - [theblockchainapi.GetAllNFTsResponseMintedNfts](docs/GetAllNFTsResponseMintedNfts.md)
 - [theblockchainapi.GetAllNFTsResponseUnmintedNfts](docs/GetAllNFTsResponseUnmintedNfts.md)
 - [theblockchainapi.GetCandyMachineIDRequest](docs/GetCandyMachineIDRequest.md)
 - [theblockchainapi.GetCandyMachineIDResponse](docs/GetCandyMachineIDResponse.md)
 - [theblockchainapi.GetCandyMetadataErrorResponse](docs/GetCandyMetadataErrorResponse.md)
 - [theblockchainapi.GetCandyMetadataRequest](docs/GetCandyMetadataRequest.md)
 - [theblockchainapi.GetCandyMetadataResponse](docs/GetCandyMetadataResponse.md)
 - [theblockchainapi.GetCandyMetadataResponseCreators](docs/GetCandyMetadataResponseCreators.md)
 - [theblockchainapi.GetPublicKeyRequest](docs/GetPublicKeyRequest.md)
 - [theblockchainapi.GetSPLTokenResponse](docs/GetSPLTokenResponse.md)
 - [theblockchainapi.HexPrivateKey](docs/HexPrivateKey.md)
 - [theblockchainapi.InputBlockchainIdentifier](docs/InputBlockchainIdentifier.md)
 - [theblockchainapi.InputName](docs/InputName.md)
 - [theblockchainapi.ListNFTsResponse](docs/ListNFTsResponse.md)
 - [theblockchainapi.NFT](docs/NFT.md)
 - [theblockchainapi.NFTCollection](docs/NFTCollection.md)
 - [theblockchainapi.NFTData](docs/NFTData.md)
 - [theblockchainapi.NFTMintErrorResponse](docs/NFTMintErrorResponse.md)
 - [theblockchainapi.NFTMintFee](docs/NFTMintFee.md)
 - [theblockchainapi.NFTMintRequest](docs/NFTMintRequest.md)
 - [theblockchainapi.NFTOwnerAdvancedResponse](docs/NFTOwnerAdvancedResponse.md)
 - [theblockchainapi.NFTOwnerAdvancedResponseContract](docs/NFTOwnerAdvancedResponseContract.md)
 - [theblockchainapi.NFTOwnerResponse](docs/NFTOwnerResponse.md)
 - [theblockchainapi.NFTSearchRequest](docs/NFTSearchRequest.md)
 - [theblockchainapi.NFTSearchResponse](docs/NFTSearchResponse.md)
 - [theblockchainapi.NearPublicKey](docs/NearPublicKey.md)
 - [theblockchainapi.PrivateKey](docs/PrivateKey.md)
 - [theblockchainapi.PublicKey](docs/PublicKey.md)
 - [theblockchainapi.SecretPhrase](docs/SecretPhrase.md)
 - [theblockchainapi.SecretRecoveryPhrase](docs/SecretRecoveryPhrase.md)
 - [theblockchainapi.SolanaPublicKey](docs/SolanaPublicKey.md)
 - [theblockchainapi.SolanaTransaction](docs/SolanaTransaction.md)
 - [theblockchainapi.SolanaTransactionCompiledResponse](docs/SolanaTransactionCompiledResponse.md)
 - [theblockchainapi.SolanaTransactionMadeResponse](docs/SolanaTransactionMadeResponse.md)
 - [theblockchainapi.SupplyWalletRequest](docs/SupplyWalletRequest.md)
 - [theblockchainapi.TokenMetadataResponse](docs/TokenMetadataResponse.md)
 - [theblockchainapi.Transaction](docs/Transaction.md)
 - [theblockchainapi.TransactionResult](docs/TransactionResult.md)
 - [theblockchainapi.TransferRequest](docs/TransferRequest.md)
 - [theblockchainapi.TransferResponse](docs/TransferResponse.md)
 - [theblockchainapi.TransferResponseCompiled](docs/TransferResponseCompiled.md)
 - [theblockchainapi.Wallet](docs/Wallet.md)
 - [theblockchainapi.WalletIdentifiers](docs/WalletIdentifiers.md)


## Documentation for Authorization



### APIKeyID


- **Type**: API key
- **API key parameter name**: APIKeyID
- **Location**: HTTP header



### APISecretKey


- **Type**: API key
- **API key parameter name**: APISecretKey
- **Location**: HTTP header

