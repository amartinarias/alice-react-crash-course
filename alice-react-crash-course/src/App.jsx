
import './App.css'
import PostList from './components/PostList.jsx'
import MainHeader from './components/MainHeader.jsx'
import { useState } from 'react'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function hideModalHandler() {
    console.log("running", modalIsVisible)
    setModalIsVisible(false)
  }

  function showModalHandler() {
    setModalIsVisible(true)
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />

      <main>
        <PostList modalIsVisible={modalIsVisible} onHidePost={hideModalHandler} />
      </main>
    </>)
}

export default App
