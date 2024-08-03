import Hero from "../sections/hero";
import ProductInfo from "../sections/product-info";
import About from "../sections/about";
import Usage from "../sections/usage";
import Reviews from "../sections/reviews";
import FAQ from "../sections/faq";

// create homepage with all the sections required within the UI
const Home = () => {
  return (
    <>
      <Hero />
      <ProductInfo />
      <About />
      <Usage />
      <Reviews />
      <FAQ />
    </>
  );
}

export default Home;
