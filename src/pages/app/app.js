import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../layouts/header'
import LoadbeAbout from '../about/loadableAbout'
import Home from '../home/home'
import LoadableTopics from '../topics/loadableTopics'
import NotFound from '../error/404'

import './app.css'

class App extends Component {
  render() {
    //Route会给组件传递history, match, location, 使用代码分割时,一定要注意将此属性传递下去
    return(
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={LoadbeAbout} />
            <Route path='/topics' component={LoadableTopics} ></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App