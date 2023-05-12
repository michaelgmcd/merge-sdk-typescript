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
    
} from './';
import {
	RemoteData,
	RemoteDataFromJSON,
	RemoteDataFromJSONTyped,
	RemoteDataToJSON,
} from '../../remote_data';


/**
 * # The Payment Object
 * ### Description
 * The `Payment` object represents general payments made towards a specific transaction.
 * 
 * ### Usage Example
 * Fetch from the `GET Payment` endpoint and view an invoice's payment.
 * @export
 * @interface Payment
 */
export interface Payment {
    /**
     * 
     * @type {string}
     * @memberof Payment
     */
    readonly id?: string;
    /**
     * The third-party API ID of the matching object.
     * @type {string}
     * @memberof Payment
     */
    remote_id?: string | null;
    /**
     * The payment's transaction date.
     * @type {Date}
     * @memberof Payment
     */
    transaction_date?: Date | null;
    /**
     * The supplier, or customer involved in the payment.
     * @type {string}
     * @memberof Payment
     */
    contact?: string | JSONValue | null;
    /**
     * The supplier’s or customer’s account in which the payment is made.
     * @type {string}
     * @memberof Payment
     */
    account?: string | JSONValue | null;
    /**
     * The payment's currency.
     * 
     * * `XUA` - ADB Unit of Account
     * * `AFN` - Afghan Afghani
     * * `AFA` - Afghan Afghani (1927–2002)
     * * `ALL` - Albanian Lek
     * * `ALK` - Albanian Lek (1946–1965)
     * * `DZD` - Algerian Dinar
     * * `ADP` - Andorran Peseta
     * * `AOA` - Angolan Kwanza
     * * `AOK` - Angolan Kwanza (1977–1991)
     * * `AON` - Angolan New Kwanza (1990–2000)
     * * `AOR` - Angolan Readjusted Kwanza (1995–1999)
     * * `ARA` - Argentine Austral
     * * `ARS` - Argentine Peso
     * * `ARM` - Argentine Peso (1881–1970)
     * * `ARP` - Argentine Peso (1983–1985)
     * * `ARL` - Argentine Peso Ley (1970–1983)
     * * `AMD` - Armenian Dram
     * * `AWG` - Aruban Florin
     * * `AUD` - Australian Dollar
     * * `ATS` - Austrian Schilling
     * * `AZN` - Azerbaijani Manat
     * * `AZM` - Azerbaijani Manat (1993–2006)
     * * `BSD` - Bahamian Dollar
     * * `BHD` - Bahraini Dinar
     * * `BDT` - Bangladeshi Taka
     * * `BBD` - Barbadian Dollar
     * * `BYN` - Belarusian Ruble
     * * `BYB` - Belarusian Ruble (1994–1999)
     * * `BYR` - Belarusian Ruble (2000–2016)
     * * `BEF` - Belgian Franc
     * * `BEC` - Belgian Franc (convertible)
     * * `BEL` - Belgian Franc (financial)
     * * `BZD` - Belize Dollar
     * * `BMD` - Bermudan Dollar
     * * `BTN` - Bhutanese Ngultrum
     * * `BOB` - Bolivian Boliviano
     * * `BOL` - Bolivian Boliviano (1863–1963)
     * * `BOV` - Bolivian Mvdol
     * * `BOP` - Bolivian Peso
     * * `BAM` - Bosnia-Herzegovina Convertible Mark
     * * `BAD` - Bosnia-Herzegovina Dinar (1992–1994)
     * * `BAN` - Bosnia-Herzegovina New Dinar (1994–1997)
     * * `BWP` - Botswanan Pula
     * * `BRC` - Brazilian Cruzado (1986–1989)
     * * `BRZ` - Brazilian Cruzeiro (1942–1967)
     * * `BRE` - Brazilian Cruzeiro (1990–1993)
     * * `BRR` - Brazilian Cruzeiro (1993–1994)
     * * `BRN` - Brazilian New Cruzado (1989–1990)
     * * `BRB` - Brazilian New Cruzeiro (1967–1986)
     * * `BRL` - Brazilian Real
     * * `GBP` - British Pound
     * * `BND` - Brunei Dollar
     * * `BGL` - Bulgarian Hard Lev
     * * `BGN` - Bulgarian Lev
     * * `BGO` - Bulgarian Lev (1879–1952)
     * * `BGM` - Bulgarian Socialist Lev
     * * `BUK` - Burmese Kyat
     * * `BIF` - Burundian Franc
     * * `XPF` - CFP Franc
     * * `KHR` - Cambodian Riel
     * * `CAD` - Canadian Dollar
     * * `CVE` - Cape Verdean Escudo
     * * `KYD` - Cayman Islands Dollar
     * * `XAF` - Central African CFA Franc
     * * `CLE` - Chilean Escudo
     * * `CLP` - Chilean Peso
     * * `CLF` - Chilean Unit of Account (UF)
     * * `CNX` - Chinese People’s Bank Dollar
     * * `CNY` - Chinese Yuan
     * * `CNH` - Chinese Yuan (offshore)
     * * `COP` - Colombian Peso
     * * `COU` - Colombian Real Value Unit
     * * `KMF` - Comorian Franc
     * * `CDF` - Congolese Franc
     * * `CRC` - Costa Rican Colón
     * * `HRD` - Croatian Dinar
     * * `HRK` - Croatian Kuna
     * * `CUC` - Cuban Convertible Peso
     * * `CUP` - Cuban Peso
     * * `CYP` - Cypriot Pound
     * * `CZK` - Czech Koruna
     * * `CSK` - Czechoslovak Hard Koruna
     * * `DKK` - Danish Krone
     * * `DJF` - Djiboutian Franc
     * * `DOP` - Dominican Peso
     * * `NLG` - Dutch Guilder
     * * `XCD` - East Caribbean Dollar
     * * `DDM` - East German Mark
     * * `ECS` - Ecuadorian Sucre
     * * `ECV` - Ecuadorian Unit of Constant Value
     * * `EGP` - Egyptian Pound
     * * `GQE` - Equatorial Guinean Ekwele
     * * `ERN` - Eritrean Nakfa
     * * `EEK` - Estonian Kroon
     * * `ETB` - Ethiopian Birr
     * * `EUR` - Euro
     * * `XBA` - European Composite Unit
     * * `XEU` - European Currency Unit
     * * `XBB` - European Monetary Unit
     * * `XBC` - European Unit of Account (XBC)
     * * `XBD` - European Unit of Account (XBD)
     * * `FKP` - Falkland Islands Pound
     * * `FJD` - Fijian Dollar
     * * `FIM` - Finnish Markka
     * * `FRF` - French Franc
     * * `XFO` - French Gold Franc
     * * `XFU` - French UIC-Franc
     * * `GMD` - Gambian Dalasi
     * * `GEK` - Georgian Kupon Larit
     * * `GEL` - Georgian Lari
     * * `DEM` - German Mark
     * * `GHS` - Ghanaian Cedi
     * * `GHC` - Ghanaian Cedi (1979–2007)
     * * `GIP` - Gibraltar Pound
     * * `XAU` - Gold
     * * `GRD` - Greek Drachma
     * * `GTQ` - Guatemalan Quetzal
     * * `GWP` - Guinea-Bissau Peso
     * * `GNF` - Guinean Franc
     * * `GNS` - Guinean Syli
     * * `GYD` - Guyanaese Dollar
     * * `HTG` - Haitian Gourde
     * * `HNL` - Honduran Lempira
     * * `HKD` - Hong Kong Dollar
     * * `HUF` - Hungarian Forint
     * * `IMP` - IMP
     * * `ISK` - Icelandic Króna
     * * `ISJ` - Icelandic Króna (1918–1981)
     * * `INR` - Indian Rupee
     * * `IDR` - Indonesian Rupiah
     * * `IRR` - Iranian Rial
     * * `IQD` - Iraqi Dinar
     * * `IEP` - Irish Pound
     * * `ILS` - Israeli New Shekel
     * * `ILP` - Israeli Pound
     * * `ILR` - Israeli Shekel (1980–1985)
     * * `ITL` - Italian Lira
     * * `JMD` - Jamaican Dollar
     * * `JPY` - Japanese Yen
     * * `JOD` - Jordanian Dinar
     * * `KZT` - Kazakhstani Tenge
     * * `KES` - Kenyan Shilling
     * * `KWD` - Kuwaiti Dinar
     * * `KGS` - Kyrgystani Som
     * * `LAK` - Laotian Kip
     * * `LVL` - Latvian Lats
     * * `LVR` - Latvian Ruble
     * * `LBP` - Lebanese Pound
     * * `LSL` - Lesotho Loti
     * * `LRD` - Liberian Dollar
     * * `LYD` - Libyan Dinar
     * * `LTL` - Lithuanian Litas
     * * `LTT` - Lithuanian Talonas
     * * `LUL` - Luxembourg Financial Franc
     * * `LUC` - Luxembourgian Convertible Franc
     * * `LUF` - Luxembourgian Franc
     * * `MOP` - Macanese Pataca
     * * `MKD` - Macedonian Denar
     * * `MKN` - Macedonian Denar (1992–1993)
     * * `MGA` - Malagasy Ariary
     * * `MGF` - Malagasy Franc
     * * `MWK` - Malawian Kwacha
     * * `MYR` - Malaysian Ringgit
     * * `MVR` - Maldivian Rufiyaa
     * * `MVP` - Maldivian Rupee (1947–1981)
     * * `MLF` - Malian Franc
     * * `MTL` - Maltese Lira
     * * `MTP` - Maltese Pound
     * * `MRU` - Mauritanian Ouguiya
     * * `MRO` - Mauritanian Ouguiya (1973–2017)
     * * `MUR` - Mauritian Rupee
     * * `MXV` - Mexican Investment Unit
     * * `MXN` - Mexican Peso
     * * `MXP` - Mexican Silver Peso (1861–1992)
     * * `MDC` - Moldovan Cupon
     * * `MDL` - Moldovan Leu
     * * `MCF` - Monegasque Franc
     * * `MNT` - Mongolian Tugrik
     * * `MAD` - Moroccan Dirham
     * * `MAF` - Moroccan Franc
     * * `MZE` - Mozambican Escudo
     * * `MZN` - Mozambican Metical
     * * `MZM` - Mozambican Metical (1980–2006)
     * * `MMK` - Myanmar Kyat
     * * `NAD` - Namibian Dollar
     * * `NPR` - Nepalese Rupee
     * * `ANG` - Netherlands Antillean Guilder
     * * `TWD` - New Taiwan Dollar
     * * `NZD` - New Zealand Dollar
     * * `NIO` - Nicaraguan Córdoba
     * * `NIC` - Nicaraguan Córdoba (1988–1991)
     * * `NGN` - Nigerian Naira
     * * `KPW` - North Korean Won
     * * `NOK` - Norwegian Krone
     * * `OMR` - Omani Rial
     * * `PKR` - Pakistani Rupee
     * * `XPD` - Palladium
     * * `PAB` - Panamanian Balboa
     * * `PGK` - Papua New Guinean Kina
     * * `PYG` - Paraguayan Guarani
     * * `PEI` - Peruvian Inti
     * * `PEN` - Peruvian Sol
     * * `PES` - Peruvian Sol (1863–1965)
     * * `PHP` - Philippine Peso
     * * `XPT` - Platinum
     * * `PLN` - Polish Zloty
     * * `PLZ` - Polish Zloty (1950–1995)
     * * `PTE` - Portuguese Escudo
     * * `GWE` - Portuguese Guinea Escudo
     * * `QAR` - Qatari Rial
     * * `XRE` - RINET Funds
     * * `RHD` - Rhodesian Dollar
     * * `RON` - Romanian Leu
     * * `ROL` - Romanian Leu (1952–2006)
     * * `RUB` - Russian Ruble
     * * `RUR` - Russian Ruble (1991–1998)
     * * `RWF` - Rwandan Franc
     * * `SVC` - Salvadoran Colón
     * * `WST` - Samoan Tala
     * * `SAR` - Saudi Riyal
     * * `RSD` - Serbian Dinar
     * * `CSD` - Serbian Dinar (2002–2006)
     * * `SCR` - Seychellois Rupee
     * * `SLL` - Sierra Leonean Leone
     * * `XAG` - Silver
     * * `SGD` - Singapore Dollar
     * * `SKK` - Slovak Koruna
     * * `SIT` - Slovenian Tolar
     * * `SBD` - Solomon Islands Dollar
     * * `SOS` - Somali Shilling
     * * `ZAR` - South African Rand
     * * `ZAL` - South African Rand (financial)
     * * `KRH` - South Korean Hwan (1953–1962)
     * * `KRW` - South Korean Won
     * * `KRO` - South Korean Won (1945–1953)
     * * `SSP` - South Sudanese Pound
     * * `SUR` - Soviet Rouble
     * * `ESP` - Spanish Peseta
     * * `ESA` - Spanish Peseta (A account)
     * * `ESB` - Spanish Peseta (convertible account)
     * * `XDR` - Special Drawing Rights
     * * `LKR` - Sri Lankan Rupee
     * * `SHP` - St. Helena Pound
     * * `XSU` - Sucre
     * * `SDD` - Sudanese Dinar (1992–2007)
     * * `SDG` - Sudanese Pound
     * * `SDP` - Sudanese Pound (1957–1998)
     * * `SRD` - Surinamese Dollar
     * * `SRG` - Surinamese Guilder
     * * `SZL` - Swazi Lilangeni
     * * `SEK` - Swedish Krona
     * * `CHF` - Swiss Franc
     * * `SYP` - Syrian Pound
     * * `STN` - São Tomé & Príncipe Dobra
     * * `STD` - São Tomé & Príncipe Dobra (1977–2017)
     * * `TVD` - TVD
     * * `TJR` - Tajikistani Ruble
     * * `TJS` - Tajikistani Somoni
     * * `TZS` - Tanzanian Shilling
     * * `XTS` - Testing Currency Code
     * * `THB` - Thai Baht
     * * `XXX` - The codes assigned for transactions where no currency is involved
     * * `TPE` - Timorese Escudo
     * * `TOP` - Tongan Paʻanga
     * * `TTD` - Trinidad & Tobago Dollar
     * * `TND` - Tunisian Dinar
     * * `TRY` - Turkish Lira
     * * `TRL` - Turkish Lira (1922–2005)
     * * `TMT` - Turkmenistani Manat
     * * `TMM` - Turkmenistani Manat (1993–2009)
     * * `USD` - US Dollar
     * * `USN` - US Dollar (Next day)
     * * `USS` - US Dollar (Same day)
     * * `UGX` - Ugandan Shilling
     * * `UGS` - Ugandan Shilling (1966–1987)
     * * `UAH` - Ukrainian Hryvnia
     * * `UAK` - Ukrainian Karbovanets
     * * `AED` - United Arab Emirates Dirham
     * * `UYW` - Uruguayan Nominal Wage Index Unit
     * * `UYU` - Uruguayan Peso
     * * `UYP` - Uruguayan Peso (1975–1993)
     * * `UYI` - Uruguayan Peso (Indexed Units)
     * * `UZS` - Uzbekistani Som
     * * `VUV` - Vanuatu Vatu
     * * `VES` - Venezuelan Bolívar
     * * `VEB` - Venezuelan Bolívar (1871–2008)
     * * `VEF` - Venezuelan Bolívar (2008–2018)
     * * `VND` - Vietnamese Dong
     * * `VNN` - Vietnamese Dong (1978–1985)
     * * `CHE` - WIR Euro
     * * `CHW` - WIR Franc
     * * `XOF` - West African CFA Franc
     * * `YDD` - Yemeni Dinar
     * * `YER` - Yemeni Rial
     * * `YUN` - Yugoslavian Convertible Dinar (1990–1992)
     * * `YUD` - Yugoslavian Hard Dinar (1966–1990)
     * * `YUM` - Yugoslavian New Dinar (1994–2002)
     * * `YUR` - Yugoslavian Reformed Dinar (1992–1993)
     * * `ZWN` - ZWN
     * * `ZRN` - Zairean New Zaire (1993–1998)
     * * `ZRZ` - Zairean Zaire (1971–1993)
     * * `ZMW` - Zambian Kwacha
     * * `ZMK` - Zambian Kwacha (1968–2012)
     * * `ZWD` - Zimbabwean Dollar (1980–2008)
     * * `ZWR` - Zimbabwean Dollar (2008)
     * * `ZWL` - Zimbabwean Dollar (2009)
     * @type {CurrencyEnum}
     * @memberof Payment
     */
    currency?: CurrencyEnum | null;
    /**
     * The payment's exchange rate.
     * @type {string}
     * @memberof Payment
     */
    exchange_rate?: string | null;
    /**
     * The company the payment belongs to.
     * @type {string}
     * @memberof Payment
     */
    company?: string | JSONValue | null;
    /**
     * The total amount of money being paid to the supplier, or customer, after taxes.
     * @type {number}
     * @memberof Payment
     */
    total_amount?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof Payment
     */
    tracking_categories?: Array<string> | JSONValue;
    /**
     * When the third party's payment entry was updated.
     * @type {Date}
     * @memberof Payment
     */
    remote_updated_at?: Date | null;
    /**
     * Indicates whether or not this object has been deleted by third party webhooks.
     * @type {boolean}
     * @memberof Payment
     */
    readonly remote_was_deleted?: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Payment
     */
    readonly field_mappings?: { [key: string]: any; } | null;
    /**
     * This is the datetime that this object was last updated by Merge
     * @type {Date}
     * @memberof Payment
     */
    readonly modified_at?: Date;
    /**
     * 
     * @type {Array<RemoteData>}
     * @memberof Payment
     */
    readonly remote_data?: Array<RemoteData> | null;
}

