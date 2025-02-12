import React from 'react'
import Landing from './Landing'

const Loader = () => {
  return (
    <section className=".loader fixed z-[1000] w-full h-screen bg-red-500">
        <div className="top w-full h-1/2 bg-white font-founder">
            <h1 className="top-h text-[15vw] absolute left-1/2 transform translate-x-[-50%] bottom-1/2 -translate-y-1/2">Salutations</h1>
        </div>
        
        <div className="bottom w-full h-1/2 bg-blue-500">
            <h1 className="bottom-h text-[15vw] font-founder absolute left-1/2 transform translate-x-[-50%] top-1/2 -translate-y-1/2">Salutations</h1>
        </div>
    </section>
  )
}

export default Loader