import React from 'react'
import './styles/Contact.css'
import ContactBg from './ContactBg';
import Form from './Form';
import CTitle from './CTitle';

const Contact = () => {
  return (
    <div className='contact_cntr' id="contact">
      <CTitle />
      <Form />
      <ContactBg />
    </div>
  )
}

export default Contact