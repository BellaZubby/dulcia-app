import React from 'react'

interface iButton {
    CTA: string
    onClick: () => void
    disabled: boolean
}

const PaginationButton = ({CTA, onClick, disabled}: iButton) => {
  return (
    <button disabled={disabled} onClick={onClick} className={`bg-primary-200 rounded-lg shadow-md hover:bg-primary-50 hover:text-white text-gray-200 font-bold py-2 px-5 ${disabled && "pointer-events-none bg-primary-200/50"}`}>
        {CTA}
    </button>
  )
}

export default PaginationButton 