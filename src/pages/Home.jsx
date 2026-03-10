import Hero from "../components/Hero";
import Intro from "../components/Intro";

import HomeCTA from "../components/HomeCTA";
import WaysToWork from "../components/WaysToWork";
import MinistryFocus from "../components/MinistryFocus";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <MinistryFocus />
      <WaysToWork />

      <HomeCTA />
    </div>
  );
};

export default Home;
