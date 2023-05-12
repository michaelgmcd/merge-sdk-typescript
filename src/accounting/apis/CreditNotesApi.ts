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
    CreditNote,
    CreditNoteFromJSON,
    CreditNoteToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface CreditNotesListRequest {
    xAccountToken: string;
    companyId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<CreditNotesListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: CreditNotesListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: CreditNotesListShowEnumOriginsEnum;
    transactionDateAfter?: Date | null;
    transactionDateBefore?: Date | null;
}

export interface CreditNotesRetrieveRequest {
    xAccountToken: string;
    id: string;
    expand?: Array<CreditNotesRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: CreditNotesRetrieveRemoteFieldsEnum;
    showEnumOrigins?: CreditNotesRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class CreditNotesApi extends runtime.BaseAPI {

    /**
     * Returns a list of `CreditNote` objects.
     */
    async creditNotesListRaw(requestParameters: CreditNotesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<CreditNote> | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling creditNotesList.');
        }

        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
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

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }

        if (requestParameters.transactionDateAfter !== undefined) {
            queryParameters['transaction_date_after'] = (requestParameters.transactionDateAfter as any).toISOString();
        }

        if (requestParameters.transactionDateBefore !== undefined) {
            queryParameters['transaction_date_before'] = (requestParameters.transactionDateBefore as any).toISOString();
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/credit-notes`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, CreditNoteFromJSON));
    }

    /**
     * Returns a list of `CreditNote` objects.
     */
    async creditNotesList(requestParameters: CreditNotesListRequest): Promise<MergePaginatedResponse<CreditNote> | undefined> {
        const response = await this.creditNotesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `CreditNote` object with the given `id`.
     */
    async creditNotesRetrieveRaw(requestParameters: CreditNotesRetrieveRequest): Promise<runtime.ApiResponse<CreditNote | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling creditNotesRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling creditNotesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.showEnumOrigins !== undefined) {
            queryParameters['show_enum_origins'] = requestParameters.showEnumOrigins;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/credit-notes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CreditNoteFromJSON(jsonValue));
    }

    /**
     * Returns a `CreditNote` object with the given `id`.
     */
    async creditNotesRetrieve(requestParameters: CreditNotesRetrieveRequest): Promise<CreditNote | undefined> {
        const response = await this.creditNotesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum CreditNotesListExpandEnum {
    LineItems = 'line_items',
    Payments = 'payments',
    TrackingCategories = 'tracking_categories'
}
/**
* @export
* @enum {string}
*/
export enum CreditNotesListRemoteFieldsEnum {
    Status = 'status',
    Statustype = 'status,type',
    Type = 'type'
}
/**
* @export
* @enum {string}
*/
export enum CreditNotesListShowEnumOriginsEnum {
    Status = 'status',
    Statustype = 'status,type',
    Type = 'type'
}
/**
* @export
* @enum {string}
*/
export enum CreditNotesRetrieveExpandEnum {
    LineItems = 'line_items',
    Payments = 'payments',
    TrackingCategories = 'tracking_categories'
}
/**
* @export
* @enum {string}
*/
export enum CreditNotesRetrieveRemoteFieldsEnum {
    Status = 'status',
    Statustype = 'status,type',
    Type = 'type'
}
/**
* @export
* @enum {string}
*/
export enum CreditNotesRetrieveShowEnumOriginsEnum {
    Status = 'status',
    Statustype = 'status,type',
    Type = 'type'
}
