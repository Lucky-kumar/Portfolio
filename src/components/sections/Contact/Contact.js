import React from 'react'
import './styles/Contact.css'
import Form from './Form';
import CTitle from './CTitle';
import Social from './Social';
import Gmail from './Gmail';

const Contact = () => {
  return (
    <div id="contact" className='contact_bg'>
      <CTitle />
      <div className='social_box'>
        <Social />
      </div>
      {/* <Form /> */}
      <div className='gmail_box'>
      <Gmail/>
      </div>
    </div>

  )
}

export default Contact