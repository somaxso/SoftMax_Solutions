import React from "react";

const Card = ({ name, img, info }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 xl:w-[150.666667%]">
      <img
        className="object-cover w-full h-48 md:h-auto md:w-1/2 lg:h-64 xl:h-72 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={img}
        alt={name}
      />
      <div className="flex flex-col justify-evenly p-6 md:w-1/2">
        <h5 className="mb-3 text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-2 text-base md:text-lg lg:text-xl font-normal text-gray-700 dark:text-gray-400">
          {info}
        </p>
      </div>
    </div>
  );
};

export default Card;
