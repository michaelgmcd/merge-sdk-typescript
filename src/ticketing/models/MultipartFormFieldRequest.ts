/* tslint:disable */
/* eslint-disable */
/**
 * Merge Ticketing API
 * The unified API for building rich integrations with multiple Ticketing platforms.
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
    EncodingEnum,
    EncodingEnumFromJSON,
    EncodingEnumFromJSONTyped,
    EncodingEnumToJSON,
} from './';


/**
 * # The MultipartFormField Object
 * ### Description
 * The `MultipartFormField` object is used to represent fields in an HTTP request using `multipart/form-data`.
 * 
 * ### Usage Example
 * Create a `MultipartFormField` to define a multipart form entry.
 * @export
 * @interface MultipartFormFieldRequest
 */
export interface MultipartFormFieldRequest {
    /**
     * The name of the form field
     * @type {string}
     * @memberof MultipartFormFieldRequest
     */
    name: string;
    /**
     * The data for the form field.
     * @type {string}
     * @memberof MultipartFormFieldRequest
     */
    data: string;
    /**
     * The encoding of the value of `data`. Defaults to `RAW` if not defined.
     * 
     * * `RAW` - RAW
     * * `BASE64` - BASE64
     * * `GZIP_BASE64` - GZIP_BASE64
     * @type {EncodingEnum}
     * @memberof MultipartFormFieldRequest
     */
    encoding?: EncodingEnum | null;
    /**
     * The file name of the form field, if the field is for a file.
     * @type {string}
     * @memberof MultipartFormFieldRequest
     */
    file_name?: string | null;
    /**
     * The MIME type of the file, if the field is for a file.
     * @type {string}
     * @memberof MultipartFormFieldRequest
     */
    content_type?: string | null;
}

export function MultipartFormFieldRequestFromJSON(json: JSONValue): MultipartFormFieldRequest | undefined {
    return MultipartFormFieldRequestFromJSONTyped(json);
}

export function MultipartFormFieldRequestFromJSONTyped(json: JSONValue): MultipartFormFieldRequest | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'name': json['name'],
        'data': json['data'],
        'encoding': !exists(json, 'encoding') ? undefined : EncodingEnumFromJSON(json['encoding']) as EncodingEnum,
        'file_name': !exists(json, 'file_name') ? undefined : json['file_name'],
        'content_type': !exists(json, 'content_type') ? undefined : json['content_type'],
    };
}

export function MultipartFormFieldRequestToJSON(value?: MultipartFormFieldRequest): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'name': value.name,
        'data': value.data,
        'encoding': EncodingEnumToJSON(value.encoding),
        'file_name': value.file_name,
        'content_type': value.content_type,
    };
}

