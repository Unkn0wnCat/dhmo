import React from 'react';

import NumberCounter from './NumberCounter';
import "./Numbers.css";

function Numbers() {
  return (
    <section className="Numbers">
      <div>
        <div className="Numbers-Column">
          <span>Über</span>
          <NumberCounter number="16" suffix="Mio. €" />
          <span>Umsatz in der DHMO-Industrie. (2017)</span>
        </div>
        <div className="Numbers-Column">
          <span>Über</span>
          <NumberCounter number="500" suffix="" />
          <span>Tote durch DHMO. (2018)</span>

        </div>
        <div className="Numbers-Column">
          <span>Bei Entzug</span>
          <NumberCounter number="168" suffix="Std." />
          <span>bei Süchtigen bis zum Tod.</span>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
