/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    PhoneNumberTypeEnum,
    PhoneNumberTypeEnumFromJSON,
    PhoneNumberTypeEnumFromJSONTyped,
    PhoneNumberTypeEnumToJSON,
} from './';


/**
 * # The PhoneNumber Object
 * ### Description
 * The `PhoneNumber` object is used to represent a candidate's phone number.
 * ### Usage Example
 * Fetch from the `GET Candidate` endpoint and view their phone numbers.
 * @export
 * @interface PhoneNumberRequest
 */
export interface PhoneNumberRequest {
    /**
     * The phone number.
     * @type {string}
     * @memberof PhoneNumberRequest
     */
    value?: string | null;
    /**
     * The type of phone number.
     * 
     * * `HOME` - HOME
     * * `WORK` - WORK
     * * `MOBILE` - MOBILE
     * * `SKYPE` - SKYPE
     * * `OTHER` - OTHER
     * @type {PhoneNumberTypeEnum}
     * @memberof PhoneNumberRequest
     */
    phone_number_type?: PhoneNumberTypeEnum | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PhoneNumberRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PhoneNumberRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function PhoneNumberRequestFromJSON(json: JSONValue): PhoneNumberRequest | undefined {
    return PhoneNumberRequestFromJSONTyped(json);
}

export function PhoneNumberRequestFromJSONTyped(json: JSONValue): PhoneNumberRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'phone_number_type': !exists(json, 'phone_number_type') ? undefined : PhoneNumberTypeEnumFromJSON(json['phone_number_type']) as PhoneNumberTypeEnum,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function PhoneNumberRequestToJSON(value?: PhoneNumberRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'value': value.value,
        'phone_number_type': PhoneNumberTypeEnumToJSON(value.phone_number_type),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

