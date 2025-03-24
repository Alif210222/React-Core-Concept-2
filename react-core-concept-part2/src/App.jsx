
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Posts'


// Normal fetch 
        const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())

// Asyns await  fetch
         const fetchFriends = async() =>{
               const res = await  fetch("https://jsonplaceholder.typicode.com/users")
               return res.json();
         }

// Posts Function 
         const fetchPosts = async() =>{
          const res= await fetch("https://jsonplaceholder.typicode.com/posts")
          return res.json();
         }         


function App() {
    const  frindsPromise = fetchFriends();
    const postsPromise = fetchPosts();
     
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

      


  return (
    <>
     
      <h3>Vite + React</h3> 

      <Suspense fallback={<h>Posts ...</h>}>
            <Posts postsPromise={postsPromise} ></Posts>
      </Suspense>


      <Suspense fallback={<h3>Feiends comming...</h3>}>
           <Friends frindsPromise={frindsPromise}></Friends>
      </Suspense>


      <Suspense fallback={<h3>Loading ...</h3>}>
             <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
     

      <Batsman></Batsman>

      <Counter></Counter>



      <button onClick={handleClick}>Click Me </button>
      <button onClick={handleClick2}>Click Me 2 </button>
      
      <button onClick={()=>handleClick3(10) }>Click 3</button>
    
      
    </>
  )
}

export default App
