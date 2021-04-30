import React from 'react';
import { BrowserRouter as HashRouter, Route } from 'react-router-dom'

import Mainpage from './components/Mainpage'
import Detailpage from './components/Detailpage'

function App() {
  return (
    <div className="App">
      <HashRouter basename="/#">
        <Route exact path="/" component={Mainpage}/>
        <Route path='/:id' component={Detailpage} />

      </HashRouter>
    </div>
  );
}

export default App;
