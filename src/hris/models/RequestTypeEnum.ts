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
export enum RequestTypeEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Vacation = 'VACATION',
    Sick = 'SICK',
    Personal = 'PERSONAL',
    JuryDuty = 'JURY_DUTY',
    Volunteer = 'VOLUNTEER',
    Bereavement = 'BEREAVEMENT'
}

export interface RequestTypeEnum {
    value: RequestTypeEnumValues,
    rawValue: string
}


export function RequestTypeEnumFromJSON(json: any): RequestTypeEnum {
    return RequestTypeEnumFromJSONTyped(json, false);
}

export function RequestTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestTypeEnum {
    if ((<any>Object).values(RequestTypeEnumValues).includes(json)) {
        return {
            value: json as RequestTypeEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: RequestTypeEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function RequestTypeEnumToJSON(value?: RequestTypeEnum | null): JSONValue {
    return value && value.value != RequestTypeEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

