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
 * * `GENERAL_CUSTOMER_REQUEST` - GENERAL_CUSTOMER_REQUEST
 * * `GDPR` - GDPR
 * * `OTHER` - OTHER
 * @export
 * @enum {string}
 */
export enum ReasonEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    GeneralCustomerRequest = 'GENERAL_CUSTOMER_REQUEST',
    Gdpr = 'GDPR',
    Other = 'OTHER'
}

export interface ReasonEnum {
    value: ReasonEnumValues,
    rawValue: string
}


export function ReasonEnumFromJSON(json: any): ReasonEnum {
    return ReasonEnumFromJSONTyped(json, false);
}

export function ReasonEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReasonEnum {
    if ((<any>Object).values(ReasonEnumValues).includes(json)) {
        return {
            value: json as ReasonEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: ReasonEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function ReasonEnumToJSON(value?: ReasonEnum | null): JSONValue {
    return value && value.value != ReasonEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

