/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Attachment Object
 * ### Description
 * The `Attachment` object is used to represent an attachment for a ticket.
 * 
 * ### Usage Example
 * TODO
 * @export
 * @interface Attachment
 */
export interface Attachment {
    /**
     * 
     * @type {string}
     * @memberof Attachment
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Attachment
     */
    remote_id?: string | null;
    /**
     * The attachment's name.
     * @type {string}
     * @memberof Attachment
     */
    file_name?: string | null;
    /**
     * The ticket associated with the attachment.
     * @type {string}
     * @memberof Attachment
     */
    ticket?: string | JSONValue | null;
    /**
     * The attachment's url.
     * @type {string}
     * @memberof Attachment
     */
    file_url?: string | null;
    /**
     * The attachment's file format.
     * @type {string}
     * @memberof Attachment
     */
    content_type?: string | null;
    /**
     * The user who uploaded the attachment.
     * @type {string}
     * @memberof Attachment
     */
    uploaded_by?: string | null;
    /**
     * When the third party's attachment was created.
     * @type {Date}
     * @memberof Attachment
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Attachment
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Attachment
     */
    readonly remote_was_deleted?: boolean;
}

export function AttachmentFromJSON(json: JSONValue): Attachment | undefined {
    return AttachmentFromJSONTyped(json);
}

export function AttachmentFromJSONTyped(json: JSONValue): Attachment | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'file_name': !exists(json, 'file_name') ? undefined : json['file_name'],
        'ticket': !exists(json, 'ticket') ? undefined : json['ticket'],
        'file_url': !exists(json, 'file_url') ? undefined : json['file_url'],
        'content_type': !exists(json, 'content_type') ? undefined : json['content_type'],
        'uploaded_by': !exists(json, 'uploaded_by') ? undefined : json['uploaded_by'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function AttachmentToJSON(value?: Attachment): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'file_name': value.file_name,
        'ticket': value.ticket,
        'file_url': value.file_url,
        'content_type': value.content_type,
        'uploaded_by': value.uploaded_by,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
    };
}

