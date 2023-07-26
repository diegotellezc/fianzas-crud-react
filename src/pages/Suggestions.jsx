import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BASE_URL } from '../constants'
import Swal from 'sweetalert2'
import SuggestionsModal from '../components/SuggestionsModal'
import SuggestionsList from '../components/SuggestionsList'


const Services = () => {
  const [suggestions, setSuggestions] = useState([])
  const [isSuggestionIdToEdit, setIsSuggestionIdToEdit] = useState()
  const [isShowedForm, setIsShowedForm] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const submit = (data) => {
    if(isSuggestionIdToEdit){
      editSuggestion(data)
    } else {
      createSuggestion(data)
    }

    Swal.fire({
      icon: 'success',
      title: 'Gracias por dejar tu sugerencia. Tu opinión es muy importante para nosotros.',
      showConfirmButton: false,
      timer: 2500
    })
  }
  

  const createSuggestion = (data) => {
    const URL = BASE_URL + "/suggestions/"
    
    axios.post(URL, data)
    .then(() => {
      getAllSuggestions()
      setIsShowedForm(false)
    })
    .catch((err) => console.log(err))
  }

  const deleteSuggestion = (id) => {
    const URL = BASE_URL + `/suggestions/${id}/`

    axios.delete(URL)
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Sugerencia eliminada.',
        showConfirmButton: false,
        timer: 1500
      })
      getAllSuggestions()
    })
    .catch((err) => console.log(err))
  }

  const editSuggestion = (data) => {
    const URL = BASE_URL + `/suggestions/${isSuggestionIdToEdit}/`

    axios.patch(URL, data)
    .then(() => {
      getAllSuggestions()
      setIsShowedForm(!isShowedForm)
      setIsSuggestionIdToEdit()
    })
    .catch((err) => console.log(err))
  }
  
  const handleClickEdit = (data) => {
    setIsShowedForm((isShowedForm) => !isShowedForm )
    reset(data)
    setIsSuggestionIdToEdit(data.id)
  }
  
  const getAllSuggestions = () => {
    const URL = BASE_URL + "/suggestions/"

    axios.get(URL)
    .then((res) => setSuggestions(res.data.suggestions))
    .catch((err) => console.log(err))
  }
  

  useEffect(() => {
    getAllSuggestions()
  }, [])

  return (
    <main className="flex-grow relative px-6 lg:px-40">
          <SuggestionsModal isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} register={register} handleSubmit={handleSubmit} submit={submit} reset={reset} setIsSuggestionIdToEdit={setIsSuggestionIdToEdit} isSuggestionIdToEdit={isSuggestionIdToEdit} errors={errors} />

          <SuggestionsList suggestions={suggestions} deleteSuggestion={deleteSuggestion} handleClickEdit={handleClickEdit} isShowedForm={isShowedForm} setIsShowedForm={setIsShowedForm} />
          
    </main>
  )
}

export default Services