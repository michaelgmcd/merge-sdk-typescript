/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    Offer,
    OfferFromJSON,
    OfferToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface OffersListRequest {
    xAccountToken: string;
    applicationId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    creatorId?: string;
    cursor?: string;
    expand?: Array<OffersListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: OffersListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: OffersListShowEnumOriginsEnum;
}

export interface OffersRetrieveRequest {
    xAccountToken: string;
    id: string;
    expand?: Array<OffersRetrieveExpandEnum>;
    includeRemoteData?: boolean;
    remoteFields?: OffersRetrieveRemoteFieldsEnum;
    showEnumOrigins?: OffersRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class OffersApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Offer` objects.
     */
    async offersListRaw(requestParameters: OffersListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Offer> | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling offersList.');
        }

        const queryParameters: any = {};

        if (requestParameters.applicationId !== undefined) {
            queryParameters['application_id'] = requestParameters.applicationId;
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.creatorId !== undefined) {
            queryParameters['creator_id'] = requestParameters.creatorId;
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


        

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/ats/v1/offers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, OfferFromJSON));
    }

    /**
     * Returns a list of `Offer` objects.
     */
    async offersList(requestParameters: OffersListRequest): Promise<MergePaginatedResponse<Offer> | undefined> {
        const response = await this.offersListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns an `Offer` object with the given `id`.
     */
    async offersRetrieveRaw(requestParameters: OffersRetrieveRequest): Promise<runtime.ApiResponse<Offer | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling offersRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling offersRetrieve.');
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
            path: `/ats/v1/offers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OfferFromJSON(jsonValue));
    }

    /**
     * Returns an `Offer` object with the given `id`.
     */
    async offersRetrieve(requestParameters: OffersRetrieveRequest): Promise<Offer | undefined> {
        const response = await this.offersRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum OffersListExpandEnum {
    Application = 'application',
    Creator = 'creator'
}
/**
* @export
* @enum {string}
*/
export enum OffersListRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum OffersListShowEnumOriginsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum OffersRetrieveExpandEnum {
    Application = 'application',
    Creator = 'creator'
}
/**
* @export
* @enum {string}
*/
export enum OffersRetrieveRemoteFieldsEnum {
    Status = 'status'
}
/**
* @export
* @enum {string}
*/
export enum OffersRetrieveShowEnumOriginsEnum {
    Status = 'status'
}
