// Card.js
import React from 'react';

const Cards = ({ heading, number, description,className,paraColor  }) => {
  return (
    <div className={`card ${className} font-body flex flex-col justify-around  p-2 px-4 w-[204px] h-[136px]  `}>
      <h2 className="card-heading font-medium text-lg">{heading}</h2>
      <p className={`card-number font-medium text-4xl `}>{number}</p>
      <p className={`card-description font-normal text-[#FF5151] text-base ${paraColor}`} >{description}</p>
    </div>
  );
};

export default Cards;