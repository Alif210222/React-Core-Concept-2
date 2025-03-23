import { useState } from "react"

export default function Counter(){

// State use 
         const [count , setCount] = useState(0);
        

// count er value dynamic 
         const handleAdd = ()=>{                         // console.log('add button clicked')                                             
         const newCount = count + 1;                  // setCount(45)
         setCount(newCount);
         }


 // aply css       
            const CounerStyle = {
                border : "2px solid yellow"
            }

            return (
                <div style={CounerStyle}>
                    <h2>Count :{count} </h2>
                    <button onClick={handleAdd}>Add</button>
                </div>
            )
        }