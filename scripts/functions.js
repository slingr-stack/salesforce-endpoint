////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.services = {};

endpoint.services.data = {};

endpoint.limits = {};

endpoint.sobjects = {};

endpoint.sobjects.describe = {};

endpoint.sobjects.deleted = {};

endpoint.sobjects.updated = {};

endpoint.sobjects.describe.namedLayouts = {};

endpoint.sobjects.describe.approvalLayouts = {};

endpoint.sobjects.describe.compactLayouts = {};

endpoint.sobjects.Global = {};

endpoint.sobjects.Global.describe = {};

endpoint.sobjects.Global.describe.layouts = {};

endpoint.sobjects.Object = {};

endpoint.sobjects.Object.describe = {};

endpoint.sobjects.Object.describe.layouts = {};

endpoint.sobjects.PlatformAction = {};

endpoint.sobjects.quickActions = {};

endpoint.sobjects.quickActions.describe = {};

endpoint.sobjects.quickActions.defaultValues = {};

endpoint.sobjects.richTextImageFields = {};

endpoint.sobjects.User = {};

endpoint.sobjects.User.password = {};

endpoint.sobjects.SelfServiceUser = {};

endpoint.sobjects.SelfServiceUser.password = {};

endpoint.sobjects.eventSchema = {};

endpoint.event = {};

endpoint.event.eventSchema = {};

endpoint.appMenu = {};

endpoint.appMenu.AppSwitcher = {};

endpoint.appMenu.Salesforce1 = {};

endpoint.compactLayouts = {};

endpoint.consent = {};

endpoint.consent.action = {};

endpoint.consent.multiaction = {};

endpoint.support = {};

endpoint.support.embeddedservice = {};

endpoint.support.embeddedservice.configuration = {};

endpoint.actions = {};

endpoint.actions.standard = {};

endpoint.actions.custom = {};

endpoint.sobjects.listviews = {};

endpoint.sobjects.listviews.describe = {};

endpoint.sobjects.listviews.results = {};

endpoint.support.dataCategoryGroups = {};

endpoint.support.dataCategoryGroups.dataCategories = {};

endpoint.support.knowledgeArticles = {};

endpoint.parameterizedSearch = {};

endpoint.consent.dsr = {};

endpoint.consent.dsr.rtp = {};

endpoint.consent.dsr.rtp.execute = {};

endpoint.process = {};

endpoint.process.approvals = {};

endpoint.process.rules = {};

endpoint.process.rules.sObjectName = {};

endpoint.process.rules.sObjectName.workflowRuleId = {};

endpoint.sobjects.OpportunityLineItem = {};

endpoint.sobjects.OpportunityLineItem.OpportunityLineItemSchedules = {};

endpoint.query = {};

endpoint.queryAll = {};

endpoint.quickActions = {};

endpoint.sobjects.listviews.recent = {};

endpoint.recent = {};

endpoint.limits.recordCount = {};

endpoint.sobjects.relevantItems = {};

endpoint.knowledgeManagement = {};

endpoint.knowledgeManagement.settings = {};

endpoint.search = {};

endpoint.search.scopeOrder = {};

endpoint.search.layout = {};

endpoint.sobjects.LightningToggleMetrics = {};

endpoint.sobjects.LightningUsageByAppTypeMetrics = {};

endpoint.sobjects.LightningUsageByBrowserMetrics = {};

endpoint.sobjects.LightningUsageByPageMetrics = {};

endpoint.sobjects.LightningUsageByFlexiPageMetrics = {};

endpoint.sobjects.LightningExitByPageMetrics = {};

endpoint.scheduling = {};

endpoint.scheduling.getAppointmentSlots = {};

endpoint.scheduling.getAppointmentCandidates = {};

endpoint.search.suggestions = {};

endpoint.search.suggestTitleMatches = {};

endpoint.search.suggestSearchQueries = {};

endpoint.localizedvalue = {};

endpoint.localizedvalue.record = {};

endpoint.localizedvalue.records = {};

endpoint.localizedvalue.records.upsert = {};

endpoint.localizedvalue.records.delete = {};

endpoint.localizedvalue.records.get = {};

endpoint.theme = {};

endpoint.composite = {};

endpoint.composite.batch = {};

endpoint.composite.tree = {};

endpoint.composite.sobjects = {};

