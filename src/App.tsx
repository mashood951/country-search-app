import React, { useEffect, useState } from "react"
import "./App.css"
import Country from "./components/Country"
import SearchInput from "./components/SearchInput"
import { ApiInterface, CountryInterface } from "./models"
import sampleCountry from "./sampleCountry"

const App: React.FC = () => {
  const [countries, setCountries] = useState<CountryInterface[]>(sampleCountry)
  const [filteredCountries, setFilteredCountries] =
    useState<CountryInterface[]>(sampleCountry)

  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  // const sortStrings = (str1: string, str2: string): number => {
  //   str1 = str1.toLowerCase()
  //   str2 = str2.toLowerCase()
  //   if (str1 == str2) return 0
  //   return str1 > str2 ? 1 : -1
  // }

  useEffect(() => {
    const newCountries: CountryInterface[] = []
    fetch("https://restcountries.com/v3.1/all")
      .then((response: Response) => {
        if (response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data: ApiInterface[]) => {
        data.forEach((country: ApiInterface) => {
          const newCountry: CountryInterface = {
            name: country.name.common,
            latLng: country.latlng,
            capital: country.capital,
            capitalLatLng: country.capitalInfo.latlng,
            flag: country.flags.svg,
            // flag: country.flag,
            currency: country.currencies,
            area: country.area,
            population: country.population,
            countryCode:
              country.idd.suffixes?.length === 1
                ? country.idd.root + country.idd.suffixes[0]
                : country.idd.root,
            region: country.region,
            subRegion: country.subregion,
            languages: Object.hasOwn(country, "languages")
              ? Object.values(country.languages)
              : [],
            timezones: country.timezones,
            independent: country.independent,
            unMember: country.unMember,
          }
          newCountries.push(newCountry)
        })
      })
      .then(() => {
        newCountries.sort((country1, country2) =>
          country1.name.localeCompare(country2.name)
        )
        setFilteredCountries(newCountries)
        setIsLoaded(true)
        setCountries(newCountries)
        console.log(newCountries.map((country) => country))
        // console.log(newCountries)
      })
  }, [])

  return (
    <div className="wrapper">
      <div className="header">
        <SearchInput
          countries={countries}
          filteredCountries={filteredCountries}
          setFilteredCountries={setFilteredCountries}
        />
      </div>
      {isLoaded ? (
        <div className="countries-container">
          {filteredCountries.map((country, key) => {
            return <Country key={key} {...country} />
          })}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}

export default App
