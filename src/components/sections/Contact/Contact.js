import React from 'react'
import './styles/Contact.css'
import Form from './Form';
import CTitle from './CTitle';
import Social from './Social';

const Contact = () => {
  return (
    <div className='contact_cntr' id="contact">
      <CTitle />
      <Form />
      <div className='social_box'>
        <Social />
      </div>
    </div>
  )
}

export default Contact