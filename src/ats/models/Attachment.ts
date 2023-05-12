/* tslint:disable */
/* eslint-disable */
/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
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
    AttachmentTypeEnum,
    AttachmentTypeEnumFromJSON,
    AttachmentTypeEnumFromJSONTyped,
    AttachmentTypeEnumToJSON,
    
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
 * The `Attachment` object is used to represent a file attached to a candidate.
 * ### Usage Example
 * Fetch from the `LIST Attachments` endpoint and view attachments accessible by a company.
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
     * The attachment's url.
     * @type {string}
     * @memberof Attachment
     */
    file_url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attachment
     */
    candidate?: string | null;
    /**
     * The attachment's type.
     * 
     * * `RESUME` - RESUME
     * * `COVER_LETTER` - COVER_LETTER
     * * `OFFER_LETTER` - OFFER_LETTER
     * * `OTHER` - OTHER
     * @type {AttachmentTypeEnum}
     * @memberof Attachment
     */
    attachment_type?: AttachmentTypeEnum | null;
    /**
     * 
     * @type {boolean}
     * @memberof Attachment
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Attachment
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Attachment
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Attachment
     */
    readonly remote_data?: Array<RemoteData> | null;
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
        'file_url': !exists(json, 'file_url') ? undefined : json['file_url'],
        'candidate': !exists(json, 'candidate') ? undefined : json['candidate'],
        'attachment_type': !exists(json, 'attachment_type') ? undefined : AttachmentTypeEnumFromJSON(json['attachment_type']) as AttachmentTypeEnum,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function AttachmentToJSON(value?: Attachment): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'file_name': value.file_name,
        'file_url': value.file_url,
        'candidate': value.candidate,
        'attachment_type': AttachmentTypeEnumToJSON(value.attachment_type),
    };
}

