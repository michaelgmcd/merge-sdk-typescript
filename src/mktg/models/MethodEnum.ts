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
 * * `GET` - GET
 * * `OPTIONS` - OPTIONS
 * * `HEAD` - HEAD
 * * `POST` - POST
 * * `PUT` - PUT
 * * `PATCH` - PATCH
 * * `DELETE` - DELETE
 * @export
 * @enum {string}
 */
export enum MethodEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Get = 'GET',
    Options = 'OPTIONS',
    Head = 'HEAD',
    Post = 'POST',
    Put = 'PUT',
    Patch = 'PATCH',
    Delete = 'DELETE'
}

export interface MethodEnum {
    value: MethodEnumValues,
    rawValue: string
}


export function MethodEnumFromJSON(json: any): MethodEnum {
    return MethodEnumFromJSONTyped(json, false);
}

export function MethodEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MethodEnum {
    if ((<any>Object).values(MethodEnumValues).includes(json)) {
        return {
            value: json as MethodEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: MethodEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function MethodEnumToJSON(value?: MethodEnum | null): JSONValue {
    return value && value.value != MethodEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

