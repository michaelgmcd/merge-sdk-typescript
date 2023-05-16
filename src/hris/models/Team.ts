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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Team Object
 * ### Description
 * The `Team` object is used to represent a subdivision of the company, usually a department. Each employee will be grouped into one specific Team.
 * 
 * ### Usage Example
 * If you're building a way to filter by `Team`, you'd hit the `GET Teams` endpoint to fetch the `Teams`, and then use the `ID` of the team your user selects to filter the `GET Employees` endpoint.
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Team
     */
    remote_id?: string | null;
    /**
     * The team's name.
     * @type {string}
     * @memberof Team
     */
    name?: string | null;
    /**
     * The team's parent team.
     * @type {string}
     * @memberof Team
     */
    parent_team?: string | JSONValue | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Team
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Team
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Team
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Team
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function TeamFromJSON(json: JSONValue): Team | undefined {
    return TeamFromJSONTyped(json);
}

export function TeamFromJSONTyped(json: JSONValue): Team | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'parent_team': !exists(json, 'parent_team') ? undefined : json['parent_team'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function TeamToJSON(value?: Team): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'parent_team': value.parent_team,
    };
}

