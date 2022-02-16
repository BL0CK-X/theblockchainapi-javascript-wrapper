# theblockchainapi.NFTAnalyticsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTime** | **Object** | The start time used in the API request.  | [optional] 
**endTime** | **Object** | The end time used in the API request.   | [optional] 
**transactionHistory** | [**NFTAnalyticsResponseTransactionHistory**](NFTAnalyticsResponseTransactionHistory.md) |  | [optional] 
**floor** | **Number** | The minimum active listing price for the collection in the given time period. The listing must have been processed before &#x60;end_time&#x60; and still active (not delisted or purchased) by &#x60;end_time&#x60; in order to affect the floor calculation.  | [optional] 
**volume** | **Number** | The sum of the sale prices for the given time period.  | [optional] 


