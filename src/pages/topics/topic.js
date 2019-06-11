import React, { Component } from 'react'

class Topic extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { match } = this.props
    return (
      <div>
        Requested Param: {match.params.id}
      </div>
    )
  }
}

export default Topic