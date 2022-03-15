# theblockchainapi.Endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | The ID of the project. This is auto-generated upon project creation and cannot currently be changed.  | 
**version** | **String** | The project version under which the endpoint exists  | 
**path** | **String** | The path of the endpoint  | 
**operationId** | **String** | The operation ID of the endpoint.  | 
**readableName** | **String** | The name of the endpoint formatted in a readable way (e.g., Get Endpoint Metadata).  | 
**summary** | **String** | The summary of the endpoint to be displayed in the sidebar on the left of the mini-API&#39;s documentation  | [optional] 
**description** | **String** | A description of what the endpoint does. This will be shown in the mini-API documentation.  | [optional] 
**credits** | **Number** | The price of the endpoint. Valid values are integers from 1 to 100.  | 
**groupName** | **String** | The name of the group of endpoints that the endpoint comes from  | [optional] 
**inputSpecification** | [**[ParameterSpecification]**](ParameterSpecification.md) | A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter. | 
**inputExamples** | **Object** | An example of the JSON input that a user might send. Limited to one example currently.  | 
**outputSpecification** | [**[ParameterSpecification]**](ParameterSpecification.md) | A list of dictionaries. Each dictionary describes one parameter for the input, including the name, type, required boolean, and description values of that parameter. | 
**outputExamples** | **Object** | An example of the JSON output that a user might send. Limited to one example currently.  | 


