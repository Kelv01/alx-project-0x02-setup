import React from "react";
import {type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-amber-300 max-w-2xs p-4 m-4 h-96 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h2 className="text-left text-2xl font-bold mb-2 text-gray-600">
        {title}
      </h2>
      <p className="text-gray-400 text-base">{content}</p>
    </div>
  );
};

export default Card;
