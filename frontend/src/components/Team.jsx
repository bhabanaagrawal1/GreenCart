import React from 'react'

const Team = () => {
  return (
    <div>
        <style>
            {`.team{
    /* margin-top: 70px; */
    margin-bottom: 10px;
}
.join{
    margin: 30px;
}
.set{
    margin-top: 0;
}
.btn{
    padding: 10px 22px;
    border-radius: 10px;
}
.r{
    margin-bottom: 0;
}
.short{
    margin-left: 30px;
}`}
        </style>
        <div className='w-full h-auto'>
            <h1 className='text-6xl text-center team'>Become A Part Of <span className='text-green-800'>Our Team</span></h1>
            <p className='text-center'>Help us build a smarter, fresher way to shop for everyday groceries.</p>
        </div>
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <img src="https://i.pinimg.com/1200x/f1/e0/ec/f1e0ec31251891e0d802089aa132b1ea.jpg" alt="" className='w-[45%] h-full object-cover object-top-right' />
            <div className='w-[55%] h-full flex justify-center items-center'>
                <div className='w-[80%]'>
                    <h1 className='text-4xl join'>Join Our Community!</h1>
                    <p className='join set'>Join Green Card and give thousands of people the freedom to live more unplanned. We are always looking for enthusiastic visionaries who want to be part of our dream. Do you want to be a rider? Or are you interested in working closer to our suppliers? Green Card is a workplace where exciting things are happening and where you have an opportunity to grow.</p>
                    <button className='join set bg-black text-white btn hover:cursor-pointer hover:scale-102 hover:opacity-80'>Join Our Community</button>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='join set r text-6xl text-green-800'>1800+</h1>
                    <p className='short w-[90%] text-wrap'>Products sell from out business partners worldwide</p>
                        </div>
                        <div>
                            <h1 className='join set r text-6xl text-green-800'>300+</h1>
                    <p className='short w-[70%] text-wrap'>Branch offices we've in every country to deliver services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
