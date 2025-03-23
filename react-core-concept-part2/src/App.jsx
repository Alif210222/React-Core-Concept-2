
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'

function App() {
      function handleClick(){
        alert("i am clickd")
      }
      // nrml arry function
      const handleClick2 = () =>{
        alert(" clickd")
      }

      // event add with perameter
      const handleClick3 = (number) =>{
        const newNumber = number + 5 ;
        alert(newNumber)
      }

      // batsman state function
      

  return (
    <>
     
      <h3>Vite + React</h3> 

      <Batsman></Batsman>

      <Counter></Counter>



      <button onClick={handleClick}>Click Me </button>
      <button onClick={handleClick2}>Click Me 2 </button>
      
      <button onClick={()=>handleClick3(10) }>Click 3</button>
    
      
    </>
  )
}

export default App
