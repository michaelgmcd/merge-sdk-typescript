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
    EmailAddress,
    EmailAddressFromJSON,
    EmailAddressFromJSONTyped,
    EmailAddressToJSON,
    PhoneNumber,
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
    
    Url,
    UrlFromJSON,
    UrlFromJSONTyped,
    UrlToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Candidate Object
 * ### Description
 * The `Candidate` object is used to represent a Candidate for various positions.
 * ### Usage Example
 * Fetch from the `LIST Candidates` endpoint and filter by `ID` to show all candidates.
 * @export
 * @interface Candidate
 */
export interface Candidate {
    /**
     * 
     * @type {string}
     * @memberof Candidate
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Candidate
     */
    remote_id?: string | null;
    /**
     * The candidate's first name.
     * @type {string}
     * @memberof Candidate
     */
    first_name?: string | null;
    /**
     * The candidate's last name.
     * @type {string}
     * @memberof Candidate
     */
    last_name?: string | null;
    /**
     * The candidate's current company.
     * @type {string}
     * @memberof Candidate
     */
    company?: string | null;
    /**
     * The candidate's current title.
     * @type {string}
     * @memberof Candidate
     */
    title?: string | null;
    /**
     * When the third party's candidate was created.
     * @type {Date}
     * @memberof Candidate
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's candidate was updated.
     * @type {Date}
     * @memberof Candidate
     */
    remote_updated_at?: Date | null;
    /**
     * When the most recent candidate interaction occurred.
     * @type {Date}
     * @memberof Candidate
     */
    last_interaction_at?: Date | null;
    /**
     * Whether or not the candidate is private.
     * @type {boolean}
     * @memberof Candidate
     */
    is_private?: boolean | null;
    /**
     * Whether or not the candidate can be emailed.
     * @type {boolean}
     * @memberof Candidate
     */
    can_email?: boolean | null;
    /**
     * The candidate's locations.
     * @type {Array<string>}
     * @memberof Candidate
     */
    locations?: Array<string> | null;
    /**
     * 
     * @type {Array<PhoneNumber>}
     * @memberof Candidate
     */
    phone_numbers?: Array<PhoneNumber>;
    /**
     * 
     * @type {Array<EmailAddress>}
     * @memberof Candidate
     */
    email_addresses?: Array<EmailAddress>;
    /**
     * 
     * @type {Array<Url>}
     * @memberof Candidate
     */
    urls?: Array<Url>;
    /**
     * Array of `Tag` names as strings.
     * @type {Array<string>}
     * @memberof Candidate
     */
    tags?: Array<string>;
    /**
     * Array of `Application` object IDs.
     * @type {Array<string>}
     * @memberof Candidate
     */
    applications?: Array<string> | JSONValue;
    /**
     * Array of `Attachment` object IDs.
     * @type {Array<string>}
     * @memberof Candidate
     */
    attachments?: Array<string> | JSONValue;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Candidate
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Candidate
     */
    readonly remote_was_deleted?: boolean;
}

export function CandidateFromJSON(json: JSONValue): Candidate | undefined {
    return CandidateFromJSONTyped(json);
}

export function CandidateFromJSONTyped(json: JSONValue): Candidate | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'last_interaction_at': !exists(json, 'last_interaction_at') ? undefined : (json['last_interaction_at'] === null ? null : new Date(json['last_interaction_at'])),
        'is_private': !exists(json, 'is_private') ? undefined : json['is_private'],
        'can_email': !exists(json, 'can_email') ? undefined : json['can_email'],
        'locations': !exists(json, 'locations') ? undefined : json['locations'],
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(PhoneNumberFromJSON)) as Array<PhoneNumber>,
        'email_addresses': !exists(json, 'email_addresses') ? undefined : ((json['email_addresses'] as Array<JSONValue>).map(EmailAddressFromJSON)) as Array<EmailAddress>,
        'urls': !exists(json, 'urls') ? undefined : ((json['urls'] as Array<JSONValue>).map(UrlFromJSON)) as Array<Url>,
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'applications': !exists(json, 'applications') ? undefined : json['applications'],
        'attachments': !exists(json, 'attachments') ? undefined : json['attachments'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
    };
}

export function CandidateToJSON(value?: Candidate): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'company': value.company,
        'title': value.title,
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'last_interaction_at': value.last_interaction_at === undefined ? undefined : (value.last_interaction_at === null ? null : value.last_interaction_at.toISOString()),
        'is_private': value.is_private,
        'can_email': value.can_email,
        'locations': value.locations,
        'phone_numbers': value.phone_numbers === undefined ? undefined : ((value.phone_numbers as Array<any>).map(PhoneNumberToJSON)),
        'email_addresses': value.email_addresses === undefined ? undefined : ((value.email_addresses as Array<any>).map(EmailAddressToJSON)),
        'urls': value.urls === undefined ? undefined : ((value.urls as Array<any>).map(UrlToJSON)),
        'tags': value.tags,
        'applications': value.applications,
        'attachments': value.attachments,
    };
}

