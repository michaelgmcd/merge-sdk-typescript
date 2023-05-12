/* tslint:disable */
/* eslint-disable */
/**
 * Merge HRIS API
 * The unified API for building rich integrations with multiple HR Information System platforms.
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
    EmploymentStatusEnum,
    EmploymentStatusEnumFromJSON,
    EmploymentStatusEnumFromJSONTyped,
    EmploymentStatusEnumToJSON,
    EthnicityEnum,
    EthnicityEnumFromJSON,
    EthnicityEnumFromJSONTyped,
    EthnicityEnumToJSON,
    GenderEnum,
    GenderEnumFromJSON,
    GenderEnumFromJSONTyped,
    GenderEnumToJSON,
    MaritalStatusEnum,
    MaritalStatusEnumFromJSON,
    MaritalStatusEnumFromJSONTyped,
    MaritalStatusEnumToJSON,
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Employee Object
 * ### Description
 * The `Employee` object is used to represent any person who has been employed by a company.
 * 
 * ### Usage Example
 * Fetch from the `LIST Employee` endpoint and filter by `ID` to show all employees.
 * @export
 * @interface Employee
 */
export interface Employee {
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Employee
     */
    remote_id?: string | null;
    /**
     * The employee's number that appears in the third-party integration's UI.
     * @type {string}
     * @memberof Employee
     */
    employee_number?: string | null;
    /**
     * The ID of the employee's company.
     * @type {string}
     * @memberof Employee
     */
    company?: string | JSONValue | null;
    /**
     * The employee's first name.
     * @type {string}
     * @memberof Employee
     */
    first_name?: string | null;
    /**
     * The employee's last name.
     * @type {string}
     * @memberof Employee
     */
    last_name?: string | null;
    /**
     * The employee's full name, to use for display purposes. If a preferred first name is available, the full name will include the preferred first name.
     * @type {string}
     * @memberof Employee
     */
    display_full_name?: string | null;
    /**
     * The employee's username that appears in the remote UI.
     * @type {string}
     * @memberof Employee
     */
    username?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Employee
     */
    groups?: Array<string> | JSONValue;
    /**
     * The employee's work email.
     * @type {string}
     * @memberof Employee
     */
    work_email?: string | null;
    /**
     * The employee's personal email.
     * @type {string}
     * @memberof Employee
     */
    personal_email?: string | null;
    /**
     * The employee's mobile phone number.
     * @type {string}
     * @memberof Employee
     */
    mobile_phone_number?: string | null;
    /**
     * Array of `Employment` IDs for this Employee.
     * @type {Array<string>}
     * @memberof Employee
     */
    employments?: Array<string> | JSONValue;
    /**
     * The employee's home address.
     * @type {string}
     * @memberof Employee
     */
    home_location?: string | JSONValue | null;
    /**
     * The employee's work address.
     * @type {string}
     * @memberof Employee
     */
    work_location?: string | JSONValue | null;
    /**
     * The employee ID of the employee's manager.
     * @type {string}
     * @memberof Employee
     */
    manager?: string | JSONValue | null;
    /**
     * The employee's team.
     * @type {string}
     * @memberof Employee
     */
    team?: string | JSONValue | null;
    /**
     * The employee's pay group
     * @type {string}
     * @memberof Employee
     */
    pay_group?: string | JSONValue | null;
    /**
     * The employee's social security number.
     * @type {string}
     * @memberof Employee
     */
    ssn?: string | null;
    /**
     * The employee's gender.
     * 
     * * `MALE` - MALE
     * * `FEMALE` - FEMALE
     * * `NON-BINARY` - NON-BINARY
     * * `OTHER` - OTHER
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     * @type {GenderEnum}
     * @memberof Employee
     */
    gender?: GenderEnum | null;
    /**
     * The employee's ethnicity.
     * 
     * * `AMERICAN_INDIAN_OR_ALASKA_NATIVE` - AMERICAN_INDIAN_OR_ALASKA_NATIVE
     * * `ASIAN_OR_INDIAN_SUBCONTINENT` - ASIAN_OR_INDIAN_SUBCONTINENT
     * * `BLACK_OR_AFRICAN_AMERICAN` - BLACK_OR_AFRICAN_AMERICAN
     * * `HISPANIC_OR_LATINO` - HISPANIC_OR_LATINO
     * * `NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER` - NATIVE_HAWAIIAN_OR_OTHER_PACIFIC_ISLANDER
     * * `TWO_OR_MORE_RACES` - TWO_OR_MORE_RACES
     * * `WHITE` - WHITE
     * * `PREFER_NOT_TO_DISCLOSE` - PREFER_NOT_TO_DISCLOSE
     * @type {EthnicityEnum}
     * @memberof Employee
     */
    ethnicity?: EthnicityEnum | null;
    /**
     * The employee's filing status as related to marital status.
     * 
     * * `SINGLE` - SINGLE
     * * `MARRIED_FILING_JOINTLY` - MARRIED_FILING_JOINTLY
     * * `MARRIED_FILING_SEPARATELY` - MARRIED_FILING_SEPARATELY
     * * `HEAD_OF_HOUSEHOLD` - HEAD_OF_HOUSEHOLD
     * * `QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD` - QUALIFYING_WIDOW_OR_WIDOWER_WITH_DEPENDENT_CHILD
     * @type {MaritalStatusEnum}
     * @memberof Employee
     */
    marital_status?: MaritalStatusEnum | null;
    /**
     * The employee's date of birth.
     * @type {Date}
     * @memberof Employee
     */
    date_of_birth?: Date | null;
    /**
     * The date that the employee was hired, usually the day that an offer letter is signed. If an employee has multiple hire dates from previous employments, this represents the most recent hire date. Note: If you're looking for the employee's start date, refer to the start_date field.
     * @type {Date}
     * @memberof Employee
     */
    hire_date?: Date | null;
    /**
     * The date that the employee started working. If an employee was rehired, the most recent start date will be returned.
     * @type {Date}
     * @memberof Employee
     */
    start_date?: Date | null;
    /**
     * When the third party's employee was created.
     * @type {Date}
     * @memberof Employee
     */
    remote_created_at?: Date | null;
    /**
     * The employment status of the employee.
     * 
     * * `ACTIVE` - ACTIVE
     * * `PENDING` - PENDING
     * * `INACTIVE` - INACTIVE
     * @type {EmploymentStatusEnum}
     * @memberof Employee
     */
    employment_status?: EmploymentStatusEnum | null;
    /**
     * The employee's termination date.
     * @type {Date}
     * @memberof Employee
     */
    termination_date?: Date | null;
    /**
     * The URL of the employee's avatar image.
     * @type {string}
     * @memberof Employee
     */
    avatar?: string | null;
    /**
     * Custom fields configured for a given model.
     * @type {{ [key: string]: any; }}
     * @memberof Employee
     */
    custom_fields?: { [key: string]: any; } | null;
    /**
     * 
     * @type {boolean}
     * @memberof Employee
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Employee
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Employee
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Employee
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function EmployeeFromJSON(json: JSONValue): Employee | undefined {
    return EmployeeFromJSONTyped(json);
}

export function EmployeeFromJSONTyped(json: JSONValue): Employee | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'employee_number': !exists(json, 'employee_number') ? undefined : json['employee_number'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'first_name': !exists(json, 'first_name') ? undefined : json['first_name'],
        'last_name': !exists(json, 'last_name') ? undefined : json['last_name'],
        'display_full_name': !exists(json, 'display_full_name') ? undefined : json['display_full_name'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'work_email': !exists(json, 'work_email') ? undefined : json['work_email'],
        'personal_email': !exists(json, 'personal_email') ? undefined : json['personal_email'],
        'mobile_phone_number': !exists(json, 'mobile_phone_number') ? undefined : json['mobile_phone_number'],
        'employments': !exists(json, 'employments') ? undefined : json['employments'],
        'home_location': !exists(json, 'home_location') ? undefined : json['home_location'],
        'work_location': !exists(json, 'work_location') ? undefined : json['work_location'],
        'manager': !exists(json, 'manager') ? undefined : json['manager'],
        'team': !exists(json, 'team') ? undefined : json['team'],
        'pay_group': !exists(json, 'pay_group') ? undefined : json['pay_group'],
        'ssn': !exists(json, 'ssn') ? undefined : json['ssn'],
        'gender': !exists(json, 'gender') ? undefined : GenderEnumFromJSON(json['gender']) as GenderEnum,
        'ethnicity': !exists(json, 'ethnicity') ? undefined : EthnicityEnumFromJSON(json['ethnicity']) as EthnicityEnum,
        'marital_status': !exists(json, 'marital_status') ? undefined : MaritalStatusEnumFromJSON(json['marital_status']) as MaritalStatusEnum,
        'date_of_birth': !exists(json, 'date_of_birth') ? undefined : (json['date_of_birth'] === null ? null : new Date(json['date_of_birth'])),
        'hire_date': !exists(json, 'hire_date') ? undefined : (json['hire_date'] === null ? null : new Date(json['hire_date'])),
        'start_date': !exists(json, 'start_date') ? undefined : (json['start_date'] === null ? null : new Date(json['start_date'])),
        'remote_created_at': !exists(json, 'remote_created_at') ? undefined : (json['remote_created_at'] === null ? null : new Date(json['remote_created_at'])),
        'employment_status': !exists(json, 'employment_status') ? undefined : EmploymentStatusEnumFromJSON(json['employment_status']) as EmploymentStatusEnum,
        'termination_date': !exists(json, 'termination_date') ? undefined : (json['termination_date'] === null ? null : new Date(json['termination_date'])),
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'custom_fields': !exists(json, 'custom_fields') ? undefined : json['custom_fields'],
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function EmployeeToJSON(value?: Employee): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'employee_number': value.employee_number,
        'company': value.company,
        'first_name': value.first_name,
        'last_name': value.last_name,
        'display_full_name': value.display_full_name,
        'username': value.username,
        'groups': value.groups,
        'work_email': value.work_email,
        'personal_email': value.personal_email,
        'mobile_phone_number': value.mobile_phone_number,
        'employments': value.employments,
        'home_location': value.home_location,
        'work_location': value.work_location,
        'manager': value.manager,
        'team': value.team,
        'pay_group': value.pay_group,
        'ssn': value.ssn,
        'gender': GenderEnumToJSON(value.gender),
        'ethnicity': EthnicityEnumToJSON(value.ethnicity),
        'marital_status': MaritalStatusEnumToJSON(value.marital_status),
        'date_of_birth': value.date_of_birth === undefined ? undefined : (value.date_of_birth === null ? null : value.date_of_birth.toISOString()),
        'hire_date': value.hire_date === undefined ? undefined : (value.hire_date === null ? null : value.hire_date.toISOString()),
        'start_date': value.start_date === undefined ? undefined : (value.start_date === null ? null : value.start_date.toISOString()),
        'remote_created_at': value.remote_created_at === undefined ? undefined : (value.remote_created_at === null ? null : value.remote_created_at.toISOString()),
        'employment_status': EmploymentStatusEnumToJSON(value.employment_status),
        'termination_date': value.termination_date === undefined ? undefined : (value.termination_date === null ? null : value.termination_date.toISOString()),
        'avatar': value.avatar,
        'custom_fields': value.custom_fields,
    };
}

