import axios from 'axios'
import { Country, State, City } from 'country-state-city'

export const Newcountries = Country.getAllCountries()

export const states = (code) => {
  let s = State.getStatesOfCountry(code)
  return s
}

export const getLocalCities = async (state) => {
  try {
    let res = await axios({
      method: 'GET',
      url: `https://locus.fkkas.com/api/regions/${state}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res) {
      return res?.data?.data
    }
  } catch (error) {
    return { er: error.response.data }
  }
}
