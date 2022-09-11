import { CountryInterface } from "./models"

const sampleCountry: CountryInterface[] = [
  {
    name: "name",
    latLng: [1, 2],
    capital: ["capital"],
    capitalLatLng: [1.5, 2.5],
    flag: "flag",
    currency: {
      cur: {
        name: "currency name",
        symbol: "sym",
      },
    },
    area: 12345,
    population: 12345678,
    countryCode: "+123",
    region: "region",
    subRegion: "sub region",
    languages: ["eng"],
    timezones: ["UTC+05:00"],
    independent: true,
    unMember: true,
  },
]

export default sampleCountry
