
import React from 'react'
import './styles/ContactBg.css'

const ContactBg = () => {
  return (
      <div className='cbg_body'>
        <div className="ripple-background">
          <div className="cbg_circle xxlarge shade1"></div>
          <div className="cbg_circle xlarge shade2"></div>
          <div className="cbg_circle large shade3"></div>
          <div className="cbg_circle mediun shade4"></div>
          <div className="cbg_circle small shade5"></div>
        </div>
    </div>
  )
}

export default ContactBg