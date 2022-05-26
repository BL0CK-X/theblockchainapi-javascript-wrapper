# theblockchainapi.NFTMintRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet** | [**Wallet**](Wallet.md) |  | [optional] 
**returnCompiledTransaction** | **Boolean** | If &#x60;true&#x60;, the transaction to mint the NFT will not be submitted or signed. It will be returned to you in a raw form that you can then sign with a wallet (e.g., Phantom) or code. No &#x60;wallet&#x60; authentication information is required (thus, you do you have to supply a seed phrase or private key). See a Python example [here](https://github.com/BL0CK-X/blockchain-api/blob/main/third-party-api-examples/me-buy-sell.py). If &#x60;false&#x60; (the default option), then &#x60;wallet&#x60; is required. We sign and submit the transaction for you, which uses your wallet to mint the NFT. No further action is required on your part, and the NFT is minted. Read more on security [here](#section/Security).  | [optional] [default to false]
**name** | **String** | The name of the token. Limited to 32 characters. Stored on the blockchain. | [optional] [default to &#39;&#39;]
**symbol** | **String** | The symbol of the token. Limited to 10 characters. Stored on the blockchain. | [optional] [default to &#39;&#39;]
**description** | **String** | The description of the NFT. Limited to 2000 characters. Not stored on the blockchain.         If you are providing your own &#x60;uri&#x60; (see above), then you do not need to provide this.  If you are not providing your own &#x60;uri&#x60; and you do not provide this, then there wills simply be no description.  Only provide a value for &#x60;description&#x60; if the &#x60;upload_method&#x60; is set to &#x60;S3&#x60; (see the description for &#x60;upload_method&#x60; above). | [optional] [default to &#39;&#39;]
**uploadMethod** | **String** | When you choose &#x60;S3&#x60;, all of the &#x60;name&#x60;, &#x60;description&#x60;, &#x60;symbol&#x60;, &#x60;uri_metadata&#x60;, and &#x60;image_url&#x60; are put into a JSON dictionary and uploaded to S3 as a JSON file.  This is uploaded to an AWS S3 bucket we own, and is an option we provide at no charge. The S3 link to this file is stored in the NFT&#39;s account on the blockchain. Learn more  &lt;a href&#x3D;\&quot;https://blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.  When you choose &#x60;URI&#x60;, the &#x60;uri&#x60; you provide is stored on the blockchain, and the &#x60;uri_metadata&#x60;, &#x60;description&#x60;, and &#x60;image_url&#x60; are ignored and not stored anywhere. &#x60;S3&#x60; is NOT involved in this case.   An example of a &#x60;uri&#x60; you would provide is an Arweave URL, like this: &#x60;https://arweave.net/_Y8tETU3FbAFZSM1wXNeWPweWwrW9K6oSF1SYi_bH9A&#x60;. | [optional] [default to &#39;S3&#39;]
**uri** | **String** | The &#x60;uri&#x60; you provide is stored on the blockchain, and the &#x60;uri_metadata&#x60;, &#x60;description&#x60;, and &#x60;image_url&#x60; are ignored and not stored anywhere. &#x60;S3&#x60; is NOT involved in this case.   Read more &lt;a href&#x3D;\&quot;https://blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;.  An example of a &#x60;uri&#x60; you would provide is an Arweave URL, like this: &#x60;https://arweave.net/_Y8tETU3FbAFZSM1wXNeWPweWwrW9K6oSF1SYi_bH9A&#x60;.  Only provide a value for &#x60;uri&#x60; if the &#x60;upload_method&#x60; is set to &#x60;URI&#x60; (see the description for &#x60;upload_method&#x60; above). | [optional] [default to &#39;&#39;]
**imageUrl** | **String** | The URL of the image of the NFT.         If you are providing your own &#x60;uri&#x60; (see above), then you do not need to provide this.  If you are not providing your own &#x60;uri&#x60; and you do not provide this, then there wills simply be no image.  Only provide a value for &#x60;image_url&#x60; if the &#x60;upload_method&#x60; is set to &#x60;S3&#x60; (see the description for &#x60;upload_method&#x60; above). | [optional] [default to &#39;&#39;]
**uriMetadata** | **Object** | The off-chain metadata.        If you are providing your own &#x60;uri&#x60; (see above), then you do not need to provide this.  If you are not providing your own &#x60;uri&#x60; and you do not provide this, then there wills simply be no image.  Only provide a value for &#x60;uri_metadata&#x60; if the &#x60;upload_method&#x60; is set to &#x60;S3&#x60; (see the description for &#x60;upload_method&#x60; above).  Learn more about how to format this metadata &lt;a href&#x3D;\&quot;https://blockchainapi.com/2022/01/18/how-to-format-off-chain-nft-metadata.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt;. | [optional] 
**isMutable** | **Boolean** | Indicates whether or not the NFT created is mutable. If mutable, the NFT can be updated later. Once set to immutable, the NFT is unable to be changed.  | [optional] [default to true]
**isMasterEdition** | **Boolean** | Whether or not the NFT is a master edition NFT. Saves about 0.001 SOL in transaction costs when set to false.  | [optional] [default to true]
**sellerFeeBasisPoints** | **Number** | Valid values from 0 to 10000. Must be an integer.  Represents the number of basis points that the seller receives as a fee upon sale.  E.g., 100 indicates a 1% seller fee. Seller does not receive a fee when \&quot;primary_sale_has_happened\&quot; is set to true.  Will be set to false after first sale has occurred.  | [optional] [default to 0]
**creators** | **[String]** | A JSON encoded string representing an array / list.  The designated creators of the NFT. Length of the creator list must match length of the list of share.  Valid lengths of the list range from 1 to 5. Each item in the list must be a valid public key address.    Only the public key corresponding to the seed phrase provided will be marked as verified. Any other creators supplied will be marked as unverified.  | [optional] 
**share** | **[Number]** | A JSON encoded string representing an array / list.  The share of the royalty that each creator gets. Valid values range from 0 to 100. Sum of the values must equal 100.  Only integer value accepted. Length of the share list must match length of the list of creators.  | [optional] 
**mintToPublicKey** | **String** | Assign ownership of the NFT to the public key address given by &#x60;mint_to_public_key&#x60;  | [optional] [default to &#39;The public key of the wallet provided&#39;]
**network** | **String** | This determines which network you choose to run the API calls on. We recommend first testing on the devnet, because minting an NFT costs a little above 0.01 SOL, which is about $1.60 at the time of this writing.  When you run on the mainnet-beta, each successful call will deduct approximately that much. When you run on the devnet, that amount is deducted from a simulated amount, so you are not paying with real SOL. To get SOL on the devnet,   airdrop SOL to this address using the CLI. Keep in mind that you can only do this every so often. If you are rate-limited, consider using a VPN and trying again, or just waiting. To get SOL on the mainnet-beta, you    must transfer real SOL to this account from another wallet (e.g., from another wallet you own, from an exchange, etc.). We hope to make this process easier in the future, and if you have any suggestions, please add them    as an issue on our &lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/the-blockchain-api\&quot; target&#x3D;\&quot;_blank\&quot;&gt;GitHub repository&lt;/a&gt; for the API. To get a fee estimate, make a GET requests to the &lt;a href&#x3D;\&quot;#tag/Solana-NFT/paths/~1solana~1nft~1mint~1fee/get\&quot;&gt;v1/solana/nft/mint/fee endpoint&lt;/a&gt; (details in sidebar).  | [optional] [default to &#39;devnet&#39;]



## Enum: UploadMethodEnum


* `S3` (value: `"S3"`)

* `URI` (value: `"URI"`)





## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)




