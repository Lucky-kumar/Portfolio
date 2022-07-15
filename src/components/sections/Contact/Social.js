import React from 'react'
import './styles/Social.css'

const Social = () => {
    return (
        <div>
            <div className="button-block" data-aos="fade-down">
                <div className="social"><a className='s_a' href="https://github.com/Lucky-kumar" target="_blank" rel="noreferrer"> <i className="fab fa-github s_i"></i></a></div>
                <div className="social"><a className='s_a' href="https://www.linkedin.com/in/luckyk11" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin s_i"></i></a></div>
                <div className="social"><a className='s_a' href="https://www.instagram.com/l_ucky_o_o/" target="_blank" rel="noreferrer"> <i className="fab fa-instagram s_i"></i></a></div>
            </div>
        </div>
    )
}

export default Social