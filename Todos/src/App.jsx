import { useState } from 'react'
import './App.css'
import TodoApp from "@/components/TodoApp"
import Navbar from './components/navbar'

function App() {
  return (
    <>
    <Navbar />
    <TodoApp />
    </>
  )
}

export default App
