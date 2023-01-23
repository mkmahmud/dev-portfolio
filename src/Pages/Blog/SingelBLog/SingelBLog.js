import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const SingelBLog = ({ classes, data}) => {


    return (
        <div style={{ backgroundImage: `url(${data?.image})`, backgroundSize: 'cover', backgroundOrigin: 'center' }} className={`bg-[#4F47C8] text-white text-left min-h-[250px] relative rounded  ${classes}`}>
            <div className='flex py-4 items-center'>
                <img src={data?.user[0]?.image} className='mx-4 h-10 w-10 rounded-full' alt="" />
                <h2 className='text-xl'>{data?.user[0]?.name} </h2>
            </div>
            <Link to={`/blogdetails/${data?._id}`}>
                <div className='bg-[#e849496b] mb-0 absolute bottom-0 w-full px-5 py-2 hover:py-10 ease-in-out duration-200'>
                    <h2 className='text-2xl font-bold'>{data?.title} </h2>
                    <div className="date flex justify-between py-2">
                        <span>{data?.date}</span> <span><FontAwesomeIcon className='text-3xl' icon="fa-solid fa-arrow-right" /></span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingelBLog;