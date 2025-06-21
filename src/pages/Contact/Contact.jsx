import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <form action="">
        <input type="text" placeholder='Enter Your Name' name='username' required/>
        <input type="email" placeholder='Email' name='email' required/>
        <textarea name="message" placeholder='Message' required></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
