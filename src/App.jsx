import { use, useEffect, useState } from "react"
import TipBtnComponent from "./Components/TipBtnComponent"



function App() {
  const [customTip, setCustomTip] = useState()
  const [tip, setTip] = useState()
  const[bill, setBill] = useState()
  const[people, setPeople] = useState()

useEffect(() => {
  console.log(tip)
},[tip])

  return (
    <>
     <div className='bg-[#c5e4e7] w-screen h-screen flex flex-col items-center justify-center'>
      <img className='h-[48px] w-[80px] mb-20' src="../images/logo.svg" alt="the splitter logo" />

      <div className='bg-white w-[800px] h-auto rounded-2xl flex flex-col items-center justify-center'>

        <div className="w-full h-auto flex flex-col md:flex-row items-center ">

          <div className="w-full h-auto flex flex-col items-center">

            <p className="text-start self-start text-[#5e7a7d] mb-3 text-[18px] font-medium">Select Tip %</p>
            <div className="w-full h-auto flex flex-row justify-between pb-3">
              <TipBtnComponent text={5} tipSetter={setTip} />
              <TipBtnComponent text={10} tipSetter={setTip} />
              <TipBtnComponent text={15} tipSetter={setTip} />
            </div>
            <div className="w-full h-auto flex flex-row justify-between">
              <TipBtnComponent text={25} tipSetter={setTip} />
              <TipBtnComponent text={50} tipSetter={setTip} />
              <input  onChange={(e) => setTip(e.target.value)} type="text" placeholder="Custom" className=" text-center h-[60px] w-[125px] text-[24px] font-bold bg-[#f4fafa] text-[#00494d] hover:border-4 hover:border-[#26c0ab] rounded-lg flex items-center justify-center" />
            </div>

          
          </div>

          <div className="w-full h-auto flex flex-col items-center">
            
          </div>

        </div>

        

      </div>

     </div>
    </>
  )
}

export default App
