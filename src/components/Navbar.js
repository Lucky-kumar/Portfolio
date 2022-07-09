import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './Navbar.css'

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        $('#nbr_active').prop('checked', false)

    }, [isClicked])

    return (
        <div>
            <input type="checkbox" id="nbr_active" />
            <label for="nbr_active" className="nbr_menu_btn"><i className="fas fa-bars"></i></label>
            <div className="nbr_wrapper">
                <ul className='nbr_ul' id="nbr_uls">
                    <li className='nbr_li' onClick={() => setIsClicked(!isClicked)}><a className='nbr_a' href="#home" >Home</a></li>
                    <li className='nbr_li' onClick={() => setIsClicked(!isClicked)}><a className='nbr_a' href="#about" >About</a></li>
                    <li className='nbr_li' onClick={() => setIsClicked(!isClicked)}><a className='nbr_a' href="#projects" >Projects</a></li>
                    <li className='nbr_li' onClick={() => setIsClicked(!isClicked)}><a className='nbr_a' href="#contact" >Contact</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar