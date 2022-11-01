// Endpoint framework and dependencies
const endpoint = require('slingr-endpoints'),
    FormData = require('form-data'),
    url = require('url');

// Endpoint hooks
let INSTANCE_URL, REDIRECT_URI;
endpoint.hooks.onEndpointStart = async () => {
    // The loggers, endpoint properties, data stores, etc. are initialized at this point. the endpoint is ready to be used.
    endpoint.logger.info('From Hook - Endpoint has started');
    endpoint.appLogger.info('From Hook - Endpoint has started');
    INSTANCE_URL = endpoint.endpointConfig.instanceUrl;
    let redirectUri = url.parse(endpoint.settings.webhookUrl);
    REDIRECT_URI = redirectUri.protocol + '//' + redirectUri.hostname + '/callback';
    await generateAccessToken();
};
endpoint.hooks.onEndpointStop = (cause) => {
    // The endpoint is about to stop at this point. Use this to release all resources that could cause a memory leak. 
    endpoint.logger.info('From Hook - Endpoint is stopping.');
    endpoint.appLogger.info('From Hook - Endpoint is stopping.', cause);
};

// Endpoint functions    
// Generate access token
let accessToken;
async function generateAccessToken() {
    endpoint.appLogger.info('Getting access token');
    const formData = new FormData();
    formData.append("client_id", endpoint.endpointConfig.consumerKey);
    formData.append("client_secret", endpoint.endpointConfig.consumerSecret);
    if (endpoint.endpointConfig.authorizationMethod === 'webServer') {
        let authorizationCode = await endpoint.dataStores.authorizationCode.findOne({ code: endpoint.endpointConfig.code });
        // if the authorization code is found the refresh token is used to get the access token
        if (authorizationCode) {
            formData.append("grant_type", 'refresh_token');
            formData.append("refresh_token", authorizationCode.refreshToken);
        } else {
            formData.append("grant_type", 'authorization_code');
            formData.append("code", endpoint.endpointConfig.code);
            formData.append("redirect_uri", REDIRECT_URI);
        }
    } else if (endpoint.endpointConfig.authorizationMethod === 'usernamePassword') {
        formData.append("grant_type", 'password');
        formData.append("username", endpoint.endpointConfig.userName);
        formData.append("password", endpoint.endpointConfig.password);
    }
    try {
        let response = await endpoint.httpModule.post(INSTANCE_URL + '/services/oauth2/token', formData,
            {
                headers: formData.getHeaders()
            });
        accessToken = response?.data?.access_token
        if (!accessToken) {
            endpoint.appLogger.warn('An access token was not received');
            return false;
        }
        if (response?.data?.refresh_token) {
            // here the authorization code is saved with the corresponding refresh token
            await endpoint.dataStores.authorizationCode.save({ code: endpoint.endpointConfig.code, refreshToken: response.data.refresh_token });
        }
        endpoint.appLogger.info('Access token received successfully');
        return true;
    } catch (error) {
        endpoint.appLogger.error('There were problems receiving the access token: ', error);
        return false;
    }
}


// HTTP methods
endpoint.functions._get = async (options) => {
    try {
        let { data } = await endpoint.httpModule.get(INSTANCE_URL + options.params.path, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
            params: options.params.body
        });
        endpoint.appLogger.info('GET request executed successfully');
        return data;
    } catch (error) {
        if (error.response.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                return endpoint.throw(error, error.response.data);
            }
            return await endpoint.functions._get(options);
        }
        return endpoint.throw(error, error.response.data);
    }
}

endpoint.functions._post = async (options) => {
    try {
        let { data } = await endpoint.httpModule.post(INSTANCE_URL + options.params.path, options.params.body, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        endpoint.appLogger.info('POST request executed successfully');
        return data;
    } catch (error) {
        if (error.response.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                return endpoint.throw(error, error.response.data);
            }
            return await endpoint.functions._get(options);
        }
        return endpoint.throw(error, error.response.data);
    }
}

endpoint.functions._put = async (options) => {
    try {
        let { data } = await endpoint.httpModule.put(INSTANCE_URL + options.params.path, options.params.body, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        endpoint.appLogger.info('PUT request executed successfully');
        return data;
    } catch (error) {
        if (error.response.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                return endpoint.throw(error, error.response.data);
            }
            return await endpoint.functions._get(options);
        }
        return endpoint.throw(error, error.response.data);
    }
}

endpoint.functions._delete = async (options) => {
    try {
        let { data } = await endpoint.httpModule.delete(INSTANCE_URL + options.params.path, options.params.body, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        endpoint.appLogger.info('DELETE request executed successfully');
        return data;
    } catch (error) {
        if (error.response.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                return endpoint.throw(error, error.response.data);
            }
            return await endpoint.functions._get(options);
        }
        return endpoint.throw(error, error.response.data);
    }
}

endpoint.functions._patch = async (options) => {
    try {
        let { data } = await endpoint.httpModule.patch(INSTANCE_URL + options.params.path, options.params.body, {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        endpoint.appLogger.info('PATCH request executed successfully');
        return data;
    } catch (error) {
        if (error.response.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                return endpoint.throw(error, error.response.data);
            }
            return await endpoint.functions._get(options);
        }
        return endpoint.throw(error, error.response.data);
    }
}

// function to send custom throws
endpoint.throw = (err, data) => {
    let error = {
        __endpoint_exception__: true,
        message: typeof err === 'string' ? err : 'Endpoint Exception',
        additionalInfo: {},
        error: { code: err.code ?? 't9Error', name: 'T9 Bot Error' }
    }
    if (err.message) error.message = err.message;
    if (err.cause) error.additionalInfo.cause = err.cause;
    if (err.stack) error.additionalInfo.stack = err.stack;
    if (data) error.additionalInfo.data = data;
    return error;
}

// Web services
endpoint.webServices.webhooks = {
    method: 'POST',
    path: '/',
    handler: function (req, res) {
        let body = req.body || {};

        // send event to app
        endpoint.events.send('webhook', body);

        // this is what the webhook caller receives as response
        res.send({ status: 'ok' });
    }
}

process.on('uncaughtException', (error) => {
    endpoint.appLogger.error('Uncaught Exception', error);
    endpoint.logger.error('Uncaught Exception', error);
});

// Always call this method at the end of the file to run the endpoint
endpoint.start();