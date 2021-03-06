import {Redirect, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <div className="main">
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/contact" component={Contact} />
            </div>
           </>
        </Switch>
        <Redirect to="/" />
      <Footer />
    </>
  );
}

export default App;
