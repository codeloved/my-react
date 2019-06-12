import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../../action/todo/todoAction'

class Todo extends Component {

  constructor(props) {
    super(props)
  }

  clickAction = () => {
    const { dispatch } = this.props
    dispatch(addTodo({
      text: 'learn redux',
      visibilityFilters: 'done'
    }))
  }

  render() {
    console.log('props', this.props)
    const { todo } = this.props
    return(
      <div>
        <div>
          {
            todo.map((item, index) => (
              <div key={index}>{`${item.text}-${item.visibilityFilters}`}</div>
            ))
          }
        </div>
        <div onClick={this.clickAction}>+</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log('object', state)
  return {
    visibilityFilters: state.todo.visibilityFilters,
    todo: state.todo.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: id => {
      dispatch({
        type: 'aaaa',
        payload: {
          id: id
        }
      })
    }
  }
}

export default connect(mapStateToProps)(Todo)

// export default connect(mapStateToProps, mapDispatchToProps)(Todo)