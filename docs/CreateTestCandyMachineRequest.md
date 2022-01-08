# theblockchainapi.CreateTestCandyMachineRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wallet** | [**Wallet**](Wallet.md) |  | 
**network** | **String** |  | [optional] [default to &#39;devnet&#39;]
**candyMachineContractVersion** | **String** | The contract you want to use to create the candy machine. Note: Metaplex disabled the creation of &#x60;v1&#x60; candy machines on their smart contract, and so we no longer support the creation of &#x60;v1&#x60; test candy machines.  | [optional] [default to &#39;v2&#39;]
**includeGatekeeper** | **Boolean** | Whether or not to include a gatekeeper for testing purposes. Only applies to v2 candy machines. | [optional] [default to false]



## Enum: NetworkEnum


* `devnet` (value: `"devnet"`)

* `mainnet-beta` (value: `"mainnet-beta"`)





## Enum: CandyMachineContractVersionEnum


* `v2` (value: `"v2"`)




