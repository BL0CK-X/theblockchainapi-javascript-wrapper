# theblockchainapi.NFTOwnerAdvancedResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract** | [**NFTOwnerAdvancedResponseContract**](NFTOwnerAdvancedResponseContract.md) |  | [optional] 
**owner** | **String** | The public key of the wallet that has true ownership over the provided NFT. If listed, it is the lister. If placed on a loan, it is the loanee. If staked, it is the staker. If burned, it is the burner. Etc. Returns &#x60;null&#x60; in the edge case that we were unable to find the true owner. If this happens, please report it to us and we will try to adapt for this edge case.  | [optional] 
**price** | **Number** | The price of the NFT, if listed or loaned. If held, staked, or burned, this is null. | [optional] 
**state** | **String** | The state of the NFT | [optional] 



## Enum: StateEnum


* `loaning` (value: `"loaning"`)

* `listing` (value: `"listing"`)

* `staking` (value: `"staking"`)

* `holding` (value: `"holding"`)

* `burned` (value: `"burned"`)




