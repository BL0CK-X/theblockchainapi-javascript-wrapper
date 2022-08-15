# theblockchainapi.CCProject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | The ID of the project. This is auto-generated upon project creation and cannot currently be changed.  | 
**name** | **String** | The name of the project. This is shown to your users and should identify your company or organization.  | 
**description** | **String** | The description of your project / company.  | [optional] 
**webhook** | **String** | A URL that identifies where we should make an API request to notify you of a new payment (e.g., api.myproject.com/crypto_payments/webhook). Learn more [here](#tag/CC-Webhook/operation/getCCWebhook).  | [optional] 
**website** | **String** | The website of your project / company.  | [optional] 
**discordWebhook** | **String** | A Discord webhook. We will send a message to this channel to notify of payment. Learn more [here]().  | [optional] 
**logoUrl** | **String** | A URL of your logo.  | [optional] 
**customerIdToCollect** | [**CCProjectCreateRequestCustomerIdToCollect**](CCProjectCreateRequestCustomerIdToCollect.md) |  | [optional] 
**successUrl** | **String** | Where to redirect customers after payment. If not supplied, customers will be redirected to checkout.blockchainapi.com/me to view their subscriptions.  | [optional] 
**payoutMethod** | [**CCProjectCreateRequestPayoutMethod**](CCProjectCreateRequestPayoutMethod.md) |  | [optional] 


