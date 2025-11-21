import Header from '@/components/layout/Header'
import PostCard from '@/components/common/PostCard'
import { Post } from '@/interfaces'
import { useEffect, useState } from 'react'




const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])


    useEffect(() => {
        async function  getStaticProps() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setPosts(data)
        }
        getStaticProps()
    },[])


  return (
   <>
         <Header />
    <div className='space-y-6'>

         <h1 className="text-center text-4xl p-4">Posts</h1>

         {posts.map((post) => (
            <PostCard key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId} />
         ))}
    </div>
   </>
  )
}

export default Posts