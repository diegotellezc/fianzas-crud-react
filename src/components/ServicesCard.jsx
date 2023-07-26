import React, { useState } from 'react'

const ServicesCard = ({ services, deleteService, handleClickEdit }) => {
    const [showButtons, setShowButtons] = useState(false);

    const showingButtons = () => {
        setShowButtons(true);
    };

    const hidingButtons = () => {
        setShowButtons(false);
    };


    return (
        <article className="relative rounded-lg bg-white shadow-md p-4 w-full h-[220px] mt-2 border-[1px] border-transparent hover:border-primary-color hover:shadow-2xl"
        onMouseEnter={showingButtons}
        onMouseLeave={hidingButtons}
        >
            
            <div
                className={`${
                showButtons ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center`}
            >
                <div className="flex flex-col justify-center gap-3 text-xl">
                    <button onClick={() => handleClickEdit(services)}
                    className="bg-secondary-color text-white rounded-md px-4 py-2 mr-2 w-32 hover:bg-white hover:text-secondary-color hover:shadow-md hover:shadow-secondary-color">
                        Update
                    </button>
                    <button onClick={() => deleteService(services.id)}
                    className="bg-primary-color text-white rounded-md px-4 py-2 w-32 hover:bg-white hover:text-primary-color hover:shadow-sm hover:shadow-primary-color">
                        Delete
                    </button>
                </div>
            </div>

            <div
                className={`${
                showButtons ? "opacity-20" : "opacity-100"
                } transition-opacity duration-300 absolute bottom-0 left-0 w-full px-3 py-2 bg-white rounded-b-lg overflow-hidden`}
            >
                <h2 className="text-lg font-bold my-2 text-center truncate"> Asesoría No. {`${services.id}`}
                </h2>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Nombre:</strong> {services.name}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Apellidos:</strong> {services.lastname}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Correo:</strong> {services.email}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Titulo: </strong>{services.title}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Descripción: </strong>{services.description}
                </p>
            </div>
        </article>
    )
}

export default ServicesCard
