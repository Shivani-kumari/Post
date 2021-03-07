import React from 'react';
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Create from './Pages/Create/CreatePost'
import Update from './Pages/Update/UpdatePost'



export default function Router() {
    return (
      <BRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Create' exact component={Create} />
          <Route path='/Udate' exact component={Update}/>
        </Switch>
      </BRouter>
    );
  }
  