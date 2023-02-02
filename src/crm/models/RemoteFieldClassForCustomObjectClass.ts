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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    ItemFormatEnum,
    ItemFormatEnumFromJSON,
    ItemFormatEnumFromJSONTyped,
    ItemFormatEnumToJSON,
    ItemTypeEnum,
    ItemTypeEnumFromJSON,
    ItemTypeEnumFromJSONTyped,
    ItemTypeEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface RemoteFieldClassForCustomObjectClass
 */
export interface RemoteFieldClassForCustomObjectClass {
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    display_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    remote_key_name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    description?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    is_required?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    is_nested_list?: boolean;
    /**
     * 
     * @type {ItemTypeEnum}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    item_type?: ItemTypeEnum | null;
    /**
     * 
     * @type {ItemFormatEnum}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    item_format?: ItemFormatEnum | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof RemoteFieldClassForCustomObjectClass
     */
    item_choices?: Array<string> | null;
}

export function RemoteFieldClassForCustomObjectClassFromJSON(json: JSONValue): RemoteFieldClassForCustomObjectClass | undefined {
    return RemoteFieldClassForCustomObjectClassFromJSONTyped(json);
}

export function RemoteFieldClassForCustomObjectClassFromJSONTyped(json: JSONValue): RemoteFieldClassForCustomObjectClass | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'display_name': !exists(json, 'display_name') ? undefined : json['display_name'],
        'remote_key_name': !exists(json, 'remote_key_name') ? undefined : json['remote_key_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'is_required': !exists(json, 'is_required') ? undefined : json['is_required'],
        'is_nested_list': !exists(json, 'is_nested_list') ? undefined : json['is_nested_list'],
        'item_type': !exists(json, 'item_type') ? undefined : ItemTypeEnumFromJSON(json['item_type']) as ItemTypeEnum,
        'item_format': !exists(json, 'item_format') ? undefined : ItemFormatEnumFromJSON(json['item_format']) as ItemFormatEnum,
        'item_choices': !exists(json, 'item_choices') ? undefined : json['item_choices'],
    };
}

export function RemoteFieldClassForCustomObjectClassToJSON(value?: RemoteFieldClassForCustomObjectClass): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'display_name': value.display_name,
        'remote_key_name': value.remote_key_name,
        'description': value.description,
        'is_required': value.is_required,
        'is_nested_list': value.is_nested_list,
        'item_type': ItemTypeEnumToJSON(value.item_type),
        'item_format': ItemFormatEnumToJSON(value.item_format),
        'item_choices': value.item_choices,
    };
}

