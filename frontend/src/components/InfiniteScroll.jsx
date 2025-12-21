import React from 'react'

const InfiniteScroll = () => {
    const className = 'grocery';
  return (
    <>
    <style>
      {`
      .grocery_movingText::-webkit-scrollbar{
    display: none;
}
.grocery_movingText{
    h1{
        animation: moving 7s linear 0s infinite forwards;
    }
}
.adjust{
    margin: 20px 0 40px;
}
@keyframes moving {
    from{
        transform: translateX(0%);
    }
    to{
        transform: translateX(-100%);
    }
}
      `}
    </style>
    <div className="adjust w-full">
      <div className={className+"_movingText flex flex-row overflow-auto"}>
        <h1 className="text-9xl whitespace-nowrap">
          Curated groceries for your everyday life.&nbsp;
        </h1>
        <h1 className="text-9xl whitespace-nowrap">
           Curated groceries for your everyday life.
        </h1>
      </div>
    </div>
    </>
  );
};


export default InfiniteScroll
