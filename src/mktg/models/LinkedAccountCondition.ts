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

/**
 * 
 * @export
 * @interface LinkedAccountCondition
 */
export interface LinkedAccountCondition {
    /**
     * The ID indicating which condition schema to use for a specific condition.
     * @type {string}
     * @memberof LinkedAccountCondition
     */
    condition_schema_id: string;
    /**
     * The common model for a specific condition.
     * @type {string}
     * @memberof LinkedAccountCondition
     */
    readonly common_model?: string;
    /**
     * User-facing *native condition* name. e.g. "Skip Manager".
     * @type {string}
     * @memberof LinkedAccountCondition
     */
    native_name: string | null;
    /**
     * The operator for a specific condition.
     * @type {string}
     * @memberof LinkedAccountCondition
     */
    operator: string;
    /**
     * The value for a condition.
     * @type {any}
     * @memberof LinkedAccountCondition
     */
    readonly value?: any | null;
    /**
     * The name of the field on the common model that this condition corresponds to, if they conceptually match. e.g. "location_type".
     * @type {string}
     * @memberof LinkedAccountCondition
     */
    field_name: string | null;
}

export function LinkedAccountConditionFromJSON(json: JSONValue): LinkedAccountCondition | undefined {
    return LinkedAccountConditionFromJSONTyped(json);
}

export function LinkedAccountConditionFromJSONTyped(json: JSONValue): LinkedAccountCondition | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'condition_schema_id': json['condition_schema_id'],
        'common_model': !exists(json, 'common_model') ? undefined : json['common_model'],
        'native_name': json['native_name'],
        'operator': json['operator'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'field_name': json['field_name'],
    };
}

export function LinkedAccountConditionToJSON(value?: LinkedAccountCondition): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'condition_schema_id': value.condition_schema_id,
        'native_name': value.native_name,
        'operator': value.operator,
        'field_name': value.field_name,
    };
}

