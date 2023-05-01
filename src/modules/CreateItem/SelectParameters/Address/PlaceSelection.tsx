import React, { RefObject, useRef, useState } from 'react'

const ListItem = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <li onClick={onClick} className='cursor-pointer py-2 px-2 hover:bg-zinc-200'>
      {title}
    </li>
  )
}

type ListProps = {
  places: Array<any>
  handleLocation: (locationString: string, lat: number, lon: number) => void
  handleIsMapFly: (isFly: boolean) => void
  isListOpen: boolean
  handleList: () => void
  handelPlaceValue: (subtitle: string) => void
}

const List = ({
  places,
  handleLocation,
  handleIsMapFly,
  isListOpen,
  handleList,
  handelPlaceValue
}: ListProps) => {
  const list = places.map((place, ind) => {
    const handleClick = () => {
      handleLocation(place.value, place.data.geo_lat, place.data.geo_lon)
      handleIsMapFly(true)
      handleList()
      handelPlaceValue(place.value)
    }
    return <ListItem key={ind} title={place.value} onClick={handleClick} />
  })

  if (!isListOpen || list.length == 0) return null
  return <ul className='border'>{list}</ul>
}

type SelectionInputProps = {
  handleChange: () => void
  inputRef: RefObject<HTMLInputElement>
  handleList: () => void
}

const SelectionInput = ({ handleChange, inputRef, handleList }: SelectionInputProps) => (
  <input
    className='w-full border py-2 px-4'
    placeholder='Начните вводить адрес, а потом выберете из списка'
    onChange={handleChange}
    onClick={handleList}
    type='text'
    ref={inputRef}
  />
)

type PlaceSelectionProps = {
  handleLocation: (locationString: string, lat: number, lon: number) => void
  handleIsMapFly: (isFly: boolean) => void
}
const PlaceSelection = ({ handleLocation, handleIsMapFly }: PlaceSelectionProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [places, setPlaces] = useState<string[]>([])
  const [isListOpen, toggleList] = useState<boolean>(false)

  const handleRequest = async () => {
    const query = inputRef.current?.value
    if (!query) return

    const res = await fetch('http://localhost:3000/api/location/findPlaces', {
      method: 'POST',
      body: query
    })
    const data = await res.json()
    const places = data.suggestions.slice(0, 5)
    setPlaces(places)
  }

  const handleList = () => {
    toggleList(prev => !prev)
  }

  const handleInputValue = (value: string) => {
    if (!inputRef.current?.value) return
    inputRef.current.value = value
  }

  return (
    <div>
      <SelectionInput handleList={handleList} handleChange={handleRequest} inputRef={inputRef} />
      <List
        isListOpen={isListOpen}
        handleList={handleList}
        handleIsMapFly={handleIsMapFly}
        handleLocation={handleLocation}
        handelPlaceValue={handleInputValue}
        places={places}
      />
    </div>
  )
}

export default PlaceSelection
