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

/**
 * # The ExpenseLine Object
 * ### Description
 * The `ExpenseLine` object is used to represent an expense's line items.
 * 
 * ### Usage Example
 * Fetch from the `GET Expense` endpoint and view the expense's line items.
 * @export
 * @interface ExpenseLine
 */
export interface ExpenseLine {
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof ExpenseLine
     */
    remote_id?: string | null;
    /**
     * The line's item.
     * @type {string}
     * @memberof ExpenseLine
     */
    item?: string | JSONValue | null;
    /**
     * The line's net amount.
     * @type {number}
     * @memberof ExpenseLine
     */
    net_amount?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ExpenseLine
     */
    tracking_category?: string | JSONValue | null;
    /**
     * The company the line belongs to.
     * @type {string}
     * @memberof ExpenseLine
     */
    company?: string | null;
    /**
     * The expense's payment account.
     * @type {string}
     * @memberof ExpenseLine
     */
    account?: string | JSONValue | null;
    /**
     * The line item's description.
     * @type {string}
     * @memberof ExpenseLine
     */
    description?: string | null;
}

export function ExpenseLineFromJSON(json: JSONValue): ExpenseLine | undefined {
    return ExpenseLineFromJSONTyped(json);
}

export function ExpenseLineFromJSONTyped(json: JSONValue): ExpenseLine | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'item': !exists(json, 'item') ? undefined : json['item'],
        'net_amount': !exists(json, 'net_amount') ? undefined : json['net_amount'],
        'tracking_category': !exists(json, 'tracking_category') ? undefined : json['tracking_category'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ExpenseLineToJSON(value?: ExpenseLine): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'item': value.item,
        'net_amount': value.net_amount,
        'tracking_category': value.tracking_category,
        'company': value.company,
        'account': value.account,
        'description': value.description,
    };
}

