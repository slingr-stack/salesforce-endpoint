// Endpoint framework and dependencies
const endpoint = require('slingr-endpoints'),
    FormData = require('form-data');

// Endpoint hooks
let INSTANCE_URL;
endpoint.hooks.onEndpointStart = async () => {
    // The loggers, endpoint properties, data stores, etc. are initialized at this point. the endpoint is ready to be used.
    endpoint.logger.info('From Hook - Endpoint has started');
    endpoint.appLogger.info('From Hook - Endpoint has started');
    INSTANCE_URL = endpoint.endpointConfig.instanceUrl;
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
            formData.append("redirect_uri", endpoint.settings.endpointsServicesApi);
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
        endpoint.appLogger.info('GET request to: '+INSTANCE_URL + options.params.path);
        let { data } = await endpoint.httpModule.get(INSTANCE_URL + options.params.path, {
            headers: { 'Authorization': `Bearer ${accessToken}` },
            params: options.params.body
        });
        endpoint.appLogger.info('GET request executed successfully');
        return data;
    } catch (error) {
        if (error.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                throw 'Unable to get access token';
            }
            return await endpoint.functions._get(options);
        }
        endpoint.appLogger.error('There were problems executing the GET request', error);
        throw 'There were problems executing the GET request', error;
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
        if (error.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                throw 'Unable to get access token';
            }
            return await endpoint.functions._post(options);
        }
        endpoint.appLogger.error('There were problems executing the POST request: ', error);
        throw 'There were problems executing the POST request: ', error;
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
        if (error.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                throw 'Unable to get access token';
            }
            return await endpoint.functions._put(options);
        }
        endpoint.appLogger.error('There were problems executing the PUT request', error);
        throw 'There were problems executing the PUT request', error;
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
        if (error.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                throw 'Unable to get access token';
            }
            return await endpoint.functions._delete(options);
        }
        endpoint.appLogger.error('There were problems executing the DELETE request', error);
        throw 'There were problems executing the DELETE request', error;
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
        if (error.status === 401) {
            endpoint.appLogger.warn('Unauthorized user or expired token to make the request');
            let haveAccessToken = false, strikeCount = 0;
            while (!haveAccessToken && strikeCount <= 3) {
                haveAccessTokenToken = await generateAccessToken();
                strikeCount += 1;
            }
            if (!haveAccessToken) {
                throw 'Unable to get access token';
            }
            return await endpoint.functions._patch(options);
        }
        endpoint.appLogger.error('There were problems executing the PATCH request', error);
        throw 'There were problems executing the PATCH request', error;
    }
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