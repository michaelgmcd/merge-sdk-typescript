/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
    LinkedAccountSelectiveSyncConfiguration,
    LinkedAccountSelectiveSyncConfigurationFromJSON,
    LinkedAccountSelectiveSyncConfigurationToJSON,
    LinkedAccountSelectiveSyncConfigurationListRequest,
    LinkedAccountSelectiveSyncConfigurationListRequestFromJSON,
    LinkedAccountSelectiveSyncConfigurationListRequestToJSON,
    ConditionSchemaFromJSON,
    ConditionSchema,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

//
export interface SelectiveSyncConfigurationsUpdateRequest {
    linkedAccountSelectiveSyncConfigurationListRequest: LinkedAccountSelectiveSyncConfigurationListRequest;
}

export interface SelectiveSyncMetaListRequest {
    commonModel?: string;
    cursor?: string;
    pageSize?: number;
}

/**
 * 
 */
export class SelectiveSyncApi extends runtime.BaseAPI {

    /**
     * Get a linked account\'s selective syncs.
     */
    async selectiveSyncConfigurationsListRaw(): Promise<runtime.ApiResponse<Array<LinkedAccountSelectiveSyncConfiguration> | undefined>> {
        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/selective-sync/configurations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LinkedAccountSelectiveSyncConfigurationFromJSON));
    }

    /**
     * Get a linked account\'s selective syncs.
     */
    async selectiveSyncConfigurationsList(): Promise<Array<LinkedAccountSelectiveSyncConfiguration> | undefined> {
        const response = await this.selectiveSyncConfigurationsListRaw();
        return await response.value();
    }

    /**
     * Replace a linked account\'s selective syncs.
     */
    async selectiveSyncConfigurationsUpdateRaw(requestParameters: SelectiveSyncConfigurationsUpdateRequest): Promise<runtime.ApiResponse<Array<LinkedAccountSelectiveSyncConfiguration> | undefined>> {
        if (requestParameters.linkedAccountSelectiveSyncConfigurationListRequest === null || requestParameters.linkedAccountSelectiveSyncConfigurationListRequest === undefined) {
            throw new runtime.RequiredError('linkedAccountSelectiveSyncConfigurationListRequest','Required parameter requestParameters.linkedAccountSelectiveSyncConfigurationListRequest was null or undefined when calling selectiveSyncConfigurationsUpdate.');
        }

        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/selective-sync/configurations`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: LinkedAccountSelectiveSyncConfigurationListRequestToJSON(requestParameters.linkedAccountSelectiveSyncConfigurationListRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LinkedAccountSelectiveSyncConfigurationFromJSON));
    }

    /**
     * Replace a linked account\'s selective syncs.
     */
    async selectiveSyncConfigurationsUpdate(requestParameters: SelectiveSyncConfigurationsUpdateRequest): Promise<Array<LinkedAccountSelectiveSyncConfiguration> | undefined> {
        const response = await this.selectiveSyncConfigurationsUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get metadata for the conditions available to a linked account.
     */
    async selectiveSyncMetaListRaw(requestParameters: SelectiveSyncMetaListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<ConditionSchema> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.commonModel !== undefined) {
            queryParameters['common_model'] = requestParameters.commonModel;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/selective-sync/meta`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, ConditionSchemaFromJSON));
    }

    /**
     * Get metadata for the conditions available to a linked account.
     */
    async selectiveSyncMetaList(requestParameters: SelectiveSyncMetaListRequest): Promise<MergePaginatedResponse<ConditionSchema> | undefined> {
        const response = await this.selectiveSyncMetaListRaw(requestParameters);
        return await response.value();
    }

}
