import { React, useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  return (
    <div className="row contact">
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <form>
          <label htmlFor="email" className="label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
  );
}

export default Contact;
