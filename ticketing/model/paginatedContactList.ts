/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Contact } from './contact';

export class PaginatedContactList {
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Contact>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Contact>"
        }    ];

    static getAttributeTypeMap() {
        return PaginatedContactList.attributeTypeMap;
    }
}

