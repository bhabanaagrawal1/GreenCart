import React from 'react'
import './InfiniteScroll.css'

const InfiniteScroll = () => {
    const className = 'grocery';
  return (
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
  );
};


export default InfiniteScroll
