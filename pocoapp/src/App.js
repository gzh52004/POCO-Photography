import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from './views/Home';
import Mine from './views/Mine/index.jsx';
import Talks from './views/Talks';
import Works from './views/Works';
import LimitPhotography from './views/LimitPhotography';
import Identification from './views/Identification';
import PhotographyTechnique from './views/PhotographyTechnique';
import ImageSquare from './views/ImageSquare';

function App() {
  return (
    <div>
      <React.Fragment>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Mine" component={Mine}></Route>
      <Route path="/Talks" component={Talks}></Route>
      <Route path="/Works" component={Works}></Route>
      <Route path="/LimitPhotography" component={LimitPhotography}></Route>
      <Route path="/Identification" component={Identification}></Route>
      <Route path="/PhotographyTechnique" component={PhotographyTechnique}></Route>
      <Route path="/ImageSquare" component={ImageSquare}></Route>
    </Switch>
    </React.Fragment>
    </div>
    
  );
}

export default App;
