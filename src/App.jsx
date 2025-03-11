import TipBtnComponent from "./Components/TipBtnComponent"



function App() {
  

  return (
    <>
     <div className='bg-[#c5e4e7] w-screen h-screen flex flex-col items-center justify-center'>
      <img className='h-[48px] w-[80px] mb-20' src="../images/logo.svg" alt="the splitter logo" />

      <div className='bg-white w-[800px] h-auto rounded-2xl flex flex-col items-center justify-center'>

        <TipBtnComponent text="20%" />

      </div>

     </div>
    </>
  )
}

export default App
