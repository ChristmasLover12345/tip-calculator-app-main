import React, { useEffect, useState } from 'react'

const TipBtnComponent = (props) => {
  const [style, setStyle] = useState()

  const doThing = () => {
    props.tipSetter(props.text)
  }

useEffect(() => { 


  const switchFunc = () => {
  if (props.text === props.switchCheck)
  { 
    setStyle(`h-[60px] w-[90%] hover:bg-[#c5e4e7] bg-[#26c0ab] text-[#00494d] hover:text-[#00494d] rounded-lg flex items-center justify-center ${props.extraClass}`)
  }
  else
  {
    setStyle(`h-[60px] w-[90%] bg-[#00494d] text-[#f4fafa] hover:bg-[#c5e4e7] hover:text-[#00494d] rounded-lg flex items-center justify-center ${props.extraClass}`)  
  }

}

switchFunc()

  

 }, [props.switchCheck])

  return (
    <div onClick={doThing} className={style}>

        <span className='text-[24px] font-medium '>{`${props.text}%`}</span>
        
    </div>
  )
}

export default TipBtnComponent