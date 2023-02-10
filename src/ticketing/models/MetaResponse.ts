/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    LinkedAccountStatus,
    LinkedAccountStatusFromJSON,
    LinkedAccountStatusFromJSONTyped,
    LinkedAccountStatusToJSON,
} from './';


/**
 * 
 * @export
 * @interface MetaResponse
 */
export interface MetaResponse {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof MetaResponse
     */
    request_schema: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof MetaResponse
     */
    remote_field_classes?: { [key: string]: any; };
    /**
     * 
     * @type {LinkedAccountStatus}
     * @memberof MetaResponse
     */
    status?: LinkedAccountStatus;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponse
     */
    has_conditional_params: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MetaResponse
     */
    has_required_linked_account_params: boolean;
}

export function MetaResponseFromJSON(json: JSONValue): MetaResponse | undefined {
    return MetaResponseFromJSONTyped(json);
}

export function MetaResponseFromJSONTyped(json: JSONValue): MetaResponse | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'request_schema': json['request_schema'],
        'remote_field_classes': !exists(json, 'remote_field_classes') ? undefined : json['remote_field_classes'],
        'status': !exists(json, 'status') ? undefined : LinkedAccountStatusFromJSON(json['status']) as LinkedAccountStatus,
        'has_conditional_params': json['has_conditional_params'],
        'has_required_linked_account_params': json['has_required_linked_account_params'],
    };
}

export function MetaResponseToJSON(value?: MetaResponse): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'request_schema': value.request_schema,
        'remote_field_classes': value.remote_field_classes,
        'status': LinkedAccountStatusToJSON(value.status),
        'has_conditional_params': value.has_conditional_params,
        'has_required_linked_account_params': value.has_required_linked_account_params,
    };
}

