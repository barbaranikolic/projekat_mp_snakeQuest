import React from 'react';

const Heading = ({ subtitle, title }) => {
  return (
    <>
    <section className='heading'>
      <div id='heading'>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
      </section>
    </>
  );
};

export default Heading;
