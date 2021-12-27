# theblockchainapi.NFTSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updateAuthority** | **String** | The public key of the update authority of the NFT | [optional] 
**updateAuthoritySearchMethod** | **String** | Only &#x60;exact_match&#x60; supported at this time | [optional] [default to &#39;exact_match&#39;]
**mintAddress** | **String** | The mint address of the NFT | [optional] 
**mintAddressSearchMethod** | **String** | Only &#x60;exact_match&#x60; supported at this time | [optional] [default to &#39;exact_match&#39;]
**name** | **String** | The name of the NFT | [optional] 
**nameSearchMethod** | **String** |  | [optional] [default to &#39;exact_match&#39;]
**uri** | **String** | The NFT&#39;s uri | [optional] 
**uriSearchMethod** | **String** |  | [optional] [default to &#39;exact_match&#39;]
**symbol** | **String** | The symbol associated with the candy machine | [optional] 
**symbolSearchMethod** | **String** |  | [optional] [default to &#39;exact_match&#39;]
**network** | **String** |  | [optional] [default to &#39;devnet&#39;]



## Enum: UpdateAuthoritySearchMethodEnum


* `exact_match` (value: `"exact_match"`)





## Enum: MintAddressSearchMethodEnum


* `exact_match` (value: `"exact_match"`)





## Enum: NameSearchMethodEnum


* `begins_with` (value: `"begins_with"`)

* `exact_match` (value: `"exact_match"`)





## Enum: UriSearchMethodEnum


* `begins_with` (value: `"begins_with"`)

* `exact_match` (value: `"exact_match"`)





## Enum: SymbolSearchMethodEnum


* `begins_with` (value: `"begins_with"`)

* `exact_match` (value: `"exact_match"`)





## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)




