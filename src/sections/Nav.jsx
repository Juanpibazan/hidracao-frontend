import React, {useState,useEffect} from 'react';

import Logo from '../assets/img/logo-hidracao.jpeg';
import LogoWOBg from '../assets/img/logo_without_background_hidracao.png';

import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';


const Nav = ()=>{

    const [isMobile, setIsMobile] = useState(false);
    const [toggle,setToggle] = useState(false);

    return (
        <nav className='flex flex-row justify-between items-center gap-4 px-5 bg-[#e6d6bb]'>
            <div className='w-[100px] h-[100px]'>
                <img 
                src={LogoWOBg}
                className='w-[100%] h-[100%] object-contain'
                />
            </div>

            <ul className={`flex max-md:flex-col justify-start items-start gap-2 max-sm:hidden`}>
                <li className='brown-text'>Quienes somos?</li>
                <li className='brown-text'>Producto</li>
                <li className='brown-text'>Contacto</li>
            </ul>

            <div className='sm:hidden'>
                <img 
                src={toggle ? close : menu}
                onClick={()=>setToggle(!toggle)}
                className='cursor-pointer fill-[#8b5a44]'
                />
                {
                    toggle && (
                        <ul className={`flex max-md:flex-col justify-start items-start gap-2`}>
                            <li className='brown-text'>Quienes somos?</li>
                            <li className='brown-text'>Producto</li>
                            <li className='brown-text'>Contacto</li>
                        </ul>
                    )
                }

            </div>
        </nav>
    )
};


export default Nav;