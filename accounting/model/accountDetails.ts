/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Category3d0Enum } from './category3d0Enum';

export class AccountDetails {
    'id'?: string;
    'integration'?: string;
    'integration_slug'?: string;
    'category'?: Category3d0Enum | null;
    'end_user_origin_id'?: string;
    'end_user_organization_name'?: string;
    'end_user_email_address'?: string;
    'status'?: string;
    'webhook_listener_url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "string"
        },
        {
            "name": "integration_slug",
            "baseName": "integration_slug",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Category3d0Enum"
        },
        {
            "name": "end_user_origin_id",
            "baseName": "end_user_origin_id",
            "type": "string"
        },
        {
            "name": "end_user_organization_name",
            "baseName": "end_user_organization_name",
            "type": "string"
        },
        {
            "name": "end_user_email_address",
            "baseName": "end_user_email_address",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "webhook_listener_url",
            "baseName": "webhook_listener_url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountDetails.attributeTypeMap;
    }
}

