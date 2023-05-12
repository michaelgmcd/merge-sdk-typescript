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


import * as runtime from '../../runtime';
import {
    SyncStatus,
    SyncStatusFromJSON,
    SyncStatusToJSON,
} from '../models';

import {
    MergeMetaRequest
} from '../../merge_meta_request';

export interface SyncStatusResyncCreateRequest {
    xAccountToken: string;
}

/**
 * 
 */
export class ForceResyncApi extends runtime.BaseAPI {

    /**
     * Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Core, Professional, or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.
     */
    async syncStatusResyncCreateRaw(requestParameters: SyncStatusResyncCreateRequest): Promise<runtime.ApiResponse<Array<SyncStatus> | undefined>> {
        if (requestParameters.xAccountToken === null || requestParameters.xAccountToken === undefined) {
            throw new runtime.RequiredError('xAccountToken','Required parameter requestParameters.xAccountToken was null or undefined when calling syncStatusResyncCreate.');
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
            path: `/crm/v1/sync-status/resync`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SyncStatusFromJSON));
    }

    /**
     * Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Core, Professional, or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.
     */
    async syncStatusResyncCreate(requestParameters: SyncStatusResyncCreateRequest): Promise<Array<SyncStatus> | undefined> {
        const response = await this.syncStatusResyncCreateRaw(requestParameters);
        return await response.value();
    }

}
