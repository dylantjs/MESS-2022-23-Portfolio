import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.instagram.com/dylantjs/">
            <BsInstagram/>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/bobdtjs/">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/dylanteoh/">
            <FaLinkedinIn />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia