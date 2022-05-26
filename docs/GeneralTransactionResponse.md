# theblockchainapi.GeneralTransactionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionBlockchainIdentifier** | **String** | The identifier of the transaction | [optional] 
**transactionConfirmed** | **Boolean** | Whether or not the transaction was confirmed | [optional] 
**b58CompiledTransaction** | **String** | A base58 encoded byte array in string representation. Really easy to submit to Phantom. See &lt;a href&#x3D;\&quot;https://github.com/BL0CK-X/blockchain-api/blob/main/examples/tutorials/phantom_tutorials/transfer_solana.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;here&lt;/a&gt; for an example on how to submit it to a Phantom wallet for signing. | [optional] 
**compiledTransaction** | **Object** | An array of integers representing the bytes of the transaction | [optional] 
**chainId** | **String** | Indicates the chain that the transaction was compiled for (e.g., ropsten or mainnet).  | [optional] 
**data** | **String** | The transaction data  | [optional] 
**from** | **String** | The address expected to sign and submit the transaction  | [optional] 
**to** | **String** | The contract. This should match your provided value for &#x60;token_blockchain_identifier&#x60;.  | [optional] 
**gas** | **Number** |  | [optional] 
**maxFeePerGas** | **Number** |  | [optional] 
**maxPriorityFeePerGas** | **Number** |  | [optional] 
**nonce** | **Number** |  | [optional] 
**value** | **Number** |  | [optional] 


