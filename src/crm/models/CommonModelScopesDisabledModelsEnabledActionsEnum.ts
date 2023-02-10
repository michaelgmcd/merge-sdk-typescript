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

import { JSONValue } from "../../merge_json";

/**
 * 
 * @export
 * @enum {string}
 */
export enum CommonModelScopesDisabledModelsEnabledActionsEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Read = 'ENABLED_ACTION_READ',
    Write = 'ENABLED_ACTION_WRITE'
}

export interface CommonModelScopesDisabledModelsEnabledActionsEnum {
    value: CommonModelScopesDisabledModelsEnabledActionsEnumValues,
    rawValue: string
}


export function CommonModelScopesDisabledModelsEnabledActionsEnumFromJSON(json: any): CommonModelScopesDisabledModelsEnabledActionsEnum {
    return CommonModelScopesDisabledModelsEnabledActionsEnumFromJSONTyped(json, false);
}

export function CommonModelScopesDisabledModelsEnabledActionsEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommonModelScopesDisabledModelsEnabledActionsEnum {
    if ((<any>Object).values(CommonModelScopesDisabledModelsEnabledActionsEnumValues).includes(json)) {
        return {
            value: json as CommonModelScopesDisabledModelsEnabledActionsEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: CommonModelScopesDisabledModelsEnabledActionsEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function CommonModelScopesDisabledModelsEnabledActionsEnumToJSON(value?: CommonModelScopesDisabledModelsEnabledActionsEnum | null): JSONValue {
    return value && value.value != CommonModelScopesDisabledModelsEnabledActionsEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

