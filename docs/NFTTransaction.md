# theblockchainapi.NFTTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockTime** | **Number** | An epoch time stamp in UTC time that represents the time of the block where the transaction was processed  | [optional] 
**exchange** | **String** | The NFT exchange on which the transaction occurred | [optional] 
**exchangeReadable** | **String** | A readable version of the NFT exchange | [optional] 
**mintAddress** | **String** | The mint address of the NFT  | [optional] 
**operation** | **String** | The operation of the transaction | [optional] 
**seller** | **String** | The public key of the wallet that listed the NFT | [optional] 
**buyer** | **String** | The public key of the buyer. This only exists in &#x60;buy&#x60; transactions.  | [optional] 
**transactionSignature** | **String** | The signature of the transaction. You can look up each transaction on explorer.solana.com  | [optional] 



## Enum: ExchangeEnum


* `solsea` (value: `"solsea"`)

* `magic-eden` (value: `"magic-eden"`)

* `alpha-art` (value: `"alpha-art"`)

* `digital-eyes` (value: `"digital-eyes"`)

* `solanart` (value: `"solanart"`)

* `exchange-art` (value: `"exchange-art"`)





## Enum: ExchangeReadableEnum


* `SolSea` (value: `"SolSea"`)

* `Magic Eden` (value: `"Magic Eden"`)

* `Alpha Art` (value: `"Alpha Art"`)

* `Digital Eyes` (value: `"Digital Eyes"`)

* `Solanart` (value: `"Solanart"`)

* `Exchange.art` (value: `"Exchange.art"`)





## Enum: OperationEnum


* `buy` (value: `"buy"`)

* `list` (value: `"list"`)

* `de_list` (value: `"de_list"`)

* `update_listing` (value: `"update_listing"`)




