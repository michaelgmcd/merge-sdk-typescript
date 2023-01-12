/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
export enum EthnicityEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    AmericanIndianOrAlaskaNative = 'AMERICAN_INDIAN_OR_ALASKA_NATIVE',
    AsianOrIndianSubcontinent = 'ASIAN_OR_INDIAN_SUBCONTINENT',
    BlackOrAfricanAmerican = 'BLACK_OR_AFRICAN_AMERICAN',
    HispanicOrLatino = 'HISPANIC_OR_LATINO',
    NativeHawaiianOrOtherPacificIslander = 'NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER',
    TwoOrMoreRaces = 'TWO_OR_MORE_RACES',
    White = 'WHITE',
    PreferNotToDisclose = 'PREFER_NOT_TO_DISCLOSE'
}

export interface EthnicityEnum {
    value: EthnicityEnumValues,
    rawValue: string
}


export function EthnicityEnumFromJSON(json: any): EthnicityEnum {
    return EthnicityEnumFromJSONTyped(json, false);
}

export function EthnicityEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): EthnicityEnum {
    if ((<any>Object).values(EthnicityEnumValues).includes(json)) {
        return {
            value: json as EthnicityEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: EthnicityEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function EthnicityEnumToJSON(value?: EthnicityEnum | null): JSONValue {
    return value && value.value != EthnicityEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

