import React, { useEffect, useState } from 'react'

import logo from '../Logo_1.png'





function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {

        window.addEventListener('scroll', () => {
            if (window.scrollY > 450) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });

        return () => {
            window.removeEventListener('scroll');
        }

    }, [])

    // if show is true (if scrolled passed 100 px, then append navBlack class)
    return (
        <div className={`nav ${show && 'navBlack'} `}>
            <img className='navLogo' src={logo} alt="movie-master" />
            {/* <img className='navAvatar' src={logo} alt="movie-master" /> */}



        </div>
    )
}

export default Nav


