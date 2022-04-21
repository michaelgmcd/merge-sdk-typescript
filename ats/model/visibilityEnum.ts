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

export enum VisibilityEnumExpected {
    AdminOnly = <any> 'ADMIN_ONLY',
    Public = <any> 'PUBLIC',
    Private = <any> 'PRIVATE'
}

export type VisibilityEnum = VisibilityEnumExpected | string;
