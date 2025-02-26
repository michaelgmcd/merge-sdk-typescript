/* tslint:disable */
/* eslint-disable */
/**
 * Merge CRM API
 * The unified API for building rich integrations with multiple CRM platforms.
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
    Engagement,
    EngagementFromJSON,
    EngagementToJSON,
    EngagementEndpointRequest,
    EngagementEndpointRequestFromJSON,
    EngagementEndpointRequestToJSON,
    EngagementResponse,
    EngagementResponseFromJSON,
    EngagementResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    PatchedEngagementEndpointRequest,
    PatchedEngagementEndpointRequestFromJSON,
    PatchedEngagementEndpointRequestToJSON,
    RemoteFieldClassFromJSON,
    RemoteFieldClass,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface EngagementsCreateRequest {
    engagementEndpointRequest: EngagementEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface EngagementsListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<EngagementsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface EngagementsMetaPatchRetrieveRequest extends MergeMetaRequest {
    id: string;
}

// extends MergeMetaRequest
export interface EngagementsPartialUpdateRequest {
    id: string;
    patchedEngagementEndpointRequest: PatchedEngagementEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface EngagementsRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    pageSize?: number;
}

export interface EngagementsRetrieveRequest {
    id: string;
    expand?: Array<EngagementsRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
}

/**
 * 
 */
export class EngagementsApi extends runtime.BaseAPI {

    /**
     * Creates an `Engagement` object with the given values.
     */
    async engagementsCreateRaw(requestParameters: EngagementsCreateRequest): Promise<runtime.ApiResponse<EngagementResponse | undefined>> {
        if (requestParameters.engagementEndpointRequest === null || requestParameters.engagementEndpointRequest === undefined) {
            throw new runtime.RequiredError('engagementEndpointRequest','Required parameter requestParameters.engagementEndpointRequest was null or undefined when calling engagementsCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
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
            path: `/crm/v1/engagements`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EngagementEndpointRequestToJSON(requestParameters.engagementEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EngagementResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Engagement` object with the given values.
     */
    async engagementsCreate(requestParameters: EngagementsCreateRequest): Promise<EngagementResponse | undefined> {
        const response = await this.engagementsCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Engagement` objects.
     */
    async engagementsListRaw(requestParameters: EngagementsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Engagement> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagements`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, EngagementFromJSON));
    }

    /**
     * Returns a list of `Engagement` objects.
     */
    async engagementsList(requestParameters: EngagementsListRequest): Promise<MergePaginatedResponse<Engagement> | undefined> {
        const response = await this.engagementsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Engagement` PATCHs.
     */
    async engagementsMetaPatchRetrieveRaw(requestParameters: EngagementsMetaPatchRetrieveRequest): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling engagementsMetaPatchRetrieve.');
        }

        const queryParameters: any = {};


        if (requestParameters !== undefined) {
            Object.keys(requestParameters.misc_params_query).forEach((key) => {
                if (requestParameters.misc_params_query[key] !== undefined) {
                    queryParameters[key] = requestParameters.misc_params_query[key];
                }
            })
        }
        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagements/meta/patch/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Engagement` PATCHs.
     */
    async engagementsMetaPatchRetrieve(requestParameters: EngagementsMetaPatchRetrieveRequest): Promise<MetaResponse | undefined> {
        const response = await this.engagementsMetaPatchRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Engagement` POSTs.
     */
    async engagementsMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};


        if (requestParameters !== undefined) {
            Object.keys(requestParameters.misc_params_query).forEach((key) => {
                if (requestParameters.misc_params_query[key] !== undefined) {
                    queryParameters[key] = requestParameters.misc_params_query[key];
                }
            })
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagements/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Engagement` POSTs.
     */
    async engagementsMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.engagementsMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Updates an `Engagement` object with the given `id`.
     */
    async engagementsPartialUpdateRaw(requestParameters: EngagementsPartialUpdateRequest): Promise<runtime.ApiResponse<EngagementResponse | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling engagementsPartialUpdate.');
        }

        if (requestParameters.patchedEngagementEndpointRequest === null || requestParameters.patchedEngagementEndpointRequest === undefined) {
            throw new runtime.RequiredError('patchedEngagementEndpointRequest','Required parameter requestParameters.patchedEngagementEndpointRequest was null or undefined when calling engagementsPartialUpdate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
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
            path: `/crm/v1/engagements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedEngagementEndpointRequestToJSON(requestParameters.patchedEngagementEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EngagementResponseFromJSON(jsonValue));
    }

    /**
     * Updates an `Engagement` object with the given `id`.
     */
    async engagementsPartialUpdate(requestParameters: EngagementsPartialUpdateRequest): Promise<EngagementResponse | undefined> {
        const response = await this.engagementsPartialUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async engagementsRemoteFieldClassesListRaw(requestParameters: EngagementsRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
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
            path: `/crm/v1/engagements/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, RemoteFieldClassFromJSON));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async engagementsRemoteFieldClassesList(requestParameters: EngagementsRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.engagementsRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Engagement` object with the given `id`.
     */
    async engagementsRetrieveRaw(requestParameters: EngagementsRetrieveRequest): Promise<runtime.ApiResponse<Engagement | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling engagementsRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.includeRemoteFields !== undefined) {
            queryParameters['include_remote_fields'] = requestParameters.includeRemoteFields;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/engagements/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EngagementFromJSON(jsonValue));
    }

    /**
     * Returns an `Engagement` object with the given `id`.
     */
    async engagementsRetrieve(requestParameters: EngagementsRetrieveRequest): Promise<Engagement | undefined> {
        const response = await this.engagementsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum EngagementsListExpandEnum {
    Account = 'account',
    Contacts = 'contacts',
    EngagementType = 'engagement_type',
    Owner = 'owner'
}
/**
* @export
* @enum {string}
*/
export enum EngagementsRetrieveExpandEnum {
    Account = 'account',
    Contacts = 'contacts',
    EngagementType = 'engagement_type',
    Owner = 'owner'
}
