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

/**
* # The Task Object ### Description The `Task` object is used to represent a task in the remote system. ### Usage Example TODO
*/
export class TaskRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The task\'s subject.
    */
    'subject'?: string | null;
    /**
    * The task\'s description.
    */
    'description'?: string | null;
    'owner'?: string | null;
    'account'?: string | null;
    'opportunity'?: string | null;
    'contact'?: string | null;
    /**
    * When the task is due.
    */
    'due_date'?: Date | null;
    /**
    * The task\'s status.
    */
    'status'?: string | null;
    'integration_params'?: { [key: string]: any; } | null;
    'linked_account_params'?: { [key: string]: any; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "opportunity",
            "baseName": "opportunity",
            "type": "string"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "string"
        },
        {
            "name": "due_date",
            "baseName": "due_date",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "integration_params",
            "baseName": "integration_params",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "linked_account_params",
            "baseName": "linked_account_params",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return TaskRequest.attributeTypeMap;
    }
}

