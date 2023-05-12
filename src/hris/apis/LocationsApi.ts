/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
    Location,
    LocationFromJSON,
    LocationToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface LocationsListRequest {
    xAccountToken: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: LocationsListRemoteFieldsEnum;
    remoteId?: string | null;
    showEnumOrigins?: LocationsListShowEnumOriginsEnum;
}

export interface LocationsRetrieveRequest {
    xAccountToken: string;
    id: string;
    includeRemoteData?: boolean;
    remoteFields?: LocationsRetrieveRemoteFieldsEnum;
    showEnumOrigins?: LocationsRetrieveShowEnumOriginsEnum;
}

/**
 * 
 */
export class LocationsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Location` objects.
     */
    async locationsListRaw(requestParameters: LocationsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Location> | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling locationsList.');
        }

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
            path: `/hris/v1/locations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, LocationFromJSON));
    }

    /**
     * Returns a list of `Location` objects.
     */
    async locationsList(requestParameters: LocationsListRequest): Promise<MergePaginatedResponse<Location> | undefined> {
        const response = await this.locationsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a `Location` object with the given `id`.
     */
    async locationsRetrieveRaw(requestParameters: LocationsRetrieveRequest): Promise<runtime.ApiResponse<Location | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling locationsRetrieve.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling locationsRetrieve.');
        }

        const queryParameters: any = {};

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
            path: `/hris/v1/locations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationFromJSON(jsonValue));
    }

    /**
     * Returns a `Location` object with the given `id`.
     */
    async locationsRetrieve(requestParameters: LocationsRetrieveRequest): Promise<Location | undefined> {
        const response = await this.locationsRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum LocationsListRemoteFieldsEnum {
    LocationType = 'location_type'
}
/**
* @export
* @enum {string}
*/
export enum LocationsListShowEnumOriginsEnum {
    LocationType = 'location_type'
}
/**
* @export
* @enum {string}
*/
export enum LocationsRetrieveRemoteFieldsEnum {
    LocationType = 'location_type'
}
/**
* @export
* @enum {string}
*/
export enum LocationsRetrieveShowEnumOriginsEnum {
    LocationType = 'location_type'
}
