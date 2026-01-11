import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [joke,setJoke]=useState()
  const [e,setE]=useState("")
  const getJoke=async()=>{
    try{
    const result=await fetch("https://official-joke-api.appspot.com/random_joke//").then(res=>res.json()).then(data=>setJoke(data)).catch(e=>setE(e))
    console.log(result)}
    catch(e){
      console.log(e)
    }
  }
  return <div className="container">
    <div className="card">
      <h2>Random Joke</h2>
      <p className="">Click the button to fetch a fresh one.</p>
      <button classname=""onClick={()=>getJoke()}>Fetch joke</button>
      {joke?<div className="">
        <p className="">{joke?.setup}</p>
        <p className="">{joke?.punchline}</p>
      </div>:e? <div className="">
        <p className="err">Could not fetch a joke. Try again.</p>
        <a href="/" className="">Try again</a>
      </div>:
      <div className="">No joke yet.</div>
      }
    </div>
  </div>
}

export default App
