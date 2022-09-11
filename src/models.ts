// export interface CityInterface {
//   id: number
//   name: string
// }

export interface CountryInterface {
  name: string
  latLng: [number, number]
  capital: Array<string>
  capitalLatLng: [number, number]
  flag: string
  currency: Object
  area: number
  population: number
  countryCode: string
  region: string
  subRegion: string
  languages: Array<string>
  timezones: Array<string>
  independent: boolean
  unMember: boolean
}

export interface ApiInterface {
  name: { common: string }
  latlng: [number, number]
  capital: Array<string>
  capitalInfo: { latlng: [number, number] }
  flags: { svg: string }
  // flag: string
  currencies: Object
  area: number
  population: number
  idd: {
    root: string
    suffixes: Array<string>
  }
  region: string
  subregion: string
  languages: Object
  timezones: Array<string>
  independent: boolean
  unMember: boolean
}
