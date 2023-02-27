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
    CommonModelScopesDisabledModelsEnabledActionsEnum,
    CommonModelScopesDisabledModelsEnabledActionsEnumFromJSON,
    CommonModelScopesDisabledModelsEnabledActionsEnumFromJSONTyped,
    CommonModelScopesDisabledModelsEnabledActionsEnumToJSON,
} from './';


/**
 * 
 * @export
 * @interface CommonModelScopesDisabledModels
 */
export interface CommonModelScopesDisabledModels {
    /**
     * 
     * @type {string}
     * @memberof CommonModelScopesDisabledModels
     */
    model_name: string;
    /**
     * 
     * @type {string}
     * @memberof CommonModelScopesDisabledModels
     */
    model_id: string;
    /**
     * 
     * @type {Array<CommonModelScopesDisabledModelsEnabledActionsEnum>}
     * @memberof CommonModelScopesDisabledModels
     */
    enabled_actions: Array<CommonModelScopesDisabledModelsEnabledActionsEnum>;
    /**
     * 
     * @type {boolean}
     * @memberof CommonModelScopesDisabledModels
     */
    is_disabled: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CommonModelScopesDisabledModels
     */
    disabled_fields: Array<string>;
}

export function CommonModelScopesDisabledModelsFromJSON(json: JSONValue): CommonModelScopesDisabledModels | undefined {
    return CommonModelScopesDisabledModelsFromJSONTyped(json);
}

export function CommonModelScopesDisabledModelsFromJSONTyped(json: JSONValue): CommonModelScopesDisabledModels | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'model_name': json['model_name'],
        'model_id': json['model_id'],
        'enabled_actions': ((json['enabled_actions'] as Array<JSONValue>).map(CommonModelScopesDisabledModelsEnabledActionsEnumFromJSON)) as Array<CommonModelScopesDisabledModelsEnabledActionsEnum>,
        'is_disabled': json['is_disabled'],
        'disabled_fields': json['disabled_fields'],
    };
}

export function CommonModelScopesDisabledModelsToJSON(value?: CommonModelScopesDisabledModels): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'model_name': value.model_name,
        'model_id': value.model_id,
        'enabled_actions': ((value.enabled_actions as Array<any>).map(CommonModelScopesDisabledModelsEnabledActionsEnumToJSON)),
        'is_disabled': value.is_disabled,
        'disabled_fields': value.disabled_fields,
    };
}

