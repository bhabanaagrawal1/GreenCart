import { NavLink } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
const Navbar = () => {
  return (
    <>
    <style>
      {`@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');

.logo{
    font-family: "Dancing Script", cursive;
}
`}
    </style>
    <div className='w-full fixed h-[10vh] bg-white flex justify-between items-center border-b border-gray-300 z-999'>
      <div className='font-extrabold text-[30px] logo ml-7.5'>GreenCart</div>
      <div className='flex items-center gap-7'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/product'>All Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/serve'>How We Serve</NavLink>
      </div>
      <div className='flex items-center gap-7 ml-10'>
        <NavLink to='/favorite'><i class="ri-heart-3-line"></i></NavLink>
        <NavLink to='/ordered'>
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#000" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </NavLink>
        <NavLink to='/signup' className='mr-7.5 px-6.25 py-0.75 border-black border rounded-[10px]'>Sign Up</NavLink>
      </div>
    </div>
    <div className='w-full h-[10vh]'></div>

    </>
  )
}

export default Navbar
