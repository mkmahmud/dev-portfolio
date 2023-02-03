import React from 'react';
import heroImage from '../../../Assets/timoty.jpg'
import Button from '../../../Components/Buttons/Button';

const Hero = () => {
    return (
        <div className=' py-10 md:flex md:flex-row-reverse items-center md:py-24 justify-between'>
            <div className="hero-image w-full" >
                <div className="image w-[300px] h-[200px] my-4 mx-auto p-4 relative md:mr-0 md:h-[497px] md:w-[450px] ">
                    <div className='bg-[#4e4236] absolute top-0 left-0 h-[200px] md:h-96 w-full rounded -z-10' data-aos="fade-down"></div>
                    <img className='block m-auto md:h-full w-full rounded' data-aos="fade-up" src={heroImage} alt="" />
                </div>
            </div>
            <div className="hero-text md:text-left my-10 md:my-0" data-aos="fade-right">
                <h2 className='text-[32px] font-bold text-[#343D68]'>Hi! Timothy Kroll</h2>
                <p className='text-[18px] py-5'>I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                <Button content='Resume' path='/resume'></Button>
            </div>
        </div>
    );
};

export default Hero;