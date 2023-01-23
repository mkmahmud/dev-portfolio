import React from 'react';
import useTitle from '../../Hooks/useTitle';
import heroImage from '../../Assets/user1.jpg';
import Button from '../../Components/Buttons/Button';

const Aboutme = () => {
    useTitle('About Me')

    return (

        <div>
            <h2 className='text-4xl text-[#E84949] text-left py-24'>About Me</h2>
            <div className=' py-10 md:flex md:flex-row-reverse items-center  justify-between'>
                <div className="hero-text md:text-left w-full">
                    <h2 className='text-[32px] font-bold text-[#343D68]'>I am senior software engineer specialized in Java</h2>
                    <p className='text-[18px] py-5'>
                        I am a senior developer with 10+ years of software and IT experience building Java and JavaScript
                        applications with React(Router, Hooks), Node, Express, Java Spring, and SQL/NoSQL databases, as well as
                        in a HIPPA-compliant way.
                    </p>
                    <p className='text-[18px] py-5'>
                        I am an ambitious, passionate, and motivated coder and a Product manager.
                    </p>
                    <Button content='Resume' path='/resume'></Button>
                </div>
                <div className="hero-image w-full md:mx-10">
                    <div className="image w-[300px] my-4 mx-auto p-4 relative md:mr-0 md:h-[497px] md:w-[411px] ">
                        <div className='bg-[#4e4236] absolute top-0 left-0 h-96 w-full rounded -z-10' data-aos="fade-down"></div>
                        <img className='block m-auto md:h-full w-full rounded' data-aos="fade-up" src={heroImage} alt="" />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Aboutme;