# theblockchainapi.GetCandyMetadataResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **String** | The update authority of the candy machine | [optional] 
**bump** | **Number** |  | [optional] 
**candyMachineId** | **String** | The ID of the candy machine  | [optional] 
**configAddress** | **String** | The configuration public key address of the candy machine  | [optional] 
**creators** | [**[GetCandyMetadataResponseCreators]**](GetCandyMetadataResponseCreators.md) |  | [optional] 
**goLiveDate** | **Number** | The unix timestamp of the start date of the candy machine  | [optional] 
**isMutable** | **Boolean** |  | [optional] 
**itemsAvailable** | **Number** | The number of NFTs available for mint from the candy machine  | [optional] 
**itemsRedeemed** | **Number** | The number of NFTs minted already from the candy machine  | [optional] 
**maxNumberOfLines** | **Number** |  | [optional] 
**maxSupply** | **Number** |  | [optional] 
**price** | **Number** | The price in Lamports for minting an NFT from the candy machine. 1e9 Lamport  &#x3D; 1 SOL  | [optional] 
**retainAuthority** | **Boolean** |  | [optional] 
**sellerFeeBasisPoints** | **Number** | The royalty the creators receive on each sale after the primary sale (the initial minting) (denominated in basis points (e.g., 75 basis points &#x3D; 0.75%))  | [optional] 
**symbol** | **String** |  | [optional] 
**tokenMint** | **String** |  | [optional] 
**uuid** | **String** | The uuid of the candy machine | [optional] 
**wallet** | **String** | The public key address of the wallet that recevies the proceeds from NFT mints  | [optional] 


