
import Navbar from './components/Navbar/Navbar';
import PaginatedHeader from './components/PaginatedHeader/PaginatedHeader';
import About from './components/About/About';
import UIBlock from './components/UIBlock/UiBlock';
import Invest from './components/Invest/Invest';
import Support from './components/Support/Support';
import Access from './components/Access/Access';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Subscribe from './components/Subscribe/Subscribe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PaginatedHeader />
      <About />
      <UIBlock />
      <Invest />
      <Support />
      <Access />
      <Services />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
