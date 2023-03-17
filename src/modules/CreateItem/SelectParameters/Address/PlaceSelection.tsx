import React from 'react'

const ListItem = ({ title }) => {
  return <li className='cursor-pointer py-2 px-2 hover:bg-zinc-200'>{title}</li>
}

const List = () => {
  return (
    <ul className='border'>
      <ListItem title='Москва ' />
      <ListItem title='Санкт-Петербург' />
      <ListItem title='Казань' />
      <ListItem title='Петрозаводск ул чистая дом 2 квартира 3' />
      <ListItem title='самара' />
    </ul>
  )
}

const PlaceSelection = () => {
  return (
    <div>
      <input
        className='w-full border py-2 px-4'
        placeholder='Начните вводить адрес, а потом выберете из списка'
        type='text'
      />
      <List />
    </div>
  )
}

export default PlaceSelection
