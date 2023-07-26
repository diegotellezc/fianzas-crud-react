import React, { useState } from 'react'

const SuggestionsCard = ({ suggestions, deleteSuggestion, handleClickEdit }) => {
    const [showButtons, setShowButtons] = useState(false);

    const showingButtons = () => {
        setShowButtons(true);
    };

    const hidingButtons = () => {
        setShowButtons(false);
    };


    return (
        <article className="relative rounded-lg bg-white shadow-md p-4 w-full h-[200px] mt-2 border-[1px] border-transparent hover:border-primary-color hover:shadow-2xl"
        onMouseEnter={showingButtons}
        onMouseLeave={hidingButtons}
        >
            
            <div
                className={`${
                showButtons ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex justify-center items-center z-10`}
            >
                <div className="flex flex-col justify-center gap-3 text-xl">
                    <button onClick={() => handleClickEdit(suggestions)}
                    className="bg-secondary-color text-white rounded-md px-4 py-2 mr-2 w-32 hover:bg-white hover:text-secondary-color hover:shadow-md hover:shadow-secondary-color">
                        Editar
                    </button>

                    <button onClick={() => deleteSuggestion(suggestions.id)}
                    className="bg-primary-color text-white rounded-md px-4 py-2 w-32 hover:bg-white hover:text-primary-color hover:shadow-sm hover:shadow-primary-color">
                        Borrar
                    </button>
                </div>
            </div>

            <div
                className={`${
                showButtons ? "opacity-20" : "opacity-100"
                } transition-opacity duration-300 absolute bottom-0 left-0 w-full px-3 py-2 bg-white rounded-b-lg overflow-hidden`}
            >
                <h2 className="text-lg font-bold my-2 text-center truncate"> Sugerencia No. {`${suggestions.id}`}
                </h2>

                <p className="text-gray-500 text-sm mb-2 truncate capitalize">
                <strong>Nombre:</strong> {suggestions.name}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate capitalize">
                <strong>Apellidos:</strong> {suggestions.lastname}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Correo:</strong> {suggestions.email}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Titulo: </strong>{suggestions.title}
                </p>

                <p className="text-gray-500 text-sm mb-2 truncate">
                <strong>Descripción: </strong>{suggestions.description}
                </p>
            </div>
        </article>
    )
}

export default SuggestionsCard
