import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import SingelBLog from './SingelBLog/SingelBLog';

const Blog = () => {
    useTitle('Blog')


    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('https://timothykroll.github.io/blog/blog.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, [])

    
    return (
        <div>
            <h2 className='text-4xl text-[#E84949] text-left py-24'>Featured Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-4 mb-24'>

                {
                    blogs && <>

                        <SingelBLog data={blogs[0]}></SingelBLog>
                        <SingelBLog data={blogs[1]} classes='md:col-span-2 md:row-span-2'></SingelBLog>
                        <SingelBLog data={blogs[2]}></SingelBLog>
                        <SingelBLog data={blogs[3]} classes='md:col-span-3 md:row-span-2'></SingelBLog>
                    </>
                }



            </div>
        </div>
    );
};

export default Blog;