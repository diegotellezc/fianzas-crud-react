import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BASE_URL } from '../constants'
import Swal from 'sweetalert2'
import RequestsModal from '../components/RequestsModal'
import RequestsList from '../components/RequestsList'


const Services = () => {
  const [requests, setRequests] = useState([])
  const [isRequestIdToEdit, setIsRequestIdToEdit] = useState()
  const [isShowedForm, setIsShowedForm] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const submit = (data) => {
    if(isRequestIdToEdit){
      editRequest(data)
    } else {
      createRequest(data)
    }

    Swal.fire({
      icon: 'success',
      title: 'Gracias por dejar tu reclamo. Tu opinión es muy importante para nosotros.',
      showConfirmButton: false,
      timer: 2500
    })
  }
  

  const createRequest = (data) => {
    const URL = BASE_URL + "/requests/"
    
    axios.post(URL, data)
    .then(() => {
      getAllRequests()
      setIsShowedForm(false)
    })
    .catch((err) => console.log(err))
  }

  const deleteRequest = (id) => {
    const URL = BASE_URL + `/requests/${id}/`

    axios.delete(URL)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Reclamo eliminado.',
        showConfirmButton: false,
        timer: 1500
      })
      getAllRequests()
    })
    .catch((err) => console.log(err))
  }

  const editRequest = (data) => {
    const URL = BASE_URL + `/requests/${isRequestIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllRequests()
      setIsShowedForm(!isShowedForm)
      setIsRequestIdToEdit()
    })
    .catch((err) => console.log(err))
  }
  
  const handleClickEdit = (data) => {
    setIsShowedForm((isShowedForm) => !isShowedForm )
    reset(data)
    setIsRequestIdToEdit(data.id)
  }
  
  const getAllRequests = () => {
    const URL = BASE_URL + "/requests/"

    axios.get(URL)
    .then((res) => setRequests(res.data.requests))
    .catch((err) => console.log(err))
  }
  

  useEffect(() => {
    getAllRequests()
  }, [])

  return (
    <main className="flex-grow relative px-6 lg:px-40">
          <RequestsModal isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} register={register} handleSubmit={handleSubmit} submit={submit} reset={reset} setIsRequestIdToEdit={setIsRequestIdToEdit} isRequestIdToEdit={isRequestIdToEdit} errors={errors} />

          <RequestsList requests={requests} deleteRequest={deleteRequest} handleClickEdit={handleClickEdit} isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} />
          
    </main>
  )
}

export default Services