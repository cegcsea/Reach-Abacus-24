import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

const Phone = ({ name, phone }) => {
  return (
    <div className='text-xl flex justify-between items-center gap-3 font-bold bg-black/20 text-[#ABB2BF] border border-gray-300/40 px-6 py-3 rounded-lg'>
      <div>
        <p>{name}</p>
        <p className='flex flex-wrap text-sm'>
          +91 {phone}
        </p>
      </div>
      <a href='tel:123456789'>
        <motion.div whileHover={{ scale: 1.1 }} className='text-[#C778DD] flex text-base justify-center items-center p-3 rounded-full bg-slate-600/70'>
          <FaPhoneAlt />
        </motion.div>
      </a>
    </div>
  )
}

export default Phone;