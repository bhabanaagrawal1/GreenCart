import { NavLink } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
const Navbar = () => {
  const {getCartCount,navigate} = useAppContext();
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
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/product'>All Products</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/serve'>How We Serve</NavLink>
      </div>
      <div className='flex items-center gap-7 ml-10'>
        <div onClick={()=>navigate("/ordered")} className='relative cursor-pointer'>
            <img src={assets.nav_cart_icon} alt="" className='w-5.5 z-0' />
            <button className='absolute  -top-2 -right-3 z-1 text-xs text-white bg-green-400 w-4.5 h-4.5 rounded-full'>{getCartCount()}</button>
        </div>
        <div onClick={()=>navigate("/")} className='mr-7.5 py-0.75 px-6.25 border-black border rounded-[10px] hover:cursor-pointer'>Log out</div>
      </div>
    </div>
    <div className='w-full h-[10vh]'></div>

    </>
  )
}

export default Navbar
