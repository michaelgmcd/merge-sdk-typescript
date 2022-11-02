/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../../runtime';
import { JSONValue } from '../../merge_json';
import {
    AccountingPhoneNumberRequest,
    AccountingPhoneNumberRequestFromJSON,
    AccountingPhoneNumberRequestFromJSONTyped,
    AccountingPhoneNumberRequestToJSON,
    Status7d1Enum,
    Status7d1EnumFromJSON,
    Status7d1EnumFromJSONTyped,
    Status7d1EnumToJSON,
} from './';


/**
 * # The Contact Object
 * ### Description
 * The `Contact` object is used to represent a Contact. This can be either a supplier or a customer.
 * 
 * ### Usage Example
 * Fetch from the `LIST Contacts` endpoint and view a company's contacts.
 * @export
 * @interface ContactRequest
 */
export interface ContactRequest {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof ContactRequest
     */
    remote_id?: string | null;
    /**
     * The contact's name.
     * @type {string}
     * @memberof ContactRequest
     */
    name?: string | null;
    /**
     * Whether the contact is a supplier.
     * @type {boolean}
     * @memberof ContactRequest
     */
    is_supplier?: boolean | null;
    /**
     * Whether the contact is a customer.
     * @type {boolean}
     * @memberof ContactRequest
     */
    is_customer?: boolean | null;
    /**
     * The contact's email address.
     * @type {string}
     * @memberof ContactRequest
     */
    email_address?: string | null;
    /**
     * The contact's tax number.
     * @type {string}
     * @memberof ContactRequest
     */
    tax_number?: string | null;
    /**
     * The contact's status
     * @type {Status7d1Enum}
     * @memberof ContactRequest
     */
    status?: Status7d1Enum | null;
    /**
     * The currency the contact's transactions are in.
     * @type {string}
     * @memberof ContactRequest
     */
    currency?: string | null;
    /**
     * When the third party's contact was updated.
     * @type {Date}
     * @memberof ContactRequest
     */
    remote_updated_at?: Date | null;
    /**
     * `Address` object IDs for the given `Contacts` object.
     * @type {Array<string>}
     * @memberof ContactRequest
     */
    addresses?: Array<string>;
    /**
     * `AccountingPhoneNumber` object for the given `Contacts` object.
     * @type {Array<AccountingPhoneNumberRequest>}
     * @memberof ContactRequest
     */
    phone_numbers?: Array<AccountingPhoneNumberRequest>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContactRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ContactRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function ContactRequestFromJSON(json: JSONValue): ContactRequest | undefined {
    return ContactRequestFromJSONTyped(json);
}

export function ContactRequestFromJSONTyped(json: JSONValue): ContactRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'is_supplier': !exists(json, 'is_supplier') ? undefined : json['is_supplier'],
        'is_customer': !exists(json, 'is_customer') ? undefined : json['is_customer'],
        'email_address': !exists(json, 'email_address') ? undefined : json['email_address'],
        'tax_number': !exists(json, 'tax_number') ? undefined : json['tax_number'],
        'status': !exists(json, 'status') ? undefined : Status7d1EnumFromJSON(json['status']) as Status7d1Enum,
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'addresses': !exists(json, 'addresses') ? undefined : json['addresses'],
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : ((json['phone_numbers'] as Array<JSONValue>).map(AccountingPhoneNumberRequestFromJSON)) as Array<AccountingPhoneNumberRequest>,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function ContactRequestToJSON(value?: ContactRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'name': value.name,
        'is_supplier': value.is_supplier,
        'is_customer': value.is_customer,
        'email_address': value.email_address,
        'tax_number': value.tax_number,
        'status': Status7d1EnumToJSON(value.status),
        'currency': value.currency,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
        'addresses': value.addresses,
        'phone_numbers': value.phone_numbers === undefined ? undefined : ((value.phone_numbers as Array<any>).map(AccountingPhoneNumberRequestToJSON)),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

