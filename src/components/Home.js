import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import InfoSection from './InfoSection';

function Home({ refWorks, refAbout }) {
  return (
    <>
      <Hero />
      <InfoSection refWorks={refWorks} refAbout={refAbout} />
    </>
  );
}

Home.propTypes = {
  refWorks: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  refAbout: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

Home.defaultProps = {
  refWorks: null,
  refAbout: null,
};

export default Home;
