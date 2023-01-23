import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import planeIcon from '../../Assets/contact/plane.png'
import useTitle from '../../Hooks/useTitle';

const BlogDetails = () => {
    useTitle('Blog Description')



    const { id } = useParams();

    const blogdata = useLoaderData()

    const detailsData = blogdata.find(d => d._id === id)

    const { title, image, user, date, readTime, pra } = detailsData;

    const handelSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='w-full my-10  md:w-9/12 mx-auto  text-left p-2'>
            <img className='h-[40vh] border border-8 rounded border-red-300 p-2 w-full mx-auto' src={image} alt="" />
            <h1 className='text-5xl font-bold py-4'>{title}</h1>
            <div className="use py-5">
                <h2 className='text-xl'>{user[0].name}</h2>
                <p>{date}, <span> <strong>{readTime}</strong> min read</span></p>
            </div>
            <div className="content">

                {
                    pra.map(paragraph => <p className='py-5'>{paragraph.text}</p>)
                }

            </div>
            <div className='h-[2px] w-full bg-[#E84949] my-24'></div>
            <form className='flex justify-between my-5'>
                <input type="email" className='border-2 p-2 w-2/3 rounded-lg shadow-lg text-[16px] my-5 focus:outline-none' placeholder='Enter email address' name="" id="" />
                <button onClick={handelSubmit} className={`h-[46px] w-[114px] bg-[#4F47C8] text-white py-2.5 px-10 rounded my-5 `}> <div className='flex justify-center'><span>Send</span> <img className='px-2' src={planeIcon} alt="" /></div></button>
            </form>
        </div>
    );
};

export default BlogDetails;