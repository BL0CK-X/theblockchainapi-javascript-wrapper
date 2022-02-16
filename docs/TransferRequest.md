# theblockchainapi.TransferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientAddress** | **String** | The public key address of the recipient to whom you want to send a token or NFT | 
**wallet** | [**Wallet**](Wallet.md) |  | [optional] 
**tokenAddress** | **String** | If you&#39;re transfering an NFT, supply the &#x60;mint&#x60; (the address of the mint) for the &#x60;token_address&#x60;. If you&#39;re transfering a token, supply the token address found on the explorer (e.g., see &#x60;SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt&#x60; for &lt;a href&#x3D;\&quot;https://explorer.solana.com/address/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Serum Token&lt;/a&gt;) for the &#x60;token_address&#x60;. If you&#39;re transferring SOL, do not supply a value for &#x60;token_address&#x60;.  | [optional] 
**network** | **String** |  | [optional] [default to &#39;devnet&#39;]
**amount** | **String** | This value must be a string. What you provide here depends on if you are sending an NFT, an SPL token, or SOL.  - NFT: This must be &#39;1&#39;. - SPL Token: This must be an integer in string format. To convert from what you see on a wallet UI (e.g., 1 ATLAS, 1 USDC) to an integer value, you have to multiply that value by 10^&lt;i&gt;x&lt;/i&gt; where &lt;i&gt;x&lt;/i&gt; is the number of decimals. For example, to transfer 0.2 USDC, if USDC uses 6 decimals, then the amount is 0.2 * 10^6 &#x3D; 200000. You can get the number of decimals for a given SPL token &lt;a href&#x3D;\&quot;#operation/solanaGetSPLToken\&quot;&gt;here&lt;/a&gt;. - SOL: Supply this value denominated in SOL in a string format. This does not need to be an integer. For example, if you want to send 0.0005 SOL, then amount &#x3D; \&quot;0.0005\&quot;. | [optional] [default to &#39;1&#39;]
**returnCompiledTransaction** | **Boolean** | Whether or not  | [optional] [default to false]
**senderPublicKey** | **String** | The purpose of &#x60;sender_public_key&#x60; is You will receive an error if you provide both &#x60;wallet&#x60; and &#x60;sender_public_key&#x60;.  | [optional] [default to &#39;null&#39;]
**feePayerWallet** | [**OneOfSecretRecoveryPhrasePrivateKeyB58PrivateKey**](OneOfSecretRecoveryPhrasePrivateKeyB58PrivateKey.md) | If you do NOT provide a wallet here, the fee payer of the transaction will be the &#x60;wallet&#x60; you provide or the &#x60;sender_public_key&#x60;.        If you do provide a wallet, then the &#x60;fee_payer_wallet&#x60; will pay the fees of the transaction and any costs associated with creating a new associated token account (only if necessary; approx. 0.002 SOL when necessary). A new account is necessary if you are sending an NFT or SPL token to a user that has not received the same NFT or one of the SPL tokens before (thus, a new associated token account is needed).      | [optional] 



## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)




