import React from 'react'

const Banner = () => {
  return (
    <section className='bg-gray-900 relative pt-20 pb-20 px-8'>
        <div className='max-w-256 mx-auto grid grid-cols-3 items-center px-8 lg:px-0'>
            <div className='col-span-2 text-white'>
                <h1 className='text-3xl lg:text-5xl font-extrabold mb-4'>
                    <span className='block mb-1'>Bienvenido a</span>
                    <span className='text-cyan-500 text-4xl lg:text-6xl'> EDcommerce</span>
                </h1>
                <p className='text-lg'>Donde comprar es gastar dinero</p>
            </div>
            <div className='max-w-xs'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXkTYVbcAJ1HcF-MYxiS4Co-OzCTwkQhJcBY9mJ-3aEg&s" alt="ecommercepng" />
            </div>
        </div>
    </section>
  )
}

export default Banner