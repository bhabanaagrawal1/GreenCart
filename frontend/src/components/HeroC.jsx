import React from 'react'

const HeroC = () => {
    const data = [
        {
            image: "https://i.pinimg.com/736x/3e/e0/5d/3ee05d7fc9a1f596c8ef3e4b801ac6ba.jpg",
            fstLine: "New Stock",
            sndLine: "Smart grocery starts with mindful choices.",
            position: "object-center",
        },
        {
            image: "https://i.pinimg.com/736x/82/45/1d/82451dd578df5ed42655049da3768b41.jpg",
            fstLine: "Fresh Arrivals",
            sndLine: "Smart grocery shopping is a trend of modern life.",
            position: "object-bottom",
        },
        {
            image: "https://i.pinimg.com/736x/6d/ac/f8/6dacf825f6690cf4240f143e9715f584.jpg",
            fstLine: "Just In",
            sndLine: "Grocery shopping is a daily art.",
            position: "object-center",
        }
    ]
  return (
    <div>
        <style>{`.headings{
    padding: 100px 0 20px;
}
.change{
    padding: 50px;
}
._big{
    padding: 30px;
}`}</style>
       <h1 className="text-9xl font-semibold text-center mx-auto headings">Best of the week</h1>
            <div className='w-full text-center flex justify-center items-center'>
                <p className="w-[50%] text-[16px] text-gray-500">Everyday groceries selected with intention, helping you nourish moments that bring comfort, balance, and connection.</p>
            </div>
            <div className="flex justify-center items-center gap-6 h-125 max-w-full mx-auto change">
                {data.map((item,index) => (
                    <div key={index} className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full ">
                    <img className={`h-full w-full object-cover ${item.position}`}
                        src={item.image}
                        alt="" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end _big text-white bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">{item.fstLine}</h1>
                        <p className="text-sm">{item.sndLine}</p>
                    </div>
                </div>
                ))}
            </div>
    </div>
  )
}

export default HeroC
