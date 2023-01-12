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
export enum CardinalityEnumValues {
    MERGE_NONSTANDARD_VALUE = 'MERGE_NONSTANDARD_VALUE',
    OneToOne = 'ONE_TO_ONE',
    ManyToOne = 'MANY_TO_ONE',
    ManyToMany = 'MANY_TO_MANY',
    OneToMany = 'ONE_TO_MANY'
}

export interface CardinalityEnum {
    value: CardinalityEnumValues,
    rawValue: string
}


export function CardinalityEnumFromJSON(json: any): CardinalityEnum {
    return CardinalityEnumFromJSONTyped(json, false);
}

export function CardinalityEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardinalityEnum {
    if ((<any>Object).values(CardinalityEnumValues).includes(json)) {
        return {
            value: json as CardinalityEnumValues,
            rawValue: json as string
        }
    }
    return {
        value: CardinalityEnumValues.MERGE_NONSTANDARD_VALUE,
        rawValue: json as string
    }
}

export function CardinalityEnumToJSON(value?: CardinalityEnum | null): JSONValue {
    return value && value.value != CardinalityEnumValues.MERGE_NONSTANDARD_VALUE ? value.value as string : null;
}

