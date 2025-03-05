import './App.css'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About';
import { Blog } from './layout/sections/blog/Blog';
import { Brends } from './layout/sections/brends/Brends';
import { Contact } from './layout/sections/contact/Contact';
import { Main } from './layout/sections/main/Main'
import { Offer } from './layout/sections/offer/Offer';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Results } from './layout/sections/results/Results';
import { Testimony } from './layout/sections/testimony/Testimony';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Offer />
      <Portfolio />
      <Brends />
      <Testimony />
      <Blog />
      <Results />
      <Contact />
    </div>
  );
};

export default App
