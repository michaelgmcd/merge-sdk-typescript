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

import { JSONValue } from "../../merge_json";

/**
 * 
 * @export
 * @enum {string}
 */
export enum CategoriesEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Hris = 'hris',
    Ats = 'ats',
    Accounting = 'accounting',
    Ticketing = 'ticketing',
    Crm = 'crm',
    Mktg = 'mktg'
}

export interface CategoriesEnum {
    value: CategoriesEnumValues,
    rawValue: string
}


export function CategoriesEnumFromJSON(json: any): CategoriesEnum {
    return CategoriesEnumFromJSONTyped(json, false);
}

export function CategoriesEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoriesEnum {
    if ((<any>Object).values(CategoriesEnumValues).includes(json)) {
        return {
            value: json as CategoriesEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: CategoriesEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function CategoriesEnumToJSON(value?: CategoriesEnum | null): JSONValue {
    return value && value.value != CategoriesEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

