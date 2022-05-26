# theblockchainapi.SolanaNFTMarketplacesApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaBuyNFT**](SolanaNFTMarketplacesApi.md#solanaBuyNFT) | **POST** /solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address} | Buy
[**solanaDelistNFT**](SolanaNFTMarketplacesApi.md#solanaDelistNFT) | **POST** /solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address} | Delist
[**solanaGetNFTListing**](SolanaNFTMarketplacesApi.md#solanaGetNFTListing) | **GET** /solana/nft/marketplaces/listing/{network}/{mint_address} | Get NFT Listing
[**solanaGetNFTMarketplaceAnalytics**](SolanaNFTMarketplacesApi.md#solanaGetNFTMarketplaceAnalytics) | **POST** /solana/nft/marketplaces/analytics | Get NFT Analytics
[**solanaGetNFTMarketplaceMarketShare**](SolanaNFTMarketplacesApi.md#solanaGetNFTMarketplaceMarketShare) | **GET** /solana/nft/marketplaces/analytics/market_share | Get Marketplace Market Share
[**solanaGetNFTMarketplaceRecentTransactions**](SolanaNFTMarketplacesApi.md#solanaGetNFTMarketplaceRecentTransactions) | **GET** /solana/nft/marketplaces/analytics/recent_transactions | Get Recent NFT Transactions
[**solanaListNFT**](SolanaNFTMarketplacesApi.md#solanaListNFT) | **POST** /solana/nft/marketplaces/{exchange}/list/{network}/{mint_address} | List



## solanaBuyNFT

> BuyResponse solanaBuyNFT(network, exchange, mintAddress, opts)

Buy

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  &#x60;Cost: 25 Credits&#x60;, &#x60;Cost: 3 Credits on Devnet&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
let network = devnet; // String | The network ID
let exchange = magic-eden; // String | The NFT exchange to interact with
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
let opts = {
  'buyRequest': new theblockchainapi.BuyRequest() // BuyRequest | 
};
apiInstance.solanaBuyNFT(network, exchange, mintAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID | 
 **exchange** | **String**| The NFT exchange to interact with | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 
 **buyRequest** | [**BuyRequest**](BuyRequest.md)|  | [optional] 

### Return type

[**BuyResponse**](BuyResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaDelistNFT

> DelistResponse solanaDelistNFT(network, exchange, mintAddress, opts)

Delist

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  &#x60;Cost: 8 Credits&#x60;, &#x60;Cost: 3 Credits on Devnet&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
let network = devnet; // String | The network ID
let exchange = magic-eden; // String | The NFT exchange to interact with
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
let opts = {
  'delistRequest': new theblockchainapi.DelistRequest() // DelistRequest | 
};
apiInstance.solanaDelistNFT(network, exchange, mintAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID | 
 **exchange** | **String**| The NFT exchange to interact with | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 
 **delistRequest** | [**DelistRequest**](DelistRequest.md)|  | [optional] 

### Return type

[**DelistResponse**](DelistResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetNFTListing

> GetNFTListingResponse solanaGetNFTListing(network, mintAddress)

Get NFT Listing

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Get the Marketplace listing of a Solana NFT.  Currently checks the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  &#x60;Cost: 1 Credits&#x60;, (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
let network = devnet; // String | The network ID
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
 **network** | **String**| The network ID | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 

### Return type

[**GetNFTListingResponse**](GetNFTListingResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetNFTMarketplaceAnalytics

> NFTAnalyticsResponse solanaGetNFTMarketplaceAnalytics(opts)

Get NFT Analytics

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/analytics\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  A collection is a list of NFTs.  Any collection can thus be defined as a list of mint addresses.  This endpoint takes in a list of mint addresses (effectively, a collection), a start time (optional), and an end time (optional) and outputs the floor for that period, the volume for that period, and the transaction history for each NFT in the list (buy, list, delist, update price) for that period.  We are currently compiling a dictionary of collection names to list of mint addresses for public use. Please contribute &lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/solana-nft-collection-mint-addresses\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.  Currently scans the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  &#x60;Cost: 15 Credits&#x60;, (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
let opts = {
  'nFTAnalyticsRequest': new theblockchainapi.NFTAnalyticsRequest() // NFTAnalyticsRequest | 
};
apiInstance.solanaGetNFTMarketplaceAnalytics(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nFTAnalyticsRequest** | [**NFTAnalyticsRequest**](NFTAnalyticsRequest.md)|  | [optional] 

### Return type

[**NFTAnalyticsResponse**](NFTAnalyticsResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetNFTMarketplaceMarketShare

> Object solanaGetNFTMarketplaceMarketShare()

Get Marketplace Market Share

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/market-share\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  &#x60;Cost: 3 Credits&#x60;, (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
apiInstance.solanaGetNFTMarketplaceMarketShare().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetNFTMarketplaceRecentTransactions

> [NFTTransaction] solanaGetNFTMarketplaceRecentTransactions()

Get Recent NFT Transactions

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/recent-transactions\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Get all NFT transactions across all major marketplaces in the last 30 minutes.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden, Solanart, Alpha Art, Digital Eyes, Exchange.art  &#x60;Cost: 15 Credits&#x60;, (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
apiInstance.solanaGetNFTMarketplaceRecentTransactions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[NFTTransaction]**](NFTTransaction.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaListNFT

> ListResponse solanaListNFT(network, exchange, mintAddress, opts)

List

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  &#x60;Cost: 12 Credits&#x60;, &#x60;Cost: 3 Credits on Devnet&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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
let network = devnet; // String | The network ID
let exchange = magic-eden; // String | The NFT exchange to interact with
let mintAddress = 7GA16mQup7ESJbaD6n49VCwVG9kRkyQDzWKhBSLjbYqr; // String | The mint address of the NFT you want to buy
let opts = {
  'listRequest': new theblockchainapi.ListRequest() // ListRequest | 
};
apiInstance.solanaListNFT(network, exchange, mintAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID | 
 **exchange** | **String**| The NFT exchange to interact with | 
 **mintAddress** | **String**| The mint address of the NFT you want to buy | 
 **listRequest** | [**ListRequest**](ListRequest.md)|  | [optional] 

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

