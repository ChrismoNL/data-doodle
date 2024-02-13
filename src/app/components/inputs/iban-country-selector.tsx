import { CountryCode } from "ibankit";

export default function IbanCountrySelector({
    country,
    setCountry,
    }: Readonly<{
    country: CountryCode | "*";
    setCountry: (country: CountryCode | "*") => void;
    }>) {
    return (
        <select className="w-48 p-2 bg-white text-black font-bold text-xl" value={country} onChange={(e) => setCountry(e.target.value as CountryCode | "*")} >
            <option value="*">Random</option>
            <option value={CountryCode.AD}>Andorra - AND</option>
            <option value={CountryCode.AE}>United Arab Emirates - ARE</option>
            <option value={CountryCode.AF}>Afghanistan - AFG</option>
            <option value={CountryCode.AG}>Antigua and Barbuda - ATG</option>
            <option value={CountryCode.AI}>Anguilla - AIA</option>
            <option value={CountryCode.AL}>Albania - ALB</option>
            <option value={CountryCode.AM}>Armenia - ARM</option>
            <option value={CountryCode.AO}>Angola - AGO</option>
            <option value={CountryCode.AQ}>Antarctica - ATA</option>
            <option value={CountryCode.AR}>Argentina - ARG</option>
            <option value={CountryCode.AS}>American Samoa - ASM</option>
            <option value={CountryCode.AT}>Austria - AUT</option>
            <option value={CountryCode.AU}>Australia - AUS</option>
            <option value={CountryCode.AW}>Aruba - ABW</option>
            <option value={CountryCode.AX}>\u212Bland Islands - ALA</option>
            <option value={CountryCode.AZ}>Azerbaijan - AZE</option>
            <option value={CountryCode.BA}>Bosnia and Herzegovina - BIH</option>
            <option value={CountryCode.BB}>Barbados - BRB</option>
            <option value={CountryCode.BD}>Bangladesh - BGD</option>
            <option value={CountryCode.BE}>Belgium - BEL</option>
            <option value={CountryCode.BF}>Burkina Faso - BFA</option>
            <option value={CountryCode.BG}>Bulgaria - BGR</option>
            <option value={CountryCode.BH}>Bahrain - BHR</option>
            <option value={CountryCode.BI}>Burundi - BDI</option>
            <option value={CountryCode.BJ}>Benin - BEN</option>
            <option value={CountryCode.BL}>Saint Barth\u00E9lemy - BLM</option>
            <option value={CountryCode.BM}>Bermuda - BMU</option>
            <option value={CountryCode.BN}>Brunei Darussalam - BRN</option>
            <option value={CountryCode.BO}>
              Plurinational State of Bolivia - BOL
            </option>
            <option value={CountryCode.BQ}>
              Bonaire, Sint Eustatius and Saba - BES
            </option>
            <option value={CountryCode.BR}>Brazil - BRA</option>
            <option value={CountryCode.BS}>Bahamas - BHS</option>
            <option value={CountryCode.BT}>Bhutan - BTN</option>
            <option value={CountryCode.BV}>Bouvet Island - BVT</option>
            <option value={CountryCode.BW}>Botswana - BWA</option>
            <option value={CountryCode.BY}>Belarus - BLR</option>
            <option value={CountryCode.BZ}>Belize - BLZ</option>
            <option value={CountryCode.CA}>Canada - CAN</option>
            <option value={CountryCode.CC}>Cocos Islands - CCK</option>
            <option value={CountryCode.CD}>
              The Democratic Republic of the Congo - COD
            </option>
            <option value={CountryCode.CF}>
              Central African Republic - CAF
            </option>
            <option value={CountryCode.CG}>Congo - COG</option>
            <option value={CountryCode.CH}>Switzerland - CHE</option>
            <option value={CountryCode.CI}>Cote d&apos;Ivoire - CIV</option>
            <option value={CountryCode.CK}>Cook Islands - COK</option>
            <option value={CountryCode.CL}>Chile - CHL</option>
            <option value={CountryCode.CM}>Cameroon - CMR</option>
            <option value={CountryCode.CN}>China - CHN</option>
            <option value={CountryCode.CO}>Colombia - COL</option>
            <option value={CountryCode.CR}>Costa Rica - CRI</option>
            <option value={CountryCode.CU}>Cuba - CUB</option>
            <option value={CountryCode.CV}>Cape Verde - CPV</option>
            <option value={CountryCode.CW}>Curacao - CUW</option>
            <option value={CountryCode.CX}>Christmas Island - CXR</option>
            <option value={CountryCode.CY}>Cyprus - CYP</option>
            <option value={CountryCode.CZ}>Czech Republic - CZE</option>
            <option value={CountryCode.DE}>Germany - DEU</option>
            <option value={CountryCode.DJ}>Djibouti - DJI</option>
            <option value={CountryCode.DK}>Denmark - DNK</option>
            <option value={CountryCode.DM}>Dominica - DMA</option>
            <option value={CountryCode.DO}>Dominican Republic - DOM</option>
            <option value={CountryCode.DZ}>Algeria - DZA</option>
            <option value={CountryCode.EC}>Ecuador - ECU</option>
            <option value={CountryCode.EE}>Estonia - EST</option>
            <option value={CountryCode.EG}>Egypt - EGY</option>
            <option value={CountryCode.EH}>Western Sahara - ESH</option>
            <option value={CountryCode.ER}>Eritrea - ERI</option>
            <option value={CountryCode.ES}>Spain - ESP</option>
            <option value={CountryCode.ET}>Ethiopia - ETH</option>
            <option value={CountryCode.FI}>Finland - FIN</option>
            <option value={CountryCode.FJ}>Fiji - FJI</option>
            <option value={CountryCode.FK}>Falkland Islands - FLK</option>
            <option value={CountryCode.FM}>
              Federated States of Micronesia - FSM
            </option>
            <option value={CountryCode.FO}>Faroe Islands - FRO</option>
            <option value={CountryCode.FR}>France - FRA</option>
            <option value={CountryCode.GA}>Gabon - GAB</option>
            <option value={CountryCode.GB}>United Kingdom - GBR</option>
            <option value={CountryCode.GD}>Grenada - GRD</option>
            <option value={CountryCode.GE}>Georgia - GEO</option>
            <option value={CountryCode.GF}>French Guiana - GUF</option>
            <option value={CountryCode.GG}>Guemsey - GGY</option>
            <option value={CountryCode.GH}>Ghana - GHA</option>
            <option value={CountryCode.GI}>Gibraltar - GIB</option>
            <option value={CountryCode.GL}>Greenland - GRL</option>
            <option value={CountryCode.GM}>Gambia - GMB</option>
            <option value={CountryCode.GN}>Guinea - GIN</option>
            <option value={CountryCode.GP}>Guadeloupe - GLP</option>
            <option value={CountryCode.GQ}>Equatorial Guinea - GNQ</option>
            <option value={CountryCode.GR}>Greece - GRC</option>
            <option value={CountryCode.GS}>
              South Georgia and the South Sandwich Islands - SGS
            </option>
            <option value={CountryCode.GT}>Guatemala - GTM</option>
            <option value={CountryCode.GU}>Guam - GUM</option>
            <option value={CountryCode.GW}>Guinea-Bissau - GNB</option>
            <option value={CountryCode.GY}>Guyana - GUY</option>
            <option value={CountryCode.HK}>Hong Kong - HKG</option>
            <option value={CountryCode.HM}>
              Heard Island and McDonald Islands - HMD
            </option>
            <option value={CountryCode.HN}>Honduras - HND</option>
            <option value={CountryCode.HR}>Croatia - HRV</option>
            <option value={CountryCode.HT}>Haiti - HTI</option>
            <option value={CountryCode.HU}>Hungary - HUN</option>
            <option value={CountryCode.ID}>Indonesia - IDN</option>
            <option value={CountryCode.IE}>Ireland - IRL</option>
            <option value={CountryCode.IL}>Israel - ISR</option>
            <option value={CountryCode.IM}>Isle of Man - IMN</option>
            <option value={CountryCode.IN}>India - IND</option>
            <option value={CountryCode.IO}>
              British Indian Ocean Territory - IOT
            </option>
            <option value={CountryCode.IQ}>Iraq - IRQ</option>
            <option value={CountryCode.IR}>
              Islamic Republic of Iran - IRN
            </option>
            <option value={CountryCode.IS}>Iceland - ISL</option>
            <option value={CountryCode.IT}>Italy - ITA</option>
            <option value={CountryCode.JE}>Jersey - JEY</option>
            <option value={CountryCode.JM}>Jamaica - JAM</option>
            <option value={CountryCode.JO}>Jordan - JOR</option>
            <option value={CountryCode.JP}>Japan - JPN</option>
            <option value={CountryCode.KE}>Kenya - KEN</option>
            <option value={CountryCode.KG}>Kyrgyzstan - KGZ</option>
            <option value={CountryCode.KH}>Cambodia - KHM</option>
            <option value={CountryCode.KI}>Kiribati - KIR</option>
            <option value={CountryCode.KM}>Comoros - COM</option>
            <option value={CountryCode.KN}>Saint Kitts and Nevis - KNA</option>
            <option value={CountryCode.KP}>
              Democratic People&apos;s Republic of Korea - PRK
            </option>
            <option value={CountryCode.KR}>Republic of Korea - KOR</option>
            <option value={CountryCode.KW}>Kuwait - KWT</option>
            <option value={CountryCode.KY}>Cayman Islands - CYM</option>
            <option value={CountryCode.KZ}>Kazakhstan - KAZ</option>
            <option value={CountryCode.LA}>
              Lao People&apos;s Democratic Republic - LAO
            </option>
            <option value={CountryCode.LB}>Lebanon - LBN</option>
            <option value={CountryCode.LC}>Saint Lucia - LCA</option>
            <option value={CountryCode.LI}>Liechtenstein - LIE</option>
            <option value={CountryCode.LK}>Sri Lanka - LKA</option>
            <option value={CountryCode.LR}>Liberia - LBR</option>
            <option value={CountryCode.LS}>Lesotho - LSO</option>
            <option value={CountryCode.LT}>Lithuania - LTU</option>
            <option value={CountryCode.LU}>Luxembourg - LUX</option>
            <option value={CountryCode.LV}>Latvia - LVA</option>
            <option value={CountryCode.LY}>Libya - LBY</option>
            <option value={CountryCode.MA}>Morocco - MAR</option>
            <option value={CountryCode.MC}>Monaco - MCO</option>
            <option value={CountryCode.MD}>Republic of Moldova - MDA</option>
            <option value={CountryCode.ME}>Montenegro - MNE</option>
            <option value={CountryCode.MF}>Saint Martin - MAF</option>
            <option value={CountryCode.MG}>Madagascar - MDG</option>
            <option value={CountryCode.MH}>Marshall Islands - MHL</option>
            <option value={CountryCode.MK}>
              The former Yugoslav Republic of Macedonia - MKD
            </option>
            <option value={CountryCode.ML}>Mali - MLI</option>
            <option value={CountryCode.MM}>Myanmar - MMR</option>
            <option value={CountryCode.MN}>Mongolia - MNG</option>
            <option value={CountryCode.MO}>Macao - MAC</option>
            <option value={CountryCode.MP}>
              Northern Mariana Islands - MNP
            </option>
            <option value={CountryCode.MQ}>Martinique - MTQ</option>
            <option value={CountryCode.MR}>Mauritania - MRT</option>
            <option value={CountryCode.MS}>Montserrat - MSR</option>
            <option value={CountryCode.MT}>Malta - MLT</option>
            <option value={CountryCode.MU}>Mauritius - MUS</option>
            <option value={CountryCode.MV}>Maldives - MDV</option>
            <option value={CountryCode.MW}>Malawi - MWI</option>
            <option value={CountryCode.MX}>Mexico - MEX</option>
            <option value={CountryCode.MY}>Malaysia - MYS</option>
            <option value={CountryCode.MZ}>Mozambique - MOZ</option>
            <option value={CountryCode.NA}>Namibia - NAM</option>
            <option value={CountryCode.NC}>New Caledonia - NCL</option>
            <option value={CountryCode.NE}>Niger - NER</option>
            <option value={CountryCode.NF}>Norfolk Island - NFK</option>
            <option value={CountryCode.NG}>Nigeria - NGA</option>
            <option value={CountryCode.NI}>Nicaragua - NIC</option>
            <option value={CountryCode.NL}>Netherlands - NLD</option>
            <option value={CountryCode.NO}>Norway - NOR</option>
            <option value={CountryCode.NP}>Nepal - NPL</option>
            <option value={CountryCode.NR}>Nauru - NRU</option>
            <option value={CountryCode.NU}>Niue - NIU</option>
            <option value={CountryCode.NZ}>New Zealand - NZL</option>
            <option value={CountryCode.OM}>Oman - OMN</option>
            <option value={CountryCode.PA}>Panama - PAN</option>
            <option value={CountryCode.PE}>Peru - PER</option>
            <option value={CountryCode.PF}>French Polynesia - PYF</option>
            <option value={CountryCode.PG}>Papua New Guinea - PNG</option>
            <option value={CountryCode.PH}>Philippines - PHL</option>
            <option value={CountryCode.PK}>Pakistan - PAK</option>
            <option value={CountryCode.PL}>Poland - POL</option>
            <option value={CountryCode.PM}>
              Saint Pierre and Miquelon - SPM
            </option>
            <option value={CountryCode.PN}>Pitcairn - PCN</option>
            <option value={CountryCode.PR}>Puerto Rico - PRI</option>
            <option value={CountryCode.PS}>
              Occupied Palestinian Territory - PSE
            </option>
            <option value={CountryCode.PT}>Portugal - PRT</option>
            <option value={CountryCode.PW}>Palau - PLW</option>
            <option value={CountryCode.PY}>Paraguay - PRY</option>
            <option value={CountryCode.QA}>Qatar - QAT</option>
            <option value={CountryCode.RE}>R\u00E9union - REU</option>
            <option value={CountryCode.RO}>Romania - ROU</option>
            <option value={CountryCode.RS}>Serbia - SRB</option>
            <option value={CountryCode.RU}>Russian Federation - RUS</option>
            <option value={CountryCode.RW}>Rwanda - RWA</option>
            <option value={CountryCode.SA}>Saudi Arabia - SAU</option>
            <option value={CountryCode.SB}>Solomon Islands - SLB</option>
            <option value={CountryCode.SC}>Seychelles - SYC</option>
            <option value={CountryCode.SD}>Sudan - SDN</option>
            <option value={CountryCode.SE}>Sweden - SWE</option>
            <option value={CountryCode.SG}>Singapore - SGP</option>
            <option value={CountryCode.SH}>
              Saint Helena, Ascension and Tristan da Cunha - SHN
            </option>
            <option value={CountryCode.SI}>Slovenia - SVN</option>
            <option value={CountryCode.SJ}>Svalbard and Jan Mayen - SJM</option>
            <option value={CountryCode.SK}>Slovakia - SVK</option>
            <option value={CountryCode.SL}>Sierra Leone - SLE</option>
            <option value={CountryCode.SM}>San Marino - SMR</option>
            <option value={CountryCode.SN}>Senegal - SEN</option>
            <option value={CountryCode.SO}>Somalia - SOM</option>
            <option value={CountryCode.SR}>Suriname - SUR</option>
            <option value={CountryCode.SS}>South Sudan - SSD</option>
            <option value={CountryCode.ST}>Sao Tome and Principe - STP</option>
            <option value={CountryCode.SV}>El Salvador - SLV</option>
            <option value={CountryCode.SX}>Sint Maarten - SXM</option>
            <option value={CountryCode.SY}>Syrian Arab Republic - SYR</option>
            <option value={CountryCode.SZ}>Swaziland - SWZ</option>
            <option value={CountryCode.TC}>
              Turks and Caicos Islands - TCA
            </option>
            <option value={CountryCode.TD}>Chad - TCD</option>
            <option value={CountryCode.TF}>
              French Southern Territories - ATF
            </option>
            <option value={CountryCode.TG}>Togo - TGO</option>
            <option value={CountryCode.TH}>Thailand - THA</option>
            <option value={CountryCode.TJ}>Tajikistan - TJK</option>
            <option value={CountryCode.TK}>Tokelau - TKL</option>
            <option value={CountryCode.TL}>Timor-Leste - TLS</option>
            <option value={CountryCode.TM}>Turkmenistan - TKM</option>
            <option value={CountryCode.TN}>Tunisia - TUN</option>
            <option value={CountryCode.TO}>Tonga - TON</option>
            <option value={CountryCode.TR}>Turkey - TUR</option>
            <option value={CountryCode.TT}>Trinidad and Tobago - TTO</option>
            <option value={CountryCode.TV}>Tuvalu - TUV</option>
            <option value={CountryCode.TW}>
              Taiwan, Province of China - TWN
            </option>
            <option value={CountryCode.TZ}>
              United Republic of Tanzania - TZA
            </option>
            <option value={CountryCode.UA}>Ukraine - UKR</option>
            <option value={CountryCode.UG}>Uganda - UGA</option>
            <option value={CountryCode.UM}>
              United States Minor Outlying Islands - UMI
            </option>
            <option value={CountryCode.US}>United States - USA</option>
            <option value={CountryCode.UY}>Uruguay - URY</option>
            <option value={CountryCode.UZ}>Uzbekistan - UZB</option>
            <option value={CountryCode.VA}>Holy See - VAT</option>
            <option value={CountryCode.VC}>
              Saint Vincent and the Grenadines - VCT
            </option>
            <option value={CountryCode.VE}>
              Bolivarian Republic of Venezuela - VEN
            </option>
            <option value={CountryCode.VG}>British Virgin Islands - VGB</option>
            <option value={CountryCode.VI}>Virgin Islands, U.S. - VIR</option>
            <option value={CountryCode.VN}>Viet Nam - VNM</option>
            <option value={CountryCode.VU}>Vanuatu - VUT</option>
            <option value={CountryCode.WF}>Wallis and Futuna - WLF</option>
            <option value={CountryCode.WS}>Samoa - WSM</option>
            <option value={CountryCode.XK}>Kosovo - UNK</option>
            <option value={CountryCode.YE}>Yemen - YEM</option>
            <option value={CountryCode.YT}>Mayotte - MYT</option>
            <option value={CountryCode.ZA}>South Africa - ZAF</option>
            <option value={CountryCode.ZM}>Zambia - ZMB</option>
            <option value={CountryCode.ZW}>Zimbabwe - ZWE</option>
          </select>
    );
    }