endpoint.services.data.get = function(apiVersion, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/services/data');
			break;
		case 1:
			url = parse('/services/data/:apiVersion', [apiVersion]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.limits.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/limits', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.get = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/services/data/:apiVersion/sobjects', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/sobjects/:sObject', [apiVersion, sObject]);
			break;
		case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/:id', [apiVersion, sObject, id]);
			break;
		case 4:
			url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sobjects.post = function(apiVersion, sObject, httpOptions) {
    if (!apiVersion || !sObject) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject', [apiVersion, sObject]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sobjects.describe.get = function(apiVersion, sObject, httpOptions) {
    if (!apiVersion || !sObject) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe', [apiVersion, sObject]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.deleted.get = function(apiVersion, sObject, httpOptions) {
    if (!apiVersion || !sObject) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/deleted', [apiVersion, sObject]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.updated.get = function(apiVersion, sObject, httpOptions) {
    if (!apiVersion || !sObject) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/updated', [apiVersion, sObject]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.describe.namedLayouts.get = function(apiVersion, sObject, layoutName, httpOptions) {
    if (!apiVersion || !sObject || !layoutName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,layoutName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/namedLayouts/:layoutName', [apiVersion, sObject, layoutName]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.patch = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/:id', [apiVersion, sObject, id]);
			break;
		case 4:
			url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] PATCH from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._patch(options);
};

endpoint.sobjects.delete = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/:id', [apiVersion, sObject, id]);
			break;
		case 4:
			url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] DELETE from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._delete(options);
};

endpoint.sobjects.head = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
    if (!apiVersion || !sObjectName || !fieldName || !fieldValue) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName,fieldName,fieldValue].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
    sys.logs.debug('[salesforce] HEAD from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options);
};

