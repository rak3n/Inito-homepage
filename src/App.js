import Navbar from "./components/Navbar";
import Home from './pages/async';
import Footer from './components/Footer';

const App = () => {
  return (
    <section class="main-container">
      <Navbar />
      <Home />
      <Footer />
    </section>
  );
}

export default App;

