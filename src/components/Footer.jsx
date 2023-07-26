import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-auto flex flex-col items-center text-dark-green mb-6 gap-2 md:flex-row md:justify-between px-40'>
            
            <div className='flex gap-x-4 md:order-last'>
                <a className='text-4xl text-secondary-color hover:text-primary-color hover:animate-bounce' target='_blank' href="https://github.com/diegotellezc">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-4xl text-secondary-color hover:text-primary-color hover:animate-bounce' target='_blank' href="https://www.linkedin.com/in/diegotellezc/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-4xl text-secondary-color hover:text-primary-color hover:animate-bounce' target='_blank' href="https://rickandmorty-bydt.netlify.app/">
                    <i className='bx bx-question-mark' ></i>
                </a>
            </div>

            <p className='md:order-2 text-secondary-color'>• Copyright ©2023 | All rights reserved •</p>
            <p className='text-secondary-color'>@diegotellezc</p>
        </footer>
    )
}

export default Footer
