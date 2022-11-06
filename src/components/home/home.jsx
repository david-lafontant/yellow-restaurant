import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './home.css';
import riceSalad from '../../assets/pictures/rice_salad.webp';

function Home() {
  const style = {
    height: '100vh',
  };
  return (
    <section className="row align-items-center" style={style}>
      <div className="col-md-6">
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
      </div>
      <div className="col-md-6">
        <img src={riceSalad} alt="rice salad" />
      </div>
    </section>
  );
}

export default Home;
