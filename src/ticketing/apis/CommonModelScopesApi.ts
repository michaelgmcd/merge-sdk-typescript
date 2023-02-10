/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    CommonModelScopes,
    CommonModelScopesFromJSON,
    CommonModelScopesToJSON,
    CommonModelScopesUpdateSerializer,
    CommonModelScopesUpdateSerializerFromJSON,
    CommonModelScopesUpdateSerializerToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface CommonModelScopesCreateRequest {
    commonModelScopesUpdateSerializer: CommonModelScopesUpdateSerializer;
    linkedAccountId?: string;
}

export interface CommonModelScopesRetrieveRequest {
    linkedAccountId?: string;
}

/**
 * 
 */
export class CommonModelScopesApi extends runtime.BaseAPI {

    /**
     * Update the configuration of what data is saved by Merge when syncing. Common model scopes are set as a default across all linked accounts, but can be updated to have greater granularity per account.
     */
    async commonModelScopesCreateRaw(requestParameters: CommonModelScopesCreateRequest): Promise<runtime.ApiResponse<CommonModelScopes | undefined>> {
        if (requestParameters.commonModelScopesUpdateSerializer === null || requestParameters.commonModelScopesUpdateSerializer === undefined) {
            throw new runtime.RequiredError('commonModelScopesUpdateSerializer','Required parameter requestParameters.commonModelScopesUpdateSerializer was null or undefined when calling commonModelScopesCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.linkedAccountId !== undefined) {
            queryParameters['linked_account_id'] = requestParameters.linkedAccountId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/common-model-scopes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CommonModelScopesUpdateSerializerToJSON(requestParameters.commonModelScopesUpdateSerializer),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonModelScopesFromJSON(jsonValue));
    }

    /**
     * Update the configuration of what data is saved by Merge when syncing. Common model scopes are set as a default across all linked accounts, but can be updated to have greater granularity per account.
     */
    async commonModelScopesCreate(requestParameters: CommonModelScopesCreateRequest): Promise<CommonModelScopes | undefined> {
        const response = await this.commonModelScopesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Fetch the configuration of what data is saved by Merge when syncing. Common model scopes are set as a default across all linked accounts, but can be updated to have greater granularity per account.
     */
    async commonModelScopesRetrieveRaw(requestParameters: CommonModelScopesRetrieveRequest): Promise<runtime.ApiResponse<CommonModelScopes | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.linkedAccountId !== undefined) {
            queryParameters['linked_account_id'] = requestParameters.linkedAccountId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ticketing/v1/common-model-scopes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommonModelScopesFromJSON(jsonValue));
    }

    /**
     * Fetch the configuration of what data is saved by Merge when syncing. Common model scopes are set as a default across all linked accounts, but can be updated to have greater granularity per account.
     */
    async commonModelScopesRetrieve(requestParameters: CommonModelScopesRetrieveRequest): Promise<CommonModelScopes | undefined> {
        const response = await this.commonModelScopesRetrieveRaw(requestParameters);
        return await response.value();
    }

}
