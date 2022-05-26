# theblockchainapi.GeneralBalanceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | **Number** | The balance of the token in the wallet  | 
**integerBalance** | **Number** | Not included if retreiving native token (e.g., SOL, ETH, BNB, etc.) balance  | [optional] 
**decimals** | **Number** | Not included if retreiving native token (e.g., SOL, ETH, BNB, etc.) balance.  | [optional] 
**network** | **String** | The network of the blockchain you selected  - Solana: &#x60;devnet&#x60;, &#x60;mainnet-beta&#x60; - Ethereum: &#x60;ropsten&#x60;, &#x60;mainnet&#x60;  Defaults when not provided (not applicable to path parameters): - Solana: &#x60;devnet&#x60; - Ethereum: &#x60;ropsten&#x60; | 
**unit** | **String** | Not included if retreiving a token / NFT balance  | [optional] 


