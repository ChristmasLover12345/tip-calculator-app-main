import React from 'react'

const TipBtnComponent = (props) => {
  return (
    <div className='h-[60px] w-[125px] bg-[#00494d] text-[#f4fafa] hover:bg-[#26c0ab] hover:text-[#00494d] rounded-lg flex items-center justify-center'>

        <span className='text-[24px] font-medium'>{props.text}</span>
        
    </div>
  )
}

export default TipBtnComponent