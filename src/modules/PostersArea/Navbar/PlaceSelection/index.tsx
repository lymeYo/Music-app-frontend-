'use client'

import React, { useRef, useState } from 'react'

import SelectionInput from '@/modules/PostersArea/Navbar/PlaceSelection/SelectionInput'

const getPlaces = async (query: string) => {
  const res = await fetch('http://localhost:3000/api/location/findPlaces', {
    method: 'POST',
    body: query
  })
  const body = await res.json()
  return body.suggestions
}

const PlaceSelection: any = () => {
  const inputRef = useRef<any>(null)
  const placesRef = useRef<any>([])
  const [places, setPlaces] = useState([])

  const handleChange = async () => {
    const query = inputRef?.current?.value
    if (!query) {
      setPlaces([])
      placesRef.current = []
      return
    }
    const placeData = await getPlaces(query)
    const newCities = placeData.slice(0, 5).map(cityData => cityData.value)
    placesRef.current = newCities

    setTimeout(() => {
      setPlaces(placesRef.current)
    }, 1000)
  }

  return <SelectionInput cities={places} handleChange={handleChange} inputRef={inputRef} />
}

export default PlaceSelection
