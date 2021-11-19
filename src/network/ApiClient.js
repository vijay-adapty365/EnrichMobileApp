import axios from 'axios';
import RESPONSE_STATUS from '../constants/response-status';

/**
 * ApiClient - Common api client to make network calls.
 */
export class ApiClient {

    static BASE_URL = '';

    static REQUEST_METHOD = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE',
    }

    static commonHeaders(headers) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
        return headers;
    }

    /**
     * 
     * @param {*} method - method to use for api request - GET | POST | PUT | DELETE
     * @param {*} url - endpoint to append after baseUrl
     * @param {*} payload - to send with request
     * @param {*} params - to append as query strings
     * @param {*} apiHeaders - additional headers
     * @param {*} token - auth token
     * @returns 
     */
    static async call(method, url, payload, params, apiHeaders, token ) {
        let headers = apiHeaders ? apiHeaders : {};
        let requestParams = params ? params : {};

        headers = this.commonHeaders(headers);

        let axiosInstance = axios.create({baseURL: this.BASE_URL});

        try {
            let response = await axiosInstance.request({
                method:method,
                url: url,
                data: JSON.stringify(payload),
                params: requestParams,
                headers: headers
            });

            if(response.status === RESPONSE_STATUS['200']){
                if(response.data !== null){
                    return response.data;
                }else {
                    throw new Error("Data not available");// Will be change as per app requirement
                }
            }else {
                throw new Error("An Unknown Error occured");
            }
        } catch (error) {
            throw error;
        }
    }
}

