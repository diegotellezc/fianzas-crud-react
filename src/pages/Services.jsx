import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BASE_URL } from '../constants'
import Swal from 'sweetalert2'
import ServicesList from '../components/ServicesList'
import ServicesModal from '../components/ServicesModal'


const Services = () => {
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
      title: 'Solicitud exitosa. Nos pondremos en contacto pronto.',
      showConfirmButton: false,
      timer: 2500
    })
  }
  

  const createService = (data) => {
    const URL = BASE_URL + "/services/"
    
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
        title: 'Solicitud eliminada.',
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
    <main className="flex-grow relative px-6 lg:px-40">
          <ServicesModal isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} register={register} handleSubmit={handleSubmit} submit={submit} reset={reset} setIsServiceIdToEdit={setIsServiceIdToEdit} isServiceIdToEdit={isServiceIdToEdit} errors={errors} />

          <ServicesList services={services} deleteService={deleteService} handleClickEdit={handleClickEdit} isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} />
          
    </main>
  )
}

export default Services