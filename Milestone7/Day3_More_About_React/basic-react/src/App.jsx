import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './countTari'
import Team from './team'
import Users from './usage'
import Friends from './friends'
function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('button-clicked');
  }
  const handleClick2=()=>{
    alert('Onclick-Done');
  }
  const addToFive=(num)=>{
    alert(num+5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=>{alert('Third Button');}}>Third Button</button>
      <button onClick={()=>{alert(()=>{
        addToFive(5);
      });}}>4th Button</button>
    </>
  )
}

export default App
