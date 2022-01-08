# theblockchainapi.MintNFTRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet** | [**Wallet**](Wallet.md) |  | 
**configAddress** | **String** | The config address of the candy machine. You can retrieve this if you have the candy machine ID using &lt;a href&#x3D;\&quot;#operation/solanaGetCandyMachineDetails\&quot;&gt;this endpoint&lt;/a&gt; and retrieving the &#x60;config_address&#x60; from the response.  A candy machine ID is the same thing as a configuration address for v2 candy machines.  | 
**network** | **String** |  | [optional] [default to &#39;devnet&#39;]
**candyMachineContractVersion** | **String** | The candy machine contract of the candy machine from which you&#39;re minting. If you are minting from a &#x60;v1&#x60; candy machine ID, set this to &#x60;v1&#x60;. If you are minting from a &#x60;v2&#x60; candy machine ID, set this to &#x60;v2&#x60;. If you don&#39;t know which the version of your candy machine, check out &lt;a href&#x3D;\&quot;#operation/solanaGetAccountIsCandyMachine\&quot;&gt;this endpoint&lt;/a&gt;.  | [optional] [default to &#39;v1&#39;]



## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)





## Enum: CandyMachineContractVersionEnum


* `v1` (value: `"v1"`)

* `v2` (value: `"v2"`)




