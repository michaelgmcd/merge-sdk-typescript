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
    RoleEnum,
    RoleEnumFromJSON,
    RoleEnumFromJSONTyped,
    RoleEnumToJSON,
} from './';


/**
 * # The User Object
 * ### Description
 * The `User` object is used to represent a user in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/users` endpoint and view their email addresses.
 * @export
 * @interface User
 */
export interface User {
    /**
     * The user's full name.
     * @type {string}
     * @memberof User
     */
    name?: string | null;
    /**
     * The user's username.
     * @type {string}
     * @memberof User
     */
    username?: string | null;
    /**
     * The user's email.
     * @type {string}
     * @memberof User
     */
    email?: string | null;
    /**
     * The user's role.
     * @type {RoleEnum}
     * @memberof User
     */
    role?: RoleEnum | null;
    /**
     * The user's timezone.
     * @type {string}
     * @memberof User
     */
    timezone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof User
     */
    remote_id?: string | null;
}

export function UserFromJSON(json: JSONValue): User | undefined {
    return UserFromJSONTyped(json);
}

export function UserFromJSONTyped(json: JSONValue): User | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'role': !exists(json, 'role') ? undefined : RoleEnumFromJSON(json['role']) as RoleEnum,
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
    };
}

export function UserToJSON(value?: User): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'username': value.username,
        'email': value.email,
        'role': RoleEnumToJSON(value.role),
        'timezone': value.timezone,
        'remote_id': value.remote_id,
    };
}

