import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Story from "../components/Story";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Benefits />
      <Story />
      <Testimonials />
      <CTA />
    </div>
  );
};
export default page;
