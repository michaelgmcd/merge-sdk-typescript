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
    CurrencyEnum,
    CurrencyEnumFromJSON,
    CurrencyEnumFromJSONTyped,
    CurrencyEnumToJSON,
    
    TransactionLineItem,
    TransactionLineItemFromJSON,
    TransactionLineItemFromJSONTyped,
    TransactionLineItemToJSON,
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Transaction Object
 * ### Description
 * The `Transaction` includes different types of transactions. The Transactions object does not cover expenses, credit notes, vendor credit, invoices, purchase orders, and journal entries. See the “transaction_type” field for more information.
 * 
 * ### Usage Example
 * Fetch from the `GET Transaction` endpoint and view a company's transactions.
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * The type of transaction, which can by any transaction object not already included in Merge’s common model.
     * @type {string}
     * @memberof Transaction
     */
    transaction_type?: string | null;
    /**
     * The transaction's number used for identifying purposes.
     * @type {string}
     * @memberof Transaction
     */
    number?: string | null;
    /**
     * The date upon which the transaction occurred.
     * @type {Date}
     * @memberof Transaction
     */
    transaction_date?: Date | null;
    /**
     * The transaction's account.
     * @type {string}
     * @memberof Transaction
     */
    account?: string | JSONValue | null;
    /**
     * The contact to whom the transaction relates to.
     * @type {string}
     * @memberof Transaction
     */
    contact?: string | JSONValue | null;
    /**
     * The total amount being paid after taxes.
     * @type {string}
     * @memberof Transaction
     */
    total_amount?: string | null;
    /**
     * The transaction's currency.
     * @type {CurrencyEnum}
     * @memberof Transaction
     */
    currency?: CurrencyEnum | null;
    /**
     * The transaction's exchange rate.
     * @type {string}
     * @memberof Transaction
     */
    exchange_rate?: string | null;
    /**
     * The company the transaction belongs to.
     * @type {string}
     * @memberof Transaction
     */
    company?: string | null;
    /**
     * 
     * @type {Array<TransactionLineItem>}
     * @memberof Transaction
     */
    line_items?: Array<TransactionLineItem> | JSONValue;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Transaction
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Transaction
     */
    remote_id?: string | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Transaction
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Transaction
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function TransactionFromJSON(json: JSONValue): Transaction | undefined {
    return TransactionFromJSONTyped(json);
}

export function TransactionFromJSONTyped(json: JSONValue): Transaction | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'transaction_type': !exists(json, 'transaction_type') ? undefined : json['transaction_type'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'account': !exists(json, 'account') ? undefined : json['account'],
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<JSONValue>).map(TransactionLineItemFromJSON)) as Array<TransactionLineItem>,
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function TransactionToJSON(value?: Transaction): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'transaction_type': value.transaction_type,
        'number': value.number,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'account': value.account,
        'contact': value.contact,
        'total_amount': value.total_amount,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'company': value.company,
        'line_items': value.line_items === undefined ? undefined : ((value.line_items as Array<any>).map(TransactionLineItemToJSON)),
        'remote_id': value.remote_id,
    };
}

