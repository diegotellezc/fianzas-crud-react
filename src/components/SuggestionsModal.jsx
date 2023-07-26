import React from 'react'

const SuggestionsModal = ({ isShowedForm, setIsShowedForm, register, handleSubmit, submit, reset, setIsSuggestionIdToEdit, isSuggestionIdToEdit, errors }) => {
    const handleClickCloseModal = () => {
        setIsShowedForm((isShowedForm) => !isShowedForm)
        reset({
            name: "",
            lastname: "",
            email: "",
            title: "",
            description: ""
        })
        setIsSuggestionIdToEdit()
    }
    


    return (
        <section className={`fixed top-0 left-0 bottom-0 right-0 bg-red flex bg-black/40 justify-center items-center transition-opacity z-20 ${isShowedForm ? "opacity-100 visible" : "opacity-0 invisible"}`}>

            <form onSubmit={handleSubmit(submit)} className='bg-white p-4 grid gap-4 rounded-md w-[300px] relative overflow-y-auto sm:w-[450px] sm:py-6 sm:px-8'>

                <h3 className='text-2xl font-bold text-secondary-color'>{isSuggestionIdToEdit ? "Editar sugerencia" : "Nueva sugerencia"}</h3>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="name">Nombre<span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='name' type="text" {...register("name", { 
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "Usted ha excedido el máximo de caracteres permitidos."
                        }, minLength: {
                            value: 2,
                            message: "Debe introducir más de un caracter."
                        } })} />
                    <span className='text-primary-color text-xs'>
                        {errors.name && errors.name.message}
                    </span>
                </div>
                
                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="lastname">Apellidos<span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='lastname' type="text" {...register("lastname", { 
                        required: "This field is required", maxLength: {
                            value: 45,
                            message: "Usted ha excedido el máximo de caracteres permitidos."
                        }, minLength: {
                            value: 2,
                            message: "Debe introducir más de un caracter."
                        }})} />
                    <span className='text-primary-color text-xs'>
                        {errors.lastname && errors.lastname.message}
                    </span>
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="email">Correo <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='email' type="email" {...register("email", { 
                        required: "This field is required", maxLength: {
                            value: 150,
                            message: "Usted ha excedido el máximo de caracteres permitidos."
                        }, minLength: {
                            value: 2,
                            message: "Debe introducir más de un caracter."
                        } })} />
                        <span className='text-primary-color text-xs'>
                            {errors.email && errors.email.message}
                        </span>
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="title">Título <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color' id='title' type="text" {...register("title", { 
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "Usted ha excedido el máximo de caracteres permitidos."
                        }, minLength: {
                            value: 2,
                            message: "Debe introducir más de un caracter."
                        } })} />
                    <span className='text-primary-color text-xs'>
                        {errors.title && errors.title.message}
                    </span>
                </div>

                <div className='grid gap-1'>
                    <label className='text-xs font-semibold' htmlFor="description">Descripción <span className='text-red-500'>*</span></label>
                    <input className='border-[1px] rounded-sm bg-gray-100 p-1 focus:ring-1 focus:ring-primary-color focus:border-primary-color placeholder:text-xs' id='description' type="text" {...register("description", { 
                        required: "This field is required", maxLength: {
                            value: 150,
                            message: "Usted ha excedido el máximo de caracteres permitidos."
                        }, minLength: {
                            value: 2,
                            message: "Debe introducir más de un caracter."
                        } })} />
                    <span className='text-primary-color text-xs'>{errors.description && errors.description.message}</span>
                </div>

                <i onClick={handleClickCloseModal} className='bx bx-x absolute right-2 top-1 text-2xl hover:text-primary-color cursor-pointer'></i>

                <button className='bg-primary-color text-black p-2 text-sm border-2 border-transparent hover:text-[0.9rem] hover:border-secondary-color transition-colors rounded-md sm:max-w-max sm:mx-auto sm:px-8'>{isSuggestionIdToEdit ? "Guardar cambios" : "Añadir sugerencia"}</button>
            </form>
        
        </section>
    )
}

export default SuggestionsModal
