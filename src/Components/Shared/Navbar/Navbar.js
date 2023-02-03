import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo/logo.png';
import projectIcon from '../../../Assets/icons/projectIcon.png';
import projectIconF from '../../../Assets/icons/projectIconF.png'

const Navbar = () => {

    // Mobile Menu Icon
    const [icon, setIcon] = useState(true)

    return (
        <div className='flex justify-between py-2 md:flex-row-reverse' >
            <div className='md:hidden'>
                {
                    icon ? <FontAwesomeIcon className='cursor-pointer' onClick={() => { setIcon(!icon) }} size='xl' icon="fa-bars" /> : ''
                }
                {
                    !icon ? <div className='mobile-menu fixed bg-[#e84949fa] z-10 h-screen w-full top-0 left-0'>
                        {
                            !icon ? <div className='absolute top-2 left-2'><FontAwesomeIcon className='cursor-pointer' onClick={() => { setIcon(!icon) }} size='xl' icon="fa-x" /></div> : ''
                        }
                        <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                            <ul onClick={() => { setIcon(true) }}>
                                <li className='p-5 text-white border-b-4 border-[#4F47C8] hover:border-[#FFFFFF] hover:text-[#4F47C8]' ><Link to='/aboutme'>About Me</Link></li>
                                <li className='p-5 text-white border-b-4 border-[#4F47C8] hover:border-[#FFFFFF] hover:text-[#4F47C8]' >   <Link to='/projects' className='flex justify-center items-center]'>Projects</Link></li>
                                <li className='p-5 text-white border-b-4 border-[#4F47C8] hover:border-[#FFFFFF] hover:text-[#4F47C8]' ><Link to='/contact'>Contact me</Link></li>
                            </ul>
                        </div>
                    </div> :
                        ''
                }

            </div>
            <div className='hidden menus md:flex justify-center items-center'>
                <Link to='/aboutme' className='hover:border-b-4 border-[#4F47C8] '>About Me</Link>
                <Link to='/projects' className='flex justify-center items-center px-10 text-[#E84949]'>Projects</Link>
                <Link to='/contact' className='hover:border-b-4 border-[#4F47C8] '>Contact me</Link>
            </div>
            <div>
                <Link to='/'> <img className='h-7 md:h-16' src={logo} alt="" /></Link>
            </div>

        </div>
    );
};

export default Navbar;