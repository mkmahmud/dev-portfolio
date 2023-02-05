
import './App.css';
import Router from './Routes/Router/Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faBars, faCircleDot, faArrowsToDot, faBriefcase, faSchool, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HashRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

library.add(faX, faBars, faCircleDot, faArrowsToDot, faBriefcase, faSchool, faArrowRight)

function App() {
  return (
      <div className="App min-w-[360px] max-w-[1440px] m-auto px-2 md:px-5">
        <Router>
        </Router>
      </div>
  );
}

export default App;
