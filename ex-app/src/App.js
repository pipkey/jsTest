import React from 'react';
import {Route} from 'react-router-dom';
import ExFour from './ExFour/Four';
import ExOne from './ExOne/One'
import ExSix from './ExSix/Six'
import ExThree from './ExThree/Three';
import ExTwo from './ExTwo/Two';
import Nav from './NAV';



const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route path="/first" render={() => <ExOne />} />
      <Route path="/two" render={() => <ExTwo />} />
      <Route path="/three" render={() => <ExThree />} />
      <Route path="/four" render={() => <ExFour />} />
      <Route path="/six" render={() => <ExSix />} />
    </div>
  );
}

export default App;
