import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    const [paddingTop, setPaddingTop] = useState(20);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Calculate the new padding value based on the scroll position
            const newPaddingTop = 20- scrollPosition * 1;

            // Set a minimum padding value
            const minimumPaddingTop = 10;
            const updatedPaddingTop = Math.max(newPaddingTop, minimumPaddingTop);

            setPaddingTop(updatedPaddingTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        padding: `${paddingTop}px`,
    };
    return (
        < >
            <nav  style={navbarStyle}className="navbar navbar-expand-lg  navgator   position-fixed w-100 second-Color">
                <div className="container">
                    <NavLink className="navbar-brand fa-2x py-4 fw-bolder text-white" to="/">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link  " aria-current="page" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  " aria-current="page" to="profile">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link  " aria-current="page" to="contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
