import React, { Component } from 'react'

import loadable from '@loadable/component'
import Loading from '../loading/loading'

const LoadableComponent = loadable(() => import('./topics.js'), {
  fallback: <Loading/>
})

export default class LoadableTopics extends Component {
  render() {
    // Route会给组件传递history, match, location,所以此处需要传递下去,动态导入的组件需要使用此属性设置动态路由
    return(
      <LoadableComponent {...this.props} />
    )
  }
}