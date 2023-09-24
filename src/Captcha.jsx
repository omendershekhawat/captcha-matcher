import React, { useState } from 'react';
import './captcha.css'

const RandomCaptcha = () => {
  const Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * Chars.length);
    captcha += Chars[randomIndex];
  }
  return captcha;
};

const Captcha = () => {
  const [captcha, setCaptcha] = useState(RandomCaptcha());
  const [Input, setInput] = useState('');
  const [Valid, setValid] = useState(false);

  const InputChange = (event) => {
    setInput(event.target.value);
  };

  const Check = () => {
    setValid(Input === captcha);
    setInput('');
    setCaptcha(RandomCaptcha());


  };

  const Refresh = () => {
    setCaptcha(RandomCaptcha());
    setInput('');
    setValid(false);
  };

  return (
    <div className='container'>
      <div className='one'>
        <span>{captcha}</span>
        <button onClick={Refresh}>Refresh</button>
      </div>
      <input type="text" value={Input} onChange={InputChange} />
      <button onClick={Check}>Check</button>
      {Valid && <p>CAPTCHA successfully validated!</p>}
      {Valid == <p>not match</p>}
    </div>
  );
};

export default Captcha;