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
    AccountDetails,
    AccountDetailsFromJSON,
    AccountDetailsToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface AccountDetailsRetrieveRequest {
    xAccountToken: string;
}

/**
 * 
 */
export class AccountDetailsApi extends runtime.BaseAPI {

    /**
     * Get details for a linked account.
     */
    async accountDetailsRetrieveRaw(requestParameters: AccountDetailsRetrieveRequest): Promise<runtime.ApiResponse<AccountDetails | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling accountDetailsRetrieve.');
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
            path: `/filestorage/v1/account-details`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountDetailsFromJSON(jsonValue));
    }

    /**
     * Get details for a linked account.
     */
    async accountDetailsRetrieve(requestParameters: AccountDetailsRetrieveRequest): Promise<AccountDetails | undefined> {
        const response = await this.accountDetailsRetrieveRaw(requestParameters);
        return await response.value();
    }

}
