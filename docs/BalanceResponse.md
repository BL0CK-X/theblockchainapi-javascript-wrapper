# theblockchainapi.BalanceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **Number** | The balance of the token in the wallet | 
**integerBalance** | **Number** | Not included if retreiving SOL balance | [optional] 
**decimals** | **Number** | Not included if retreiving SOL balance | [optional] 
**network** | **String** |  | 
**unit** | **String** | Not included if retreiving an SPL token balance | [optional] 



## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)





## Enum: UnitEnum


* `lamport` (value: `"lamport"`)

* `sol` (value: `"sol"`)




