import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const icons = [<i class="ri-linkedin-box-fill"></i>,<i class="ri-twitter-x-line"></i>,<i class="ri-instagram-fill"></i>,<i class="ri-youtube-fill"></i>]
  const links = ["https://www.linkedin.com/in/bhabana-agrawal-6a6313358/","https://x.com/AgrawalBha9","https://www.instagram.com/","https://www.youtube.com/"]
  const heading = ["About","Company","Support","Get in Touch"]
  const footer = {
    1:["About Us","Recipe","Download","Contact"],
    2:["Out Recipe","Subscribe Us","FAQ","Deals"],
    3:["Account","Support Center","Feedback","Accessibility"],
    4:["4517 Washington Ave.","Manchester,","Kentucky 39495","Mail Us"],
  };
  return (
    <div>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
.styl{
    padding: 7px 0;
}
.logo_i{
    font-family: "Dancing Script", cursive;
    margin: 0;
}
.par{
    margin: 10px 0;
}
        `}
      </style>
      <div className='w-full h-[80vh] bg-linear-to-bl from-green-100 via-lime-100 to-lime-50 overflow-hidden'>
        <div className='w-full h-[50%] flex justify-around items-center'>
          <div className='w-[30%] h-[90%] flex justify-center items-center'>
            <div className='w-[90%]'>
              <h1 className='text-6xl  text-green-900 logo_i'>GreenCart</h1>
              <h3 className='par text-[14px]'>Every product carries a little more care than expected, from our care to your table.</h3>
              <div className='flex justify-start gap-3'>
                {icons.map((item,index) =>(
                   <NavLink key={index} to={links[index]}>
                      <div className="w-14 h-14 rounded-full shadow-sm bg-white flex justify-center items-center text-xl text-green-900 hover:text-[24px]">{item}</div>
                   </NavLink>
                ))}
              </div>
            </div>
          </div>
          {heading.map((item,index)=>(
            <div key={index} className='w-[15%] h-[90%] flex justify-center items-center'>
            <div>
              <h1 className='text-[22px] text-green-900'>{item}</h1>
              {footer[index + 1].map((itm,idx)=>(
                <h3 key={idx} className='text-[14px] styl text-black-600 hover:cursor-pointer hover:scale-102 hover:text-lime-900 hover:font-semibold hover:underline hover:underline-offset-2'>{itm}</h3>
              ))}
            </div>
          </div>
          ))}
        </div>
        <div className='w-full h-auto'>
            <h1 className='text-[230px] text-center opacity-50 backdrop-opacity-90'>GreenCart</h1></div>
      </div>
    </div>
  )
}

export default Footer
