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
export enum MarketingEmailStatusEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    Draft = 'DRAFT',
    Queued = 'QUEUED',
    Sent = 'SENT'
}

export interface MarketingEmailStatusEnum {
    value: MarketingEmailStatusEnumValues,
    rawValue: string
}


export function MarketingEmailStatusEnumFromJSON(json: any): MarketingEmailStatusEnum {
    return MarketingEmailStatusEnumFromJSONTyped(json, false);
}

export function MarketingEmailStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingEmailStatusEnum {
    if ((<any>Object).values(MarketingEmailStatusEnumValues).includes(json)) {
        return {
            value: json as MarketingEmailStatusEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: MarketingEmailStatusEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function MarketingEmailStatusEnumToJSON(value?: MarketingEmailStatusEnum | null): JSONValue {
    return value && value.value != MarketingEmailStatusEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

