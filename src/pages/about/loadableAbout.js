import React, { Component } from 'react'

import loadable from '@loadable/component'
import Loading from '../loading/loading'

const LoadableComponent = loadable(() => import('./about.js'), {
  fallback: <Loading />
})

export default class LoadableAbout extends Component {
  render() {
    return(
      <LoadableComponent {...this.props}/>
    )
  }
}