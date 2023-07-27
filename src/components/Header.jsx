import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='bg-secondary-color w-full m-0 p-4 text-center flex justify-center items-center gap-4 md:flex-row md:justify-between'>
          <div className='w-[240px] md:ml-20 py-3 hidden sm:block'>
            <img src="/logo-fianzas.png" alt="logo-fianzas" className='w-full' />
          </div>

          <nav className='text-white flex gap-6 md:mr-20'>
            <Link to={"/"} className='hover:text-primary-color'>Asesorías</Link>
            <Link to={"/sugerencias"} className='hover:text-primary-color'>Sugerencias</Link>
            <Link to={"/reclamos"} className='hover:text-primary-color'>Reclamos</Link>
          </nav>

        </header>
    )
}

export default Header
