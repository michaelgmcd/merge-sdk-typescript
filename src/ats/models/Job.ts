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
    JobStatusEnum,
    JobStatusEnumFromJSON,
    JobStatusEnumFromJSONTyped,
    JobStatusEnumToJSON,
    
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
 * # The Job Object
 * ### Description
 * The `Job` object can be used to track any jobs that are currently or will be open/closed for applications.
 * ### Usage Example
 * Fetch from the `LIST Jobs` endpoint to show all job postings.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Job
     */
    remote_id?: string | null;
    /**
     * The job's name.
     * @type {string}
     * @memberof Job
     */
    name?: string | null;
    /**
     * The job's description.
     * @type {string}
     * @memberof Job
     */
    description?: string | null;
    /**
     * The job's code. Typically an additional identifier used to reference the particular job that is displayed on the ATS.
     * @type {string}
     * @memberof Job
     */
    code?: string | null;
    /**
     * The job's status.
     * @type {JobStatusEnum}
     * @memberof Job
     */
    status?: JobStatusEnum | null;
    /**
     * 
     * @type {Array<Url>}
     * @memberof Job
     */
    job_posting_urls?: Array<Url>;
    /**
     * When the third party's job was created.
     * @type {Date}
     * @memberof Job
     */
    remote_created_at?: Date | null;
    /**
     * When the third party's job was updated.
     * @type {Date}
     * @memberof Job
     */
    remote_updated_at?: Date | null;
    /**
     * Whether the job is confidential.
     * @type {boolean}
     * @memberof Job
     */
    confidential?: boolean | null;
    /**
     * IDs of `Department` objects for this `Job`.
     * @type {Array<string>}
     * @memberof Job
     */
    departments?: Array<string> | JSONValue;
    /**
     * IDs of `Office` objects for this `Job`.
     * @type {Array<string>}
     * @memberof Job
     */
    offices?: Array<string> | JSONValue;
    /**
     * IDs of `RemoteUser` objects that serve as hiring managers for this `Job`.
     * @type {Array<string>}
     * @memberof Job
     */
    hiring_managers?: Array<string> | JSONValue;
    /**
     * IDs of `RemoteUser` objects that serve as recruiters for this `Job`.
     * @type {Array<string>}
     * @memberof Job
     */
    recruiters?: Array<string> | JSONValue;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Job
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Job
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Job
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function JobFromJSON(json: JSONValue): Job | undefined {
    return JobFromJSONTyped(json);
}

export function JobFromJSONTyped(json: JSONValue): Job | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'status': !exists(json, 'status') ? undefined : JobStatusEnumFromJSON(json['status']) as JobStatusEnum,
        'job_posting_urls': !exists(json, 'job_posting_urls') ? undefined : ((json['job_posting_urls'] as Array<JSONValue>).map(UrlFromJSON)) as Array<Url>,
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'confidential': !exists(json, 'confidential') ? undefined : json['confidential'],
        'departments': !exists(json, 'departments') ? undefined : json['departments'],
        'offices': !exists(json, 'offices') ? undefined : json['offices'],
        'hiring_managers': !exists(json, 'hiring_managers') ? undefined : json['hiring_managers'],
        'recruiters': !exists(json, 'recruiters') ? undefined : json['recruiters'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function JobToJSON(value?: Job): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'description': value.description,
        'code': value.code,
        'status': JobStatusEnumToJSON(value.status),
        'job_posting_urls': value.job_posting_urls === undefined ? undefined : ((value.job_posting_urls as Array<any>).map(UrlToJSON)),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'confidential': value.confidential,
        'departments': value.departments,
        'offices': value.offices,
        'hiring_managers': value.hiring_managers,
        'recruiters': value.recruiters,
    };
}

