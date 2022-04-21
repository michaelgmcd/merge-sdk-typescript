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

import { RequestFile } from './models';
import { AccountIntegration } from './accountIntegration';

export class AccountToken {
    'account_token': string;
    'integration': AccountIntegration;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account_token",
            "baseName": "account_token",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "AccountIntegration"
        }    ];

    static getAttributeTypeMap() {
        return AccountToken.attributeTypeMap;
    }
}

