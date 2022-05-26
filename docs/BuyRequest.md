# theblockchainapi.BuyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet** | [**Wallet**](Wallet.md) |  | 
**skipChecks** | **Boolean** | Whether or not to skip the provided checks (e.g., Is this NFT not listed? Is this NFT listed for a different price than you set?) and proceed with the transaction.  | [optional] [default to false]
**sellerPublicKey** | **String** | The public key of the seller. Only required if providing &#x60;skip_checks&#x60;. Otherwise, don&#39;t provide it.  | [optional] [default to &#39;null&#39;]
**nftPrice** | **Number** | The number of lamports you are expecting to purchase the NFT for. We check the price of the NFT before  purchasing it to ensure that it matches your expectation. There are 1e9 (1 billion) Lamports in a SOL.  | 


