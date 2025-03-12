import React, { useEffect } from 'react'

const TipBtnComponent = (props) => {
  const [style, setStyle] = React.useState(`h-[60px] w-[90%] bg-[#00494d] text-[#f4fafa] hover:bg-[#26c0ab] hover:text-[#00494d] rounded-lg flex items-center justify-center ${props.extraClass}`)

  const doThing = () => {
    props.tipSetter(props.text)
  }



  return (
    <div onClick={doThing} className={style}>

        <span className='text-[24px] font-medium'>{`${props.text}%`}</span>
        
    </div>
  )
}

export default TipBtnComponent