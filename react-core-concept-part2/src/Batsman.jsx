import { useState } from "react"

export default function Batsman(){
          const [Runs , setRuns] = useState(0);
          const [sixs,setSixs]=useState(0);
       
       
          const  handleSingle =() =>{
           const updateRuns = Runs + 1 ;
           setRuns(updateRuns);
          }

          const  handleFour =() =>{
           const updateRuns = Runs + 4 ;
           setRuns(updateRuns);
          }

          const  handleSix =() =>{
           const updateRuns = Runs + 6 ;
           const countSixs = sixs + 1 ;
           setSixs(countSixs);
           setRuns(updateRuns);
          }



    return(
        <div>
            <h3>Player : Bangla Batsman</h3>
            <h2><small> Sixs : {sixs}</small></h2>
            
            {
                Runs >= 50 && <p>Your score 50 .</p> 
            }
            <h1> Total score : {Runs} </h1>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}