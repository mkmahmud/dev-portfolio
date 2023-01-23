import React from 'react';
import { Link } from 'react-router-dom';
import KeywordButton from '../KeywordButton/KeywordButton';

const Project = ({data}) => {

    const {title, image, technologies, _id} = data;

    return (
        <div className='my-5 mx-2 border border-4 rounded border-red-300 p-2' data-aos="fade-up"
        data-aos-duration="3000">
            <Link to={`/details/${_id}`}>
                <div className='overflow-hidden'>
                    <img src={image} className='hover:scale-125' alt="" />
                </div>
                <h1 className='text-2xl py-5 font-bold'>{title}</h1>
                {
                    technologies?.map(technology => <KeywordButton content={technology.name}></KeywordButton>)
                }
            </Link>
        </div>
    );
};

export default Project;