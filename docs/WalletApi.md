# theblockchainapi.WalletApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**derivePrivateKey**](WalletApi.md#derivePrivateKey) | **POST** /{blockchain}/wallet/private_key | Derive private key
[**deriveWalletIdentifier**](WalletApi.md#deriveWalletIdentifier) | **POST** /{blockchain}/wallet/identifier | Derive wallet identifier
[**generatePrivateKey**](WalletApi.md#generatePrivateKey) | **POST** /{blockchain}/wallet/generate/private_key | Generate private key
[**generateSeedPhrase**](WalletApi.md#generateSeedPhrase) | **POST** /{blockchain}/wallet/generate/secret_recovery_phrase | Generate seed phrase
[**getAirdrop**](WalletApi.md#getAirdrop) | **POST** /{blockchain}/wallet/airdrop | Get an airdrop
[**getBalance**](WalletApi.md#getBalance) | **POST** /{blockchain}/wallet/balance | Get wallet&#39;s balance of X
[**transfer**](WalletApi.md#transfer) | **POST** /{blockchain}/wallet/transfer | Transfer crypto, a token, or an NFT to another wallet



## derivePrivateKey

> GeneralGeneratePrivateKeyResponse derivePrivateKey(blockchain, supplyWalletRequest)

Derive private key

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [COMING SOON]&lt;/a&gt;.  Use this endpoint to securely derive a private key for a wallet.   For example, if you have a seed phrase and want to derive the corresponding private key, use this endpoint.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
let supplyWalletRequest = new theblockchainapi.SupplyWalletRequest(); // SupplyWalletRequest | 
apiInstance.derivePrivateKey(blockchain, supplyWalletRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 
 **supplyWalletRequest** | [**SupplyWalletRequest**](SupplyWalletRequest.md)|  | 

### Return type

[**GeneralGeneratePrivateKeyResponse**](GeneralGeneratePrivateKeyResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deriveWalletIdentifier

> WalletIdentifiers deriveWalletIdentifier(blockchain, supplyWalletRequest)

Derive wallet identifier

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [COMING SOON]&lt;/a&gt;.  Derive the identifier for a wallet.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
let supplyWalletRequest = new theblockchainapi.SupplyWalletRequest(); // SupplyWalletRequest | 
apiInstance.deriveWalletIdentifier(blockchain, supplyWalletRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 
 **supplyWalletRequest** | [**SupplyWalletRequest**](SupplyWalletRequest.md)|  | 

### Return type

[**WalletIdentifiers**](WalletIdentifiers.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## generatePrivateKey

> GeneralGeneratePrivateKeyResponse generatePrivateKey(blockchain)

Generate private key

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [COMING SOON]&lt;/a&gt;.  Use this endpoint to securely and randomly generate a private key for a wallet.   &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
apiInstance.generatePrivateKey(blockchain).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 

### Return type

[**GeneralGeneratePrivateKeyResponse**](GeneralGeneratePrivateKeyResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateSeedPhrase

> GeneralSecretPhrase generateSeedPhrase(blockchain, opts)

Generate seed phrase

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [COMING SOON]&lt;/a&gt;.  Use this endpoint to securely and randomly generate a seed phrase for a wallet.   &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
let opts = {
  'generateSeedPhraseRequest': new theblockchainapi.GenerateSeedPhraseRequest() // GenerateSeedPhraseRequest | 
};
apiInstance.generateSeedPhrase(blockchain, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 
 **generateSeedPhraseRequest** | [**GenerateSeedPhraseRequest**](GenerateSeedPhraseRequest.md)|  | [optional] 

### Return type

[**GeneralSecretPhrase**](GeneralSecretPhrase.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAirdrop

> GeneralTransactionMadeResponse getAirdrop(blockchain, opts)

Get an airdrop

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [Coming Soon]&lt;/a&gt;.      - Ethereum: Receive an airdrop of 0.001 ETH on Ropsten (not real ETH).  - Solana: Use this endpoint to get an airdrop of SOL on the devnet (not real SOL). Amount of 0.015, which is the minimum amount of SOL you need to mint an NFT and then transfer it to another wallet.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
let opts = {
  'generalAirdropRequest': new theblockchainapi.GeneralAirdropRequest() // GeneralAirdropRequest | 
};
apiInstance.getAirdrop(blockchain, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 
 **generalAirdropRequest** | [**GeneralAirdropRequest**](GeneralAirdropRequest.md)|  | [optional] 

### Return type

[**GeneralTransactionMadeResponse**](GeneralTransactionMadeResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getBalance

> GeneralBalanceResponse getBalance(blockchain, opts)

Get wallet&#39;s balance of X

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [Coming soon]&lt;/a&gt;.      See the balance of a wallet in the native blockchain currency (e.g., ETH, SOL) or any token (e.g., ERC-20, NFTs, SPL, etc.).  To get the balance of a specific token, supply the &#x60;token_blockchain_identifier&#x60; of the token.   You can also use this endpoint to see whether or not a person owns an NFT. Just supply the &#x60;token_blockchain_identifier&#x60; of the NFT. A balance of \&quot;1\&quot; means the person owns the NFT, and a balance of \&quot;0\&quot; means the person does not own the NFT.  &#x60;Cost: 0.25 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
let opts = {
  'generalBalanceRequest': new theblockchainapi.GeneralBalanceRequest() // GeneralBalanceRequest | 
};
apiInstance.getBalance(blockchain, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 
 **generalBalanceRequest** | [**GeneralBalanceRequest**](GeneralBalanceRequest.md)|  | [optional] 

### Return type

[**GeneralBalanceResponse**](GeneralBalanceResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transfer

> GeneralTransactionResponse transfer(blockchain, opts)

Transfer crypto, a token, or an NFT to another wallet

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See transfer ETH/SOL/crypto example (Python, JavaScript) [Coming Soon]&lt;/a&gt;.  &lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See transfer NFT/token example (Python, JavaScript) [Coming Soon]&lt;/a&gt;.  This is a powerful function. It might be slightly confusing because there are several optional parameters, so take some time to review it.   This function can send - The native currency of the selected blockchain (e.g., SOL, ETH, BNB, etc.) - A token (e.g., an SPL token, ERC-20 token, etc.) - An NFT  You can sign and submit the transaction for confirmation; and you can select to simply return the compiled transaction so that you can submit it to the user for signing (e.g., via Phantom or Metamask; no private keys required in this case).  If you&#39;re transferring an NFT or a token, supply its respective &#x60;token_blockchain_identifier&#x60;.  SENDER: Note that the wallet information is used to authorize the sending of the tokens and identifies the source of the tokens. If &#x60;return_compiled_transaction &#x3D; false&#x60;, we sign and submit the transaction (&#x60;wallet&#x60; is required in this case; do not provide a value for &#x60;sender_blockchain_identifier&#x60;). If &#x60;return_compiled_transaction &#x3D; true&#x60;, we compile the transaction (&#x60;sender_blockchain_identifier&#x60; is required in this case; do not provide &#x60;wallet&#x60;).  RECIPIENT: &#x60;recipient_blockchain_identifier&#x60; identifies the receiver. This is entirely separate from the information used for the SENDER above. So, in this API call, there are two wallets involved, but only one (namely, the SENDER) is needed to authorize the transaction (if you want us to sign and submitting it).  FEE_PAYER (Solana only): The fee payer of the transaction defaults to &#x60;wallet&#x60; (or &#x60;sender_blockchain_identifier&#x60;). To set a different fee payer, provide a value for &#x60;fee_payer_wallet&#x60;.  &#x60;Cost: 2 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.WalletApi();
let blockchain = "blockchain_example"; // String | The blockchain you want to use 
let opts = {
  'generalTransferRequest': new theblockchainapi.GeneralTransferRequest() // GeneralTransferRequest | 
};
apiInstance.transfer(blockchain, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchain** | **String**| The blockchain you want to use  | 
 **generalTransferRequest** | [**GeneralTransferRequest**](GeneralTransferRequest.md)|  | [optional] 

### Return type

[**GeneralTransactionResponse**](GeneralTransactionResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

