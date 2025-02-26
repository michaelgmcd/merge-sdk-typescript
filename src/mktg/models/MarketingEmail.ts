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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    MarketingEmailStatusEnum,
    MarketingEmailStatusEnumFromJSON,
    MarketingEmailStatusEnumFromJSONTyped,
    MarketingEmailStatusEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Marketing Email Object
 * ### Description
 * The `MarketingEmail` object is used to represent a marketing email in the remote system.
 * ### Usage Example
 * Fetch from the `GET /api/mktg/v1/emails` endpoint and view their html_body properties.
 * @export
 * @interface MarketingEmail
 */
export interface MarketingEmail {
    /**
     * The marketing email's name.
     * @type {string}
     * @memberof MarketingEmail
     */
    name?: string | null;
    /**
     * The marketing email's subject.
     * @type {string}
     * @memberof MarketingEmail
     */
    subject?: string | null;
    /**
     * The marketing email's body.
     * @type {string}
     * @memberof MarketingEmail
     */
    body?: string | null;
    /**
     * The marketing email's html body.
     * @type {string}
     * @memberof MarketingEmail
     */
    html_body?: string | null;
    /**
     * The marketing email's from name.
     * @type {string}
     * @memberof MarketingEmail
     */
    from_name?: string | null;
    /**
     * The marketing email's from email.
     * @type {string}
     * @memberof MarketingEmail
     */
    from_email?: string | null;
    /**
     * The marketing email's preview.
     * @type {string}
     * @memberof MarketingEmail
     */
    preview?: string | null;
    /**
     * The marketing email's reply-to.
     * @type {string}
     * @memberof MarketingEmail
     */
    reply_to?: string | null;
    /**
     * When the marketing email was created in the remote system.
     * @type {Date}
     * @memberof MarketingEmail
     */
    remote_created_at?: Date | null;
    /**
     * When the marketing email was last updated in the remote system.
     * @type {Date}
     * @memberof MarketingEmail
     */
    remote_updated_at?: Date | null;
    /**
     * The marketing email's status.
     * 
     * * `DRAFT` - DRAFT
     * * `QUEUED` - QUEUED
     * * `SENT` - SENT
     * @type {MarketingEmailStatusEnum}
     * @memberof MarketingEmail
     */
    status?: MarketingEmailStatusEnum | null;
    /**
     * When the marketing email was sent.
     * @type {Date}
     * @memberof MarketingEmail
     */
    send_date?: Date | null;
    /**
     * The marketing email's template.
     * @type {string}
     * @memberof MarketingEmail
     */
    template?: string | null;
    /**
     * The campaigns receiving this marketing email.
     * @type {Array<string>}
     * @memberof MarketingEmail
     */
    campaigns: Array<string>;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof MarketingEmail
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MarketingEmail
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof MarketingEmail
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof MarketingEmail
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof MarketingEmail
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof MarketingEmail
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function MarketingEmailFromJSON(json: JSONValue): MarketingEmail | undefined {
    return MarketingEmailFromJSONTyped(json);
}

export function MarketingEmailFromJSONTyped(json: JSONValue): MarketingEmail | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'html_body': !exists(json, 'html_body') ? undefined : json['html_body'],
        'from_name': !exists(json, 'from_name') ? undefined : json['from_name'],
        'from_email': !exists(json, 'from_email') ? undefined : json['from_email'],
        'preview': !exists(json, 'preview') ? undefined : json['preview'],
        'reply_to': !exists(json, 'reply_to') ? undefined : json['reply_to'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'status': !exists(json, 'status') ? undefined : MarketingEmailStatusEnumFromJSON(json['status']) as MarketingEmailStatusEnum,
        'send_date': !exists(json, 'send_date') ? undefined : (json['send_date'] === null ? null : new Date(json['send_date'])),
        'template': !exists(json, 'template') ? undefined : json['template'],
        'campaigns': json['campaigns'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function MarketingEmailToJSON(value?: MarketingEmail): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'subject': value.subject,
        'body': value.body,
        'html_body': value.html_body,
        'from_name': value.from_name,
        'from_email': value.from_email,
        'preview': value.preview,
        'reply_to': value.reply_to,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'status': MarketingEmailStatusEnumToJSON(value.status),
        'send_date': value.send_date === undefined ? undefined : (value.send_date === null ? null : value.send_date.toISOString()),
        'template': value.template,
        'campaigns': value.campaigns,
        'remote_id': value.remote_id,
    };
}

