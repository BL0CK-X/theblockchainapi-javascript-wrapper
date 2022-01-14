# theblockchainapi.SolanaNFTMarketplacesApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaBuyNFTFromSolSea**](SolanaNFTMarketplacesApi.md#solanaBuyNFTFromSolSea) | **POST** /solana/nft/marketplaces/solsea/buy/{network}/{mint_address} | Buy from SolSea
[**solanaDelistNFTFromSolSea**](SolanaNFTMarketplacesApi.md#solanaDelistNFTFromSolSea) | **POST** /solana/nft/marketplaces/solsea/delist/{network}/{mint_address} | Delist from SolSea
[**solanaGetNFTListing**](SolanaNFTMarketplacesApi.md#solanaGetNFTListing) | **GET** /solana/nft/marketplaces/listing/{network}/{mint_address} | Get NFT Listing
[**solanaListNFTOnSolSea**](SolanaNFTMarketplacesApi.md#solanaListNFTOnSolSea) | **POST** /solana/nft/marketplaces/solsea/list/{network}/{mint_address} | List on SolSea



## solanaBuyNFTFromSolSea

> SolSeaBuyResponse solanaBuyNFTFromSolSea(network, mintAddress, opts)

Buy from SolSea

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [Coming Soon]&lt;/a&gt;.  Buy an NFT from SolSea.  **We are not responsible for any SOL or NFT lost.**  &#x60;Cost: 50 Credits&#x60;, Limited to $29/mo plans and above. (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi();
let network = devnet; // String | The network ID (devnet, mainnet-beta)
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
let opts = {
  'solSeaBuyRequest': new theblockchainapi.SolSeaBuyRequest() // SolSeaBuyRequest | 
};
apiInstance.solanaBuyNFTFromSolSea(network, mintAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID (devnet, mainnet-beta) | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 
 **solSeaBuyRequest** | [**SolSeaBuyRequest**](SolSeaBuyRequest.md)|  | [optional] 

### Return type

[**SolSeaBuyResponse**](SolSeaBuyResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaDelistNFTFromSolSea

> SolSeaDelistResponse solanaDelistNFTFromSolSea(network, mintAddress, opts)

Delist from SolSea

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [Coming Soon]&lt;/a&gt;.  Delist an NFT from SolSea.  **We are not responsible for any SOL or NFT lost.**  &#x60;Cost: 8 Credits&#x60;, Limited to $29/mo plans and above. (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi();
let network = devnet; // String | The network ID (devnet, mainnet-beta)
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
let opts = {
  'solSeaDelistRequest': new theblockchainapi.SolSeaDelistRequest() // SolSeaDelistRequest | 
};
apiInstance.solanaDelistNFTFromSolSea(network, mintAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID (devnet, mainnet-beta) | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 
 **solSeaDelistRequest** | [**SolSeaDelistRequest**](SolSeaDelistRequest.md)|  | [optional] 

### Return type

[**SolSeaDelistResponse**](SolSeaDelistResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetNFTListing

> GetNFTListingResponse solanaGetNFTListing(network, mintAddress)

Get NFT Listing

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [Coming Soon]&lt;/a&gt;.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea  &#x60;Cost: 3 Credits&#x60;, (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi();
let network = devnet; // String | The network ID (devnet, mainnet-beta)
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
apiInstance.solanaGetNFTListing(network, mintAddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID (devnet, mainnet-beta) | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 

### Return type

[**GetNFTListingResponse**](GetNFTListingResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaListNFTOnSolSea

> SolSeaListResponse solanaListNFTOnSolSea(network, mintAddress, opts)

List on SolSea

&lt;a href&#x3D;\&quot;\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript) [Coming Soon]&lt;/a&gt;.  List NFT on SolSea.  **We are not responsible for any SOL or NFT lost.**  &#x60;Cost: 12 Credits&#x60;, Limited to $29/mo plans and above. (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTMarketplacesApi();
let network = devnet; // String | The network ID (devnet, mainnet-beta)
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
let opts = {
  'solSeaListRequest': new theblockchainapi.SolSeaListRequest() // SolSeaListRequest | 
};
apiInstance.solanaListNFTOnSolSea(network, mintAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID (devnet, mainnet-beta) | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 
 **solSeaListRequest** | [**SolSeaListRequest**](SolSeaListRequest.md)|  | [optional] 

### Return type

[**SolSeaListResponse**](SolSeaListResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

