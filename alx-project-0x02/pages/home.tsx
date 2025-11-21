import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import React, { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <>
      <Header />
      <div className="space-y-10">
        <h1 className="text-center text-4xl p-4">Welcome</h1>
        {/* <Card title='Project'
    content='reusable card' /> */}
        <div>
          <div className="p-4 m-2 justify-center items-center flex ">
            <button
              onClick={handleOpenModal}
              className="py-2 px-4 bg-amber-400 text-gray-900 text-center rounded"
            >
              Add post
            </button>
          </div>
          <div>
            <PostModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleAddPost}
            />
          </div>
          <div>
            {posts.map((post, index) => (
              <Card key={index} title={post.title} content={post.content} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
