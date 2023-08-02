import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons/fa
import './styles/Social.css';

const Social = () => {
  return (
    <div>
      <div className="button-block" data-aos="fade-down">
        <div className="social">
          <a className='s_a' href="https://github.com/Lucky-kumar" target="_blank" rel="noreferrer">
            <FaGithub className="s_i" />
          </a>
        </div>
        <div className="social">
          <a className='s_a' href="https://www.linkedin.com/in/luckyk11" target="_blank" rel="noreferrer">
            <FaLinkedin className="s_i" />
          </a>
        </div>
        <div className="social">
          <a className='s_a' href="https://www.instagram.com/l_ucky_o_o/" target="_blank" rel="noreferrer">
            <FaInstagram className="s_i" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Social;
