import React from 'react'
import './styles/Contact.css'
import Form from './Form';
import CTitle from './CTitle';
import Social from './Social';
import Gmail from './Gmail';
import { useMediaQuery } from 'react-responsive';



const Contact = () => {

  const isMobile = useMediaQuery({ maxWidth: 600 })

  return (
    <div id="contact" className='contact_bg'>
      <CTitle />
      <div className='social_box'>
        <Social />
      </div>
      <div className='gmail_box'>
        <Gmail />
      </div>
      {
        !isMobile &&

        <div className='form_box'>
          <Form />
        </div>
      }
    </div>

  )
}

export default Contact