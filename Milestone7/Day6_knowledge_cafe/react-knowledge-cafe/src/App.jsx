import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
function App() {
  // const [count, setCount] = useState(0)
  const [bookmarks, setBookmarks]=useState([]);
  const handleAddToBookmark=blog=>{
    console.log('Bookmark adding soon!')
  }
  return (
    <>
      {/* <h1 className='text-6xl bg-red-300' >Knowledge Cafe</h1> */}
      <Header></Header>
      <div className='md:flex max-w-7xl '>   
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div> 
    </>
  )
}

export default App
