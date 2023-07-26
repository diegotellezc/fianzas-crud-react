import React from 'react'
import ServicesCard from './ServicesCard'

const ServicesList = ({ services, deleteService, handleClickEdit }) => {
    return (
        <>
            <div className='flex w-full px-11 gap-4 mt-11 justify-between items-center'>
                <h2 className='text-3xl'>Asesorías juridicas</h2>
                <button className='bg-blue-100 p-2'>Boton</button>

            </div>

            <section className='grid gap-10 my-8 auto-rows-auto grid-cols-[repeat(auto-fill,_360px)] justify-center mx-auto'>
                {
                    services.map((services) => <ServicesCard key={services.id} services={services} deleteService={deleteService} handleClickEdit={handleClickEdit} />)
                }
            </section>
        </>
    )
}

export default ServicesList
