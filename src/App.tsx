import './App.css'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About';
import { Main } from './layout/sections/main/Main'
import { Offer } from './layout/sections/offer/Offer';
import { Portfolio } from './layout/sections/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Offer />
      <Portfolio />
    </div>
  );
};

export default App
