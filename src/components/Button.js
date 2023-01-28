import React from 'react'

export default function Button({ children, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      class={`p-2 ${isSelected ? 'bg-gray-200' : 'bg-gray-300 rounded-md'}`}>
      {children}
    </button>
  )
}
