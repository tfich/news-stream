import { TNewsApiCountry } from '../types'

export function getCountryFromCode(countryCode: string): ICountryInfo {
  return CODE_MAP[countryCode]
}

interface ICountryInfo {
  code: string,
  name: string,
  abbr: TNewsApiCountry
}

const CODE_MAP: { [key: string]: ICountryInfo } = {
  '44': {
      code: '44',
      name: 'United Kingdom',
      abbr: 'gb'
  },
  '212': {
      code: '212',
      name: 'Morocco',
      abbr: 'ma'
  },
  '886': {
      code: '886',
      name: 'Taiwan',
      abbr: 'tw'
  },
  '971': {
      code: '971',
      name: 'United Arab Emirates',
      abbr: 'ae'
  },
  '60': {
      code: '60',
      name: 'Malaysia',
      abbr: 'my'
  },
  '61': {
      code: '61',
      name: 'Australia',
      abbr: 'au'
  },
  '62': {
      code: '62',
      name: 'Indonesia',
      abbr: 'id'
  },
  '63': {
      code: '63',
      name: 'Philippines',
      abbr: 'ph'
  },
  '64': {
      code: '64',
      name: 'New Zealand',
      abbr: 'nz'
  },
  '65': {
      code: '65',
      name: 'Singapore',
      abbr: 'sg'
  },
  '66': {
      code: '66',
      name: 'Thailand',
      abbr: 'th'
  },
  '234': {
      code: '234',
      name: 'Nigeria',
      abbr: 'ng'
  },
  '81': {
      code: '81',
      name: 'Japan',
      abbr: 'jp'
  },
  '86': {
      code: '86',
      name: 'China',
      abbr: 'cn'
  },
  '27': {
      code: '27',
      name: 'South Africa',
      abbr: 'za'
  },
  '20': {
      code: '20',
      name: 'Egypt',
      abbr: 'eg'
  },
  '972': {
      code: '972',
      name: 'Israel',
      abbr: 'il'
  },
  '852': {
      code: '852',
      name: 'Hong Kong',
      abbr: 'hk'
  },
  '49': {
      code: '49',
      name: 'Germany',
      abbr: 'de'
  },
  '46': {
      code: '46',
      name: 'Sweden',
      abbr: 'se'
  },
  '47': {
      code: '47',
      name: 'Norway',
      abbr: 'no'
  },
  '82': {
      code: '82',
      name: 'South Korea',
      abbr: 'kr'
  },
  '43': {
      code: '43',
      name: 'Austria',
      abbr: 'at'
  },
  '40': {
      code: '40',
      name: 'Romania',
      abbr: 'ro'
  },
  '41': {
      code: '41',
      name: 'Switzerland',
      abbr: 'ch'
  },
  '1': {
      code: '1',
      name: 'United States',
      abbr: 'us'
  },
  '7': {
      code: '7',
      name: 'Russia',
      abbr: 'ru'
  },
  '421': {
      code: '421',
      name: 'Slovakia',
      abbr: 'sk'
  },
  '420': {
      code: '420',
      name: 'Czech Republic',
      abbr: 'cz'
  },
  '966': {
      code: '966',
      name: 'Saudi Arabia',
      abbr: 'sa'
  },
  '380': {
      code: '380',
      name: 'Ukraine',
      abbr: 'ua'
  },
  '381': {
      code: '381',
      name: 'Serbia',
      abbr: 'rs'
  },
  '386': {
      code: '386',
      name: 'Slovenia',
      abbr: 'si'
  },
  '91': {
      code: '91',
      name: 'India',
      abbr: 'in'
  },
  '90': {
      code: '90',
      name: 'Turkey',
      abbr: 'tr'
  },
  '58': {
      code: '58',
      name: 'Venezuela',
      abbr: 've'
  },
  '39': {
      code: '39',
      name: 'Italy',
      abbr: 'it'
  },
  '48': {
      code: '48',
      name: 'Poland',
      abbr: 'pl'
  },
  '55': {
      code: '55',
      name: 'Brazil',
      abbr: 'br'
  },
  '54': {
      code: '54',
      name: 'Argentina',
      abbr: 'ar'
  },
  '57': {
      code: '57',
      name: 'Colombia',
      abbr: 'co'
  },
  '30': {
      code: '30',
      name: 'Greece',
      abbr: 'gr'
  },
  '36': {
      code: '36',
      name: 'Hungary',
      abbr: 'hu'
  },
  '53': {
      code: '53',
      name: 'Cuba',
      abbr: 'cu'
  },
  '52': {
      code: '52',
      name: 'Mexico',
      abbr: 'mx'
  },
  '33': {
      code: '33',
      name: 'France',
      abbr: 'fr'
  },
  '353': {
      code: '353',
      name: 'Ireland',
      abbr: 'ie'
  },
  '351': {
      code: '351',
      name: 'Portugal',
      abbr: 'pt'
  },
  '32': {
      code: '32',
      name: 'Belgium',
      abbr: 'be'
  },
  '371': {
      code: '371',
      name: 'Latvia',
      abbr: 'lv'
  },
  '370': {
      code: '370',
      name: 'Lithuania',
      abbr: 'lt'
  },
  '31': {
      code: '31',
      name: 'Netherlands',
      abbr: 'nl'
  },
  '359': {
      code: '359',
      name: 'Bulgaria',
      abbr: 'bg'
  }
}