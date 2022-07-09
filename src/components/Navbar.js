import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <input type="checkbox" id="nbr_active" />
            <label for="nbr_active" className="nbr_menu_btn"><i className="fas fa-bars"></i></label>
            <div className="nbr_wrapper">
                <ul className='nbr_ul'>
                    <li className='nbr_li'><a className='nbr_a' href="#">Home</a></li>
                    <li className='nbr_li'><a className='nbr_a' href="#">About</a></li>
                    <li className='nbr_li'><a className='nbr_a' href="#">Skills</a></li>
                    <li className='nbr_li'><a className='nbr_a' href="#">Projects</a></li>
                    <li className='nbr_li'><a className='nbr_a' href="#">Contact</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar