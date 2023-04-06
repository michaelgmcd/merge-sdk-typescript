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
    IgnoreCommonModel,
    IgnoreCommonModelFromJSON,
    IgnoreCommonModelToJSON,
    IgnoreCommonModelRequest,
    IgnoreCommonModelRequestFromJSON,
    IgnoreCommonModelRequestToJSON,
    RemoteFieldClass,
    RemoteFieldClassFromJSON,
    
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface UsersIgnoreCreateRequest {
    modelId: string;
    ignoreCommonModelRequest: IgnoreCommonModelRequest;
}

export interface UsersListRequest {
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface UsersRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    pageSize?: number;
}

export interface UsersRetrieveRequest {
    id: string;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     */
    async usersIgnoreCreateRaw(requestParameters: UsersIgnoreCreateRequest): Promise<runtime.ApiResponse<IgnoreCommonModel | undefined>> {
        if (requestParameters.modelId === null || requestParameters.modelId === undefined) {
            throw new runtime.RequiredError('modelId','Required parameter requestParameters.modelId was null or undefined when calling usersIgnoreCreate.');
        }

        if (requestParameters.ignoreCommonModelRequest === null || requestParameters.ignoreCommonModelRequest === undefined) {
            throw new runtime.RequiredError('ignoreCommonModelRequest','Required parameter requestParameters.ignoreCommonModelRequest was null or undefined when calling usersIgnoreCreate.');
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
            path: `/crm/v1/users/ignore/{model_id}`.replace(`{${"model_id"}}`, encodeURIComponent(String(requestParameters.modelId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IgnoreCommonModelRequestToJSON(requestParameters.ignoreCommonModelRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => IgnoreCommonModelFromJSON(jsonValue));
    }

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     */
    async usersIgnoreCreate(requestParameters: UsersIgnoreCreateRequest): Promise<IgnoreCommonModel | undefined> {
        const response = await this.usersIgnoreCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `User` objects.
     */
    async usersListRaw(requestParameters: UsersListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<User> | undefined>> {
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
            path: `/crm/v1/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, UserFromJSON));
    }

    /**
     * Returns a list of `User` objects.
     */
    async usersList(requestParameters: UsersListRequest): Promise<MergePaginatedResponse<User> | undefined> {
        const response = await this.usersListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async usersRemoteFieldClassesListRaw(requestParameters: UsersRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
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
            path: `/crm/v1/users/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, RemoteFieldClassFromJSON));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async usersRemoteFieldClassesList(requestParameters: UsersRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.usersRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `User` object with the given `id`.
     */
    async usersRetrieveRaw(requestParameters: UsersRetrieveRequest): Promise<runtime.ApiResponse<User | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling usersRetrieve.');
        }

        const queryParameters: any = {};

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
            path: `/crm/v1/users/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Returns a `User` object with the given `id`.
     */
    async usersRetrieve(requestParameters: UsersRetrieveRequest): Promise<User | undefined> {
        const response = await this.usersRetrieveRaw(requestParameters);
        return await response.value();
    }

}
