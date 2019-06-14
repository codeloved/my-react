import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from '../layouts/header'
import LoadbeAbout from '../about/loadableAbout'
import Home from '../home/home'
import LoadableTopics from '../topics/loadableTopics'
import NotFound from '../error/404'
import Todo from '../todo/todo'
import Login from '../login/login'

import store from '../../store/store'

import './app.css'

class App extends Component {
  render() {
    //Route会给组件传递history, match, location, 使用代码分割时,一定要注意将此属性传递下去
    return(
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' component={LoadbeAbout} />
              <Route path='/topics' component={LoadableTopics} ></Route>
              <Route path='/todo' component={Todo}></Route>
              <Route path='/login' component={Login} ></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App