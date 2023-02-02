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
    PurchaseOrderLineItemRequest,
    PurchaseOrderLineItemRequestFromJSON,
    PurchaseOrderLineItemRequestFromJSONTyped,
    PurchaseOrderLineItemRequestToJSON,
    PurchaseOrderStatusEnum,
    PurchaseOrderStatusEnumFromJSON,
    PurchaseOrderStatusEnumFromJSONTyped,
    PurchaseOrderStatusEnumToJSON,
} from './';


/**
 * # The PurchaseOrder Object
 * ### Description
 * The `PurchaseOrder` object is a record of request for a product or service between a buyer and seller.
 * 
 * ### Usage Example
 * Fetch from the `LIST PurchaseOrders` endpoint and view a company's purchase orders.
 * @export
 * @interface PurchaseOrderRequest
 */
export interface PurchaseOrderRequest {
    /**
     * The purchase order's status.
     * @type {PurchaseOrderStatusEnum}
     * @memberof PurchaseOrderRequest
     */
    status?: PurchaseOrderStatusEnum | null;
    /**
     * The purchase order's issue date.
     * @type {Date}
     * @memberof PurchaseOrderRequest
     */
    issue_date?: Date | null;
    /**
     * The purchase order's delivery date.
     * @type {Date}
     * @memberof PurchaseOrderRequest
     */
    delivery_date?: Date | null;
    /**
     * The purchase order's delivery address.
     * @type {string}
     * @memberof PurchaseOrderRequest
     */
    delivery_address?: string | JSONValue | null;
    /**
     * The contact making the purchase order.
     * @type {string}
     * @memberof PurchaseOrderRequest
     */
    customer?: string | null;
    /**
     * The party fulfilling the purchase order.
     * @type {string}
     * @memberof PurchaseOrderRequest
     */
    vendor?: string | JSONValue | null;
    /**
     * A memo attached to the purchase order.
     * @type {string}
     * @memberof PurchaseOrderRequest
     */
    memo?: string | null;
    /**
     * The purchase order's total amount.
     * @type {number}
     * @memberof PurchaseOrderRequest
     */
    total_amount?: number | null;
    /**
     * The purchase order's currency.
     * @type {CurrencyEnum}
     * @memberof PurchaseOrderRequest
     */
    currency?: CurrencyEnum | null;
    /**
     * The purchase order's exchange rate.
     * @type {string}
     * @memberof PurchaseOrderRequest
     */
    exchange_rate?: string | null;
    /**
     * 
     * @type {Array<PurchaseOrderLineItemRequest>}
     * @memberof PurchaseOrderRequest
     */
    line_items?: Array<PurchaseOrderLineItemRequest> | JSONValue;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PurchaseOrderRequest
     */
    integration_params?: { [key: string]: any; } | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof PurchaseOrderRequest
     */
    linked_account_params?: { [key: string]: any; } | null;
}

export function PurchaseOrderRequestFromJSON(json: JSONValue): PurchaseOrderRequest | undefined {
    return PurchaseOrderRequestFromJSONTyped(json);
}

export function PurchaseOrderRequestFromJSONTyped(json: JSONValue): PurchaseOrderRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'status': !exists(json, 'status') ? undefined : PurchaseOrderStatusEnumFromJSON(json['status']) as PurchaseOrderStatusEnum,
        'issue_date': !exists(json, 'issue_date') ? undefined : (json['issue_date'] === null ? null : new Date(json['issue_date'])),
        'delivery_date': !exists(json, 'delivery_date') ? undefined : (json['delivery_date'] === null ? null : new Date(json['delivery_date'])),
        'delivery_address': !exists(json, 'delivery_address') ? undefined : json['delivery_address'],
        'customer': !exists(json, 'customer') ? undefined : json['customer'],
        'vendor': !exists(json, 'vendor') ? undefined : json['vendor'],
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'line_items': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<JSONValue>).map(PurchaseOrderLineItemRequestFromJSON)) as Array<PurchaseOrderLineItemRequest>,
        'integration_params': !exists(json, 'integration_params') ? undefined : json['integration_params'],
        'linked_account_params': !exists(json, 'linked_account_params') ? undefined : json['linked_account_params'],
    };
}

export function PurchaseOrderRequestToJSON(value?: PurchaseOrderRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'status': PurchaseOrderStatusEnumToJSON(value.status),
        'issue_date': value.issue_date === undefined ? undefined : (value.issue_date === null ? null : value.issue_date.toISOString()),
        'delivery_date': value.delivery_date === undefined ? undefined : (value.delivery_date === null ? null : value.delivery_date.toISOString()),
        'delivery_address': value.delivery_address,
        'customer': value.customer,
        'vendor': value.vendor,
        'memo': value.memo,
        'total_amount': value.total_amount,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'line_items': value.line_items === undefined ? undefined : ((value.line_items as Array<any>).map(PurchaseOrderLineItemRequestToJSON)),
        'integration_params': value.integration_params,
        'linked_account_params': value.linked_account_params,
    };
}

