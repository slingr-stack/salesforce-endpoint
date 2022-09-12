---
title: Salesforce Endpoint
keywords: 
last_updated: September 12, 2022
tags: []
summary: "Detailed description of the API of the Salesforce endpoint."
---

## Overview

Salesforce provides customer relationship management software and applications focused on sales, customer service, marketing automation, analytics, and application development.
The Salesforce endpoint has the following features:

- Interact with Salesforce API
- Shortcuts to access the REST API
- Support for webhooks

In most cases you will be using the provided shortcuts to access the API. For example, you could use the REST API
directly by doing an HTTP request like this:

```js
var res = app.endpoints.salesforce.services.data.get('v55.0');
```

These shortcuts are based on the [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

### Quick Start

#### Prerequisites: 
- https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_prereq.htm
#### Step One: Set Up Authorization
- https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm

Append the user’s security token to their password. A security token is an automatically generated key from Salesforce. For example, if a user's password is mypassword, and their security token is XXXXXXXXXX, then the value provided for this parameter must be mypasswordXXXXXXXXXX.

# Javascript API

The Javascript API of the salesforce endpoint has three pieces:

- **HTTP requests**: These allows to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PATCH`,`DELETE`,`HEAD`,`PUT` requests to the [salesforce API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.salesforce.get('/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts/:approvalProcessName')
var response = app.endpoints.salesforce.post('/services/data/:apiVersion/consent/dsr/rtp/execute', body)
var response = app.endpoints.salesforce.patch('/services/data/:apiVersion/consent/action/:action', body)
var response = app.endpoints.salesforce.delete('/services/data/:apiVersion/sobjects/:sObject/:id')
var response = app.endpoints.salesforce.head('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue')
var response = app.endpoints.salesforce.put('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', body)
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/services/data'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_versions.htm
```javascript
app.endpoints.salesforce.services.data.get()
```
---
* API URL: '/services/data/:apiVersion'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_discoveryresource.htm
```javascript
app.endpoints.salesforce.services.data.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/limits'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_limits.htm
```javascript
app.endpoints.salesforce.services.data.limits.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_get.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.describe.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/deleted'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_getdeleted.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.deleted.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/updated'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_getupdated.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.updated.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/namedLayouts/:layoutName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_named_layouts.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.describe.namedLayouts.get(apiVersion, sObject, layoutName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_get.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.get(apiVersion, sObject, id)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_get.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.get(apiVersion, sObjectName, fieldName, fieldValue)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id/:blobField'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_blob_get.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.get(apiVersion, sObject, id, blobField)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_approvallayouts.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.describe.approvalLayouts.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts/:approvalProcessName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_approvallayouts.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.describe.approvalLayouts.get(apiVersion, sObject, approvalProcessName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/compactLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_compactlayouts.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.describe.compactLayouts.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/Global/describe/layouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_layouts.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.Global.describe.layouts.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/Object/describe/layouts/:id'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_layouts.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.Object.describe.layouts.get(apiVersion, id)
```
---
* API URL: '/services/data/:apiVersion/sobjects/PlatformAction'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_platformaction.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.PlatformAction.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.quickActions.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.quickActions.get(apiVersion, sObject, actionName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/describe'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.quickActions.describe.get(apiVersion, sObject, actionName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.quickActions.defaultValues.get(apiVersion, sObject, actionName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues/:id'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.quickActions.defaultValues.get(apiVersion, sObject, actionName, id)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id/richTextImageFields/:fieldName/:contentReferenceId'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_rich_text_image_get.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.richTextImageFields.get(apiVersion, sObject, id, fieldName, contentReferenceId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id/:relationshipFieldName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.get(apiVersion, sObject, id, relationshipFieldName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/suggestedArticles​'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_suggest_articles.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.suggestedArticles​.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/User/:userId/password'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.User.password.get(apiVersion, userId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.SelfServiceUser.password.get(apiVersion, selfServiceUserId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:eventName/eventSchema'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_eventschema.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.eventSchema.get(apiVersion, eventName)
```
---
* API URL: '/services/data/:apiVersion/event/eventSchema/:schemaId'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_event_eventschema.htm
```javascript
app.endpoints.salesforce.services.data.event.eventSchema.get(apiVersion, schemaId)
```
---
* API URL: '/services/data/:apiVersion/appMenu/AppSwitcher'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_appmenu.htm
```javascript
app.endpoints.salesforce.services.data.appMenu.AppSwitcher.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/appMenu/Salesforce1'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_appmenu.htm
```javascript
app.endpoints.salesforce.services.data.appMenu.Salesforce1.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/compactLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_compact_layouts.htm
```javascript
app.endpoints.salesforce.services.data.compactLayouts.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/compactLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_compact_layouts.htm
```javascript
app.endpoints.salesforce.services.data.compactLayouts.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent.htm
```javascript
app.endpoints.salesforce.services.data.consent.action.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/multiaction'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent.htm
```javascript
app.endpoints.salesforce.services.data.consent.multiaction.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/action/:action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent_cdp_params.htm
```javascript
app.endpoints.salesforce.services.data.consent.action.get(apiVersion, action)
```
---
* API URL: '/services/data/:apiVersion/support/embeddedservice/configuration/:embeddedServiceConfigDeveloperName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_embeddedserviceconfigdescribe.htm
```javascript
app.endpoints.salesforce.services.data.support.embeddedservice.configuration.get(apiVersion, embeddedServiceConfigDeveloperName)
```
---
* API URL: '/services/data/:apiVersion/actions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm
```javascript
app.endpoints.salesforce.services.data.actions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/actions/standard'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.standard.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/actions/standard/:action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.standard.get(apiVersion, action)
```
---
* API URL: '/services/data/:apiVersion/actions/custom'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.custom.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/actions/custom/:action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.custom.get(apiVersion, action)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:queryLocator/describe'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviewdescribe.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.listviews.describe.get(apiVersion, sobjectType, queryLocator)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID/results'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviewresults.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.listviews.results.get(apiVersion, sobjectType, listViewID)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID/results'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviewresults.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.listviews.results.get(apiVersion, sobjectType, listViewID)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviews.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.listviews.get(apiVersion, sobjectType)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviews.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.listviews.get(apiVersion, sobjectType, listViewID)
```
---
* API URL: '/services/data/:apiVersion/support'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support.htm
```javascript
app.endpoints.salesforce.services.data.support.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/support/dataCategoryGroups'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcgroups.htm
```javascript
app.endpoints.salesforce.services.data.support.dataCategoryGroups.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/support/dataCategoryGroups/:group/dataCategories/:category'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcdetail.htm
```javascript
app.endpoints.salesforce.services.data.support.dataCategoryGroups.dataCategories.get(apiVersion, group, category)
```
---
* API URL: '/services/data/:apiVersion/support/knowledgeArticles'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm
```javascript
app.endpoints.salesforce.services.data.support.knowledgeArticles.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/support/knowledgeArticles/:article'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artdetails.htm
```javascript
app.endpoints.salesforce.services.data.support.knowledgeArticles.get(apiVersion, article)
```
---
* API URL: '/services/data/:apiVersion/parameterizedSearch'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm
```javascript
app.endpoints.salesforce.services.data.parameterizedSearch.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/dsr/rtp/execute'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_portability.htm
```javascript
app.endpoints.salesforce.services.data.consent.dsr.rtp.execute.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/approvals'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm
```javascript
app.endpoints.salesforce.services.data.process.approvals.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/rules'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.services.data.process.rules.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/rules/sObjectName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.services.data.process.rules.sObjectName.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/rules/sObjectName/workflowRuleId'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.services.data.process.rules.sObjectName.workflowRuleId.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.get(apiVersion, opportunityLineItemId)
```
---
* API URL: '/services/data/:apiVersion/query/:query'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm
```javascript
app.endpoints.salesforce.services.data.query.get(apiVersion, query)
```
---
* API URL: '/services/data/:apiVersion/queryAll/:query'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_queryall.htm
```javascript
app.endpoints.salesforce.services.data.queryAll.get(apiVersion, query)
```
---
* API URL: '/services/data/:apiVersion/quickActions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.quickActions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/recent'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_recentlistviews.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.listviews.recent.get(apiVersion, sobjectType)
```
---
* API URL: '/services/data/:apiVersion/recent'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_recent_items.htm
```javascript
app.endpoints.salesforce.services.data.recent.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/limits/recordCount'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_record_count.htm
```javascript
app.endpoints.salesforce.services.data.limits.recordCount.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/relevantItems'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_relevant_items.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.relevantItems.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/knowledgeManagement/settings'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_get_language.htm
```javascript
app.endpoints.salesforce.services.data.knowledgeManagement.settings.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search.htm
```javascript
app.endpoints.salesforce.services.data.search.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/scopeOrder'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_scope_order.htm
```javascript
app.endpoints.salesforce.services.data.search.scopeOrder.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/layout'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_layouts.htm
```javascript
app.endpoints.salesforce.services.data.search.layout.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningToggleMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_togglemetrics.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.LightningToggleMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByAppTypeMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebyapptypemetrics.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.LightningUsageByAppTypeMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByBrowserMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebybrowsermetrics.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.LightningUsageByBrowserMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByPageMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebypagemetrics.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.LightningUsageByPageMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByFlexiPageMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebyflexipagemetrics.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.LightningUsageByFlexiPageMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningExitByPageMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_exitbypagemetrics.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.LightningExitByPageMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/scheduling'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/requests_ls_scheduling.htm
```javascript
app.endpoints.salesforce.services.data.scheduling.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/suggestions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_records.htm
```javascript
app.endpoints.salesforce.services.data.search.suggestions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/suggestTitleMatches'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_title_matches.htm
```javascript
app.endpoints.salesforce.services.data.search.suggestTitleMatches.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/suggestSearchQueries'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_queries.htm
```javascript
app.endpoints.salesforce.services.data.search.suggestSearchQueries.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/record/:developerName/:language'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_view.htm
```javascript
app.endpoints.salesforce.services.data.localizedvalue.record.get(apiVersion, developerName, language)
```
---
* API URL: '/services/data/:apiVersion/theme'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_themes.htm
```javascript
app.endpoints.salesforce.services.data.theme.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/composite'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_composite_get.htm
```javascript
app.endpoints.salesforce.services.data.composite.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects/:sObjectName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_get.htm
```javascript
app.endpoints.salesforce.services.data.composite.sobjects.get(apiVersion, sObjectName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_post.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.post(apiVersion, sObject, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_post.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.post(apiVersion, sObjectName, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.quickActions.post(apiVersion, sObject, actionName, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/User/:userId/password'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.User.password.post(apiVersion, userId, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.SelfServiceUser.password.post(apiVersion, selfServiceUserId, body)
```
---
* API URL: '/services/data/:apiVersion/actions/:actions'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm
```javascript
app.endpoints.salesforce.services.data.actions.post(apiVersion, actions, body)
```
---
* API URL: '/services/data/:apiVersion/actions/standard'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.standard.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/actions/standard/:action'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.standard.post(apiVersion, action, body)
```
---
* API URL: '/services/data/:apiVersion/actions/custom'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.custom.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/actions/custom/:action'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.services.data.actions.custom.post(apiVersion, action, body)
```
---
* API URL: '/services/data/:apiVersion/parameterizedSearch'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm
```javascript
app.endpoints.salesforce.services.data.parameterizedSearch.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/consent/dsr/rtp/execute'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_portability.htm
```javascript
app.endpoints.salesforce.services.data.consent.dsr.rtp.execute.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/process/approvals'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm
```javascript
app.endpoints.salesforce.services.data.process.approvals.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/process/rules'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.services.data.process.rules.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/quickActions/:quickAction'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm
```javascript
app.endpoints.salesforce.services.data.quickActions.post(apiVersion, quickAction, body)
```
---
* API URL: '/services/data/:apiVersion/scheduling/getAppointmentSlots'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/requests_ls_getappointmentslots.htm
```javascript
app.endpoints.salesforce.services.data.scheduling.getAppointmentSlots.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/scheduling/getAppointmentCandidates'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/requests_ls_getappointmentcandidates.htm
```javascript
app.endpoints.salesforce.services.data.scheduling.getAppointmentCandidates.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/record/:developerName/:language'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_add_change.htm
```javascript
app.endpoints.salesforce.services.data.localizedvalue.record.post(apiVersion, developerName, language, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/records/upsert'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_add_change_multiple.htm
```javascript
app.endpoints.salesforce.services.data.localizedvalue.records.upsert.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/records/delete'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_delete_multiple.htm
```javascript
app.endpoints.salesforce.services.data.localizedvalue.records.delete.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/records/get'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_view_multiple.htm
```javascript
app.endpoints.salesforce.services.data.localizedvalue.records.get.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_composite_post.htm
```javascript
app.endpoints.salesforce.services.data.composite.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite/batch'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_batch.htm
```javascript
app.endpoints.salesforce.services.data.composite.batch.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite/tree/:sObjectName'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm
```javascript
app.endpoints.salesforce.services.data.composite.tree.post(apiVersion, sObjectName, body)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_create.htm
```javascript
app.endpoints.salesforce.services.data.composite.sobjects.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_patch.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.patch(apiVersion, sObject, id, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_patch.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.patch(apiVersion, sObjectName, fieldName, fieldValue, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id/:relationshipFieldName'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.update(apiVersion, sObject, id, relationshipFieldName, body)
```
---
* API URL: '/services/data/:apiVersion/consent/action/:action'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent_cdp_params.htm
```javascript
app.endpoints.salesforce.services.data.consent.action.PATCH(apiVersion, action, body)
```
---
* API URL: '/services/data/:apiVersion/consent/action/:action'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent_write.htm
```javascript
app.endpoints.salesforce.services.data.consent.action.PATCH(apiVersion, action, body)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_update.htm
```javascript
app.endpoints.salesforce.services.data.composite.sobjects.patch(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects/:sObjectName/:externalIdFieldName'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_upsert.htm
```javascript
app.endpoints.salesforce.services.data.composite.sobjects.patch(apiVersion, sObjectName, externalIdFieldName, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_delete.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.delete(apiVersion, sObject, id)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_delete.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.delete(apiVersion, sObjectName, fieldName, fieldValue)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id/:relationshipFieldName'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_relationships.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.delete(apiVersion, sObject, id, relationshipFieldName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/User/:userId/password'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.User.password.delete(apiVersion, userId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.SelfServiceUser.password.delete(apiVersion, selfServiceUserId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.delete(apiVersion, opportunityLineItemId)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/record/:developerName/:language'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_delete.htm
```javascript
app.endpoints.salesforce.services.data.localizedvalue.record.delete(apiVersion, developerName, language)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_delete.htm
```javascript
app.endpoints.salesforce.services.data.composite.sobjects.delete(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'HEAD'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_head.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.head(apiVersion, sObjectName, fieldName, fieldValue)
```
---
* API URL: '/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules'
* HTTP Method: 'PUT'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm
```javascript
app.endpoints.salesforce.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.put(apiVersion, opportunityLineItemId, body)
```
---

</details>

For more information about how shortcuts work, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).


## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

