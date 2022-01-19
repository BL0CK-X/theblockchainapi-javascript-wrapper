# theblockchainapi.SolanaNFTMarketplacesApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaBuyNFT**](SolanaNFTMarketplacesApi.md#solanaBuyNFT) | **POST** /solana/nft/marketplaces/{exchange}/buy/{network}/{mint_address} | Buy
[**solanaDelistNFT**](SolanaNFTMarketplacesApi.md#solanaDelistNFT) | **POST** /solana/nft/marketplaces/{exchange}/delist/{network}/{mint_address} | Delist
[**solanaGetNFTListing**](SolanaNFTMarketplacesApi.md#solanaGetNFTListing) | **GET** /solana/nft/marketplaces/listing/{network}/{mint_address} | Get NFT Listing
[**solanaListNFT**](SolanaNFTMarketplacesApi.md#solanaListNFT) | **POST** /solana/nft/marketplaces/{exchange}/list/{network}/{mint_address} | List



## solanaBuyNFT

> BuyResponse solanaBuyNFT(network, exchange, mintAddress, opts)

Buy

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/buy-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Buy an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  &#x60;Cost: 25 Credits&#x60;, &#x60;Cost: 3 Credits on Devnet&#x60;  Limited to $29/mo plans and above. (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)  (You are able to try on the &#x60;Free&#x60; plan as well, until you run out of credits.)

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
let exchange = solsea; // String | The NFT exchange to interact with
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

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/delist-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Delist an NFT from a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  &#x60;Cost: 8 Credits&#x60;, &#x60;Cost: 3 Credits on Devnet&#x60;  Limited to $29/mo plans and above. (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)  (You are able to try on the &#x60;Free&#x60; plan as well, until you run out of credits.)

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
let exchange = solsea; // String | The NFT exchange to interact with
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

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/get-nft-listing\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Get the Marketplace listing of a Solana NFT.  Currently checks for the following Solana NFT martketplaces: SolSea, Magic Eden  &#x60;Cost: 1 Credits&#x60;, (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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


## solanaListNFT

> ListResponse solanaListNFT(network, exchange, mintAddress, opts)

List

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/tree/main/examples/solana-nft-marketplaces/list-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  List an NFT on a Solana Exchange.  Exchanges supported: SolSea, Magic Eden  **We are not responsible for any SOL or NFT lost.**  &#x60;Cost: 12 Credits&#x60;, &#x60;Cost: 3 Credits on Devnet&#x60;  Limited to $29/mo plans and above. (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)  (You are able to try on the &#x60;Free&#x60; plan as well, until you run out of credits.)

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
let exchange = solsea; // String | The NFT exchange to interact with
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

