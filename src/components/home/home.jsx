import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './home.css';

function Home() {
  return (
    <div className="container landing">
      <div className="row">
        <section className="landing">
          <h2>
            Your Favorite food delivered hot & fresh!
          </h2>
          <p>
            Healthy switcher chefs do all the prep work like peeding,
            chopping, and marinating, so you can cook a fresh food.
          </p>
          <a href="www.food.com" className="app_button">
            Order now
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Home;
