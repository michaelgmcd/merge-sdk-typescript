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


import * as runtime from '../../runtime';
import {
    Invoice,
    InvoiceFromJSON,
    InvoiceToJSON,
    InvoiceEndpointRequest,
    InvoiceEndpointRequestFromJSON,
    InvoiceEndpointRequestToJSON,
    InvoiceResponse,
    InvoiceResponseFromJSON,
    InvoiceResponseToJSON,
    MetaResponse,
    MetaResponseFromJSON,
    MetaResponseToJSON,
    
} from '../models';
import {
	MergePaginatedResponse,
	MergePaginatedResponseFromJSON,
	MergePaginatedResponseToJSON,
} from '../../merge_paginated_response';

export interface InvoicesCreateRequest {
    invoiceEndpointRequest: InvoiceEndpointRequest;
    isDebugMode?: boolean;
    runAsync?: boolean;
}

export interface InvoicesListRequest {
    companyId?: string;
    contactId?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    cursor?: string;
    expand?: InvoicesListExpandEnum;
    includeDeletedData?: boolean;
    includeRemoteData?: boolean;
    modifiedAfter?: Date;
    modifiedBefore?: Date;
    pageSize?: number;
    remoteFields?: InvoicesListRemoteFieldsEnum;
    remoteId?: string | null;
    type?: InvoicesListTypeEnum;
}

export interface InvoicesRetrieveRequest {
    id: string;
    expand?: InvoicesRetrieveExpandEnum;
    includeRemoteData?: boolean;
    remoteFields?: InvoicesRetrieveRemoteFieldsEnum;
}

/**
 * 
 */
export class InvoicesApi extends runtime.BaseAPI {

    /**
     * Creates an `Invoice` object with the given values.
     */
    async invoicesCreateRaw(requestParameters: InvoicesCreateRequest): Promise<runtime.ApiResponse<InvoiceResponse | undefined>> {
        if (requestParameters.invoiceEndpointRequest === null || requestParameters.invoiceEndpointRequest === undefined) {
            throw new runtime.RequiredError('invoiceEndpointRequest','Required parameter requestParameters.invoiceEndpointRequest was null or undefined when calling invoicesCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.isDebugMode !== undefined) {
            queryParameters['is_debug_mode'] = requestParameters.isDebugMode;
        }

        if (requestParameters.runAsync !== undefined) {
            queryParameters['run_async'] = requestParameters.runAsync;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/invoices`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InvoiceEndpointRequestToJSON(requestParameters.invoiceEndpointRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceResponseFromJSON(jsonValue));
    }

    /**
     * Creates an `Invoice` object with the given values.
     */
    async invoicesCreate(requestParameters: InvoicesCreateRequest): Promise<InvoiceResponse | undefined> {
        const response = await this.invoicesCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns a list of `Invoice` objects.
     */
    async invoicesListRaw(requestParameters: InvoicesListRequest): Promise<runtime.ApiResponse<MergePaginatedResponse<Invoice> | undefined>> {
        const queryParameters: any = {};

        if (requestParameters.companyId !== undefined) {
            queryParameters['company_id'] = requestParameters.companyId;
        }

        if (requestParameters.contactId !== undefined) {
            queryParameters['contact_id'] = requestParameters.contactId;
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['created_after'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['created_before'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeDeletedData !== undefined) {
            queryParameters['include_deleted_data'] = requestParameters.includeDeletedData;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.modifiedAfter !== undefined) {
            queryParameters['modified_after'] = (requestParameters.modifiedAfter as any).toISOString();
        }

        if (requestParameters.modifiedBefore !== undefined) {
            queryParameters['modified_before'] = (requestParameters.modifiedBefore as any).toISOString();
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        if (requestParameters.remoteId !== undefined) {
            queryParameters['remote_id'] = requestParameters.remoteId;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/invoices`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MergePaginatedResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of `Invoice` objects.
     */
    async invoicesList(requestParameters: InvoicesListRequest): Promise<MergePaginatedResponse<Invoice> | undefined> {
        const response = await this.invoicesListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns metadata for `Invoice` POSTs.
     */
    async invoicesMetaPostRetrieveRaw(): Promise<runtime.ApiResponse<MetaResponse | undefined>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/invoices/meta/post`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MetaResponseFromJSON(jsonValue));
    }

    /**
     * Returns metadata for `Invoice` POSTs.
     */
    async invoicesMetaPostRetrieve(): Promise<MetaResponse | undefined> {
        const response = await this.invoicesMetaPostRetrieveRaw();
        return await response.value();
    }

    /**
     * Returns an `Invoice` object with the given `id`.
     */
    async invoicesRetrieveRaw(requestParameters: InvoicesRetrieveRequest): Promise<runtime.ApiResponse<Invoice | undefined>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling invoicesRetrieve.');
        }

        const queryParameters: any = {};

        if (requestParameters.expand !== undefined) {
            queryParameters['expand'] = requestParameters.expand;
        }

        if (requestParameters.includeRemoteData !== undefined) {
            queryParameters['include_remote_data'] = requestParameters.includeRemoteData;
        }

        if (requestParameters.remoteFields !== undefined) {
            queryParameters['remote_fields'] = requestParameters.remoteFields;
        }

        const headerParameters: runtime.HTTPHeaders = {};


        if (this.configuration && this.configuration.accessToken) {
            headerParameters["X-Account-Token"] = this.configuration.accessToken; // bearerAuth authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/accounting/v1/invoices/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     * Returns an `Invoice` object with the given `id`.
     */
    async invoicesRetrieve(requestParameters: InvoicesRetrieveRequest): Promise<Invoice | undefined> {
        const response = await this.invoicesRetrieveRaw(requestParameters);
        return await response.value();
    }

}

/**
* @export
* @enum {string}
*/
export enum InvoicesListExpandEnum {
    Contact = 'contact',
    LineItems = 'line_items',
    LineItemscontact = 'line_items,contact',
    Payments = 'payments',
    Paymentscontact = 'payments,contact',
    PaymentslineItems = 'payments,line_items',
    PaymentslineItemscontact = 'payments,line_items,contact'
}
/**
* @export
* @enum {string}
*/
export enum InvoicesListRemoteFieldsEnum {
    Type = 'type'
}
/**
* @export
* @enum {string}
*/
export enum InvoicesListTypeEnum {
    Payable = 'ACCOUNTS_PAYABLE',
    Receivable = 'ACCOUNTS_RECEIVABLE'
}
/**
* @export
* @enum {string}
*/
export enum InvoicesRetrieveExpandEnum {
    Contact = 'contact',
    LineItems = 'line_items',
    LineItemscontact = 'line_items,contact',
    Payments = 'payments',
    Paymentscontact = 'payments,contact',
    PaymentslineItems = 'payments,line_items',
    PaymentslineItemscontact = 'payments,line_items,contact'
}
/**
* @export
* @enum {string}
*/
export enum InvoicesRetrieveRemoteFieldsEnum {
    Type = 'type'
}
