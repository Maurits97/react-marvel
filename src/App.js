import React from 'react';
import { BrowserRouter as HashRouter, Route , Switch} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Mainpage from './components/Mainpage'
import Detailpage from './components/Detailpage'

function App() {
  return (
    <div className="App">
      <HashRouter basename="/#">
        <Route render={({ location }) => (
          <AnimatePresence 
            //initial={false} 
            exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" render={() => <Mainpage />}/>
            <Route exact path='/:id' render={() => <Detailpage />}/>
          </Switch>
        </AnimatePresence>
        )}/>

      </HashRouter>
    </div>
  );
}

export default App;
