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
 * 
 * @export
 * @interface OperatorSchema
 */
export interface OperatorSchema {
    /**
     * The operator for which an operator schema is defined.
     * @type {string}
     * @memberof OperatorSchema
     */
    readonly operator?: string;
    /**
     * Whether the operator can be repeated multiple times.
     * @type {boolean}
     * @memberof OperatorSchema
     */
    readonly is_unique?: boolean;
}

export function OperatorSchemaFromJSON(json: JSONValue): OperatorSchema | undefined {
    return OperatorSchemaFromJSONTyped(json);
}

export function OperatorSchemaFromJSONTyped(json: JSONValue): OperatorSchema | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'is_unique': !exists(json, 'is_unique') ? undefined : json['is_unique'],
    };
}

export function OperatorSchemaToJSON(value?: OperatorSchema): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
    };
}

