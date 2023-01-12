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
export enum ResponseTypeEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Json = 'JSON',
    Base64Gzip = 'BASE64_GZIP'
}

export interface ResponseTypeEnum {
    value: ResponseTypeEnumValues,
    rawValue: string
}


export function ResponseTypeEnumFromJSON(json: any): ResponseTypeEnum {
    return ResponseTypeEnumFromJSONTyped(json, false);
}

export function ResponseTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseTypeEnum {
    if ((<any>Object).values(ResponseTypeEnumValues).includes(json)) {
        return {
            value: json as ResponseTypeEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: ResponseTypeEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function ResponseTypeEnumToJSON(value?: ResponseTypeEnum | null): JSONValue {
    return value && value.value != ResponseTypeEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

