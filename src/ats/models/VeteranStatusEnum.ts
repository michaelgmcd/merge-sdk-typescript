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

import { JSONValue } from "../../merge_json";

/**
 * * `I_AM_NOT_A_PROTECTED_VETERAN` - I_AM_NOT_A_PROTECTED_VETERAN
 * * `I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN` - I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN
 * * `I_DONT_WISH_TO_ANSWER` - I_DONT_WISH_TO_ANSWER
 * @export
 * @enum {string}
 */
export enum VeteranStatusEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    AmNotAProtectedVeteran = 'I_AM_NOT_A_PROTECTED_VETERAN',
    IdentifyAsOneOrMoreOfTheClassificationsOfAProtectedVeteran = 'I_IDENTIFY_AS_ONE_OR_MORE_OF_THE_CLASSIFICATIONS_OF_A_PROTECTED_VETERAN',
    DontWishToAnswer = 'I_DONT_WISH_TO_ANSWER'
}

export interface VeteranStatusEnum {
    value: VeteranStatusEnumValues,
    rawValue: string
}


export function VeteranStatusEnumFromJSON(json: any): VeteranStatusEnum {
    return VeteranStatusEnumFromJSONTyped(json, false);
}

export function VeteranStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): VeteranStatusEnum {
    if ((<any>Object).values(VeteranStatusEnumValues).includes(json)) {
        return {
            value: json as VeteranStatusEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: VeteranStatusEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function VeteranStatusEnumToJSON(value?: VeteranStatusEnum | null): JSONValue {
    return value && value.value != VeteranStatusEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

