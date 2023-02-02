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

/**
 * # The Lead Object
 * ### Description
 * The `Lead` object is used to represent an individual who is a potential customer.
 * ### Usage Example
 * TODO
 * @export
 * @interface LeadRequest
 */
export interface LeadRequest {
    /**
     * The lead's owner.
     * @type {string}
     * @memberof LeadRequest
     */
    owner?: string | JSONValue | null;
    /**
     * The lead's source.
     * @type {string}
     * @memberof LeadRequest
     */
    lead_source?: string | null;
    /**
     * The lead's title.
     * @type {string}
     * @memberof LeadRequest
     */
    title?: string | null;
    /**
     * The lead's company.
     * @type {string}
     * @memberof LeadRequest
     */
    company?: string | null;
    /**
     * The lead's first name.
     * @type {string}
     * @memberof LeadRequest
     */
    first_name?: string | null;
    /**
     * The lead's last name.
     * @type {string}
     * @memberof LeadRequest
     */
    last_name?: string | null;
    /**
     * When the lead was converted.
     * @type {Date}
     * @memberof LeadRequest
     */
    converted_date?: Date | null;
    /**
     * The contact of the converted lead.
     * @type {string}
     * @memberof LeadRequest
     */
    converted_contact?: string | JSONValue | null;
    /**
     * The account of the converted lead.
     * @type {string}
     * @memberof LeadRequest
     */
    converted_account?: string | JSONValue | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LeadRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LeadRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function LeadRequestFromJSON(json: JSONValue): LeadRequest | undefined {
    return LeadRequestFromJSONTyped(json);
}

export function LeadRequestFromJSONTyped(json: JSONValue): LeadRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'lead_source': !exists(json, 'lead_source') ? undefined : json['lead_source'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'converted_date': !exists(json, 'converted_date') ? undefined : (json['converted_date'] === null ? null : new Date(json['converted_date'])),
        'converted_contact': !exists(json, 'converted_contact') ? undefined : json['converted_contact'],
        'converted_account': !exists(json, 'converted_account') ? undefined : json['converted_account'],
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function LeadRequestToJSON(value?: LeadRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'owner': value.owner,
        'lead_source': value.lead_source,
        'title': value.title,
        'company': value.company,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'converted_date': value.converted_date === undefined ? undefined : (value.converted_date === null ? null : value.converted_date.toISOString()),
        'converted_contact': value.converted_contact,
        'converted_account': value.converted_account,
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

