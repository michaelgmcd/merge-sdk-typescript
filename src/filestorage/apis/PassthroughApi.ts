/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../../runtime';
import {
    DataPassthroughRequest,
    DataPassthroughRequestFromJSON,
    DataPassthroughRequestToJSON,
    RemoteResponse,
    RemoteResponseFromJSON,
    RemoteResponseToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface PassthroughCreateRequest {
    xAccountToken: string;
    dataPassthroughRequest: DataPassthroughRequest;
}

/**
 * 
 */
export class PassthroughApi extends runtime.BaseAPI {

    /**
     * Pull data from an endpoint not currently supported by Merge.
     */
    async passthroughCreateRaw(requestParameters: PassthroughCreateRequest): Promise<runtime.ApiResponse<RemoteResponse | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling passthroughCreate.');
        }

        if (requestParameters.dataPassthroughRequest === null || requestParameters.dataPassthroughRequest === undefined) {
            throw new runtime.RequiredError('dataPassthroughRequest','Required parameter requestParameters.dataPassthroughRequest was null or undefined when calling passthroughCreate.');
        }

        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/filestorage/v1/passthrough`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DataPassthroughRequestToJSON(requestParameters.dataPassthroughRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RemoteResponseFromJSON(jsonValue));
    }

    /**
     * Pull data from an endpoint not currently supported by Merge.
     */
    async passthroughCreate(requestParameters: PassthroughCreateRequest): Promise<RemoteResponse | undefined> {
        const response = await this.passthroughCreateRaw(requestParameters);
        return await response.value();
    }

}
