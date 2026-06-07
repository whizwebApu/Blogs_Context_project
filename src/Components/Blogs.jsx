import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import "./Blogs.css"

const Blogs = () => {

    const {posts,loading} =useContext(AppContext)
    
  return (
    <div className='w-11/12 max-w-[800px] bg-yellow-100 py-3 flex flex-col gap-y-6 px-7'>
{
    loading ? 
    (<Spinner/>):
    (
        posts.length=== 0 ? 
        (<div>
            <p>No Post Found</p>
            </div>):
            (posts.map((post) =>(
              

                <div key={post.id}>
                    <p className='font-bold text-sm text-red-800'>
                        {post.title}
                    </p>
                    <p className='text-[10px] text-cyan-500 '>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                    </p>

                    <p className='text-[10px] text-cyan-800 font-bold'>
                        Posted On {post.date}
                    </p>
                    <p className='text-xs mt-[10px] text-red-900'>
                        {post.content}
                    </p>
                    <div className='flex gap-x-5'>
                        {post.tags.map((tag, index)=>{
                            return <span className='text-blue-500 underline font-bold text-[8px]' key={index}>{`#${tag}`}</span>
                        })}
                        </div>
                    </div>

            )))
            )
}
    </div>
  )
}

export default Blogs