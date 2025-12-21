import React from 'react'
import { Link } from 'react-router-dom'

const ContactH = () => {
    const contactImage = [
        {
            src:"https://i.pinimg.com/736x/68/98/d4/6898d4b64fc2647e5baba974d7734262.jpg",
            link:"",
        },
        {
            src:"https://i.pinimg.com/736x/35/83/59/358359b34bf2d0d114e208719fa05632.jpg",
            link:"",
        },
        {
            src:"https://i.pinimg.com/1200x/1b/f8/8a/1bf88a1299cbc8099134edf986c6aa4a.jpg",
            link:"https://www.instagram.com/",
        },
        {
            src:"https://i.pinimg.com/1200x/b2/68/83/b268838fe5a0c0ca504c2fc103843ae3.jpg",
            link:"https://x.com/",
        },
        {
            src:"https://i.pinimg.com/1200x/7f/6d/d3/7f6dd33cb1c611061dc7569166796a90.jpg",
            link:"https://www.facebook.com/",
        },
        {
            src:"https://i.pinimg.com/736x/0c/a0/73/0ca073fda39475cd5c44dd305f8ed737.jpg",
            link:"https://www.youtube.com/",
        },
        {
            src:"https://i.pinimg.com/1200x/fc/ae/b3/fcaeb33b122b22a4cac47d29f4447684.jpg",
            link:"https://www.whatsapp.com/",
        },
        {
            src:"https://i.pinimg.com/736x/35/83/59/358359b34bf2d0d114e208719fa05632.jpg",
            link:"",
        },
        {
            src:"https://i.pinimg.com/736x/35/83/59/358359b34bf2d0d114e208719fa05632.jpg",
            link:"",
        },
        {
            src:"https://i.pinimg.com/736x/2d/b3/2b/2db32bc8fe1dfa907fc924dc6c9238b8.jpg",
            link:"https://play.google.com/",
        },
        {
            src:"https://i.pinimg.com/736x/35/83/59/358359b34bf2d0d114e208719fa05632.jpg",
            link:"",
        },
        {
            src:"https://i.pinimg.com/1200x/51/47/7a/51477a028fbb2e4b92e9e811840b7843.jpg",
            link:"https://mail.google.com/",
        },
    ]
  return (
    <div>
      <div className='w-full h-auto flex justify-center items-center'>
        <div className='w-[95%] flex flex-col items-center'>
            <h1 className='text-[250px] text-center'>GetInTouch</h1>
            <div className="grid grid-cols-4 gap-2">
                 {contactImage.map((item, index) => (
    <Link
      key={index}
      to={item.link}
      className="block"
    >
      <img
        src={item.src}
        alt=""
        className="w-full h-65 object-cover rounded-lg hover:scale-102 transition-transform duration-300"
      />
    </Link>
  ))}
            </div>
           <p className='w-[75%] text-6xl/18 line-clamp-5 pt-10 pb-7 duration-100 ease-out text-center'>We believe great meals begin with great ingredients, <span className='text-gray-500'>and our purpose is to deliver uncompromising freshness and quality to every home we serve.</span></p>
           <div className='w-[85%] h-150 rounded-2xl shadow-lg mb-5  flex justify-around items-center'>
            <div className='w-[50%] h-130'>
                <div className='m-auto'>
                    <h1 className='text-4xl p-5 pb-3'>Send us a message</h1>
                    <p className='p-5 pt-0 text-gray-500'>Have a question or something to share? Send us a message. We'll get you back shortly!</p>
                    <div className='p-2 px-5 flex items-center justify-between'>
                        <div>
                            <h1 className='mb-1'>First Name</h1>
                        <input type="text" placeholder='Enter your first name' className='text-gray-800  py-3 border rounded-[10px] pl-2' required/>
                        </div>
                        <div>
                            <h1 className='mb-1'>Last Name</h1>
                        <input type="text" placeholder='Enter your last name' className='text-gray-800 py-3 border rounded-[10px] pl-2' required/>
                        </div>
                    </div>
                    <div className='p-3 px-5 flex items-center justify-between'>
                        <div>
                            <h1 className='mb-1'>Email Address</h1>
                        <input type="text" placeholder='Enter your email address' className='text-gray-800  py-3 border rounded-[10px] pl-2' required />
                        </div>
                        <div>
                            <h1 className='mb-1'>Phone no</h1>
                        <input type="text" placeholder='Enter your phone number' className='text-gray-800 py-3 border rounded-[10px] pl-2' required/>
                        </div>

                    </div>
                    <div className='p-2 px-5'>
                        <h1 className='mb-1'>Message</h1>
                    <textarea type="text" placeholder='Enter your message' className='text-gray-800 pl-2  border rounded-[10px] col-span-2 h-25 w-full pt-3 mb-3 resize-none' required/>
                    <div className='flex justify-end'>
                        <button className='text-white bg-black py-2 px-7 text-center rounded-[10px] cursor-pointer'>Send Message</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className='w-[40%] h-130 bg-black rounded-4xl flex justify-center items-center'>
                <div>
                    <h1 className='text-3xl text-white line-clamp-3 p-7 pt-0'>Hi there! We're always here and happy to help you anytime.</h1>
                <div className='flex w-full justify-center items-center p-7 py-2'>
                <div className='bg-slate-50 flex py-3 w-full rounded-[10px] pl-7 gap-4'>
                        <p className='text-3xl flex justify-center items-center'><i class="ri-mail-line"></i></p>
                <div>
                    <p>Email</p>
                <p className='text-[12px]'>info@nobody.com</p>
                </div>
                </div>
                </div>
                <div className='flex w-full justify-center items-center p-7 py-2'>
                <div className='bg-slate-50 flex py-3 w-full rounded-[10px] pl-7 gap-4'>
                        <p className='text-3xl flex justify-center items-center'><i class="ri-smartphone-line"></i></p>
                <div>
                    <p>Phone Number</p>
                <p className='text-[12px]'>+0000000000</p>
                </div>
                </div>
                </div>
                <div className='flex w-full justify-center items-center p-7 py-2'>
                <div className='bg-slate-50 flex py-3 w-full rounded-[10px] pl-7 gap-4'>
                        <p className='text-3xl justify-center flex items-center'><i class="ri-map-pin-line"></i></p>
                <div>
                    <p>Address</p>
                <p className='text-[12px]'>nowhere123</p>
                </div>
                </div>
                </div>
                <h3 className='text-white p-7 pt-2 pb-2'>Connect with us</h3>
                <div className='text-white flex text-3xl px-7 gap-8'>
                    <p><i class="ri-whatsapp-line"></i></p>
                    <p><i class="ri-instagram-line"></i></p>
                    <p><i class="ri-facebook-fill"></i></p>
                    <p><i class="ri-twitter-fill"></i></p>
                    <p><i class="ri-google-fill"></i></p>
                </div>
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ContactH
