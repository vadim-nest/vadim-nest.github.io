import '../css/contact.css';
import React, { useState } from 'react';

export default function Contact () {
  const [value, setValue] = useState('');

  return (
    <div id='contact-part'>
      <h1>Contact me</h1>
      <form className='contact-form'>
        <p className='h-e-text'>Name</p>
        <label>
          <input className='contact-field' type="text" value={value} onChange={e => setValue(e.target.value)} />
        </label>
        <p className='h-e-text'>Email</p>
        <label>
          <input className='contact-field' type="text" value={value} onChange={e => setValue(e.target.value)} />
        </label>
        <p className='h-e-text'>Message</p>
        <label>
          <input className='contact-field message-field' type="text" value={value} onChange={e => setValue(e.target.value)} />
        </label>

        <input className='submit-button' type="submit" value="Send" />
      </form>
    </div>
  );
}
