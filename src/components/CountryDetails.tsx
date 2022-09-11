import React from "react"
import { CountryInterface } from "../models"

const CountryDetails = (props: CountryInterface) => {
  const { name, flag } = props

  return (
    <div className="country-details">
      <img className="flag" src={flag} alt="flag" />
    </div>
  )
}

export default CountryDetails
