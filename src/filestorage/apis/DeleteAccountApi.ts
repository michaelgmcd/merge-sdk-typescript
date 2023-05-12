/* tslint:disable */
/* eslint-disable */
/**
 * Merge File Storage API
 * The unified API for building rich integrations with multiple File Storage platforms.
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
    MergeMetaRequest
} from '../../merge_meta_request';

export interface DeleteAccountCreateRequest {
    xAccountToken: string;
}

/**
 * 
 */
export class DeleteAccountApi extends runtime.BaseAPI {

    /**
     * Delete a linked account.
     */
    async deleteAccountCreateRaw(requestParameters: DeleteAccountCreateRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling deleteAccountCreate.');
        }

        const queryParameters: any = {};


        

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccountToken !== undefined && requestParameters.xAccountToken !== null) {
            headerParameters['X-Account-Token'] = String(requestParameters.xAccountToken);
        }



        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = `Bearer ${this.configuration.apiKey}`;
        }

        const response = await this.request({
            path: `/filestorage/v1/delete-account`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a linked account.
     */
    async deleteAccountCreate(requestParameters: DeleteAccountCreateRequest): Promise<void> {
        await this.deleteAccountCreateRaw(requestParameters);
    }

}
