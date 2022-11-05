import React from 'react';
import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  return (
    <div className="row contact">
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <form>
          <label for="email" className="label">
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </form>
      </div>
      <div>
        <ul>
          <li>Youtube</li>
          <li>facebook</li>
          <li>Tweeter</li>
          <li>instagram</li>
        </ul>
      </div>



    </div>
  )
}

export default Contact;