import React from "react";

const Cards = ({ title, description,imageUrl }) => {
  return (
    <div className="p-4 rounded shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-t"
      />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button>Ver mas</button>
    </div>
  );
};

export default Cards;
