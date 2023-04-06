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
    Association,
    AssociationFromJSON,
    AssociationToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface CustomObjectClassesCustomObjectsAssociationsListRequest {
    xAccountToken: string;
    customObjectClassId: string;
    objectId: string;
    associationTypeId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: Array<CustomObjectClassesCustomObjectsAssociationsListExpandEnum>;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteId?: string | null;
}

export interface CustomObjectClassesCustomObjectsAssociationsUpdateRequest {
    xAccountToken: string;
    associationTypeId: string;
    sourceClassId: string;
    sourceObjectId: string;
    targetClassId: string;
    targetObjectId: string;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

/**
 * 
 */
export class AssociationsApi extends runtime.BaseAPI {

    /**
     * Returns a list of `Association` objects.
     */
    async customObjectClassesCustomObjectsAssociationsListRaw(requestParameters: CustomObjectClassesCustomObjectsAssociationsListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Association> | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling customObjectClassesCustomObjectsAssociationsList.');
        }

        if (requestParameters.customObjectClassId === null || requestParameters.customObjectClassId === undefined) {
            throw new runtime.RequiredError('customObjectClassId','Required parameter requestParameters.customObjectClassId was null or undefined when calling customObjectClassesCustomObjectsAssociationsList.');
        }

        if (requestParameters.objectId === null || requestParameters.objectId === undefined) {
            throw new runtime.RequiredError('objectId','Required parameter requestParameters.objectId was null or undefined when calling customObjectClassesCustomObjectsAssociationsList.');
        }

        const queryParameters: any = {};

        if (requestParameters.associationTypeId !== undefined) {
            queryParameters['association_type_id'] = requestParameters.associationTypeId;
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

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/custom-object-classes/{custom_object_class_id}/custom-objects/{object_id}/associations`.replace(`{${"custom_object_class_id"}}`, encodeURIComponent(String(requestParameters.customObjectClassId))).replace(`{${"object_id"}}`, encodeURIComponent(String(requestParameters.objectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue, AssociationFromJSON));
    }

    /**
     * Returns a list of `Association` objects.
     */
    async customObjectClassesCustomObjectsAssociationsList(requestParameters: CustomObjectClassesCustomObjectsAssociationsListRequest): Promise<MergePaginatedResponse<Association> | undefined> {
        const response = await this.customObjectClassesCustomObjectsAssociationsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Creates an Association between `source_object_id` and `target_object_id` of type `association_type_id`.
     */
    async customObjectClassesCustomObjectsAssociationsUpdateRaw(requestParameters: CustomObjectClassesCustomObjectsAssociationsUpdateRequest): Promise<runtime.ApiResponse<Association | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling customObjectClassesCustomObjectsAssociationsUpdate.');
        }

        if (requestParameters.associationTypeId === null || requestParameters.associationTypeId === undefined) {
            throw new runtime.RequiredError('associationTypeId','Required parameter requestParameters.associationTypeId was null or undefined when calling customObjectClassesCustomObjectsAssociationsUpdate.');
        }

        if (requestParameters.sourceClassId === null || requestParameters.sourceClassId === undefined) {
            throw new runtime.RequiredError('sourceClassId','Required parameter requestParameters.sourceClassId was null or undefined when calling customObjectClassesCustomObjectsAssociationsUpdate.');
        }

        if (requestParameters.sourceObjectId === null || requestParameters.sourceObjectId === undefined) {
            throw new runtime.RequiredError('sourceObjectId','Required parameter requestParameters.sourceObjectId was null or undefined when calling customObjectClassesCustomObjectsAssociationsUpdate.');
        }

        if (requestParameters.targetClassId === null || requestParameters.targetClassId === undefined) {
            throw new runtime.RequiredError('targetClassId','Required parameter requestParameters.targetClassId was null or undefined when calling customObjectClassesCustomObjectsAssociationsUpdate.');
        }

        if (requestParameters.targetObjectId === null || requestParameters.targetObjectId === undefined) {
            throw new runtime.RequiredError('targetObjectId','Required parameter requestParameters.targetObjectId was null or undefined when calling customObjectClassesCustomObjectsAssociationsUpdate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }


        

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/crm/v1/custom-object-classes/{source_class_id}/custom-objects/{source_object_id}/associations/{target_class_id}/{target_object_id}/{association_type_id}`.replace(`{${"association_type_id"}}`, encodeURIComponent(String(requestParameters.associationTypeId))).replace(`{${"source_class_id"}}`, encodeURIComponent(String(requestParameters.sourceClassId))).replace(`{${"source_object_id"}}`, encodeURIComponent(String(requestParameters.sourceObjectId))).replace(`{${"target_class_id"}}`, encodeURIComponent(String(requestParameters.targetClassId))).replace(`{${"target_object_id"}}`, encodeURIComponent(String(requestParameters.targetObjectId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AssociationFromJSON(jsonValue));
    }

    /**
     * Creates an Association between `source_object_id` and `target_object_id` of type `association_type_id`.
     */
    async customObjectClassesCustomObjectsAssociationsUpdate(requestParameters: CustomObjectClassesCustomObjectsAssociationsUpdateRequest): Promise<Association | undefined> {
        const response = await this.customObjectClassesCustomObjectsAssociationsUpdateRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum CustomObjectClassesCustomObjectsAssociationsListExpandEnum {
    AssociationType = 'association_type'
}
