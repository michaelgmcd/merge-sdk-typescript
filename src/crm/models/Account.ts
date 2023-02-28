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
    Address,
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    PhoneNumber,
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
    
    RemoteField,
    RemoteFieldFromJSON,
    RemoteFieldFromJSONTyped,
    RemoteFieldToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Account Object
 * ### Description
 * The `Account` object is used to represent a company in a CRM system.
 * ### Usage Example
 * TODO
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * The account's owner.
     * @type {string}
     * @memberof Account
     */
    owner?: string | JSONValue | null;
    /**
     * The account's name.
     * @type {string}
     * @memberof Account
     */
    name?: string | null;
    /**
     * The account's description.
     * @type {string}
     * @memberof Account
     */
    description?: string | null;
    /**
     * The account's industry.
     * @type {string}
     * @memberof Account
     */
    industry?: string | null;
    /**
     * The account's website.
     * @type {string}
     * @memberof Account
     */
    website?: string | null;
    /**
     * The account's number of employees.
     * @type {number}
     * @memberof Account
     */
    number_of_employees?: number | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof Account
     */
    readonly addresses?: Array<Address>;
    /**
     * 
     * @type {Array<PhoneNumber>}
     * @memberof Account
     */
    readonly phone_numbers?: Array<PhoneNumber>;
    /**
     * The last date (either most recent or furthest in the future) of when an activity occurs in an account.
     * @type {Date}
     * @memberof Account
     */
    last_activity_at?: Date | null;
    /**
     * When the CRM system account data was last modified by a user with a login.
     * @type {Date}
     * @memberof Account
     */
    remote_updated_at?: Date | null;
    /**
     * When the third party's account was created.
     * @type {Date}
     * @memberof Account
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Account
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Account
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Account
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {Array<RemoteField>}
     * @memberof Account
     */
    readonly remote_fields?: Array<RemoteField>;
}

export function AccountFromJSON(json: JSONValue): Account | undefined {
    return AccountFromJSONTyped(json);
}

export function AccountFromJSONTyped(json: JSONValue): Account | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'industry': !exists(json, 'industry') ? undefined : json['industry'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'number_of_employees': !exists(json, 'number_of_employees') ? undefined : json['number_of_employees'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<JSONValue>).map(AddressFromJSON)) as Array<Address>,
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(PhoneNumberFromJSON)) as Array<PhoneNumber>,
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_fields': !exists(json, 'remote_fields') ? undefined : ((json['remote_fields'] as Array<JSONValue>).map(RemoteFieldFromJSON)) as Array<RemoteField>,
    };
}

export function AccountToJSON(value?: Account): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'owner': value.owner,
        'name': value.name,
        'description': value.description,
        'industry': value.industry,
        'website': value.website,
        'number_of_employees': value.number_of_employees,
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_id': value.remote_id,
    };
}

