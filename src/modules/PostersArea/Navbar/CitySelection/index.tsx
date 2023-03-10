'use client'

import React, { useRef, useState } from 'react'

import SelectionInput from '@/modules/PostersArea/Navbar/CitySelection/SelectionInput'
import { CITY_API_KEY } from '@/modules/PostersArea/Navbar/CitySelection/constants'

const CitySelection: any = () => {
  const inputRef = useRef<any>(null)
  const citiesRef = useRef<any>([])
  const [cities, setCities] = useState([])

  const getCityData = async (query) => {
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + CITY_API_KEY
      },
      body: JSON.stringify({ query })
    }

    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    return data.suggestions
  }

  const handleChange = async () => {
    const query = inputRef?.current?.value
    if (!query) {
      setCities([])
      citiesRef.current = []
      return
    }
    const data = await getCityData(query)
    const newCities = data.slice(0, 5).map((cityData) => cityData.value)
    citiesRef.current = newCities

    setTimeout(() => {
      setCities(citiesRef.current)
    }, 1000)
  }

  return <SelectionInput cities={cities} handleChange={handleChange} inputRef={inputRef} />
}

export default CitySelection
