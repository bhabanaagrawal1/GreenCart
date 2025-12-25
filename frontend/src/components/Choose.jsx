import React, { useState } from 'react'

const Choose = () => {
  const [selected,setSeleted] = useState(null);
  const faqData = [
  {
    id: 1,
    question: "Why we keep it simple",
    answer: "To focus on what matters.",
  },
  {
    id: 2,
    question: "The care behind each product",
    answer: "Crafted with honesty and attention.",
  },
  {
    id: 3,
    question: "Food, done thoughtfully",
    answer: "Made with purpose, not shortcuts.",
  },
  {
    id: 4,
    question: "Because everyday matters",
    answer: "Small choices shape better days.",
  },
];

  const images = [
    {
      link: "https://i.pinimg.com/1200x/b1/06/e9/b106e9cdd6b34abbcfef1bbf85d1467f.jpg",
      aspectRatio: "aspect-3/2",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/1200x/db/de/7d/dbde7d822376503d324cc4294bb45e39.jpg",
      aspectRatio: "aspect-square",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/736x/4b/12/c2/4b12c20ecabbfbdd5006b1f5558315b2.jpg",
      aspectRatio: "aspect-square",
      position: "object-top"
    },
    {
      link: "https://i.pinimg.com/736x/38/31/1e/38311e1458b5f1d7d1c89287666905f4.jpg",
      aspectRatio: "aspect-square",
      position: "object-right"
    },
    {
      link: "https://i.pinimg.com/1200x/2d/b1/e5/2db1e501fe6a2ffaa692888f2ee81d16.jpg",
      aspectRatio: "aspect-3/2",
      position: "object-top"
    },
    {
      link: "https://i.pinimg.com/1200x/43/5c/f0/435cf09593a0ffe99dd76a4e4c6d8c90.jpg",
      aspectRatio: "aspect-square",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/736x/90/ba/25/90ba25eb8b8c49b97d1f4d14b4bcee6a.jpg",
      aspectRatio: "aspect-square",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/736x/95/40/75/954075509238f8d20714c6df8514c81b.jpg",
      aspectRatio: "aspect-square",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/736x/c0/2f/53/c02f53b48c34f8187d2fe17f2448ee44.jpg",
      aspectRatio: "aspect-3/2",
      position: "object-top-left"
    },
    {
      link: "https://i.pinimg.com/736x/5b/dd/cb/5bddcb1a6b44f252ae381d794553babb.jpg",
      aspectRatio: "aspect-3/2",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/1200x/e5/04/38/e5043883ba528b1f2a3c288a1e52411b.jpg",
      aspectRatio: "aspect-square",
      position: "object-center"
    },
    {
      link: "https://i.pinimg.com/736x/27/10/44/271044a493aefeef703e74cd09436703.jpg",
      aspectRatio: "aspect-square",
      position: "object-center"
    },
  ]
  return (
    <div>
      <div className='w-full h-[110vh] flex justify-center items-center'>
        <div className='w-[80%] h-[80%] flex justify-around items-center'>
            <div className='w-[47%] h-[90%] bg-gray-100 rounded-2xl shadow-md flex justify-center items-center'>
              <div className='w-[90%] h-[90%] flex justify-center items-center'>
               <div>
                 <h1 className='text-5xl m-3.75 pb-1.75'>Why Choose Us</h1>
              <p className='m-3.5 pb-1 mb-0'>Behind every meal is a story—of care, effort, and intention. We focus on thoughtful choices so you don’t have to second-guess what you bring into your home. Freshness, trust, and simplicity guide everything we do.</p>
              {faqData.map((item,index) => (
                <div key={index} className='flex flex-col'>
                  <div  className='flex justify-between items-center m-3.5 pb-1.75 border-b border-gray-300'>
                    <p>{item.question}</p>
                    <button onClick={()=>{setSeleted(item.id === selected ? null : item.id);}}><i class="ri-add-fill"></i></button>
                  </div>
                {selected === item.id ?
                    <div className='bg-white p-3 rounded-[10px]'>{item.answer}</div>
                :null
                }
                </div>
              ))}
               </div>
              </div>
            </div>
            <div className='w-[47%] h-[90%] object-cover bg-center bg-cover rounded-2xl shadow-md flex justify-around flex-wrap overflow-hidden p-2 columns-4xs gap-2;'>
              {images.map((item,index)=>(
                <img key={index} src={item.link} alt="" className={`max-w-47.5 h-[30%] rounded-[10px] mb-1 shadow-sm object-cover ${item.aspectRatio} ${item.position}`}/>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
