# theblockchainapi.CandyMachineSearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updateAuthority** | **String** | The public key of the update authority of the candy machine | [optional] 
**updateAuthoritySearchMethod** | **String** | Only &#x60;exact_match&#x60; supported at this time | [optional] [default to &#39;exact_match&#39;]
**configAddress** | **String** | The public key of the configuration of the candy machine | [optional] 
**configAddressSearchMethod** | **String** | Only &#x60;exact_match&#x60; supported at this time | [optional] [default to &#39;exact_match&#39;]
**uuid** | **String** | The alphanumeric string of length six that corresponds to the candy machine. This is NOT the candy machine ID.  This is the first six letters of the configuration address and is also used to identify the candy machine. An example is &#x60;4zKV6i&#x60;.  | [optional] 
**uuidSearchMethod** | **String** | Only &#x60;exact_match&#x60; supported at this time | [optional] [default to &#39;exact_match&#39;]
**symbol** | **String** | The symbol associated with the candy machine | [optional] 
**symbolSearchMethod** | **String** |  | [optional] [default to &#39;exact_match&#39;]
**nftName** | **String** | The name of an NFT on the candy machine, minted or unminted. For example, to find The Solana Money Boys candy machine, you already know that each NFT is named \&quot;Solana Money Boy #0\&quot;, \&quot;Solana Money Boy #1\&quot;, and so on. So you could search with  nft_name&#x3D;\&quot;Solana Money Boy #0\&quot;, nft_name_index&#x3D;0, nft_name_search_method&#x3D;&#39;exact_match&#39;, for example, which would return the candy machine ID. This also works with candy machines that are not live but are uploaded.  | [optional] 
**nftNameIndex** | **String** | The index of the NFT to check, e.g., the 2nd NFT would have an index of 1. We cannot search all NFTs on a candy machine currently, so you must search an NFT at a particular position, such as the first, second, and so on. In general, nft_name_index&#x3D;0 works for most use cases.  | [optional] [default to &#39;0&#39;]
**nftNameSearchMethod** | **String** |  | [optional] [default to &#39;exact_match&#39;]
**network** | **String** |  | [optional] [default to &#39;devnet&#39;]
**candyMachineContractVersion** | **String** | The candy machine contract you want to search.  If you want to search &#x60;v1&#x60; candy machines, set this to &#x60;v1&#x60;. If you want to search &#x60;v2&#x60; candy machines. set this to &#x60;v2&#x60;.  | [optional] [default to &#39;v1&#39;]



## Enum: UpdateAuthoritySearchMethodEnum


* `exact_match` (value: `"exact_match"`)





## Enum: ConfigAddressSearchMethodEnum


* `exact_match` (value: `"exact_match"`)





## Enum: UuidSearchMethodEnum


* `exact_match` (value: `"exact_match"`)





## Enum: SymbolSearchMethodEnum


* `begins_with` (value: `"begins_with"`)

* `exact_match` (value: `"exact_match"`)





## Enum: NftNameSearchMethodEnum


* `begins_with` (value: `"begins_with"`)

* `exact_match` (value: `"exact_match"`)





## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)





## Enum: CandyMachineContractVersionEnum


* `v1` (value: `"v1"`)

* `v2` (value: `"v2"`)




