import React from 'react'
import { NavLink } from 'react-router-dom';

const Cards = () => {
  return (
    <div>
      <div className='w-full h-[130vh]'>
        <div className='w-full h-[30%] flex justify-center items-center'>
            <div className='p-7.5'>
                <h1 className='text-6xl text-center'>Get Product with <span className=' text-lime-600'>Cheap Price</span></h1>
            <p className='text-center m-3.75'>Get high-quality products at fair prices, carefully selected to fit your everyday needs.</p>
            </div>
        </div>
        <div className='w-full h-[70%] flex justify-around items-center'>
                <div className='w-[30%] h-full relative'>
                    <div className='w-[80%] h-[90%] rounded-2xl absolute bottom-8 right-3 hover:scale-102 duration-500 ease-in-out shadow-xl overflow-hidden'>
                        <div className='w-[95%] h-[62%] border border-lime-400 border-dashed relative -translate-0.5'>
                            <div className='w-[95%] h-[90%]'>
                                <img src="https://i.pinimg.com/736x/25/59/ab/2559ab2b9bf225ab864fba267c77221b.jpg" alt="" className='w-full h-full object-cover'/>
                            </div>
                        </div>
                        <div className='w-full h-[38%] p-2.5 flex justify-center items-center'>
                            <div>
                                <h2 className='text-3xl text-center font-bold font-serif text-lime-600'>Fresh Vegetable</h2>
                            <div className='flex justify-center items-baseline text-center'><h1 className='text-7xl'>25%</h1><h2 className='text-2xl text-lime-600'>OFF</h2></div>
                            <p className='text-center m-1.25 text-[14px]'>Quality that speaks</p>
                            <NavLink to="/product?category=vegetables" className='flex items-center text-center py-1.75 px-25 bg-black text-white hover:cursor-pointer rounded-[10px] hover:scale-102 hover:opacity-80'>Buy Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] h-full relative'>
                    <div className='w-[80%] h-[90%] rounded-2xl absolute bottom-20 right-10 hover:scale-102 duration-500 shadow-xl overflow-hidden flex justify-center items-center flex-col'>
                        <div className='w-[95%] h-[62%] border border-lime-400 border-dashed flex justify-center relative -translate-y-0.5'>
                            <div className='w-[95%] h-[90%]'>
                                <img src="https://i.pinimg.com/736x/36/78/f1/3678f1eb815bd34ce44345db09fa6805.jpg" alt="" className='w-full h-full object-cover' />
                            </div>
                        </div>
                        <div className='w-full h-[38%] p-2.5 flex justify-center items-center'>
                            <div>
                                <h2 className='text-3xl text-center font-bold font-serif text-lime-600'>Handpicked Fruits</h2>
                            <div className='flex justify-center items-baseline text-center'><h1 className='text-7xl'>35%</h1><h2 className='text-2xl text-lime-600'>OFF</h2></div>
                            <p className='text-center m-1.25 text-[14px]'>Only the good stuff</p>
                            <NavLink to="/product?category=fruits" className='text-center py-1.75 px-25 bg-black text-white hover:cursor-pointer rounded-[10px] hover:scale-102 hover:opacity-80'>Buy Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] h-full relative'>
                    <div className='w-[80%] h-[90%] rounded-2xl absolute bottom-1 left-3 hover:scale-102 duration-500 shadow-xl overflow-hidden flex justify-end items-end flex-col'>
                        <div className='w-[95%] h-[62%] border border-lime-400 border-dashed flex justify-end relative translate-x-0.5 -translate-y-0.5'>
                            <div className='w-[95%] h-[90%]'>
                                <img src="https://i.pinimg.com/736x/24/5a/f9/245af9e2aa5bc721300563e0110d2f2f.jpg" alt="" className='w-full h-full object-cover' />

                            </div>
                        </div>
                        <div className='w-full h-[38%] p-2.5 flex justify-center items-center'>
                            <div>
                                <h2 className='text-3xl text-center font-bold font-serif text-lime-600'>Natural Dairy</h2>
                            <div className='flex justify-center items-baseline text-center'><h1 className='text-7xl'>20%</h1><h2 className='text-2xl text-lime-600'>OFF</h2></div>
                            <p className='text-center m-1.25 text-[14px]'>Checked. Trusted. Reliable.</p>
                            <NavLink to="/product?category=dairy" className='text-center py-1.75 px-25 bg-black text-white hover:cursor-pointer rounded-[10px] hover:scale-102 hover:opacity-80'>Buy Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
