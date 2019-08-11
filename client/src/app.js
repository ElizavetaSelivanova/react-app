import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AddForm, NotFound } from 'components';
import { Header, PostsList, Post } from 'modules';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Header />
            {/* TOOO: 
              Create parent components for different 'pages', now it's posts only..
             */}
            <div className="container">
              <div className="content">
                {/* TOOO: add post fix
                 <button type="button" className="btn btn-primary">
                   Add post
                 </button>
                */}
                <div className="content">
                  <Switch>
                    <Route path="/" exact component={() => <PostsList />}/>
                    <Route path="/post/:id" exact component={ Post }/>
                    <Route path="/post/:id/edit" exact component={ AddForm }/>
                    <Route path="*" component={ NotFound }/>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
