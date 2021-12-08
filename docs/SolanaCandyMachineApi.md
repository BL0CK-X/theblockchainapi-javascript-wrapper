# theblockchainapi.SolanaCandyMachineApi

All URIs are relative to *https://api.theblockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaCreateTestCandyMachine**](SolanaCandyMachineApi.md#solanaCreateTestCandyMachine) | **POST** /solana/nft/candy_machine | Create a test candy machine 
[**solanaGetAllNFTsFromCandyMachine**](SolanaCandyMachineApi.md#solanaGetAllNFTsFromCandyMachine) | **GET** /solana/nft/candy_machine/{network}/{candy_machine_id}/nfts | Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 
[**solanaGetCandyMachineConfigurationDetails**](SolanaCandyMachineApi.md#solanaGetCandyMachineConfigurationDetails) | **POST** /solana/nft/candy_machine/config/info | Get the details of a Solana Candy Machine configuration 
[**solanaGetCandyMachineDetails**](SolanaCandyMachineApi.md#solanaGetCandyMachineDetails) | **POST** /solana/nft/candy_machine/info | Get a Metaplex candy machine&#39;s details 
[**solanaGetNFTsMintedFromCandyMachine**](SolanaCandyMachineApi.md#solanaGetNFTsMintedFromCandyMachine) | **POST** /solana/nft/candy_machine/nfts | Get the list of NFTs minted from a Solana Candy Machine 
[**solanaMintFromCandyMachine**](SolanaCandyMachineApi.md#solanaMintFromCandyMachine) | **POST** /solana/nft/candy_machine/mint | Mint an NFT from a Metaplex candy machine



## solanaCreateTestCandyMachine

> CreateTestCandyMachineResponse solanaCreateTestCandyMachine(opts)

Create a test candy machine 

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/create-test-candy-machine\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.   Use this endpoint to create a test candy machine so that you can test your minting bot.  &#x60;Cost: 1 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaCandyMachineApi();
let opts = {
  'createTestCandyMachineRequest': new theblockchainapi.CreateTestCandyMachineRequest() // CreateTestCandyMachineRequest | 
};
apiInstance.solanaCreateTestCandyMachine(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTestCandyMachineRequest** | [**CreateTestCandyMachineRequest**](CreateTestCandyMachineRequest.md)|  | [optional] 

### Return type

[**CreateTestCandyMachineResponse**](CreateTestCandyMachineResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetAllNFTsFromCandyMachine

> GetAllNFTsResponse solanaGetAllNFTsFromCandyMachine(network, candyMachineId)

Get the list of all NFTs (minted and unminted) from a Solana Candy Machine 

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-all-nfts\&quot; target&#x3D;\&quot;_blank\&quot;&gt; See examples (Python, JavaScript)&lt;/a&gt;.  Use this endpoint to get the list of all NFTs (minted and unminted) from a Solana Candy Machine.  &#x60;Cost: 3 Credits&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaCandyMachineApi();
let network = mainnet-beta; // String | The network ID (devnet, mainnet-beta)
let candyMachineId = FmkrvXRenCGtwBHw3VtBcExp8eTdnau97upaewF4GUEX; // String | The ID of the candy machine
apiInstance.solanaGetAllNFTsFromCandyMachine(network, candyMachineId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID (devnet, mainnet-beta) | 
 **candyMachineId** | **String**| The ID of the candy machine | 

### Return type

[**GetAllNFTsResponse**](GetAllNFTsResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetCandyMachineConfigurationDetails

> GetConfigInfoResponse solanaGetCandyMachineConfigurationDetails(opts)

Get the details of a Solana Candy Machine configuration 

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-config-info\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Use this endpoint to get the details of a Solana Candy Machine configuration.  &#x60;Cost: 1 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaCandyMachineApi();
let opts = {
  'getConfigInfoRequest': new theblockchainapi.GetConfigInfoRequest() // GetConfigInfoRequest | 
};
apiInstance.solanaGetCandyMachineConfigurationDetails(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getConfigInfoRequest** | [**GetConfigInfoRequest**](GetConfigInfoRequest.md)|  | [optional] 

### Return type

[**GetConfigInfoResponse**](GetConfigInfoResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetCandyMachineDetails

> GetCandyDetailsResponse solanaGetCandyMachineDetails(opts)

Get a Metaplex candy machine&#39;s details 

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-info\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Use this endpoint to get the following details about a Metaplex candy machine: uuid, go live date, items in the collection, and the cost to mint.  &#x60;Cost: 2 Credits&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaCandyMachineApi();
let opts = {
  'getCandyDetailsRequest': new theblockchainapi.GetCandyDetailsRequest() // GetCandyDetailsRequest | 
};
apiInstance.solanaGetCandyMachineDetails(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCandyDetailsRequest** | [**GetCandyDetailsRequest**](GetCandyDetailsRequest.md)|  | [optional] 

### Return type

[**GetCandyDetailsResponse**](GetCandyDetailsResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetNFTsMintedFromCandyMachine

> [GetMintedNFTsResponse] solanaGetNFTsMintedFromCandyMachine(opts)

Get the list of NFTs minted from a Solana Candy Machine 

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-minted-nfts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Use this endpoint to get the list of NFTs minted from a Solana Candy Machine.  See example for how to get the list of NFT hashes &lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/get-candy-machine-hash-table\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.  &#x60;Cost: 2 Credits&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaCandyMachineApi();
let opts = {
  'getMintedNFTsRequest': new theblockchainapi.GetMintedNFTsRequest() // GetMintedNFTsRequest | 
};
apiInstance.solanaGetNFTsMintedFromCandyMachine(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getMintedNFTsRequest** | [**GetMintedNFTsRequest**](GetMintedNFTsRequest.md)|  | [optional] 

### Return type

[**[GetMintedNFTsResponse]**](GetMintedNFTsResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaMintFromCandyMachine

> MintNFTResponse solanaMintFromCandyMachine(opts)

Mint an NFT from a Metaplex candy machine

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-candy-machine/mint-from-candy-machine\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Use this endpoint to mint an NFT from a metaplex candy machine as soon as it drops.  &#x60;Cost: 10 Credits&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaCandyMachineApi();
let opts = {
  'mintNFTRequest': new theblockchainapi.MintNFTRequest() // MintNFTRequest | 
};
apiInstance.solanaMintFromCandyMachine(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mintNFTRequest** | [**MintNFTRequest**](MintNFTRequest.md)|  | [optional] 

### Return type

[**MintNFTResponse**](MintNFTResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

