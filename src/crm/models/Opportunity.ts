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
    OpportunityStatusEnum,
    OpportunityStatusEnumFromJSON,
    OpportunityStatusEnumFromJSONTyped,
    OpportunityStatusEnumToJSON,
    
    RemoteField,
    RemoteFieldFromJSON,
    RemoteFieldFromJSONTyped,
    RemoteFieldToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Opportunity Object
 * ### Description
 * The `Opportunity` object is used to represent a deal opportunity in a CRM system.
 * ### Usage Example
 * TODO
 * @export
 * @interface Opportunity
 */
export interface Opportunity {
    /**
     * The opportunity's name.
     * @type {string}
     * @memberof Opportunity
     */
    name?: string | null;
    /**
     * The opportunity's description.
     * @type {string}
     * @memberof Opportunity
     */
    description?: string | null;
    /**
     * The opportunity's amount.
     * @type {number}
     * @memberof Opportunity
     */
    amount?: number | null;
    /**
     * The opportunity's owner.
     * @type {string}
     * @memberof Opportunity
     */
    owner?: string | JSONValue | null;
    /**
     * The account of the opportunity.
     * @type {string}
     * @memberof Opportunity
     */
    account?: string | JSONValue | null;
    /**
     * The stage of the opportunity.
     * @type {string}
     * @memberof Opportunity
     */
    stage?: string | JSONValue | null;
    /**
     * The opportunity's status.
     * 
     * * `OPEN` - OPEN
     * * `WON` - WON
     * * `LOST` - LOST
     * @type {OpportunityStatusEnum}
     * @memberof Opportunity
     */
    status?: OpportunityStatusEnum | null;
    /**
     * When the opportunity's last activity occurred.
     * @type {Date}
     * @memberof Opportunity
     */
    last_activity_at?: Date | null;
    /**
     * When the opportunity was closed.
     * @type {Date}
     * @memberof Opportunity
     */
    close_date?: Date | null;
    /**
     * When the third party's opportunity was created.
     * @type {Date}
     * @memberof Opportunity
     */
    remote_created_at?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof Opportunity
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Opportunity
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Opportunity
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Opportunity
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Opportunity
     */
    readonly remote_data?: Array<RemoteData> | null;
    /**
     * 
     * @type {Array<RemoteField>}
     * @memberof Opportunity
     */
    readonly remote_fields?: Array<RemoteField>;
}

export function OpportunityFromJSON(json: JSONValue): Opportunity | undefined {
    return OpportunityFromJSONTyped(json);
}

export function OpportunityFromJSONTyped(json: JSONValue): Opportunity | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'status': !exists(json, 'status') ? undefined : OpportunityStatusEnumFromJSON(json['status']) as OpportunityStatusEnum,
        'last_activity_at': !exists(json, 'last_activity_at') ? undefined : (json['last_activity_at'] === null ? null : new Date(json['last_activity_at'])),
        'close_date': !exists(json, 'close_date') ? undefined : (json['close_date'] === null ? null : new Date(json['close_date'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
        'remote_fields': !exists(json, 'remote_fields') ? undefined : ((json['remote_fields'] as Array<JSONValue>).map(RemoteFieldFromJSON)) as Array<RemoteField>,
    };
}

export function OpportunityToJSON(value?: Opportunity): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'description': value.description,
        'amount': value.amount,
        'owner': value.owner,
        'account': value.account,
        'stage': value.stage,
        'status': OpportunityStatusEnumToJSON(value.status),
        'last_activity_at': value.last_activity_at === undefined ? undefined : (value.last_activity_at === null ? null : value.last_activity_at.toISOString()),
        'close_date': value.close_date === undefined ? undefined : (value.close_date === null ? null : value.close_date.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'remote_id': value.remote_id,
    };
}

