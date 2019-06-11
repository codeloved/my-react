import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Topic from './topic'

class Topics extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { match } = this.props
    console.log('props', this.props)
    return(
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
          </li>
        </ul>
        <Route path={`${match.url}/:id`} component={Topic}></Route>
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic</h3>}
        >
        </Route>
      </div>
    )
  }
}

export default Topics