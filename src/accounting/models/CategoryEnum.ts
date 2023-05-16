/* tslint:disable */
/* eslint-disable */
/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
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
 * * `hris` - hris
 * * `ats` - ats
 * * `accounting` - accounting
 * * `ticketing` - ticketing
 * * `crm` - crm
 * * `mktg` - mktg
 * * `filestorage` - filestorage
 * @export
 * @enum {string}
 */
export enum CategoryEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Hris = 'hris',
    Ats = 'ats',
    Accounting = 'accounting',
    Ticketing = 'ticketing',
    Crm = 'crm',
    Mktg = 'mktg',
    Filestorage = 'filestorage'
}

export interface CategoryEnum {
    value: CategoryEnumValues,
    rawValue: string
}


export function CategoryEnumFromJSON(json: any): CategoryEnum {
    return CategoryEnumFromJSONTyped(json, false);
}

export function CategoryEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryEnum {
    if ((<any>Object).values(CategoryEnumValues).includes(json)) {
        return {
            value: json as CategoryEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: CategoryEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function CategoryEnumToJSON(value?: CategoryEnum | null): JSONValue {
    return value && value.value != CategoryEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

