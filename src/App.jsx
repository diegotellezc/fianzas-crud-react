import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/v1"

function App() {

  useEffect(() => {
    axios.get(BASE_URL + "/requests")
    .then(res => console.log(res.data.requests))
    .catch(err => console.log(err))
  }, [])


  return (
    <div>Diego</div>
  )
}

export default App