endpoint.sobjects.describe.approvalLayouts.get = function(apiVersion, sObject, approvalProcessName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts', [apiVersion, sObject]);
			break;
		case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts/:approvalProcessName', [apiVersion, sObject, approvalProcessName]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sobjects.describe.compactLayouts.get = function(apiVersion, sObject, httpOptions) {
    if (!apiVersion || !sObject) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/compactLayouts', [apiVersion, sObject]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.Global.describe.layouts.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/Global/describe/layouts', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.Object.describe.layouts.get = function(apiVersion, id, httpOptions) {
    if (!apiVersion || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,id].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/Object/describe/layouts/:id', [apiVersion, id]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.PlatformAction.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/PlatformAction', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.quickActions.get = function(apiVersion, sObject, actionName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions', [apiVersion, sObject]);
			break;
		case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName', [apiVersion, sObject, actionName]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sobjects.quickActions.describe.get = function(apiVersion, sObject, actionName, httpOptions) {
    if (!apiVersion || !sObject || !actionName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/describe', [apiVersion, sObject, actionName]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.quickActions.defaultValues.get = function(apiVersion, sObject, actionName, id, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues', [apiVersion, sObject, actionName]);
			break;
		case 4:
			url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues/:id', [apiVersion, sObject, actionName, id]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sobjects.quickActions.post = function(apiVersion, sObject, actionName, httpOptions) {
    if (!apiVersion || !sObject || !actionName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName', [apiVersion, sObject, actionName]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sobjects.richTextImageFields.get = function(apiVersion, sObject, id, fieldName, contentReferenceId, httpOptions) {
    if (!apiVersion || !sObject || !id || !fieldName || !contentReferenceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id,fieldName,contentReferenceId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id/richTextImageFields/:fieldName/:contentReferenceId', [apiVersion, sObject, id, fieldName, contentReferenceId]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.User.password.get = function(apiVersion, userId, httpOptions) {
    if (!apiVersion || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,userId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/User/:userId/password', [apiVersion, userId]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.SelfServiceUser.password.get = function(apiVersion, selfServiceUserId, httpOptions) {
    if (!apiVersion || !selfServiceUserId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,selfServiceUserId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password', [apiVersion, selfServiceUserId]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.User.password.post = function(apiVersion, userId, httpOptions) {
    if (!apiVersion || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,userId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/User/:userId/password', [apiVersion, userId]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sobjects.SelfServiceUser.password.post = function(apiVersion, selfServiceUserId, httpOptions) {
    if (!apiVersion || !selfServiceUserId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,selfServiceUserId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password', [apiVersion, selfServiceUserId]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sobjects.User.password.delete = function(apiVersion, userId, httpOptions) {
    if (!apiVersion || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,userId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/User/:userId/password', [apiVersion, userId]);
    sys.logs.debug('[salesforce] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sobjects.SelfServiceUser.password.delete = function(apiVersion, selfServiceUserId, httpOptions) {
    if (!apiVersion || !selfServiceUserId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,selfServiceUserId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password', [apiVersion, selfServiceUserId]);
    sys.logs.debug('[salesforce] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sobjects.eventSchema.get = function(apiVersion, eventName, httpOptions) {
    if (!apiVersion || !eventName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,eventName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:eventName/eventSchema', [apiVersion, eventName]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.event.eventSchema.get = function(apiVersion, schemaId, httpOptions) {
    if (!apiVersion || !schemaId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,schemaId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/event/eventSchema/:schemaId', [apiVersion, schemaId]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.appMenu.AppSwitcher.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/appMenu/AppSwitcher', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.appMenu.Salesforce1.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/appMenu/Salesforce1', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.compactLayouts.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/compactLayouts', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.consent.action.get = function(apiVersion, action, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/services/data/:apiVersion/consent/action', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/consent/action/:action', [apiVersion, action]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.consent.multiaction.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/consent/multiaction', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.consent.action.patch = function(apiVersion, action, httpOptions) {
    if (!apiVersion || !action) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
        return;
    }
    var url = parse('/services/data/:apiVersion/consent/action/:action', [apiVersion, action]);
    sys.logs.debug('[salesforce] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.support.embeddedservice.configuration.get = function(apiVersion, embeddedServiceConfigDeveloperName, httpOptions) {
    if (!apiVersion || !embeddedServiceConfigDeveloperName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,embeddedServiceConfigDeveloperName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/support/embeddedservice/configuration/:embeddedServiceConfigDeveloperName', [apiVersion, embeddedServiceConfigDeveloperName]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.actions.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/actions', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.actions.post = function(apiVersion, actions, httpOptions) {
    if (!apiVersion || !actions) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,actions].');
        return;
    }
    var url = parse('/services/data/:apiVersion/actions/:actions', [apiVersion, actions]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.actions.standard.get = function(apiVersion, action, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/services/data/:apiVersion/actions/standard', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/actions/standard/:action', [apiVersion, action]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.actions.standard.post = function(apiVersion, action, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/services/data/:apiVersion/actions/standard', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/actions/standard/:action', [apiVersion, action]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.actions.custom.get = function(apiVersion, action, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/services/data/:apiVersion/actions/custom', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/actions/custom/:action', [apiVersion, action]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.actions.custom.post = function(apiVersion, action, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/services/data/:apiVersion/actions/custom', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/actions/custom/:action', [apiVersion, action]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] POST from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._post(options);
};

endpoint.sobjects.listviews.describe.get = function(apiVersion, sobjectType, queryLocator, httpOptions) {
    if (!apiVersion || !sobjectType || !queryLocator) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType,queryLocator].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:queryLocator/describe', [apiVersion, sobjectType, queryLocator]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.listviews.results.get = function(apiVersion, sobjectType, listViewID, httpOptions) {
    if (!apiVersion || !sobjectType || !listViewID) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType,listViewID].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID/results', [apiVersion, sobjectType, listViewID]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.listviews.get = function(apiVersion, sobjectType, listViewID, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 2:
			url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews', [apiVersion, sobjectType]);
			break;
		case 3:
			url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID', [apiVersion, sobjectType, listViewID]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.support.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/support', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.support.dataCategoryGroups.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/support/dataCategoryGroups', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.support.dataCategoryGroups.dataCategories.get = function(apiVersion, group, category, httpOptions) {
    if (!apiVersion || !group || !category) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,group,category].');
        return;
    }
    var url = parse('/services/data/:apiVersion/support/dataCategoryGroups/:group/dataCategories/:category', [apiVersion, group, category]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.support.knowledgeArticles.get = function(apiVersion, article, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/services/data/:apiVersion/support/knowledgeArticles', [apiVersion]);
			break;
		case 2:
			url = parse('/services/data/:apiVersion/support/knowledgeArticles/:article', [apiVersion, article]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.parameterizedSearch.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/parameterizedSearch', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.parameterizedSearch.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/parameterizedSearch', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.consent.dsr.rtp.execute.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/consent/dsr/rtp/execute', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.consent.dsr.rtp.execute.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/consent/dsr/rtp/execute', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.process.approvals.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/process/approvals', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.process.approvals.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/process/approvals', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.process.rules.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/process/rules', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.process.rules.sObjectName.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/process/rules/sObjectName', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.process.rules.sObjectName.workflowRuleId.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/process/rules/sObjectName/workflowRuleId', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.process.rules.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/process/rules', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.get = function(apiVersion, opportunityLineItemId, httpOptions) {
    if (!apiVersion || !opportunityLineItemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,opportunityLineItemId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', [apiVersion, opportunityLineItemId]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.put = function(apiVersion, opportunityLineItemId, httpOptions) {
    if (!apiVersion || !opportunityLineItemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,opportunityLineItemId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', [apiVersion, opportunityLineItemId]);
    sys.logs.debug('[salesforce] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.delete = function(apiVersion, opportunityLineItemId, httpOptions) {
    if (!apiVersion || !opportunityLineItemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,opportunityLineItemId].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', [apiVersion, opportunityLineItemId]);
    sys.logs.debug('[salesforce] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.query.get = function(apiVersion, query, httpOptions) {
    if (!apiVersion || !query) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,query].');
        return;
    }
    var url = parse('/services/data/:apiVersion/query/:query', [apiVersion, query]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.queryAll.get = function(apiVersion, query, httpOptions) {
    if (!apiVersion || !query) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,query].');
        return;
    }
    var url = parse('/services/data/:apiVersion/queryAll/:query', [apiVersion, query]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.quickActions.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/quickActions', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.quickActions.post = function(apiVersion, quickAction, httpOptions) {
    if (!apiVersion || !quickAction) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,quickAction].');
        return;
    }
    var url = parse('/services/data/:apiVersion/quickActions/:quickAction', [apiVersion, quickAction]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sobjects.listviews.recent.get = function(apiVersion, sobjectType, httpOptions) {
    if (!apiVersion || !sobjectType) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/recent', [apiVersion, sobjectType]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.recent.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/recent', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.limits.recordCount.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/limits/recordCount', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.relevantItems.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/relevantItems', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.knowledgeManagement.settings.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/knowledgeManagement/settings', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/search', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.scopeOrder.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/search/scopeOrder', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.layout.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/search/layout', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.LightningToggleMetrics.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/LightningToggleMetrics', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.LightningUsageByAppTypeMetrics.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByAppTypeMetrics', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.LightningUsageByBrowserMetrics.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByBrowserMetrics', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.LightningUsageByPageMetrics.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByPageMetrics', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.LightningUsageByFlexiPageMetrics.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByFlexiPageMetrics', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sobjects.LightningExitByPageMetrics.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/sobjects/LightningExitByPageMetrics', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.scheduling.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/scheduling', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.scheduling.getAppointmentSlots.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/scheduling/getAppointmentSlots', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.scheduling.getAppointmentCandidates.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/scheduling/getAppointmentCandidates', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.search.suggestions.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/search/suggestions', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.suggestTitleMatches.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/search/suggestTitleMatches', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.search.suggestSearchQueries.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/search/suggestSearchQueries', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.localizedvalue.record.post = function(apiVersion, developerName, language, httpOptions) {
    if (!apiVersion || !developerName || !language) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,developerName,language].');
        return;
    }
    var url = parse('/services/data/:apiVersion/localizedvalue/record/:developerName/:language', [apiVersion, developerName, language]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.localizedvalue.records.upsert.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/localizedvalue/records/upsert', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.localizedvalue.record.delete = function(apiVersion, developerName, language, httpOptions) {
    if (!apiVersion || !developerName || !language) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,developerName,language].');
        return;
    }
    var url = parse('/services/data/:apiVersion/localizedvalue/record/:developerName/:language', [apiVersion, developerName, language]);
    sys.logs.debug('[salesforce] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.localizedvalue.records.delete.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/localizedvalue/records/delete', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.localizedvalue.record.get = function(apiVersion, developerName, language, httpOptions) {
    if (!apiVersion || !developerName || !language) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,developerName,language].');
        return;
    }
    var url = parse('/services/data/:apiVersion/localizedvalue/record/:developerName/:language', [apiVersion, developerName, language]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.localizedvalue.records.get.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/localizedvalue/records/get', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.theme.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/theme', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.composite.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.composite.get = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite', [apiVersion]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.composite.batch.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite/batch', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.composite.tree.post = function(apiVersion, sObjectName, httpOptions) {
    if (!apiVersion || !sObjectName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite/tree/:sObjectName', [apiVersion, sObjectName]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.composite.sobjects.post = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite/sobjects', [apiVersion]);
    sys.logs.debug('[salesforce] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.composite.sobjects.get = function(apiVersion, sObjectName, httpOptions) {
    if (!apiVersion || !sObjectName) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite/sobjects/:sObjectName', [apiVersion, sObjectName]);
    sys.logs.debug('[salesforce] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.composite.sobjects.patch = function(apiVersion, sObjectName, externalIdFieldName, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        } 
        if(!httpOptions){
            sys.logs.error('Invalid argument received.');
            return;
        }
    }
    var url;
    switch(arguments.length - 1){
        case 1:
			url = parse('/services/data/:apiVersion/composite/sobjects', [apiVersion]);
			break;
		case 3:
			url = parse('/services/data/:apiVersion/composite/sobjects/:sObjectName/:externalIdFieldName', [apiVersion, sObjectName, externalIdFieldName]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[salesforce] PATCH from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._patch(options);
};

endpoint.composite.sobjects.delete = function(apiVersion, httpOptions) {
    if (!apiVersion) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
        return;
    }
    var url = parse('/services/data/:apiVersion/composite/sobjects', [apiVersion]);
    sys.logs.debug('[salesforce] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}