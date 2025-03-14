import { useEffect, useState } from "react"
import './App.css'
import TipBtnComponent from "./Components/TipBtnComponent"



function App() {
  const [tip, setTip] = useState()
  const [customTip, setCustomTip] = useState()
  const[bill, setBill] = useState()
  const[people, setPeople] = useState()
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)

  


  const calculateTip = () => {
    if (bill > 0 && tip >= 0 && people > 0) 
      {
            setTipAmount(parseFloat(((bill * (tip / 100)) / people).toFixed(2)))
            setTotal(parseFloat((bill / people).toFixed(2)))
          console.log("working on it...")
      }
      else
      {
        console.log("somethings missing...")
      }
    }

    const reset = () => {
      setTip(0)
      
      setBill(0)
      setPeople(0)
      setTipAmount(0)
      setTotal(0)
    }

    useEffect(() => {
      calculateTip();
    }, [bill, tip, people]);



useEffect(() => {
  console.log(tip)
},[tip])

  return (
    <>
     <div className='bg-[#c5e4e7] w-screen h-screen flex flex-col items-center justify-center '>
      <img className='h-[48px] w-[80px] mb-20' src="../images/logo.svg" alt="the splitter logo" />
      

      <div className='bg-white md:w-[90%] lg:w-[1000px] h-auto rounded-2xl flex flex-col md:flex-row items-center p-10 justify-center'>

       

          <div className="w-full h-auto flex flex-col items-center me-2">

          <p className="text-start self-start text-[#5e7a7d] mb-3 text-[18px] font-medium">Bill</p>
          <div className="w-full h-auto flex flex-row items-center bg-[#f4fafa] px-2 rounded-lg hover:border-4 hover:border-[#26c0ab] mb-2">
            <img src="../images/icon-dollar.svg" alt="a dollar sign"/>
            <input value={bill} onChange={(e) => setBill(parseFloat(e.target.value) || 0)} type="text" placeholder="0" className=" text-end h-[60px] w-full text-[24px] font-bold bg-[#f4fafa] text-[#00494d] flex items-center justify-center" />
          </div>

                      <p className="text-start self-start text-[#5e7a7d] mb-3 text-[18px] font-medium row-start-1">Select Tip %</p>
            <div className="w-full h-auto justify-between pb-3 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2">
              <TipBtnComponent text={5} tipSetter={setTip} switchCheck={tip} extraClass={"col-start-1 row-start-1 md:col-start-1 md:row-start-1"}/>
              <TipBtnComponent text={10} tipSetter={setTip} switchCheck={tip} extraClass={"col-start-2 row-start-1 md:col-start-2 md:row-start-1"}/>
              <TipBtnComponent text={15} tipSetter={setTip} switchCheck={tip} extraClass={"col-start-1 row-start-2 md:col-start-3 md:row-start-1"}/>
              <TipBtnComponent text={25} tipSetter={setTip} switchCheck={tip} extraClass={"col-start-2 row-start-2 md:col-start-1 md:row-start-2"}/>
              <TipBtnComponent text={50} tipSetter={setTip} switchCheck={tip} extraClass={"col-start-1 row-start-3 md:col-start-2 md:row-start-2"}/>
              <input onChange={(e) => setTip(parseFloat(e.target.value) || 0)}  type="text" placeholder="Custom" className=" text-center h-[60px] w-[90%] text-[24px] font-bold bg-[#f4fafa] text-[#00494d] hover:border-4 hover:border-[#26c0ab] rounded-lg flex items-center justify-center col-start-2 row-start-3 md:col-start-3 md:row-start-2" />
            </div>

            <p className="text-start self-start text-[#5e7a7d] mb-3 text-[18px] font-medium">Number of people</p>
          <div className="w-full h-auto flex flex-row items-center bg-[#f4fafa] px-2 rounded-lg hover:border-4 hover:border-[#26c0ab] mb-2">
            <img src="../images/icon-person.svg" alt="a dollar sign"/>
            <input value={people} onChange={(e) => setPeople(parseFloat(e.target.value) || 0)} type="text" placeholder="0" className=" text-end h-[60px] w-full text-[24px] font-bold bg-[#f4fafa] text-[#00494d] flex items-center justify-center" />
          </div>
          
          </div>
  
        <div className="w-full h-auto min-h-[320px] md:h-full md:min-h-0 rounded-2xl flex flex-col relative items-center ms-2 bg-[#00494d]">
            
          <div className="w-[80%] flex justify-between items-center mt-12">

            <div>
              <h2 className="md:text-[16px] text-[14px] text-white">Tip Amount</h2>
              <p className="md:text-[14px] text-[12px] text-[#5e7a7d]">/ people</p>
            </div>

            <p className="md:text-[38px] text-[32px] text-[#26c0ab] font-medium">${tipAmount}</p>

          </div>

          <div className="w-[80%] flex justify-between items-center mt-4">

          <div>
            <h2 className="md:text-[16px] text-[14px] text-white">Total</h2>
            <p className="md:text-[14px] text-[12px] text-[#5e7a7d]">/ people</p>
          </div>

          <p className="md:text-[38px] text-[32px] text-[#26c0ab] font-medium">${total}</p>

          </div>

          <div onClick={reset} className="w-[80%] h-[50px] text-[22px] text-[#00494d] hover:bg-[#c5e4e7] bg-[#26c0ab] text-center flex justify-center items-center absolute bottom-[30px] rounded-lg ">
            RESET
          </div>

        

        </div>

        

        

      </div>

     </div>
    </>
  )
}

export default App
