import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import witness from '../../assets/pictures/pizza.webp';

function Testimonial() {
  return (
    <div>
      <div>
        <h2>Testimonial</h2>
        <h3>What They Are Saying</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          lorem ac justo sagittis volutpat. Curabitur magna tellus, ullamcorper
          eu leo non, tempor iaculis augue.
        </p>
      </div>
      <div>
        <img src={witness} alt="witness" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          lorem ac justo sagittis volutpat. Curabitur magna tellus, ullamcorper
          eu leo non, tempor iaculis augue.
        </p>
        <p>
          <FontAwesomeIcon icon={faStar} aria-hidden="true" />
          <FontAwesomeIcon icon={faStar} aria-hidden="true" />
          <FontAwesomeIcon icon={faStar} aria-hidden="true" />
          <FontAwesomeIcon icon={faStar} aria-hidden="true" />
          <FontAwesomeIcon icon={faStar} aria-hidden="true" />
        </p>
        <p>
          Omeletto
          <small>Egg county</small>
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
