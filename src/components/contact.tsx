import '../css/contact.css';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

import { ReactComponent as GithubIcon } from '../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';

// TODO: Add proper styling
// TODO: Have a loading animation when sending email
// TODO: Some other text on the bottom
// TODO: Handle errors
// TODO: Improve the design?

import { useMediaQuery } from 'react-responsive';


export default function Contact() {
  const isDesktop = useMediaQuery({ minWidth: 901 });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const company = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  function sendFeedback(variables: {
    emailVal: string;
    nameVal: string;
    phoneVal: string;
    companyVal: string;
    messageVal: string;
  }) {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, variables, PUBLIC_KEY)
      .then((res) => {
        console.log('Email successfully sent!');
        if (name.current) name.current.value = '';
        if (email.current) email.current.value = '';
        if (phone.current) phone.current.value = '';
        if (company.current) company.current.value = '';
        if (message.current) message.current.value = '';
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: Error) =>
        console.error(
          'Oh well, you failed. Here some thoughts on the error that occured:',
          err
        )
      );
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameVal = name.current?.value || '';
    const emailVal = email.current?.value || '';
    const phoneVal = phone.current?.value || '';
    const companyVal = company.current?.value || '';
    const messageVal = message.current?.value || '';

    sendFeedback({ emailVal, nameVal, phoneVal, companyVal, messageVal });
  };

  return (
    <div id='contact-part'>
      <h1 id='contach-header'>Contact me</h1>
      <div className='contact-wrap'>
        <form className='contact-form' onSubmit={submit}>
          <div className='input-wrap'>
            <input
              required
              ref={name}
              className='contact-field'
              type='text'
              placeholder=' '
            />
            <label>Name *</label>
          </div>
          <div className='input-wrap'>
            <input
              required
              ref={email}
              className='contact-field'
              type='text'
              placeholder=' '
            />
            <label>Email *</label>
          </div>
          <div className='input-wrap'>
            <input
              ref={phone}
              className='contact-field'
              type='text'
              placeholder=' '
            />
            <label>Phone</label>
          </div>
          <div className='input-wrap'>
            <input
              ref={company}
              className='contact-field'
              type='text'
              placeholder=' '
            />
            <label>Company</label>
          </div>
          <div className='input-wrap'>
            <textarea
              required
              ref={message}
              className='contact-field message-field'
              placeholder=' '
            ></textarea>
            <label>Message *</label>
          </div>

          <input className='submit-button' type='submit' value='Send message' />
        </form>
        {isDesktop && (<div className='contact-text'>
          <p>
            Interested in collaborating with me?
          </p>
          <p>
            I'm always open to discussing
            product design work or partnership opportunities.
          </p>
          <div className='contact-buttons'>
            <a href='mailto:vadim@gne.me.uk' className='nav-button'>
              vadim@gne.me.uk
            </a>
            <a href="../src/assets/VADIM-GNEZDYSHKIN-2023.pdf" className='nav-button' download="VADIM-GNEZDYSHKIN-2023.pdf">CV (pdf)</a>
          </div>
          <div className='contact-links'>
            <div className='github-div'>
              <a href='https://github.com/vadim-nest' target='_blank'>
                <GithubIcon />
              </a>
            </div>
            <div className='linkedin-div'>
              <a href='https://www.linkedin.com/in/vadim-nest/' target='_blank'>
                <LinkedInIcon />
              </a>
            </div>
            <div className='email-div'>
              <a href='mailto:vadim@gne.me.uk' className='mail-icon'>
                @
              </a>
            </div>
          </div>
        </div>)}

      </div>
    </div>
  );
}