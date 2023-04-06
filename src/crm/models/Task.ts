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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    
    RemoteField,
    RemoteFieldFromJSON,
    RemoteFieldFromJSONTyped,
    RemoteFieldToJSON,
    TaskStatusEnum,
    TaskStatusEnumFromJSON,
    TaskStatusEnumFromJSONTyped,
    TaskStatusEnumToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Task Object
 * ### Description
 * The `Task` object is used to represent a task, such as a to-do item.
 * ### Usage Example
 * TODO
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * The task's subject.
     * @type {string}
     * @memberof Task
     */
    subject?: string | null;
    /**
     * The task's content.
     * @type {string}
     * @memberof Task
     */
    content?: string | null;
    /**
     * The task's owner.
     * @type {string}
     * @memberof Task
     */
    owner?: string | JSONValue | null;
    /**
     * The task's account.
     * @type {string}
     * @memberof Task
     */
    account?: string | JSONValue | null;
    /**
     * When the task is completed.
     * @type {Date}
     * @memberof Task
     */
    completed_date?: Date | null;
    /**
     * When the task is due.
     * @type {Date}
     * @memberof Task
     */
    due_date?: Date | null;
    /**
     * The task's status.
     * 
     * * `OPEN` - OPEN
     * * `CLOSED` - CLOSED
     * @type {TaskStatusEnum}
     * @memberof Task
     */
    status?: TaskStatusEnum | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Task
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Task
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Task
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Task
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Task
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {Array<RemoteField>}
     * @memberof Task
     */
    readonly remote_fields?: Array<RemoteField>;
}

export function TaskFromJSON(json: JSONValue): Task | undefined {
    return TaskFromJSONTyped(json);
}

export function TaskFromJSONTyped(json: JSONValue): Task | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'completed_date': !exists(json, 'completed_date') ? undefined : (json['completed_date'] === null ? null : new Date(json['completed_date'])),
        'due_date': !exists(json, 'due_date') ? undefined : (json['due_date'] === null ? null : new Date(json['due_date'])),
        'status': !exists(json, 'status') ? undefined : TaskStatusEnumFromJSON(json['status']) as TaskStatusEnum,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_fields': !exists(json, 'remote_fields') ? undefined : ((json['remote_fields'] as Array<JSONValue>).map(RemoteFieldFromJSON)) as Array<RemoteField>,
    };
}

export function TaskToJSON(value?: Task): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'subject': value.subject,
        'content': value.content,
        'owner': value.owner,
        'account': value.account,
        'completed_date': value.completed_date === undefined ? undefined : (value.completed_date === null ? null : value.completed_date.toISOString()),
        'due_date': value.due_date === undefined ? undefined : (value.due_date === null ? null : value.due_date.toISOString()),
        'status': TaskStatusEnumToJSON(value.status),
        'remote_id': value.remote_id,
    };
}

