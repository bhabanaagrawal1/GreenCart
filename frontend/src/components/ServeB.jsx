import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import vid from '../assets/975662706786337700.mp4'
import FooterC from './FooterC'

const ServeB = () => {
    const trying = [
        {
            txt: "1",
            link: "https://i.pinimg.com/736x/c6/f3/68/c6f368933f888fc861122c35cb5c886e.jpg",
            heading: "Pick a starter option",
            subheading: "Choose a starter option packed with fresh produce and everyday groceries, delivered straight to your doorstep.",
        },
        {
            txt: "2",
            link: "https://i.pinimg.com/736x/35/81/fb/3581fb84acec0a0451cc66b1defe9acf.jpg",
            heading: "Shop groceries",
            subheading: "Get on groceries easily with fresh produce, everyday essentials, and fast doorstep delivery you can rely on.",
        },
        {
            txt: "3",
            link: "https://i.pinimg.com/736x/7f/77/1c/7f771cc8364f8ffaef07494b2f19a818.jpg",
            heading: "We deliver, You enjoy!",
            subheading: "We deliver carefully selected groceries with speed and care, so you can enjoy a seamless shopping experience.",
        },
    ]
  return (
    <div>
      <div className='w-full h-[90vh] flex justify-around items-center'>
        <div className='w-[50%] h-full flex justify-center items-center'>
            <div className='p-12'>
                <h1 className='text-7xl/20 line-clamp-2 '>Your Everyday Grocery Partner</h1>
            <h3 className='text-[24px] pt-9 pb-7'>#1 online grocery service providers in US & INDIA</h3>
            <h6 className='text-[16px] pb-10'>Shop from trusted local stores. Save time, save money, and enjoy freshness every day.Fresh products, fast delivery, and amazing prices. Grocery shopping has never been this easy!</h6>
            <div className='gap-7 flex'>
                <NavLink to = '/product' className='px-9 py-3 bg-black rounded-[10px] text-white'>Get started</NavLink>
                <NavLink to={vid} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-0 text-[30px]">
  <i className="ri-play-circle-fill"></i>
  <span className="underline underline-offset-2">Watch Video</span>
</NavLink>
            </div>
            </div>
        </div>
        <div className='w-[45%] h-full bg-[url("https://i.pinimg.com/736x/58/41/43/5841436224d9c1371bb3f920352ec8e9.jpg")] bg-cover bg-right bg-no-repeat'></div>
      </div>
      <div>
        <h1 className='text-7xl text-center p-15'>Featured & Recognized By</h1>
        <div className='flex justify-center items-center'>
            <div className='w-[80%] px-5 py-10 shadow-lg rounded-2xl mb-10 flex justify-around items-center gap-7 text-4xl text-white bg-black flex-nowrap'>
            <h1>Product Hunt</h1>
            <h1>Google Startup</h1>
            <h1>Y Combinator</h1>
            <h1>TechCrunch</h1>
        </div>
        </div>
        <h1 className='text-7xl text-center p-15'>Steps You need to follow</h1>
        <div className='w-full h-110 flex justify-around items-center'>
    {trying.map((item,index) => (
   <div className='h-100 flex flex-col justify-center  aspect-square shadow-lg rounded-2xl'>
            <div key={index} className="h-60 aspect-square flex items-center justify-center overflow-hidden">
  <div
  style={{ backgroundImage: `url(${item.link})` }}
    className="
      text-[260px] font-bold
      bg-cover bg-center
      bg-clip-text text-transparent
    "
  >
    {item.txt}
  </div>
</div>
<h1 className='text-center p-5 font-semibold pb-0 text-2xl'>{item.heading}</h1>
<p className='text-center p-3 line-clamp-3 px-7'>{item.subheading}</p>
   </div>

    ))}


        </div>
      </div>
      <FooterC/>
    </div>
  )
}

export default ServeB
