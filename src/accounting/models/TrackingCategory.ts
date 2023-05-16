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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    CategoryTypeEnum,
    CategoryTypeEnumFromJSON,
    CategoryTypeEnumFromJSONTyped,
    CategoryTypeEnumToJSON,
    
    Status7d1Enum,
    Status7d1EnumFromJSON,
    Status7d1EnumFromJSONTyped,
    Status7d1EnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The TrackingCategory Object
 * ### Description
 * The `TrackingCategory` object is used to represent a company's tracking categories.
 * 
 * ### Usage Example
 * Fetch from the `GET TrackingCategory` endpoint and view a company's tracking category.
 * @export
 * @interface TrackingCategory
 */
export interface TrackingCategory {
    /**
     * The tracking category's name.
     * @type {string}
     * @memberof TrackingCategory
     */
    name?: string | null;
    /**
     * The tracking category's status.
     * 
     * * `ACTIVE` - ACTIVE
     * * `ARCHIVED` - ARCHIVED
     * @type {Status7d1Enum}
     * @memberof TrackingCategory
     */
    status?: Status7d1Enum | null;
    /**
     * The tracking category’s type.
     * 
     * * `CLASS` - CLASS
     * * `DEPARTMENT` - DEPARTMENT
     * @type {CategoryTypeEnum}
     * @memberof TrackingCategory
     */
    category_type?: CategoryTypeEnum | null;
    /**
     * ID of the parent tracking category.
     * @type {string}
     * @memberof TrackingCategory
     */
    parent_category?: string | null;
    /**
     * The company the tracking category belongs to.
     * @type {string}
     * @memberof TrackingCategory
     */
    company?: string | JSONValue | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof TrackingCategory
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TrackingCategory
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof TrackingCategory
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TrackingCategory
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof TrackingCategory
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof TrackingCategory
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function TrackingCategoryFromJSON(json: JSONValue): TrackingCategory | undefined {
    return TrackingCategoryFromJSONTyped(json);
}

export function TrackingCategoryFromJSONTyped(json: JSONValue): TrackingCategory | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'status': !exists(json, 'status') ? undefined : Status7d1EnumFromJSON(json['status']) as Status7d1Enum,
        'category_type': !exists(json, 'category_type') ? undefined : CategoryTypeEnumFromJSON(json['category_type']) as CategoryTypeEnum,
        'parent_category': !exists(json, 'parent_category') ? undefined : json['parent_category'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function TrackingCategoryToJSON(value?: TrackingCategory): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'status': Status7d1EnumToJSON(value.status),
        'category_type': CategoryTypeEnumToJSON(value.category_type),
        'parent_category': value.parent_category,
        'company': value.company,
        'remote_id': value.remote_id,
    };
}

