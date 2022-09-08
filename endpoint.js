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
let accessToken, refreshToken;
async function generateAccessToken() {
    endpoint.appLogger.info('Getting access token');
    const formData = new FormData();
    formData.append("client_id", endpoint.endpointConfig.consumerKey);
    formData.append("client_secret", endpoint.endpointConfig.consumerSecret);
    if (endpoint.endpointConfig.authorizationMethod === 'usernamePassword') {
        formData.append("grant_type", 'password');
        formData.append("username", endpoint.endpointConfig.userName);
        formData.append("password", endpoint.endpointConfig.password);
    } else if (endpoint.endpointConfig.authorizationMethod === 'webServer' && !refreshToken) {
        formData.append("grant_type", 'authorization_code');
        formData.append("code", endpoint.endpointConfig.code);
        formData.append("redirect_uri", endpoint.endpointConfig.redirectUri);
    } else if (refreshToken) {
        formData.append("grant_type", 'refresh_token');
        formData.append("refresh_token", refreshToken);
    }
    try {
        let response = await endpoint.httpModule.post(INSTANCE_URL + '/services/oauth2/token', formData,
            {
                headers: formData.getHeaders()
            });
        console.log('RESPONSE: ', response.data);
        endpoint.appLogger.info('Access token received successfully');
        accessToken = response.data.access_token;
        refreshToken = response.data.refresh_token;
    } catch (error) {
        console.log(error.response);
        endpoint.appLogger.error('There were problems receiving the access token: ', error.response);
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
            await generateAccessToken();
            return await endpoint.functions._get(options);
        }
        endpoint.appLogger.error('There were problems executing the GET request', error.response);
        throw 'There were problems executing the GET request', error.response;
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
            await generateAccessToken();
            return await endpoint.functions._post(options);
        }
        endpoint.appLogger.error('There were problems executing the POST request: ', error.response);
        throw 'There were problems executing the POST request: ', error.response;
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
            await generateAccessToken();
            return await endpoint.functions._put(options);
        }
        endpoint.appLogger.error('There were problems executing the PUT request', error.response);
        throw 'There were problems executing the PUT request', error.response;
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
            await generateAccessToken();
            return await endpoint.functions._delete(options);
        }
        endpoint.appLogger.error('There were problems executing the DELETE request', error.response);
        throw 'There were problems executing the DELETE request', error.response;
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
            await generateAccessToken();
            return await endpoint.functions._patch(options);
        }
        endpoint.appLogger.error('There were problems executing the PATCH request', error.response);
        throw 'There were problems executing the PATCH request', error.response;
    }
}

// Web services
endpoint.webServices.webhooks = {
    method: 'POST',
    path: '/',
    handler: function (req, res) {
        let body;
        try {
            body = req.body;
        } catch (err) {
            throw new Error('Body must be valid JSON');
        }

        // send event to app
        endpoint.events.send('inboundEvent', body);

        // this is what the webhook caller receives as response
        res.send({ status: 'ok' });
    }
}

// Always call this method at the end of the file to run the endpoint
endpoint.start();