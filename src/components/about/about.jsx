import React from 'react';
import foodBowl from '../../assets/pictures/food_bowl.jpg';

function About() {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-6">
        <img className="img-responsive vegetable-pict" src={foodBowl} alt="Vegetable food bowl" />

      </div>

      <div className="col-md-6 col-xl-6">
        <h2>About</h2>
        <h3 className="explication"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In sit amet urna id nisi tempus euismod.
          Praesent quis justo a lacus cursus sagittis eu ut.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dui eu
          velit tempus tincidunt nec nec elit. Proin luctus nibh venenatis,
          mollis ipsum et.
        </p>
        <div>
          <a href="www.google.com">Learn More</a>
          <a href="www.google.com">Watch Video</a>
        </div>
      </div>
    </div>

  );
}

export default About;
