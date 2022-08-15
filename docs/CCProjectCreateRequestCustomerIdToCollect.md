# theblockchainapi.CCProjectCreateRequestCustomerIdToCollect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idType** | **String** | What type of identifier you are collecting, either an \&quot;email\&quot; or \&quot;misc\&quot;ellanous. Miscellanous simply means you are collecting something other than an email.   | 
**name** | **String** | The name of the customer ID input presented to the user  | 
**description** | **String** | The description / stated purpose of the customer ID input presented to the user  | [optional] [default to &#39;&#39;]
**required** | **Boolean** | Whether to require the customer ID  | [optional] [default to false]



## Enum: IdTypeEnum


* `misc` (value: `"misc"`)

* `email` (value: `"email"`)




