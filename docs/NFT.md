# theblockchainapi.NFT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmed** | **Boolean** | Whether or not the NFT mint was confirmed or simply submitted for processing. The status depends on your input for &#x60;wait_for_confirmation&#x60;. This only is returned when you are minting an NFT, not when searching or retrieving the metadata. | [optional] 
**data** | [**NFTData**](NFTData.md) |  | [optional] 
**isMutable** | **Boolean** |  | [optional] 
**mint** | **String** | The public key address of the NFT  | [optional] 
**primarySaleHappened** | **Boolean** |  | [optional] 
**updateAuthority** | **String** | A public key address that is usually that of the person who minted the NFT  | [optional] 
**sellerFeeBasisPoints** | **Number** |  | [optional] 
**mintSecretRecoveryPhrase** | **String** |  | [optional] 
**explorerUrl** | **String** |  | [optional] 
**metadataAccount** | **String** | The metadata account of the NFT  | [optional] 
**editionNonce** | **Number** |  | [optional] 
**tokenStandard** | **Number** |  | [optional] 
**collection** | [**NFTCollection**](NFTCollection.md) |  | [optional] 
**uses** | **Number** |  | [optional] 


