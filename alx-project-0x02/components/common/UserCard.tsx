import { type UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="p-4 gap-4 max-w-2xl h-80 bg-indigo-300">
      <h2 className="font-semibold text-lg text-black">Name: {name}</h2>
      <p className="text-lg text-gray-400">Email: {email}</p>
      <span className="italic text-sm text-indigo-600">Address: {address.city}</span>
    </div>
  );
};

export default UserCard;