export function PaymentFromJSON(json: JSONValue): Payment | undefined {
    return PaymentFromJSONTyped(json);
}

export function PaymentFromJSONTyped(json: JSONValue): Payment | undefined {
    if ((json === undefined) || (json === null)) {
        return undefined;
    }

    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'remote_id': !exists(json, 'remote_id') ? undefined : json['remote_id'],
        'transaction_date': !exists(json, 'transaction_date') ? undefined : (json['transaction_date'] === null ? null : new Date(json['transaction_date'])),
        'contact': !exists(json, 'contact') ? undefined : json['contact'],
        'account': !exists(json, 'account') ? undefined : json['account'],
        'currency': !exists(json, 'currency') ? undefined : CurrencyEnumFromJSON(json['currency']) as CurrencyEnum,
        'exchange_rate': !exists(json, 'exchange_rate') ? undefined : json['exchange_rate'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'total_amount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'tracking_categories': !exists(json, 'tracking_categories') ? undefined : json['tracking_categories'],
        'remote_updated_at': !exists(json, 'remote_updated_at') ? undefined : (json['remote_updated_at'] === null ? null : new Date(json['remote_updated_at'])),
        'remote_was_deleted': !exists(json, 'remote_was_deleted') ? undefined : json['remote_was_deleted'],
        'field_mappings': !exists(json, 'field_mappings') ? undefined : json['field_mappings'],
        'modified_at': !exists(json, 'modified_at') ? undefined : (new Date(json['modified_at'])),
        'remote_data': !exists(json, 'remote_data') ? undefined : (json['remote_data'] === null ? null : (json['remote_data'] as Array<JSONValue>).map(RemoteDataFromJSON)) as Array<RemoteData>,
    };
}

export function PaymentToJSON(value?: Payment): JSONValue {
    if (value === undefined || value === null) {
        return undefined;
    }

    return {
        
        'remote_id': value.remote_id,
        'transaction_date': value.transaction_date === undefined ? undefined : (value.transaction_date === null ? null : value.transaction_date.toISOString()),
        'contact': value.contact,
        'account': value.account,
        'currency': CurrencyEnumToJSON(value.currency),
        'exchange_rate': value.exchange_rate,
        'company': value.company,
        'total_amount': value.total_amount,
        'tracking_categories': value.tracking_categories,
        'remote_updated_at': value.remote_updated_at === undefined ? undefined : (value.remote_updated_at === null ? null : value.remote_updated_at.toISOString()),
    };
}

