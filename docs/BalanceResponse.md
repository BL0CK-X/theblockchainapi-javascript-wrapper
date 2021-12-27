# theblockchainapi.BalanceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **Number** | The balance of the token in the wallet | 
**integerBalance** | **Number** | Not included if retreiving SOL balance | [optional] 
**decimals** | **Number** | Not included if retreiving SOL balance. Sometimes not included if the balance of the token is &#39;0&#39;. | [optional] 
**network** | **String** |  | 
**unit** | **String** | Not included if retreiving an SPL token/NFT balance | [optional] 



## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)





## Enum: UnitEnum


* `lamport` (value: `"lamport"`)

* `sol` (value: `"sol"`)




