import React from 'react'
import logoDark from '../assets/Image/Logo/logoDark.jpeg'

const Navbar = () => {
  return (
    <header className='fixed w-full h-[12vh] z-[8] px-[5vw] py-[2vh] text-white font-bebas'>
        <nav className="h-full w-full flex items-center justify-between">
            <section className="logo text-[2vw] flex justify-center items-center">
                <div>
                    <img src={logoDark} className="w-[3vw] h-[3vw] rounded-full" alt="" />
                </div>
            </section>
            <section className="routes">
                <ul className="flex items-center justify-center gap-[3vw] text-[0.9vw] tracking-wide">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>
        </nav>
    </header>
  )
}

export default Navbar