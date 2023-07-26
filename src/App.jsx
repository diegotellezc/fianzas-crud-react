import { useEffect, useState } from 'react'
import Header from "./components/Header"
import Modal from "./components/Modal"
import ServicesList from "./components/ServicesList"
import Footer from "./components/Footer"
import './App.css'
import axios from 'axios'
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'

const BASE_URL = "http://localhost:3000/api/v1"
// const BASE_URL = "https://users-crud.academlo.tech"

function App() {
  const [services, setServices] = useState([])
  const [isServiceIdToEdit, setIsServiceIdToEdit] = useState()
  const [isShowedForm, setIsShowedForm] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const submit = (data) => {
    if(isServiceIdToEdit){
      editService(data)
    } else {
      createService(data)
    }

    Swal.fire({
      icon: 'success',
      title: 'Successful registration',
      showConfirmButton: false,
      timer: 2500
    })
  }
  

  const createService = (data) => {
    const URL = BASE_URL + "/services/"
    console.log(data)
    
    axios.post(URL, data)
    .then(() => {
      getAllServices()
      setIsShowedForm(false)
    })
    .catch((err) => console.log(err))
  }

  const deleteService = (id) => {
    const URL = BASE_URL + `/services/${id}/`

    axios.delete(URL)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Deleted successfully',
        showConfirmButton: false,
        timer: 1500
      })
      getAllServices()
    })
    .catch((err) => console.log(err))
  }

  const editService = (data) => {
    const URL = BASE_URL + `/services/${isServiceIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllServices()
      setIsShowedForm(!isShowedForm)
      setIsServiceIdToEdit()
    })
    .catch((err) => console.log(err))
  }
  
  const handleClickEdit = (data) => {
    setIsShowedForm((isShowedForm) => !isShowedForm )
    reset(data)
    setIsServiceIdToEdit(data.id)
  }
  
  const getAllServices = () => {
    const URL = BASE_URL + "/services/"

    axios.get(URL)
    .then((res) => setServices(res.data.services))
    .catch((err) => console.log(err))
  }
  

  useEffect(() => {
    getAllServices()
  }, [])

  return (
    <div className="font-sans flex flex-col min-h-screen">
      <Header setIsShowedForm={setIsShowedForm} />

      <main className="flex-grow relative px-40">
        <Modal isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} register={register} handleSubmit={handleSubmit} submit={submit} reset={reset} setIsServiceIdToEdit={setIsServiceIdToEdit} isServiceIdToEdit={isServiceIdToEdit} errors={errors} />

        <ServicesList services={services} deleteService={deleteService} handleClickEdit={handleClickEdit} />
        
      </main>

      <Footer />
    </div>
  )
}

export default App
