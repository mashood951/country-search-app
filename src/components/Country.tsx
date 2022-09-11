import React, { useState } from "react"
import { CountryInterface } from "../models"
import CountryDetails from "./CountryDetails"

const Country = (props: CountryInterface) => {
  const { name, flag } = props

  const [toggleDetails, setToggleDetails] = useState<boolean>(false)

  const clickHandler = (): void => {
    toggleDetails ? setToggleDetails(false) : setToggleDetails(true)
  }

  return (
    <>
      <div className="country-container" onClick={clickHandler}>
        <div className="title">
          <img className="flag" src={flag} alt="flag" />
          {name}
        </div>
        {/* {flag} */}
      </div>
      {toggleDetails && <CountryDetails {...props} />}
    </>
  )
}

export default Country
