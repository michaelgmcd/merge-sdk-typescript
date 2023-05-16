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

/**
 * # The PhoneNumber Object
 * ### Description
 * The `PhoneNumber` object is used to represent an entity's phone number.
 * ### Usage Example
 * Fetch from the `GET Contact` endpoint and view their phone numbers.
 * @export
 * @interface PhoneNumber
 */
export interface PhoneNumber {
    /**
     * The phone number.
     * @type {string}
     * @memberof PhoneNumber
     */
    phone_number?: string | null;
    /**
     * The phone number's type.
     * @type {string}
     * @memberof PhoneNumber
     */
    phone_number_type?: string | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof PhoneNumber
     */
    readonly modified_at?: Date;
}

export function PhoneNumberFromJSON(json: JSONValue): PhoneNumber | undefined {
    return PhoneNumberFromJSONTyped(json);
}

export function PhoneNumberFromJSONTyped(json: JSONValue): PhoneNumber | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'phone_number': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'phone_number_type': !exists(json, 'phone_number_type') ? undefined : json['phone_number_type'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
    };
}

export function PhoneNumberToJSON(value?: PhoneNumber): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'phone_number': value.phone_number,
        'phone_number_type': value.phone_number_type,
    };
}

