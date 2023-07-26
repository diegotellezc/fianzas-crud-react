import React from 'react'
import RequestsCard from './RequestsCard'

const RequestsList = ({ requests, deleteRequest, handleClickEdit, setIsShowedForm }) => {
    const handleClickShowModal = () => {
        setIsShowedForm((isShowedForm) => !isShowedForm)
    }
    return (
        <>
            <div className='flex w-full gap-4 mt-11 justify-between items-center'>
                <h2 className='text-xl lg:text-3xl'>Reclamos</h2>
                <button onClick={handleClickShowModal} className='bg-primary-color max-w-max rounded-md flex justify-center items-center text-black px-6 py-2 text-lg hover:bg-primary-color/90 transition-colors'>
                <i className='bx bx-plus text-2xl mr-2'></i> 
                Añadir reclamo
            </button>

            </div>

            <section className='grid gap-10 my-8 auto-rows-auto grid-cols-[repeat(auto-fill,_310px)] md:grid-cols-[repeat(auto-fill,_360px)] justify-center mx-auto'>
                {
                    requests.map((requests) => <RequestsCard key={requests.id} requests={requests} deleteRequest={deleteRequest} handleClickEdit={handleClickEdit} />)
                }
            </section>
        </>
    )
}

export default RequestsList
