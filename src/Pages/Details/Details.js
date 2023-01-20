import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Details = () => {
   

    const { id } = useParams();

    const data = useLoaderData()

    const detailsData = data.find(d => d._id === id)

    const { title, projectName, overview, image, liveSite, services, challenges, solutions, features, technologies } = detailsData;

    useTitle(projectName)
    return (
        <div className='details relative'>
            <img className='w-full h-[40vh] md:h-[70vh]' src={image} alt="" />
            <div className=' text-left bg-black px-4 w-[330px] mx-auto -mt-[50px] text-white md:w-1/3 md:ml-24'>
                <h2 className='font-bold text-[32px] text-[#4F47C8] '>{projectName}</h2>
                <p className='py-5'>{title}</p>
            </div>
            <div>
                <div className="overview text-left py-20">
                    <h2 className='font-bold text-[32px]  '>Overview</h2>
                    <p className='py-5'>{overview}</p>
                    <a href={liveSite} class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Visit Website</span>
                    </a>
                </div>
                <div className="overview text-left py-10">
                    <h2 className='font-bold text-[32px]  '>Services</h2>
                    <ul>
                        {
                            services?.map(service => <li><FontAwesomeIcon icon="fa-circle-dot" className='pr-2' />{service.name}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="chlangesAndFetures text-left text-white py-10 md:flex">
                <div className="Challenges px-4 py-6 bg-[#E84949] w-full md:mx-5"  data-aos="flip-left">
                    <h2 className='font-bold text-[24px] '>Challenges</h2>
                    <ul className='py-4' >
                        {
                            challenges?.map(challenge => <li className='py-2'><FontAwesomeIcon icon="fa-arrows-to-dot" className='pr-2' />{challenge.name}</li>)
                        }
                    </ul>
                </div>
                <div className="Solutions px-4 py-6 bg-[#4F47C8] w-full md:mx-5"  data-aos="flip-right">
                    <h2 className='font-bold text-[24px]  '>Solutions</h2>
                    <ul className='py-4'>
                        {
                            solutions?.map(challenge => <li className='py-2'><FontAwesomeIcon icon="fa-arrows-to-dot" className='pr-2' />{challenge.name}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="keyFetures my-20">
                <h2 className='font-bold text-[32px]'>Key Features</h2>
                {
                    features?.map(feature => <div className="singelFetures py-10 md:flex">
                        <img src={feature.image} className='h-[300px] w-full block mx-auto' alt="" />
                        <div className='text-left md:mx-5'>
                            <h2 className='font-bold py-4'>{feature.title}</h2>
                            <p>{feature.detils}</p>
                        </div>
                    </div>)
                }


            </div>
            <div className="technologies my-20">
                <h2 className='font-bold text-[32px]'>TECHNOLOGIES USED IN DEVELOPMENT</h2>
                <ul className='text-left py-10'>
                    {
                        technologies?.map(technology =>  <li><FontAwesomeIcon icon="fa-circle-dot" className='pr-2' />{technology.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Details;