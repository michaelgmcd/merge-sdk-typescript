/* tslint:disable */
/* eslint-disable */
/**
 * Merge Marketing Automation API
 * The unified API for building rich integrations with multiple Marketing Automation platforms.
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
    
    TypeEnum,
    TypeEnumFromJSON,
    TypeEnumFromJSONTyped,
    TypeEnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Template Object
 * ### Description
 * The `Template` object is used to represent a template for a marketing asset in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/templates` endpoint and view their content properties.
 * @export
 * @interface Template
 */
export interface Template {
    /**
     * The template's name.
     * @type {string}
     * @memberof Template
     */
    name?: string | null;
    /**
     * The template's type.
     * 
     * * `EMAIL` - EMAIL
     * * `MESSAGE` - MESSAGE
     * @type {TypeEnum}
     * @memberof Template
     */
    type?: TypeEnum | null;
    /**
     * The template contents.
     * @type {string}
     * @memberof Template
     */
    contents?: string | null;
    /**
     * The template's owner.
     * @type {string}
     * @memberof Template
     */
    owner?: string | null;
    /**
     * When the template was created in the remote system.
     * @type {Date}
     * @memberof Template
     */
    remote_created_at?: Date | null;
    /**
     * When the template was last updated in the remote system.
     * @type {Date}
     * @memberof Template
     */
    remote_updated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Template
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Template
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Template
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Template
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Template
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Template
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function TemplateFromJSON(json: JSONValue): Template | undefined {
    return TemplateFromJSONTyped(json);
}

export function TemplateFromJSONTyped(json: JSONValue): Template | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : TypeEnumFromJSON(json['type']) as TypeEnum,
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function TemplateToJSON(value?: Template): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'type': TypeEnumToJSON(value.type),
        'contents': value.contents,
        'owner': value.owner,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'remote_id': value.remote_id,
    };
}

