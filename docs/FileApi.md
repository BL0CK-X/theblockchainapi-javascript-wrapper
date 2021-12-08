# theblockchainapi.FileApi

All URIs are relative to *https://api.theblockchainapi.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**uploadFile**](FileApi.md#uploadFile) | **POST** /file | Upload a file



## uploadFile

> GetFileResponse uploadFile()

Upload a file

Easily upload a file to any of IPFS, Arweave, and Filecoin. Not publicly available. Please sign up for &lt;a href&#x3D;\&quot;https://forms.gle/N4KSqcptpSrHQ1427\&quot; target&#x3D;\&quot;_blank\&quot;&gt;the waitlist&lt;/a&gt;.

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

let apiInstance = new theblockchainapi.FileApi();
apiInstance.uploadFile().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetFileResponse**](GetFileResponse.md)

### Authorization

[APIKeyID](../README.md#APIKeyID), [APISecretKey](../README.md#APISecretKey)

### HTTP request headers

- **Content-Type**: multipart/form-data, application/json
- **Accept**: application/json

