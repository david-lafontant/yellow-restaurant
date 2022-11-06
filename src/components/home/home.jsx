import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faClock,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import './home.css';
import riceSalad from '../../assets/pictures/rice_salad.webp';

function Home() {
  const style = {
    height: '100vh',
  };
  const cardWidth = {
    width: '18rem',
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
      <div className="col-12 border info">
        <div className="card-group">
          <div className="card" style={cardWidth}>
            <FontAwesomeIcon icon={faClock} aria-hidden="true" className="card-img-top" />
            <div className="card-body">
              <h3>Today 10:00 am - 7:00 pm</h3>
              <p>Working Hours</p>
            </div>
          </div>
          <div className="card" style={cardWidth}>
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" className="card-img-top" />
            <div className="card-body">
              <h3>Santiago de Los Caballeros</h3>
              <p>Get Directions</p>
            </div>
          </div>
          <div className="card" style={cardWidth}>
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" className="card-img-top" />
            <div className="card-body">
              <h3>+1(809) 999 99 99</h3>
              <p>Working Hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
