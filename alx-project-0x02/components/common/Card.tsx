import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="max-w-7xl h-96 rounded-lg shadow-lg transition-transform hover:scale-105">
      <h2 className="text-left text-2xl font-bold mb-2 text-gray-600">
        {title}
      </h2>
      <p className="text-gray-400 text-base">{content}</p>
    </div>
  );
};

export default Card;
