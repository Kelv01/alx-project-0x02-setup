import { type PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="p-4 h-96 max-w-2xl rounded-md border shadow-sm mb-4 bg-amber-400">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <span className="text-sm text-gray-500">User Id: {userId}</span>
    </div>
  );
};

export default PostCard;
