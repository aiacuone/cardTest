import Image from 'next/image'
import React from 'react'
import Button from './Button'

export function Card({ person }) {
  console.log({ person }, ' L4 @ Card.js')
  return (
    <div class="p-2 flex flex-col bg-white rounded-sm	gap-2">
      <p>{person.name}</p>
      <p>{`isFavourite: ${person.isFavourite}`}</p>
      <Button isSelected={person.isFavourite}>Favourite</Button>
      <img src={person.image} alt="asfdasdf" />
      <p>Groups:</p>
      <ul>
        {person.groups.map((group) => {
          return <li>{group}</li>
        })}
      </ul>
    </div>
  )
}
