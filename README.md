---
title: Salesforce Endpoint
keywords: 
last_updated: May 12, 2023
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

These shortcuts are based on the [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/intro_rest.htm).
You can see more information about that in the [shortcuts section](#shortcuts).

## Configuration

### Quick Start

#### Prerequisites: 
- https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_prereq.htm
- 
#### Step One: Set Up Authorization
- https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/quickstart_oauth.htm

Append the user’s security token to their password. A security token is an automatically generated key from Salesforce. For example, if a user's password is mypassword, and their security token is XXXXXXXXXX, then the value provided for this parameter must be mypasswordXXXXXXXXXX.

# Javascript API

The Javascript API of the salesforce endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PATCH`,`DELETE`,`HEAD`,`PUT` requests to the [salesforce API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.salesforce.get('/services/data/:apiVersion/knowledgeManagement/settings')
var response = app.endpoints.salesforce.post('/services/data/:apiVersion/localizedvalue/records/upsert', body)
var response = app.endpoints.salesforce.post('/services/data/:apiVersion/localizedvalue/records/upsert')
var response = app.endpoints.salesforce.patch('/services/data/:apiVersion/composite/sobjects', body)
var response = app.endpoints.salesforce.patch('/services/data/:apiVersion/composite/sobjects')
var response = app.endpoints.salesforce.delete('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules')
var response = app.endpoints.salesforce.head('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue')
var response = app.endpoints.salesforce.put('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', body)
var response = app.endpoints.salesforce.put('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules')
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
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_versions.htm
```javascript
app.endpoints.salesforce.services.data.get()
```
---
* API URL: '/services/data/:apiVersion/limits'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_limits.htm
```javascript
app.endpoints.salesforce.limits.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm
```javascript
app.endpoints.salesforce.sobjects.get()
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm
```javascript
app.endpoints.salesforce.sobjects.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm
```javascript
app.endpoints.salesforce.sobjects.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_describeGlobal.htm
```javascript
app.endpoints.salesforce.sobjects.get(apiVersion, sObjectName, fieldName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_describe.htm
```javascript
app.endpoints.salesforce.sobjects.describe.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/deleted'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_getdeleted.htm
```javascript
app.endpoints.salesforce.sobjects.deleted.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/updated'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_getupdated.htm
```javascript
app.endpoints.salesforce.sobjects.updated.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/namedLayouts/:layoutName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_named_layouts.htm
```javascript
app.endpoints.salesforce.sobjects.describe.namedLayouts.get(apiVersion, sObject, layoutName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_approvallayouts.htm
```javascript
app.endpoints.salesforce.sobjects.describe.approvalLayouts.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts/:approvalProcessName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_approvallayouts.htm
```javascript
app.endpoints.salesforce.sobjects.describe.approvalLayouts.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/describe/compactLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_compactlayouts.htm
```javascript
app.endpoints.salesforce.sobjects.describe.compactLayouts.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/Global/describe/layouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_layouts.htm
```javascript
app.endpoints.salesforce.sobjects.Global.describe.layouts.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/Object/describe/layouts/:id'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_layouts.htm
```javascript
app.endpoints.salesforce.sobjects.Object.describe.layouts.get(apiVersion, id)
```
---
* API URL: '/services/data/:apiVersion/sobjects/PlatformAction'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_platformaction.htm
```javascript
app.endpoints.salesforce.sobjects.PlatformAction.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.sobjects.quickActions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.sobjects.quickActions.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/describe'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.sobjects.quickActions.describe.get(apiVersion, sObject, actionName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.sobjects.quickActions.defaultValues.get(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues/:id'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.sobjects.quickActions.defaultValues.get(apiVersion, sObject, actionName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id/richTextImageFields/:fieldName/:contentReferenceId'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_rich_text_image_get.htm
```javascript
app.endpoints.salesforce.sobjects.richTextImageFields.get(apiVersion, sObject, id, fieldName, contentReferenceId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/User/:userId/password'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.sobjects.User.password.get(apiVersion, userId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.sobjects.SelfServiceUser.password.get(apiVersion, selfServiceUserId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:eventName/eventSchema'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_eventschema.htm
```javascript
app.endpoints.salesforce.sobjects.eventSchema.get(apiVersion, eventName)
```
---
* API URL: '/services/data/:apiVersion/event/eventSchema/:schemaId'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_event_eventschema.htm
```javascript
app.endpoints.salesforce.event.eventSchema.get(apiVersion, schemaId)
```
---
* API URL: '/services/data/:apiVersion/appMenu/AppSwitcher'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_appmenu.htm
```javascript
app.endpoints.salesforce.appMenu.AppSwitcher.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/appMenu/Salesforce1'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_appmenu.htm
```javascript
app.endpoints.salesforce.appMenu.Salesforce1.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/compactLayouts'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_compact_layouts.htm
```javascript
app.endpoints.salesforce.compactLayouts.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent.htm
```javascript
app.endpoints.salesforce.consent.action.get()
```
---
* API URL: '/services/data/:apiVersion/consent/action/:action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent.htm
```javascript
app.endpoints.salesforce.consent.action.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/multiaction'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent.htm
```javascript
app.endpoints.salesforce.consent.multiaction.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/support/embeddedservice/configuration/:embeddedServiceConfigDeveloperName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_embeddedserviceconfigdescribe.htm
```javascript
app.endpoints.salesforce.support.embeddedservice.configuration.get(apiVersion, embeddedServiceConfigDeveloperName)
```
---
* API URL: '/services/data/:apiVersion/actions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm
```javascript
app.endpoints.salesforce.actions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/actions/standard'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.standard.get()
```
---
* API URL: '/services/data/:apiVersion/actions/standard/:action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.standard.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/actions/custom'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.custom.get()
```
---
* API URL: '/services/data/:apiVersion/actions/custom/:action'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.custom.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:queryLocator/describe'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviewdescribe.htm
```javascript
app.endpoints.salesforce.sobjects.listviews.describe.get(apiVersion, sobjectType, queryLocator)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID/results'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviewresults.htm
```javascript
app.endpoints.salesforce.sobjects.listviews.results.get(apiVersion, sobjectType, listViewID)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviews.htm
```javascript
app.endpoints.salesforce.sobjects.listviews.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_listviews.htm
```javascript
app.endpoints.salesforce.sobjects.listviews.get(apiVersion, sobjectType)
```
---
* API URL: '/services/data/:apiVersion/support'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support.htm
```javascript
app.endpoints.salesforce.support.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/support/dataCategoryGroups'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcgroups.htm
```javascript
app.endpoints.salesforce.support.dataCategoryGroups.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/support/dataCategoryGroups/:group/dataCategories/:category'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_dcdetail.htm
```javascript
app.endpoints.salesforce.support.dataCategoryGroups.dataCategories.get(apiVersion, group, category)
```
---
* API URL: '/services/data/:apiVersion/support/knowledgeArticles'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm
```javascript
app.endpoints.salesforce.support.knowledgeArticles.get()
```
---
* API URL: '/services/data/:apiVersion/support/knowledgeArticles/:article'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_support_artlist.htm
```javascript
app.endpoints.salesforce.support.knowledgeArticles.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/parameterizedSearch'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm
```javascript
app.endpoints.salesforce.parameterizedSearch.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/consent/dsr/rtp/execute'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_portability.htm
```javascript
app.endpoints.salesforce.consent.dsr.rtp.execute.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/approvals'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm
```javascript
app.endpoints.salesforce.process.approvals.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/rules'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.process.rules.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/rules/sObjectName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.process.rules.sObjectName.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/process/rules/sObjectName/workflowRuleId'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.process.rules.sObjectName.workflowRuleId.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm
```javascript
app.endpoints.salesforce.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.get(apiVersion, opportunityLineItemId)
```
---
* API URL: '/services/data/:apiVersion/query/:query'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_query.htm
```javascript
app.endpoints.salesforce.query.get(apiVersion, query)
```
---
* API URL: '/services/data/:apiVersion/queryAll/:query'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_queryall.htm
```javascript
app.endpoints.salesforce.queryAll.get(apiVersion, query)
```
---
* API URL: '/services/data/:apiVersion/quickActions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm
```javascript
app.endpoints.salesforce.quickActions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sobjectType/listviews/recent'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_recentlistviews.htm
```javascript
app.endpoints.salesforce.sobjects.listviews.recent.get(apiVersion, sobjectType)
```
---
* API URL: '/services/data/:apiVersion/recent'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_recent_items.htm
```javascript
app.endpoints.salesforce.recent.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/limits/recordCount'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_record_count.htm
```javascript
app.endpoints.salesforce.limits.recordCount.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/relevantItems'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_relevant_items.htm
```javascript
app.endpoints.salesforce.sobjects.relevantItems.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/knowledgeManagement/settings'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_knowledge_get_language.htm
```javascript
app.endpoints.salesforce.knowledgeManagement.settings.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search.htm
```javascript
app.endpoints.salesforce.search.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/scopeOrder'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_scope_order.htm
```javascript
app.endpoints.salesforce.search.scopeOrder.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/layout'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_layouts.htm
```javascript
app.endpoints.salesforce.search.layout.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningToggleMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_togglemetrics.htm
```javascript
app.endpoints.salesforce.sobjects.LightningToggleMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByAppTypeMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebyapptypemetrics.htm
```javascript
app.endpoints.salesforce.sobjects.LightningUsageByAppTypeMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByBrowserMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebybrowsermetrics.htm
```javascript
app.endpoints.salesforce.sobjects.LightningUsageByBrowserMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByPageMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebypagemetrics.htm
```javascript
app.endpoints.salesforce.sobjects.LightningUsageByPageMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningUsageByFlexiPageMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_usagebyflexipagemetrics.htm
```javascript
app.endpoints.salesforce.sobjects.LightningUsageByFlexiPageMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/LightningExitByPageMetrics'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_lightning_exitbypagemetrics.htm
```javascript
app.endpoints.salesforce.sobjects.LightningExitByPageMetrics.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/scheduling'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/requests_ls_scheduling.htm
```javascript
app.endpoints.salesforce.scheduling.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/suggestions'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_records.htm
```javascript
app.endpoints.salesforce.search.suggestions.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/suggestTitleMatches'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_title_matches.htm
```javascript
app.endpoints.salesforce.search.suggestTitleMatches.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/search/suggestSearchQueries'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_suggest_queries.htm
```javascript
app.endpoints.salesforce.search.suggestSearchQueries.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/record/:developerName/:language'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_view.htm
```javascript
app.endpoints.salesforce.localizedvalue.record.get(apiVersion, developerName, language)
```
---
* API URL: '/services/data/:apiVersion/theme'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_themes.htm
```javascript
app.endpoints.salesforce.theme.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/composite'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_composite_get.htm
```javascript
app.endpoints.salesforce.composite.get(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects/:sObjectName'
* HTTP Method: 'GET'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_get.htm
```javascript
app.endpoints.salesforce.composite.sobjects.get(apiVersion, sObjectName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_basic_info_post.htm
```javascript
app.endpoints.salesforce.sobjects.post(apiVersion, sObject, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_quickactions.htm
```javascript
app.endpoints.salesforce.sobjects.quickActions.post(apiVersion, sObject, actionName, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/User/:userId/password'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.sobjects.User.password.post(apiVersion, userId, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.sobjects.SelfServiceUser.password.post(apiVersion, selfServiceUserId, body)
```
---
* API URL: '/services/data/:apiVersion/actions/:actions'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable.htm
```javascript
app.endpoints.salesforce.actions.post(apiVersion, actions, body)
```
---
* API URL: '/services/data/:apiVersion/actions/standard'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.standard.post(body)
```
---
* API URL: '/services/data/:apiVersion/actions/standard/:action'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.standard.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/actions/custom'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.custom.post(body)
```
---
* API URL: '/services/data/:apiVersion/actions/custom/:action'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_actions_invocable_standard.htm
```javascript
app.endpoints.salesforce.actions.custom.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/parameterizedSearch'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_search_parameterized.htm
```javascript
app.endpoints.salesforce.parameterizedSearch.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/consent/dsr/rtp/execute'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_portability.htm
```javascript
app.endpoints.salesforce.consent.dsr.rtp.execute.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/process/approvals'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_approvals.htm
```javascript
app.endpoints.salesforce.process.approvals.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/process/rules'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm
```javascript
app.endpoints.salesforce.process.rules.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/quickActions/:quickAction'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_quickactions.htm
```javascript
app.endpoints.salesforce.quickActions.post(apiVersion, quickAction, body)
```
---
* API URL: '/services/data/:apiVersion/scheduling/getAppointmentSlots'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/requests_ls_getappointmentslots.htm
```javascript
app.endpoints.salesforce.scheduling.getAppointmentSlots.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/scheduling/getAppointmentCandidates'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/requests_ls_getappointmentcandidates.htm
```javascript
app.endpoints.salesforce.scheduling.getAppointmentCandidates.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/record/:developerName/:language'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_add_change.htm
```javascript
app.endpoints.salesforce.localizedvalue.record.post(apiVersion, developerName, language, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/records/upsert'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_add_change_multiple.htm
```javascript
app.endpoints.salesforce.localizedvalue.records.upsert.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/records/delete'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_delete_multiple.htm
```javascript
app.endpoints.salesforce.localizedvalue.records.delete.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/records/get'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_view_multiple.htm
```javascript
app.endpoints.salesforce.localizedvalue.records.get.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_composite_post.htm
```javascript
app.endpoints.salesforce.composite.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite/batch'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_batch.htm
```javascript
app.endpoints.salesforce.composite.batch.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/composite/tree/:sObjectName'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobject_tree.htm
```javascript
app.endpoints.salesforce.composite.tree.post(apiVersion, sObjectName, body)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects'
* HTTP Method: 'POST'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_create.htm
```javascript
app.endpoints.salesforce.composite.sobjects.post(apiVersion, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_patch.htm
```javascript
app.endpoints.salesforce.sobjects.patch(apiVersion, sObject, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_patch.htm
```javascript
app.endpoints.salesforce.sobjects.patch(apiVersion, sObjectName, fieldName, body)
```
---
* API URL: '/services/data/:apiVersion/consent/action/:action'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_consent_cdp_params.htm
```javascript
app.endpoints.salesforce.consent.action.patch(apiVersion, action, body)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_update.htm
```javascript
app.endpoints.salesforce.composite.sobjects.patch(body)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects/:sObjectName/:externalIdFieldName'
* HTTP Method: 'PATCH'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_update.htm
```javascript
app.endpoints.salesforce.composite.sobjects.patch(apiVersion, sObjectName, body)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObject/:id'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_delete.htm
```javascript
app.endpoints.salesforce.sobjects.delete(apiVersion, sObject)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_get_delete.htm
```javascript
app.endpoints.salesforce.sobjects.delete(apiVersion, sObjectName, fieldName)
```
---
* API URL: '/services/data/:apiVersion/sobjects/User/:userId/password'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.sobjects.User.password.delete(apiVersion, userId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_user_password.htm
```javascript
app.endpoints.salesforce.sobjects.SelfServiceUser.password.delete(apiVersion, selfServiceUserId)
```
---
* API URL: '/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm
```javascript
app.endpoints.salesforce.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.delete(apiVersion, opportunityLineItemId)
```
---
* API URL: '/services/data/:apiVersion/localizedvalue/record/:developerName/:language'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/request_survey_translate_delete.htm
```javascript
app.endpoints.salesforce.localizedvalue.record.delete(apiVersion, developerName, language)
```
---
* API URL: '/services/data/:apiVersion/composite/sobjects'
* HTTP Method: 'DELETE'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_composite_sobjects_collections_delete.htm
```javascript
app.endpoints.salesforce.composite.sobjects.delete(apiVersion)
```
---
* API URL: '/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue'
* HTTP Method: 'HEAD'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_sobject_upsert_head.htm
```javascript
app.endpoints.salesforce.sobjects.head(apiVersion, sObjectName, fieldName, fieldValue)
```
---
* API URL: '/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules'
* HTTP Method: 'PUT'
* More info: https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_opportunitylineitemschedules.htm
```javascript
app.endpoints.salesforce.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.put(apiVersion, opportunityLineItemId, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,PATCH,DELETE,HEAD,PUT</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/services/data<br>/services/data/{apiVersion}<br>/services/data/{apiVersion}/limits<br>/services/data/{apiVersion}/sobjects<br>/services/data/{apiVersion}/sobjects/{sObject}<br>/services/data/{apiVersion}/sobjects/{sObject}/{id}<br>/services/data/{apiVersion}/sobjects/{sObjectName}/{fieldName}/{fieldValue}<br>/services/data/{apiVersion}/sobjects/{sObject}/describe<br>/services/data/{apiVersion}/sobjects/{sObject}/deleted<br>/services/data/{apiVersion}/sobjects/{sObject}/updated<br>/services/data/{apiVersion}/sobjects/{sObject}/describe/namedLayouts/{layoutName}<br>/services/data/{apiVersion}/sobjects/{sObject}/describe/approvalLayouts<br>/services/data/{apiVersion}/sobjects/{sObject}/describe/approvalLayouts/{approvalProcessName}<br>/services/data/{apiVersion}/sobjects/{sObject}/describe/compactLayouts<br>/services/data/{apiVersion}/sobjects/Global/describe/layouts<br>/services/data/{apiVersion}/sobjects/Object/describe/layouts/{id}<br>/services/data/{apiVersion}/sobjects/PlatformAction<br>/services/data/{apiVersion}/sobjects/{sObject}/quickActions<br>/services/data/{apiVersion}/sobjects/{sObject}/quickActions/{actionName}<br>/services/data/{apiVersion}/sobjects/{sObject}/quickActions/{actionName}/describe<br>/services/data/{apiVersion}/sobjects/{sObject}/quickActions/{actionName}/defaultValues<br>/services/data/{apiVersion}/sobjects/{sObject}/quickActions/{actionName}/defaultValues/{id}<br>/services/data/{apiVersion}/sobjects/{sObject}/{id}/richTextImageFields/{fieldName}/{contentReferenceId}<br>/services/data/{apiVersion}/sobjects/User/{userId}/password<br>/services/data/{apiVersion}/sobjects/SelfServiceUser/{selfServiceUserId}/password<br>/services/data/{apiVersion}/sobjects/{eventName}/eventSchema<br>/services/data/{apiVersion}/event/eventSchema/{schemaId}<br>/services/data/{apiVersion}/appMenu/AppSwitcher<br>/services/data/{apiVersion}/appMenu/Salesforce1<br>/services/data/{apiVersion}/compactLayouts<br>/services/data/{apiVersion}/consent/action<br>/services/data/{apiVersion}/consent/action/{action}<br>/services/data/{apiVersion}/consent/multiaction<br>/services/data/{apiVersion}/support/embeddedservice/configuration/{embeddedServiceConfigDeveloperName}<br>/services/data/{apiVersion}/actions<br>/services/data/{apiVersion}/actions/standard<br>/services/data/{apiVersion}/actions/standard/{action}<br>/services/data/{apiVersion}/actions/custom<br>/services/data/{apiVersion}/actions/custom/{action}<br>/services/data/{apiVersion}/sobjects/{sobjectType}/listviews/{queryLocator}/describe<br>/services/data/{apiVersion}/sobjects/{sobjectType}/listviews/{listViewID}/results<br>/services/data/{apiVersion}/sobjects/{sobjectType}/listviews<br>/services/data/{apiVersion}/sobjects/{sobjectType}/listviews/{listViewID}<br>/services/data/{apiVersion}/support<br>/services/data/{apiVersion}/support/dataCategoryGroups<br>/services/data/{apiVersion}/support/dataCategoryGroups/{group}/dataCategories/{category}<br>/services/data/{apiVersion}/support/knowledgeArticles<br>/services/data/{apiVersion}/support/knowledgeArticles/{article}<br>/services/data/{apiVersion}/parameterizedSearch<br>/services/data/{apiVersion}/consent/dsr/rtp/execute<br>/services/data/{apiVersion}/process/approvals<br>/services/data/{apiVersion}/process/rules<br>/services/data/{apiVersion}/process/rules/sObjectName<br>/services/data/{apiVersion}/process/rules/sObjectName/workflowRuleId<br>/services/data/{apiVersion}/sobjects/OpportunityLineItem/{opportunityLineItemId}/OpportunityLineItemSchedules<br>/services/data/{apiVersion}/query/{query}<br>/services/data/{apiVersion}/queryAll/{query}<br>/services/data/{apiVersion}/quickActions<br>/services/data/{apiVersion}/sobjects/{sobjectType}/listviews/recent<br>/services/data/{apiVersion}/recent<br>/services/data/{apiVersion}/limits/recordCount<br>/services/data/{apiVersion}/sobjects/relevantItems<br>/services/data/{apiVersion}/knowledgeManagement/settings<br>/services/data/{apiVersion}/search<br>/services/data/{apiVersion}/search/scopeOrder<br>/services/data/{apiVersion}/search/layout<br>/services/data/{apiVersion}/sobjects/LightningToggleMetrics<br>/services/data/{apiVersion}/sobjects/LightningUsageByAppTypeMetrics<br>/services/data/{apiVersion}/sobjects/LightningUsageByBrowserMetrics<br>/services/data/{apiVersion}/sobjects/LightningUsageByPageMetrics<br>/services/data/{apiVersion}/sobjects/LightningUsageByFlexiPageMetrics<br>/services/data/{apiVersion}/sobjects/LightningExitByPageMetrics<br>/services/data/{apiVersion}/scheduling<br>/services/data/{apiVersion}/search/suggestions<br>/services/data/{apiVersion}/search/suggestTitleMatches<br>/services/data/{apiVersion}/search/suggestSearchQueries<br>/services/data/{apiVersion}/localizedvalue/record/{developerName}/{language}<br>/services/data/{apiVersion}/theme<br>/services/data/{apiVersion}/composite<br>/services/data/{apiVersion}/composite/sobjects/{sObjectName}<br>/services/data/{apiVersion}/sobjects/{sObject}<br>/services/data/{apiVersion}/sobjects/{sObject}/quickActions/{actionName}<br>/services/data/{apiVersion}/sobjects/User/{userId}/password<br>/services/data/{apiVersion}/sobjects/SelfServiceUser/{selfServiceUserId}/password<br>/services/data/{apiVersion}/actions/{actions}<br>/services/data/{apiVersion}/actions/standard<br>/services/data/{apiVersion}/actions/standard/{action}<br>/services/data/{apiVersion}/actions/custom<br>/services/data/{apiVersion}/actions/custom/{action}<br>/services/data/{apiVersion}/parameterizedSearch<br>/services/data/{apiVersion}/consent/dsr/rtp/execute<br>/services/data/{apiVersion}/process/approvals<br>/services/data/{apiVersion}/process/rules<br>/services/data/{apiVersion}/quickActions/{quickAction}<br>/services/data/{apiVersion}/scheduling/getAppointmentSlots<br>/services/data/{apiVersion}/scheduling/getAppointmentCandidates<br>/services/data/{apiVersion}/localizedvalue/record/{developerName}/{language}<br>/services/data/{apiVersion}/localizedvalue/records/upsert<br>/services/data/{apiVersion}/localizedvalue/records/delete<br>/services/data/{apiVersion}/localizedvalue/records/get<br>/services/data/{apiVersion}/composite<br>/services/data/{apiVersion}/composite/batch<br>/services/data/{apiVersion}/composite/tree/{sObjectName}<br>/services/data/{apiVersion}/composite/sobjects<br>/services/data/{apiVersion}/sobjects/{sObject}/{id}<br>/services/data/{apiVersion}/sobjects/{sObjectName}/{fieldName}/{fieldValue}<br>/services/data/{apiVersion}/consent/action/{action}<br>/services/data/{apiVersion}/composite/sobjects<br>/services/data/{apiVersion}/composite/sobjects/{sObjectName}/{externalIdFieldName}<br>/services/data/{apiVersion}/sobjects/{sObject}/{id}<br>/services/data/{apiVersion}/sobjects/{sObjectName}/{fieldName}/{fieldValue}<br>/services/data/{apiVersion}/sobjects/User/{userId}/password<br>/services/data/{apiVersion}/sobjects/SelfServiceUser/{selfServiceUserId}/password<br>/services/data/{apiVersion}/sobjects/OpportunityLineItem/{opportunityLineItemId}/OpportunityLineItemSchedules<br>/services/data/{apiVersion}/localizedvalue/record/{developerName}/{language}<br>/services/data/{apiVersion}/composite/sobjects<br>/services/data/{apiVersion}/sobjects/{sObjectName}/{fieldName}/{fieldValue}<br>/services/data/{apiVersion}/sobjects/OpportunityLineItem/{opportunityLineItemId}/OpportunityLineItemSchedules<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### List Available REST API Versions

Use the Versions resource to list summary information about each REST API version currently available, including the version, label, and a link to each version's root. You don’t need authentication to retrieve the list of versions.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Get a List of Objects

Used to list the objects available in your org and available to the logged-in user. This resource also returns the org encoding, as well as maximum batch size permitted in queries.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>API Version</td>
        <td> text </td>
        <td> yes </td>
        <td> v1 </td>
        <td> Always </td>
        <td> The version of the API of Salesforce that contains objects with metadata.</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*


## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
