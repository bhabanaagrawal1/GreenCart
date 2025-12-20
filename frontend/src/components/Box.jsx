import React from 'react'

const Box = () => {
  return (
    <div>
      <div className='w-full h-[90vh] flex justify-center items-center'>
        <div className='w-[90%] h-[90%] flex justify-center items-center relative'>
            <img src="https://i.pinimg.com/1200x/c9/ce/60/c9ce6045ff628788cd42a41b0b17c442.jpg" alt="" className='w-50 h-50 absolute top-0 -left-40 rotate-30 overflow-hidden opacity-0.7'/>
            <div className='w-[28%] absolute left-4 bottom-4 text-wrap'>From farm-fresh produce to trusted daily essentials, every item is carefully selected with quality and sustainability in mind. GreenCart supports modern lifestyles by delivering freshness you can rely on, helping you build healthier habits one meal at a time.</div>
            <div className='w-120 h-120 absolute rounded-full z-1 bg-[url("https://i.pinimg.com/1200x/b7/ea/76/b7ea7675429af8757f6340f8144c3249.jpg")] bg-cover bg-center overflow-hidden shadow-xl/20'></div>
            <div className='w-132 h-132 absolute rounded-full border-lime-600 border-[1.5px] z-5'></div>
            <div className='w-140 h-140 absolute rounded-full border-lime-300 border border-dashed z-5'></div>
            <div className='w-[26%] absolute right-1 top-4'>At GreenCart, grocery shopping is reimagined as a thoughtful experience rather than a routine task. We curate fresh, high-quality groceries that balance nutrition, taste, and everyday convenience—so making better food choices feels natural and effortless.</div>
        </div>
      </div>
    </div>
  )
}

export default Box
