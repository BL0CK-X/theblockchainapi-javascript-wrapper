# theblockchainapi.TransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**waitForConfirmation** | **Boolean** | Whether to wait for the transaction to be confirmed on the blockchain or simply be processed.  Processed means that our node has picked up the transaction request, but not that it was confirmed by the Solana cluster.  Confirmed means that the cluster voted on your transaction and approved it. To be completely sure that the transaction succeeded, you can either set &#x60;wait_for_confirmation&#x3D;True&#x60; (call takes 20 seconds with True; about 4 seconds for processed) or you can [get the transaction metadata](/#tag/Solana-Transaction/operation/solanaGetTransaction) using the signature in the response returned. Once it returns the metadata, then the transaction should have succeeded.  | [optional] [default to true]
**recipientAddress** | **String** | The public key address of the recipient to whom you want to send a token or NFT | 
**wallet** | [**Wallet**](Wallet.md) |  | [optional] 
**tokenAddress** | **String** | If you&#39;re transfering an NFT, supply the &#x60;mint&#x60; (the address of the mint) for the &#x60;token_address&#x60;. If you&#39;re transfering a token, supply the token address found on the explorer (e.g., see &#x60;SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt&#x60; for &lt;a href&#x3D;\&quot;https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Serum Token&lt;/a&gt;) for the &#x60;token_address&#x60;. If you&#39;re transferring SOL, do not supply a value for &#x60;token_address&#x60;.  | [optional] 
**network** | **String** |  | [optional] [default to &#39;devnet&#39;]
**amount** | **String** | This value must be a string. What you provide here depends on if you are sending an NFT, an SPL token, or SOL.  - NFT: This must be &#39;1&#39;. - SPL Token: This must be an integer in string format. To convert from what you see on a wallet UI (e.g., 1 ATLAS, 1 USDC) to an integer value, you have to multiply that value by 10^&lt;i&gt;x&lt;/i&gt; where &lt;i&gt;x&lt;/i&gt; is the number of decimals. For example, to transfer 0.2 USDC, if USDC uses 6 decimals, then the amount is 0.2 * 10^6 &#x3D; 200000. You can get the number of decimals for a given SPL token &lt;a href&#x3D;\&quot;#operation/solanaGetSPLToken\&quot;&gt;here&lt;/a&gt;. - SOL: Supply this value denominated in SOL in a string format. This does not need to be an integer. For example, if you want to send 0.0005 SOL, then amount &#x3D; \&quot;0.0005\&quot;. | [optional] [default to &#39;1&#39;]
**returnCompiledTransaction** | **Boolean** | If &#x60;false&#x60;, we sign and submit the transaction (&#x60;wallet&#x60; is required in this case; do not provide a value for &#x60;sender_public_key&#x60;).  If &#x60;true&#x60;, we compile the transaction (either &#x60;wallet&#x60; or &#x60;sender_public_key&#x60; is required in this case; do not provide both).  | [optional] [default to false]
**senderPublicKey** | **String** | To understand the purpose of &#x60;sender_public_key&#x60; first note the following: There are two ways you can complete a transfer transaction: (1) we complete it for you with your &#x60;wallet&#x60; information or (2) we return the raw instruction data that you can sign and submit yourself (no private keys required). When you provide your &#x60;wallet&#x60; authentication, we are able to determine your wallet&#39;s public key, which is the sender public key of the transaction. When you are not providing your &#x60;wallet&#x60; as authentication, we still need the &#x60;sender_public_key&#x60; to be able to return the compiled transaction. Thus, you provide &#x60;sender_public_key&#x60; only if you are not providing &#x60;wallet&#x60; authentication information and you are returning a compiled transaction. You will receive an error if you provide both &#x60;wallet&#x60; and &#x60;sender_public_key&#x60;. You will receive an error if you provide neither &#x60;wallet&#x60; nor &#x60;sender_public_key&#x60;.  | [optional] [default to &#39;null&#39;]
**feePayerWallet** | [**FeePayerWallet**](FeePayerWallet.md) |  | [optional] 



## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)




