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
    CategoryEnum,
    CategoryEnumFromJSON,
    CategoryEnumFromJSONTyped,
    CategoryEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface AccountDetails
 */
export interface AccountDetails {
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly id?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly integration?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly integration_slug?: string;
    /**
     * 
     * @type {CategoryEnum}
     * @memberof AccountDetails
     */
    category?: CategoryEnum | null;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly end_user_origin_id?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly end_user_organization_name?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly end_user_email_address?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly status?: string;
    /**
     * 
     * @type {string}
     * @memberof AccountDetails
     */
    readonly webhook_listener_url?: string;
    /**
     * Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets.
     * @type {boolean}
     * @memberof AccountDetails
     */
    readonly is_duplicate?: boolean | null;
}

export function AccountDetailsFromJSON(json: JSONValue): AccountDetails | undefined {
    return AccountDetailsFromJSONTyped(json);
}

export function AccountDetailsFromJSONTyped(json: JSONValue): AccountDetails | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'integration': !exists(json, 'integration') ? undefined : json['integration'],
        'integration_slug': !exists(json, 'integration_slug') ? undefined : json['integration_slug'],
        'category': !exists(json, 'category') ? undefined : CategoryEnumFromJSON(json['category']) as CategoryEnum,
        'end_user_origin_id': !exists(json, 'end_user_origin_id') ? undefined : json['end_user_origin_id'],
        'end_user_organization_name': !exists(json, 'end_user_organization_name') ? undefined : json['end_user_organization_name'],
        'end_user_email_address': !exists(json, 'end_user_email_address') ? undefined : json['end_user_email_address'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'webhook_listener_url': !exists(json, 'webhook_listener_url') ? undefined : json['webhook_listener_url'],
        'is_duplicate': !exists(json, 'is_duplicate') ? undefined : json['is_duplicate'],
    };
}

export function AccountDetailsToJSON(value?: AccountDetails): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'category': CategoryEnumToJSON(value.category),
    };
}

