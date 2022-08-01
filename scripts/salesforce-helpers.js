 ////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////


function parse(str) {
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

endpoint.services = {};

endpoint.services.data = {};

endpoint.services.data.get = function(httpOptions) {
	var url = parse('/services/data');
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.limits = {};

endpoint.services.data.limits.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/limits', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects = {};

endpoint.services.data.sobjects.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.post = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.describe = {};

endpoint.services.data.sobjects.describe.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.deleted = {};

endpoint.services.data.sobjects.deleted.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/deleted', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.updated = {};

endpoint.services.data.sobjects.updated.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/updated', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.describe.namedLayouts = {};

endpoint.services.data.sobjects.describe.namedLayouts.get = function(apiVersion, sObject, layoutName, httpOptions) {
	if (!apiVersion || !sObject || !layoutName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,layoutName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/namedLayouts/:layoutName', [apiVersion, sObject, layoutName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.get = function(apiVersion, sObject, id, httpOptions) {
	if (!apiVersion || !sObject || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id', [apiVersion, sObject, id]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.patch = function(apiVersion, sObject, id, httpOptions) {
	if (!apiVersion || !sObject || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id', [apiVersion, sObject, id]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.sobjects.delete = function(apiVersion, sObject, id, httpOptions) {
	if (!apiVersion || !sObject || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id', [apiVersion, sObject, id]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.sobjects.get = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
	if (!apiVersion || !sObjectName || !fieldName || !fieldValue) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName,fieldName,fieldValue].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.post = function(apiVersion, sObjectName, httpOptions) {
	if (!apiVersion || !sObjectName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObjectName', [apiVersion, sObjectName]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.patch = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
	if (!apiVersion || !sObjectName || !fieldName || !fieldValue) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName,fieldName,fieldValue].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.sobjects.delete = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
	if (!apiVersion || !sObjectName || !fieldName || !fieldValue) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName,fieldName,fieldValue].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.sobjects.head = function(apiVersion, sObjectName, fieldName, fieldValue, httpOptions) {
	if (!apiVersion || !sObjectName || !fieldName || !fieldValue) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName,fieldName,fieldValue].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObjectName/:fieldName/:fieldValue', [apiVersion, sObjectName, fieldName, fieldValue]);
	sys.logs.debug('[salesforce] HEAD from: ' + url);
	return endpoint.head(url, httpOptions);
};

endpoint.services.data.sobjects.get = function(apiVersion, sObject, id, blobField, httpOptions) {
	if (!apiVersion || !sObject || !id || !blobField) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id,blobField].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id/:blobField', [apiVersion, sObject, id, blobField]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.describe.approvalLayouts = {};

endpoint.services.data.sobjects.describe.approvalLayouts.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.describe.approvalLayouts.get = function(apiVersion, sObject, approvalProcessName, httpOptions) {
	if (!apiVersion || !sObject || !approvalProcessName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,approvalProcessName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/approvalLayouts/:approvalProcessName', [apiVersion, sObject, approvalProcessName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.describe.compactLayouts = {};

endpoint.services.data.sobjects.describe.compactLayouts.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/describe/compactLayouts', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.Global = {};

endpoint.services.data.sobjects.Global.describe = {};

endpoint.services.data.sobjects.Global.describe.layouts = {};

endpoint.services.data.sobjects.Global.describe.layouts.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/Global/describe/layouts', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.Object = {};

endpoint.services.data.sobjects.Object.describe = {};

endpoint.services.data.sobjects.Object.describe.layouts = {};

endpoint.services.data.sobjects.Object.describe.layouts.get = function(apiVersion, id, httpOptions) {
	if (!apiVersion || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,id].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/Object/describe/layouts/:id', [apiVersion, id]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.PlatformAction = {};

endpoint.services.data.sobjects.PlatformAction.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/PlatformAction', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.quickActions = {};

endpoint.services.data.sobjects.quickActions.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.quickActions.get = function(apiVersion, sObject, actionName, httpOptions) {
	if (!apiVersion || !sObject || !actionName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName', [apiVersion, sObject, actionName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.quickActions.describe = {};

endpoint.services.data.sobjects.quickActions.describe.get = function(apiVersion, sObject, actionName, httpOptions) {
	if (!apiVersion || !sObject || !actionName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/describe', [apiVersion, sObject, actionName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.quickActions.defaultValues = {};

endpoint.services.data.sobjects.quickActions.defaultValues.get = function(apiVersion, sObject, actionName, httpOptions) {
	if (!apiVersion || !sObject || !actionName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues', [apiVersion, sObject, actionName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.quickActions.defaultValues.get = function(apiVersion, sObject, actionName, id, httpOptions) {
	if (!apiVersion || !sObject || !actionName || !id) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName,id].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName/defaultValues/:id', [apiVersion, sObject, actionName, id]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.quickActions.post = function(apiVersion, sObject, actionName, httpOptions) {
	if (!apiVersion || !sObject || !actionName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,actionName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/quickActions/:actionName', [apiVersion, sObject, actionName]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.richTextImageFields = {};

endpoint.services.data.sobjects.richTextImageFields.get = function(apiVersion, sObject, id, fieldName, contentReferenceId, httpOptions) {
	if (!apiVersion || !sObject || !id || !fieldName || !contentReferenceId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id,fieldName,contentReferenceId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id/richTextImageFields/:fieldName/:contentReferenceId', [apiVersion, sObject, id, fieldName, contentReferenceId]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.get = function(apiVersion, sObject, id, relationshipFieldName, httpOptions) {
	if (!apiVersion || !sObject || !id || !relationshipFieldName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id,relationshipFieldName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id/:relationshipFieldName', [apiVersion, sObject, id, relationshipFieldName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.delete = function(apiVersion, sObject, id, relationshipFieldName, httpOptions) {
	if (!apiVersion || !sObject || !id || !relationshipFieldName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id,relationshipFieldName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id/:relationshipFieldName', [apiVersion, sObject, id, relationshipFieldName]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.sobjects.update = function(apiVersion, sObject, id, relationshipFieldName, httpOptions) {
	if (!apiVersion || !sObject || !id || !relationshipFieldName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject,id,relationshipFieldName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/:id/:relationshipFieldName', [apiVersion, sObject, id, relationshipFieldName]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.sobjects.suggestedArticles​ = {};

endpoint.services.data.sobjects.suggestedArticles​.get = function(apiVersion, sObject, httpOptions) {
	if (!apiVersion || !sObject) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObject].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sObject/suggestedArticles​', [apiVersion, sObject]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.User = {};

endpoint.services.data.sobjects.User.password = {};

endpoint.services.data.sobjects.User.password.get = function(apiVersion, userId, httpOptions) {
	if (!apiVersion || !userId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,userId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/User/:userId/password', [apiVersion, userId]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.SelfServiceUser = {};

endpoint.services.data.sobjects.SelfServiceUser.password = {};

endpoint.services.data.sobjects.SelfServiceUser.password.get = function(apiVersion, selfServiceUserId, httpOptions) {
	if (!apiVersion || !selfServiceUserId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,selfServiceUserId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password', [apiVersion, selfServiceUserId]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.User.password.post = function(apiVersion, userId, httpOptions) {
	if (!apiVersion || !userId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,userId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/User/:userId/password', [apiVersion, userId]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.SelfServiceUser.password.post = function(apiVersion, selfServiceUserId, httpOptions) {
	if (!apiVersion || !selfServiceUserId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,selfServiceUserId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password', [apiVersion, selfServiceUserId]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.User.password.delete = function(apiVersion, userId, httpOptions) {
	if (!apiVersion || !userId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,userId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/User/:userId/password', [apiVersion, userId]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.sobjects.SelfServiceUser.password.delete = function(apiVersion, selfServiceUserId, httpOptions) {
	if (!apiVersion || !selfServiceUserId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,selfServiceUserId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/SelfServiceUser/:selfServiceUserId/password', [apiVersion, selfServiceUserId]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.sobjects.eventSchema = {};

endpoint.services.data.sobjects.eventSchema.get = function(apiVersion, eventName, httpOptions) {
	if (!apiVersion || !eventName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,eventName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:eventName/eventSchema', [apiVersion, eventName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.event = {};

endpoint.services.data.event.eventSchema = {};

endpoint.services.data.event.eventSchema.get = function(apiVersion, schemaId, httpOptions) {
	if (!apiVersion || !schemaId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,schemaId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/event/eventSchema/:schemaId', [apiVersion, schemaId]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.appMenu = {};

endpoint.services.data.appMenu.AppSwitcher = {};

endpoint.services.data.appMenu.AppSwitcher.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/appMenu/AppSwitcher', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.appMenu.Salesforce1 = {};

endpoint.services.data.appMenu.Salesforce1.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/appMenu/Salesforce1', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.compactLayouts = {};

endpoint.services.data.compactLayouts.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/compactLayouts', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.compactLayouts.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/compactLayouts', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.consent = {};

endpoint.services.data.consent.action = {};

endpoint.services.data.consent.action.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/action', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.consent.multiaction = {};

endpoint.services.data.consent.multiaction.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/multiaction', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.consent.action.get = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/action/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.consent.action.PATCH = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/action/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.consent.action.PATCH = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/action/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.support = {};

endpoint.services.data.support.embeddedservice = {};

endpoint.services.data.support.embeddedservice.configuration = {};

endpoint.services.data.support.embeddedservice.configuration.get = function(apiVersion, embeddedServiceConfigDeveloperName, httpOptions) {
	if (!apiVersion || !embeddedServiceConfigDeveloperName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,embeddedServiceConfigDeveloperName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/support/embeddedservice/configuration/:embeddedServiceConfigDeveloperName', [apiVersion, embeddedServiceConfigDeveloperName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.actions = {};

endpoint.services.data.actions.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.actions.post = function(apiVersion, actions, httpOptions) {
	if (!apiVersion || !actions) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,actions].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/:actions', [apiVersion, actions]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.actions.standard = {};

endpoint.services.data.actions.standard.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/standard', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.actions.standard.get = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/standard/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.actions.standard.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/standard', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.actions.standard.post = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/standard/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.actions.custom = {};

endpoint.services.data.actions.custom.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/custom', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.actions.custom.get = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/custom/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.actions.custom.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/custom', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.actions.custom.post = function(apiVersion, action, httpOptions) {
	if (!apiVersion || !action) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,action].');
		return;
	}
	var url = parse('/services/data/:apiVersion/actions/custom/:action', [apiVersion, action]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.listviews = {};

endpoint.services.data.sobjects.listviews.describe = {};

endpoint.services.data.sobjects.listviews.describe.get = function(apiVersion, sobjectType, queryLocator, httpOptions) {
	if (!apiVersion || !sobjectType || !queryLocator) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType,queryLocator].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:queryLocator/describe', [apiVersion, sobjectType, queryLocator]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.listviews.results = {};

endpoint.services.data.sobjects.listviews.results.get = function(apiVersion, sobjectType, listViewID, httpOptions) {
	if (!apiVersion || !sobjectType || !listViewID) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType,listViewID].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID/results', [apiVersion, sobjectType, listViewID]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.listviews.results.get = function(apiVersion, sobjectType, listViewID, httpOptions) {
	if (!apiVersion || !sobjectType || !listViewID) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType,listViewID].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID/results', [apiVersion, sobjectType, listViewID]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.listviews.get = function(apiVersion, sobjectType, httpOptions) {
	if (!apiVersion || !sobjectType) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews', [apiVersion, sobjectType]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.listviews.get = function(apiVersion, sobjectType, listViewID, httpOptions) {
	if (!apiVersion || !sobjectType || !listViewID) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType,listViewID].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/:listViewID', [apiVersion, sobjectType, listViewID]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.support.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/support', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.support.dataCategoryGroups = {};

endpoint.services.data.support.dataCategoryGroups.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/support/dataCategoryGroups', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.support.dataCategoryGroups.dataCategories = {};

endpoint.services.data.support.dataCategoryGroups.dataCategories.get = function(apiVersion, group, category, httpOptions) {
	if (!apiVersion || !group || !category) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,group,category].');
		return;
	}
	var url = parse('/services/data/:apiVersion/support/dataCategoryGroups/:group/dataCategories/:category', [apiVersion, group, category]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.support.knowledgeArticles = {};

endpoint.services.data.support.knowledgeArticles.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/support/knowledgeArticles', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.support.knowledgeArticles.get = function(apiVersion, article, httpOptions) {
	if (!apiVersion || !article) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,article].');
		return;
	}
	var url = parse('/services/data/:apiVersion/support/knowledgeArticles/:article', [apiVersion, article]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.parameterizedSearch = {};

endpoint.services.data.parameterizedSearch.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/parameterizedSearch', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.parameterizedSearch.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/parameterizedSearch', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.consent.dsr = {};

endpoint.services.data.consent.dsr.rtp = {};

endpoint.services.data.consent.dsr.rtp.execute = {};

endpoint.services.data.consent.dsr.rtp.execute.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/dsr/rtp/execute', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.consent.dsr.rtp.execute.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/consent/dsr/rtp/execute', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.process = {};

endpoint.services.data.process.approvals = {};

endpoint.services.data.process.approvals.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/process/approvals', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.process.approvals.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/process/approvals', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.process.rules = {};

endpoint.services.data.process.rules.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/process/rules', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.process.rules.sObjectName = {};

endpoint.services.data.process.rules.sObjectName.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/process/rules/sObjectName', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.process.rules.sObjectName.workflowRuleId = {};

endpoint.services.data.process.rules.sObjectName.workflowRuleId.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/process/rules/sObjectName/workflowRuleId', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.process.rules.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/process/rules', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.OpportunityLineItem = {};

endpoint.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules = {};

endpoint.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.get = function(apiVersion, opportunityLineItemId, httpOptions) {
	if (!apiVersion || !opportunityLineItemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,opportunityLineItemId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', [apiVersion, opportunityLineItemId]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.put = function(apiVersion, opportunityLineItemId, httpOptions) {
	if (!apiVersion || !opportunityLineItemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,opportunityLineItemId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', [apiVersion, opportunityLineItemId]);
	sys.logs.debug('[salesforce] PUT from: ' + url);
	return endpoint.put(url, httpOptions);
};

endpoint.services.data.sobjects.OpportunityLineItem.OpportunityLineItemSchedules.delete = function(apiVersion, opportunityLineItemId, httpOptions) {
	if (!apiVersion || !opportunityLineItemId) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,opportunityLineItemId].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/OpportunityLineItem/:opportunityLineItemId/OpportunityLineItemSchedules', [apiVersion, opportunityLineItemId]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.query = {};

endpoint.services.data.query.get = function(apiVersion, query, httpOptions) {
	if (!apiVersion || !query) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,query].');
		return;
	}
	var url = parse('/services/data/:apiVersion/query/:query', [apiVersion, query]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.queryAll = {};

endpoint.services.data.queryAll.get = function(apiVersion, query, httpOptions) {
	if (!apiVersion || !query) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,query].');
		return;
	}
	var url = parse('/services/data/:apiVersion/queryAll/:query', [apiVersion, query]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.quickActions = {};

endpoint.services.data.quickActions.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/quickActions', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.quickActions.post = function(apiVersion, quickAction, httpOptions) {
	if (!apiVersion || !quickAction) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,quickAction].');
		return;
	}
	var url = parse('/services/data/:apiVersion/quickActions/:quickAction', [apiVersion, quickAction]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.sobjects.listviews.recent = {};

endpoint.services.data.sobjects.listviews.recent.get = function(apiVersion, sobjectType, httpOptions) {
	if (!apiVersion || !sobjectType) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sobjectType].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/:sobjectType/listviews/recent', [apiVersion, sobjectType]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.recent = {};

endpoint.services.data.recent.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/recent', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.limits.recordCount = {};

endpoint.services.data.limits.recordCount.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/limits/recordCount', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.relevantItems = {};

endpoint.services.data.sobjects.relevantItems.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/relevantItems', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.knowledgeManagement = {};

endpoint.services.data.knowledgeManagement.settings = {};

endpoint.services.data.knowledgeManagement.settings.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/knowledgeManagement/settings', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.search = {};

endpoint.services.data.search.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/search', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.search.scopeOrder = {};

endpoint.services.data.search.scopeOrder.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/search/scopeOrder', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.search.layout = {};

endpoint.services.data.search.layout.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/search/layout', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.LightningToggleMetrics = {};

endpoint.services.data.sobjects.LightningToggleMetrics.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/LightningToggleMetrics', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.LightningUsageByAppTypeMetrics = {};

endpoint.services.data.sobjects.LightningUsageByAppTypeMetrics.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByAppTypeMetrics', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.LightningUsageByBrowserMetrics = {};

endpoint.services.data.sobjects.LightningUsageByBrowserMetrics.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByBrowserMetrics', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.LightningUsageByPageMetrics = {};

endpoint.services.data.sobjects.LightningUsageByPageMetrics.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByPageMetrics', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.LightningUsageByFlexiPageMetrics = {};

endpoint.services.data.sobjects.LightningUsageByFlexiPageMetrics.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/LightningUsageByFlexiPageMetrics', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.sobjects.LightningExitByPageMetrics = {};

endpoint.services.data.sobjects.LightningExitByPageMetrics.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/sobjects/LightningExitByPageMetrics', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.scheduling = {};

endpoint.services.data.scheduling.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/scheduling', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.scheduling.getAppointmentSlots = {};

endpoint.services.data.scheduling.getAppointmentSlots.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/scheduling/getAppointmentSlots', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.scheduling.getAppointmentCandidates = {};

endpoint.services.data.scheduling.getAppointmentCandidates.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/scheduling/getAppointmentCandidates', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.search.suggestions = {};

endpoint.services.data.search.suggestions.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/search/suggestions', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.search.suggestTitleMatches = {};

endpoint.services.data.search.suggestTitleMatches.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/search/suggestTitleMatches', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.search.suggestSearchQueries = {};

endpoint.services.data.search.suggestSearchQueries.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/search/suggestSearchQueries', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.localizedvalue = {};

endpoint.services.data.localizedvalue.record = {};

endpoint.services.data.localizedvalue.record.post = function(apiVersion, developerName, language, httpOptions) {
	if (!apiVersion || !developerName || !language) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,developerName,language].');
		return;
	}
	var url = parse('/services/data/:apiVersion/localizedvalue/record/:developerName/:language', [apiVersion, developerName, language]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.localizedvalue.records = {};

endpoint.services.data.localizedvalue.records.upsert = {};

endpoint.services.data.localizedvalue.records.upsert.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/localizedvalue/records/upsert', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.localizedvalue.record.delete = function(apiVersion, developerName, language, httpOptions) {
	if (!apiVersion || !developerName || !language) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,developerName,language].');
		return;
	}
	var url = parse('/services/data/:apiVersion/localizedvalue/record/:developerName/:language', [apiVersion, developerName, language]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

endpoint.services.data.localizedvalue.records.delete = {};

endpoint.services.data.localizedvalue.records.delete.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/localizedvalue/records/delete', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.localizedvalue.record.get = function(apiVersion, developerName, language, httpOptions) {
	if (!apiVersion || !developerName || !language) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,developerName,language].');
		return;
	}
	var url = parse('/services/data/:apiVersion/localizedvalue/record/:developerName/:language', [apiVersion, developerName, language]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.localizedvalue.records.get = {};

endpoint.services.data.localizedvalue.records.get.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/localizedvalue/records/get', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.theme = {};

endpoint.services.data.theme.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/theme', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.composite = {};

endpoint.services.data.composite.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.composite.get = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite', [apiVersion]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.composite.batch = {};

endpoint.services.data.composite.batch.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/batch', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.composite.tree = {};

endpoint.services.data.composite.tree.post = function(apiVersion, sObjectName, httpOptions) {
	if (!apiVersion || !sObjectName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/tree/:sObjectName', [apiVersion, sObjectName]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.composite.sobjects = {};

endpoint.services.data.composite.sobjects.post = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/sobjects', [apiVersion]);
	sys.logs.debug('[salesforce] POST from: ' + url);
	return endpoint.post(url, httpOptions);
};

endpoint.services.data.composite.sobjects.get = function(apiVersion, sObjectName, httpOptions) {
	if (!apiVersion || !sObjectName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/sobjects/:sObjectName', [apiVersion, sObjectName]);
	sys.logs.debug('[salesforce] GET from: ' + url);
	return endpoint.get(url, httpOptions);
};

endpoint.services.data.composite.sobjects.patch = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/sobjects', [apiVersion]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.composite.sobjects.patch = function(apiVersion, sObjectName, externalIdFieldName, httpOptions) {
	if (!apiVersion || !sObjectName || !externalIdFieldName) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion,sObjectName,externalIdFieldName].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/sobjects/:sObjectName/:externalIdFieldName', [apiVersion, sObjectName, externalIdFieldName]);
	sys.logs.debug('[salesforce] PATCH from: ' + url);
	return endpoint.patch(url, httpOptions);
};

endpoint.services.data.composite.sobjects.delete = function(apiVersion, httpOptions) {
	if (!apiVersion) {
		sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [apiVersion].');
		return;
	}
	var url = parse('/services/data/:apiVersion/composite/sobjects', [apiVersion]);
	sys.logs.debug('[salesforce] DELETE from: ' + url);
	return endpoint.delete(url, httpOptions);
};

