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
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    Note,
    NoteFromJSON,
    NoteToJSON,
    NoteEndpointRequest,
    NoteEndpointRequestFromJSON,
    NoteEndpointRequestToJSON,
    NoteResponse,
    NoteResponseFromJSON,
    NoteResponseToJSON,
    RemoteFieldClass,
    RemoteFieldClassFromJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface NotesCreateRequest {
    noteEndpointRequest: NoteEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface NotesListRequest {
    accountId?: string;
    contactId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<NotesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    opportunityId?: string;
    ownerId?: string;
    pageSize?: number;
    remoteId?: string | null;
}

// extends MergeMetaRequest
export interface NotesRemoteFieldClassesListRequest {
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
    pageSize?: number;
}

export interface NotesRetrieveRequest {
    id: string;
    expand?: Array<NotesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    includeRemoteFields?: boolean;
}

/**
 * 
 */
export class NotesApi extends runtime.BaseAPI {

    /**
     * Creates a `Note` object with the given values.
     */
    async notesCreateRaw(requestParameters: NotesCreateRequest): Promise<runtime.ApiResponse<NoteResponse | undefined>> {
        if (requestParameters.noteEndpointRequest === null || requestParameters.noteEndpointRequest === undefined) {
            throw new runtime.RequiredError('noteEndpointRequest','Required parameter requestParameters.noteEndpointRequest was null or undefined when calling notesCreate.');
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
            path: `/crm/v1/notes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NoteEndpointRequestToJSON(requestParameters.noteEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteResponseFromJSON(jsonValue));
    }

    /**
     * Creates a `Note` object with the given values.
     */
    async notesCreate(requestParameters: NotesCreateRequest): Promise<NoteResponse | undefined> {
        const response = await this.notesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Note` objects.
     */
    async notesListRaw(requestParameters: NotesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Note> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.contactId !== undefined) {
            queryParameters['contact_id'] = requestParameters.contactId;
        }

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

        if (requestParameters.opportunityId !== undefined) {
            queryParameters['opportunity_id'] = requestParameters.opportunityId;
        }

        if (requestParameters.ownerId !== undefined) {
            queryParameters['owner_id'] = requestParameters.ownerId;
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
            path: `/crm/v1/notes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, NoteFromJSON));
    }

    /**
     * Returns a list of `Note` objects.
     */
    async notesList(requestParameters: NotesListRequest): Promise<MergePaginatedResponse<Note> | undefined> {
        const response = await this.notesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Note` POSTs.
     */
    async notesMetaPostRetrieveRaw(requestParameters: MergeMetaRequest | undefined = undefined): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
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
            path: `/crm/v1/notes/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Note` POSTs.
     */
    async notesMetaPostRetrieve(requestParameters: MergeMetaRequest | undefined = undefined): Promise<MetaResponse | undefined> {
        const response = await this.notesMetaPostRetrieveRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async notesRemoteFieldClassesListRaw(requestParameters: NotesRemoteFieldClassesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<RemoteFieldClass> | undefined>> {
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
            path: `/crm/v1/notes/remote-field-classes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, RemoteFieldClassFromJSON));
    }

    /**
     * Returns a list of `RemoteFieldClass` objects.
     */
    async notesRemoteFieldClassesList(requestParameters: NotesRemoteFieldClassesListRequest): Promise<MergePaginatedResponse<RemoteFieldClass> | undefined> {
        const response = await this.notesRemoteFieldClassesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Note` object with the given `id`.
     */
    async notesRetrieveRaw(requestParameters: NotesRetrieveRequest): Promise<runtime.ApiResponse<Note | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling notesRetrieve.');
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
            path: `/crm/v1/notes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NoteFromJSON(jsonValue));
    }

    /**
     * Returns a `Note` object with the given `id`.
     */
    async notesRetrieve(requestParameters: NotesRetrieveRequest): Promise<Note | undefined> {
        const response = await this.notesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum NotesListExpandEnum {
    Account = 'account',
    Contact = 'contact',
    Opportunity = 'opportunity',
    Owner = 'owner'
}
/**
* @export
* @enum {string}
*/
export enum NotesRetrieveExpandEnum {
    Account = 'account',
    Contact = 'contact',
    Opportunity = 'opportunity',
    Owner = 'owner'
}
