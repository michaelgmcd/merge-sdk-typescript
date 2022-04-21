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

import { RequestFile } from './models';
import { MethodEnum } from './methodEnum';
import { MultipartFormFieldRequest } from './multipartFormFieldRequest';
import { RequestFormatEnum } from './requestFormatEnum';

/**
* # The DataPassthrough Object ### Description The `DataPassthrough` object is used to send information to an otherwise-unsupported third-party endpoint.  ### Usage Example Create a `DataPassthrough` to get team hierarchies from your Rippling integration.
*/
export class DataPassthroughRequest {
    'method': MethodEnum;
    'path': string;
    'base_url_override'?: string | null;
    'data'?: string | null;
    /**
    * Pass an array of `MultipartFormField` objects in here instead of using the `data` param if `request_format` is set to `MULTIPART`.
    */
    'multipart_form_data'?: Array<MultipartFormFieldRequest> | null;
    /**
    * The headers to use for the request (Merge will handle the account\'s authorization headers). `Content-Type` header is required for passthrough. Choose content type corresponding to expected format of receiving server.
    */
    'headers'?: { [key: string]: any; } | null;
    'request_format'?: RequestFormatEnum | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "MethodEnum"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "base_url_override",
            "baseName": "base_url_override",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "string"
        },
        {
            "name": "multipart_form_data",
            "baseName": "multipart_form_data",
            "type": "Array<MultipartFormFieldRequest>"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "request_format",
            "baseName": "request_format",
            "type": "RequestFormatEnum"
        }    ];

    static getAttributeTypeMap() {
        return DataPassthroughRequest.attributeTypeMap;
    }
}

