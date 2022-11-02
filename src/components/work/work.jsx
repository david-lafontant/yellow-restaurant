import React from 'react';
import { ReactComponent as Turkey } from '../../assets/pictures/turkey.svg';
import { ReactComponent as Delivery } from '../../assets/pictures/delivery.svg';
import { ReactComponent as Touch } from '../../assets/pictures/touch.svg';

function Work() {
  return (
    <div className="row">
      <div className="col-md-12 col-xl-12">
        <h2>Work</h2>
        <h3>How it Works</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          lorem libero, imperdiet sed placerat at, feugiat et lacus.
          Pellentesque id pharetra magna. Nunc tempor lacinia augue, sed rhoncus
          urna commodo.
        </p>
      </div>

      <div className="col-md-12 col-xl-12">
        <div className="how-to">
          <p>
            <Turkey />
          </p>
          <p>Pick Meals</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc at quam cursus, auctor nunc non.
          </p>
        </div>
        <div className="how-to">
          <p>
            <Touch />
          </p>
          <p>Choose How Often</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc at quam cursus, auctor nunc non.
          </p>
        </div>
        <div className="how-to">
          <p>
            <Delivery />
          </p>
          <p>Fast Deliveries</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc at quam cursus, auctor nunc non.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
