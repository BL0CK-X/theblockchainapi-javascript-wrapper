# theblockchainapi.SolanaNFTApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**solanaCreateNFT**](SolanaNFTApi.md#solanaCreateNFT) | **POST** /solana/nft | Create an NFT on Solana
[**solanaGetNFT**](SolanaNFTApi.md#solanaGetNFT) | **GET** /solana/nft/{network}/{mint_address} | Get an NFT&#39;s metadata
[**solanaGetNFTMintFee**](SolanaNFTApi.md#solanaGetNFTMintFee) | **GET** /solana/nft/mint/fee | Get the NFT mint fee
[**solanaGetNFTOwner**](SolanaNFTApi.md#solanaGetNFTOwner) | **GET** /solana/nft/{network}/{mint_address}/owner | Get owner of an NFT
[**solanaGetNFTOwnerAdvanced**](SolanaNFTApi.md#solanaGetNFTOwnerAdvanced) | **GET** /solana/nft/{network}/{mint_address}/owner_advanced | Get owner of an NFT (advanced)
[**solanaGetNFTsCandyMachineId**](SolanaNFTApi.md#solanaGetNFTsCandyMachineId) | **POST** /solana/nft/candy_machine_id | Get the ID of the candy machine of an NFT 
[**solanaSearchNFTs**](SolanaNFTApi.md#solanaSearchNFTs) | **POST** /solana/nft/search | Search NFTs on Solana



## solanaCreateNFT

> NFT solanaCreateNFT(opts)

Create an NFT on Solana

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/create-an-nft\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Create a Metaplex NFT on Solana.   Read more on this &lt;a href&#x3D;\&quot;https://blog.blockchainapi.com/2021/11/16/a-note-on-nfts.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.  Note: Please see &lt;a href&#x3D;\&quot;https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;this article&lt;/a&gt; to learn more about what &#x60;nft_upload_method&#x60; means and how storing the metadata of an NFT works.  If you&#39;re using &#x60;nft_upload_method &#x3D; \&quot;LINK\&quot;&#x60;, then to add attributes to the NFT or an image, add them to a JSON file and upload that to Arweave/IPFS/Filecoin. See the JSON format &lt;a href&#x3D;\&quot;https://blog.blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\&quot;&gt;here&lt;/a&gt;.  Then supply the link to the JSON file in &#x60;nft_url&#x60;.   NOTE: Don&#39;t use &#x60;nft_metadata&#x60;. Values provided here do not do anything at the moment. We are fixing this soon.  &#x60;Cost: 5 Credits&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
let opts = {
  'nFTMintRequest': new theblockchainapi.NFTMintRequest() // NFTMintRequest | 
};
apiInstance.solanaCreateNFT(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nFTMintRequest** | [**NFTMintRequest**](NFTMintRequest.md)|  | [optional] 

### Return type

[**NFT**](NFT.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaGetNFT

> NFT solanaGetNFT(network, mintAddress)

Get an NFT&#39;s metadata

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-metadata\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.       Get the metadata of an NFT.  If you&#39;re looking for metadata such as attributes and others, you can retrieve them from the link in the URI field of the NFT metadata returned. See the example on the right. The URI is an Arweave URL. That contains the attributes and other information about the NFT. That URL is stored on the Solana blockchain.  &#x60;Cost: 0.25 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
let network = mainnet-beta; // String | The network ID
let mintAddress = EEr5yQpNXf7Bru6Rt5podx56HGW9CEehXqgRGh2wa71w; // String | The mint address of the NFT
apiInstance.solanaGetNFT(network, mintAddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID | 
 **mintAddress** | **String**| The mint address of the NFT | 

### Return type

[**NFT**](NFT.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetNFTMintFee

> NFTMintFee solanaGetNFTMintFee()

Get the NFT mint fee

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-mint-fee\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.      Get the estimated fee for minting an NFT on the Solana blockchain using the Metaplex protocol.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
apiInstance.solanaGetNFTMintFee().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**NFTMintFee**](NFTMintFee.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetNFTOwner

> NFTOwnerResponse solanaGetNFTOwner(network, mintAddress)

Get owner of an NFT

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.       Get the owner of an NFT. This returns the public key of the wallet that owns the associated token account that owns the NFT.  If you want to get the associated token account that literally owns the NFT, derive the associated token account address from the public key returned and the NFT mint address using &lt;a href&#x3D;\&quot;#operation/solanaDeriveAssociatedTokenAccountAddress\&quot;&gt;this endpoint&lt;/a&gt;.  &#x60;Cost: 0.25 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
let network = devnet; // String | The network ID
let mintAddress = 4zH3Rwm1QXdfTSUqsYmeUBY4QqQmQEXJVbv4ErSK736Q; // String | The mint address of the NFT
apiInstance.solanaGetNFTOwner(network, mintAddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID | 
 **mintAddress** | **String**| The mint address of the NFT | 

### Return type

[**NFTOwnerResponse**](NFTOwnerResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetNFTOwnerAdvanced

> NFTOwnerAdvancedResponse solanaGetNFTOwnerAdvanced(network, mintAddress)

Get owner of an NFT (advanced)

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-owner\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.       Get the owner, state, listed price, and listed marketplace (if any) of an NFT.   Here&#39;s are a couple of example responses: &#x60;&#x60;&#x60; {     &#39;contract&#39;: {         &#39;contract_blockchain_identifier&#39;: &#39;M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K&#39;,          &#39;contract_id&#39;: &#39;magic-eden-v2&#39;,          &#39;contract_name&#39;: &#39;Magic Eden v2&#39;,          &#39;contract_type&#39;: &#39;marketplace&#39;     },      &#39;owner&#39;: &#39;25UJMR3FiMM6noQtPEaCJ6eDU2YQ7myDhikVQXmMuSRW&#39;,      &#39;price&#39;: 50000000,      &#39;state&#39;: &#39;listing&#39; } &#x60;&#x60;&#x60;  &#x60;&#x60;&#x60; {     &#39;contract&#39;: null,      &#39;owner&#39;: &#39;C37PJiJU8WTgoUoFqmB1Maw8hkuENDZoGDQA1pm54Fdd&#39;,      &#39;price&#39;: null,      &#39;state&#39;: &#39;holding&#39; } &#x60;&#x60;&#x60;  This function will return whether the NFT is &#x60;listed&#x60;, &#x60;loaned&#x60; (Yawww NFT loans), &#x60;otc&#x60;, &#x60;staked&#x60;, &#x60;burned&#x60;, or &#x60;held&#x60;.  If listed, it will return the contract, the readable name of the contract (e.g., Magic Eden, OpenSea), the contract ID (if any; e.g., open-sea), the owner, and the listed price. From this, you can get the floor of a collection. We currently support Magic Eden (v1, v2), Exchange.Art (auction, singles), CoralCube, Solanart (v1, v2), Yawww Loans, Yawww OTC, OpenSea, Fractal, SolSea, and AlphaArt.   If loaned, it will return the loan requester as the owner, the loan amount, and the loan contract. We only support the Yawww loaning contract.  If listed on an OTC marketplace, it will return the same information as &#x60;listed&#x60;. OTC is used to distinguish between marketplaces that respect royalties (OTC) and those that don&#39;t (normal ones). The only &#x60;OTC&#x60; contract we track is Yawwww, at the moment. We do not yet track Solanart v3.  If staked, it will return the owner and the staking contract public key.  If burned, it will return the &#x60;burner&#x60; as the &#x60;owner&#x60;.  If held, it will simply return the owner.  If you want to get the literal owner, which may or may not be the same as the owner returned here, call the simplified [get NFT owner function](/#tag/Solana-NFT/operation/solanaGetNFTOwner). For example, Bob might own the NFT, but if it is listed on Magic Eden, then the NFT is held in escrow and \&quot;owned\&quot; by Magic Eden. The simplified function will return Magic Eden as the owner (the literal owner). This advanced function will tell you the implied owner, which would be Bob.  &#x60;Cost: 1.0 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
let network = devnet; // String | The network ID
let mintAddress = 4zH3Rwm1QXdfTSUqsYmeUBY4QqQmQEXJVbv4ErSK736Q; // String | The mint address of the NFT
apiInstance.solanaGetNFTOwnerAdvanced(network, mintAddress).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network** | **String**| The network ID | 
 **mintAddress** | **String**| The mint address of the NFT | 

### Return type

[**NFTOwnerAdvancedResponse**](NFTOwnerAdvancedResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## solanaGetNFTsCandyMachineId

> GetCandyMachineIDResponse solanaGetNFTsCandyMachineId(opts)

Get the ID of the candy machine of an NFT 

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/get-nft-candy-machine-id\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  Get the candy machine ID from where the NFT came, if any. NFTs can also be minted without a candy machine.  It&#39;s also possible that we return \&quot;Not Found\&quot; when the NFT actually did come from a version of a candy machine. We check for the most popular versions of candy machine, but it is possible that someone creates their own candy machine version and mints NFTs from it.  &#x60;Cost: 1 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
let opts = {
  'getCandyMachineIDRequest': new theblockchainapi.GetCandyMachineIDRequest() // GetCandyMachineIDRequest | 
};
apiInstance.solanaGetNFTsCandyMachineId(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getCandyMachineIDRequest** | [**GetCandyMachineIDRequest**](GetCandyMachineIDRequest.md)|  | [optional] 

### Return type

[**GetCandyMachineIDResponse**](GetCandyMachineIDResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## solanaSearchNFTs

> [NFTSearchResponse] solanaSearchNFTs(opts)

Search NFTs on Solana

&lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api/tree/main/examples/solana-nft/search-nfts\&quot; target&#x3D;\&quot;_blank\&quot;&gt;See examples (Python, JavaScript)&lt;/a&gt;.  With this endpoint, you can search for NFTs by their symbol, name of NFTs, uuid, configuration address, and update authority.  The output is a list of NFTs that match your query.  You can also provide multiple search clauses, such as the update authority (&#x60;update_authority&#x3D;\&quot;G17UmNGnMJ851x3M1JXocgpft1afcYedjPuFpo1ohhCk\&quot;&#x60;) and symbol begins with \&quot;Sol\&quot; (&#x60;symbol&#x3D;\&quot;Sol\&quot;, symbol_search_method&#x3D;&#39;begins_with&#39;&#x60;).  &#x60;Cost: 1 Credit&#x60; (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

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

let apiInstance = new theblockchainapi.SolanaNFTApi();
let opts = {
  'nFTSearchRequest': new theblockchainapi.NFTSearchRequest() // NFTSearchRequest | 
};
apiInstance.solanaSearchNFTs(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nFTSearchRequest** | [**NFTSearchRequest**](NFTSearchRequest.md)|  | [optional] 

### Return type

[**[NFTSearchResponse]**](NFTSearchResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

