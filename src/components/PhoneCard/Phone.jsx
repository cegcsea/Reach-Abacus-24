import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const Phone = ({ name, phone }) => {
  return (
    <div className='text-xl font-bold py-4 pr-4 text-[#ABB2BF]'>
      <div>
        {name}
      </div>
      <div className='pt-2 flex flex-wrap text-lg'>
        <span className='text-[#C778DD]'>
          <FaPhoneAlt className='mr-3 pt-1' />
        </span>
        {phone}
      </div>
    </div>

  )
}

export default Phone;