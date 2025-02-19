import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import NotFound from './components/pages/NotFound'
import './styles/global.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

function App() {   
  return (    
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div >
            <Navbar/>
            <div>              
              <Alert/>          
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path='/user/:login' component={User}/>
                <Route component={NotFound} />
              </Switch>
            </div>        
          </div>    
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
