import React from 'react'
import './styles/Contact.css'
import ContactBg from './ContactBg';
import Form from './Form';

const Contact = () => {
  return (
    <div className='contact_cntr'>
    <Form/>
      <ContactBg/>
    </div>
  )
}

export default Contact