/**
 * Merge ATS API
 * The unified API for building rich integrations with multiple Applicant Tracking System platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DebugModelLogSummary } from './debugModelLogSummary';

export class DebugModeLog {
    'log_id': string;
    'dashboard_view': string;
    'log_summary': DebugModelLogSummary;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "log_id",
            "baseName": "log_id",
            "type": "string"
        },
        {
            "name": "dashboard_view",
            "baseName": "dashboard_view",
            "type": "string"
        },
        {
            "name": "log_summary",
            "baseName": "log_summary",
            "type": "DebugModelLogSummary"
        }    ];

    static getAttributeTypeMap() {
        return DebugModeLog.attributeTypeMap;
    }
}

