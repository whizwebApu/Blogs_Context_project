import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Footer = () => {

  const {page, handlePageChange, totalPages} = useContext(AppContext)
  return (
    <div className='border shadow-lg bg-yellow-100 w-full  '>
      <div className=' flex justify-evenly mx-auto m-2'>
        {page > 1 &&
          <button  className='border border-black rounded-lg p-[3px] px-[10px] bg-white shadow-xl' onClick={()=> handlePageChange(page-1)}>
            Previous
          </button>
        }
        {
          page < totalPages &&
         ( <button className='border border-black rounded-lg p-[3px] px-[10px] bg-white shadow-xl' onClick={()=> handlePageChange(page+1)}>
            Next
          </button>)
        }
        <p className='text-lg'>
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Footer