import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules' 
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
    const heard = [
      {
        pic: "https://i.pinimg.com/736x/b9/df/17/b9df17513794e4de87e3c1c89f0e9e44.jpg",
        h: "Amit S. — Product Manager @Google",
        txt: "The overall experience feels very convenient and reliable, with fresh products, secure payments, and customer service that genuinely cares about quality and satisfaction."
      },
      {
        pic: "https://i.pinimg.com/736x/82/28/84/82288486b5da113403ded5a4f886fc63.jpg",
        h: "Neha R. — Brand Manager @Unilever",
        txt: "I’ve been using this grocery website for a while now, and the quality of fresh fruits, vegetables, and daily essentials has been consistently excellent, making my weekly shopping completely stress-free."
      },
      {
        pic: "https://i.pinimg.com/736x/4c/5d/b5/4c5db5ab497bfb24394771b607c011fb.jpg",
        h: "Rahul K. — Technology Consultant @Infosys",
        txt: "The freshness of the products, fair pricing, and fast doorstep delivery have made this my go-to platform for all my daily grocery needs."
      },
      {
        pic: "https://i.pinimg.com/1200x/4a/4f/bd/4a4fbd994de19d9203fdbcf7c38daad3.jpg",
        h: "Shakshi M. — Homemaker",
        txt: "From easy navigation to quick checkout and on-time delivery, everything about this grocery shopping experience feels smooth, reliable, and perfectly designed for busy households."
      },
      {
        pic: "https://i.pinimg.com/736x/af/88/b8/af88b8686fd02884595b9c550750d8fa.jpg",
        h: "Priya M. — Marketing Director @Amazon",
        txt: "I love how I can find everything from fresh produce to household essentials in one place, and the delivery is always well-packed and right on schedule."
      },
      {
        pic: "https://i.pinimg.com/736x/53/67/b3/5367b3439bf318d8ddcffe38f1f34ed8.jpg",
        h: "Anjali T. — Strategy Consultant @Deloitte",
        txt: "This platform has saved me so much time by eliminating the need to visit multiple stores, while still delivering fresh, high-quality groceries straight to my door."
      },
    ]
  return (
    <div>
      <div className='w-full h-[90vh] flex justify-around items-center'>
        <div className='w-[50%] h-full flex justify-center items-center'>
            <div className='p-12'>
                <h1 className='text-7xl/20 line-clamp-2 '>Your Everyday Grocery Partner</h1>
            <h3 className='text-[24px] pt-9 pb-7'>#1 online grocery service providers in US & INDIA</h3>
            <h6 className='text-[16px] pb-10 text-gray-700'>Shop from trusted local stores. Save time, save money, and enjoy freshness every day.Fresh products, fast delivery, and amazing prices. Grocery shopping has never been this easy!</h6>
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
        <div className='w-full flex justify-center items-center'>
          <section id='reach' className="w-[95%] flex flex-col items-center">
    <h1 className='text-7xl text-center p-15'>What Our Customers Say</h1>
    <Swiper
    style={{'--swiper-navigation-color':'#000','--swiper-navigation-size':'25px','--swiper-navigation-sides-offset':'-5px',}}
      slidesPerView={4}
      spaceBetween={20}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="w-full"
      breakpoints={{
        250: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      
    >
      {heard.map((item,index) => (
        <SwiperSlide key={index}>
          <div className='w-full h-full flex justify-center items-center mb-10'>
            <div className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer h-110 max-w-80 bg-white"
        >
            <img src={item.pic}
                alt="" className="w-full h-60 object-cover"
            />
            <h3 className="mt-3 px-4 pt-3 mb-1 font-semibold text-black">
                {item.h}
            </h3>
            <p className="text-sm px-4 pb-2 text-gray-700 w-5/6 line-clamp-6">
                {item.txt}
            </p>
        </div>
          </div>
        </SwiperSlide>
        
      ))}
    </Swiper>
  </section>
        </div>
      </div>
      <FooterC/>
    </div>
  )
}

export default ServeB
