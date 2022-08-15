# theblockchainapi.CCWebhookApi

All URIs are relative to *https://api.blockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCCWebhook**](CCWebhookApi.md#getCCWebhook) | **POST** /webhook/v1/project/{project_id}/webhook/{webhook_identifier} | Get a webhook 
[**listCCProjectWebhooks**](CCWebhookApi.md#listCCProjectWebhooks) | **POST** /webhook/v1/project/{project_id}/webhooks | List project&#39;s webhooks 
[**validateCCWebhook**](CCWebhookApi.md#validateCCWebhook) | **POST** /webhook/v1/project/{project_id}/webhook/{webhook_identifier}/validate | Validate a webhook 



## getCCWebhook

> CCWebhook getCCWebhook(projectId, webhookIdentifier)

Get a webhook 

Retrieve the details of a webhook sent to you.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.CCWebhookApi();
let projectId = project_WDQskRIfHQxj53N5mk5K; // String | The ID of the project. Created and returned when a project is created.
let webhookIdentifier = webhook/payment.received/payment_EyfDL6CsvFinpUnXgBXaUuqq3hCXa0; // String | The ID of the webhook. Created and returned when a webhook is sent.
apiInstance.getCCWebhook(projectId, webhookIdentifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The ID of the project. Created and returned when a project is created. | 
 **webhookIdentifier** | **String**| The ID of the webhook. Created and returned when a webhook is sent. | 

### Return type

[**CCWebhook**](CCWebhook.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCCProjectWebhooks

> [CCWebhook] listCCProjectWebhooks(projectId)

List project&#39;s webhooks 

List all webhooks sent to you and their respective responses from your server.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.CCWebhookApi();
let projectId = project_WDQskRIfHQxj53N5mk5K; // String | The ID of the project. Created and returned when a project is created.
apiInstance.listCCProjectWebhooks(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The ID of the project. Created and returned when a project is created. | 

### Return type

[**[CCWebhook]**](CCWebhook.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## validateCCWebhook

> validateCCWebhook(projectId, webhookIdentifier, opts)

Validate a webhook 

Validate whether a webhook you received was actually sent from us.  &#x60;Cost: 0 Credit&#x60; (Free) (&lt;a href&#x3D;\&quot;#section/Pricing\&quot;&gt;See Pricing&lt;/a&gt;)

### Example

```javascript
import theblockchainapi from 'theblockchainapi';
let defaultClient = theblockchainapi.ApiClient.instance;
// Configure API key authorization: APIKeyID
let APIKeyID = defaultClient.authentications['APIKeyID'];
APIKeyID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyID.apiKeyPrefix = 'Token';
// Configure API key authorization: APISecretKey
let APISecretKey = defaultClient.authentications['APISecretKey'];
APISecretKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APISecretKey.apiKeyPrefix = 'Token';

let apiInstance = new theblockchainapi.CCWebhookApi();
let projectId = project_WDQskRIfHQxj53N5mk5K; // String | The ID of the project. Created and returned when a project is created.
let webhookIdentifier = webhook/payment.received/payment_EyfDL6CsvFinpUnXgBXaUuqq3hCXa0; // String | The ID of the webhook. Created and returned when a webhook is sent.
let opts = {
  'cCWebhookValidateRequest': new theblockchainapi.CCWebhookValidateRequest() // CCWebhookValidateRequest | 
};
apiInstance.validateCCWebhook(projectId, webhookIdentifier, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| The ID of the project. Created and returned when a project is created. | 
 **webhookIdentifier** | **String**| The ID of the webhook. Created and returned when a webhook is sent. | 
 **cCWebhookValidateRequest** | [**CCWebhookValidateRequest**](CCWebhookValidateRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

