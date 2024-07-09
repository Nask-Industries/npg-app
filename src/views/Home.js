import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesTabs from '../components/sections/FeaturesTabs';
import News from '../components/sections/News';
import Roadmap from '../components/sections/Roadmap';
import Pricing from '../components/sections/Pricing';
import Cta from '../components/sections/Cta';
import Contact from '../components/sections/Contact';
import Team from '../components/sections/Team';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit hasBgColor invertColor />
        <FeaturesTiles />
        <Roadmap topOuterDivider />
        <Team hasBgColor invertColor />
        <News className="illustration-section-01" />
        <Contact hasBgColor invertColor />
      </React.Fragment>
    );
  }
}

export default Home;