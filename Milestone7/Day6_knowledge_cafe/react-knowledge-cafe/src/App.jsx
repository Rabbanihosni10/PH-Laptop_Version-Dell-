import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-6xl bg-red-300' >Knowledge Cafe</h1> */}
      <Header></Header>
      <main className='md:flex'>   
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main> 
    </>
  )
}

export default App
