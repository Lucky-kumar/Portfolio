import React from 'react'
import './styles/Social.css'

const Social = () => {
    return (
        <div>
            <div className="button-block">
                <div className="social"><a className='s_a' href="#"> <i className="fab fa-github s_i"></i></a></div>
                <div className="social"><a className='s_a' href="#"> <i className="fab fa-linkedin s_i"></i></a></div>
                <div className="social"><a className='s_a' href="#"> <i className="fab fa-instagram s_i"></i></a></div>
            </div>
        </div>
    )
}

export default Social