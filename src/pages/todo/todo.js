import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo, userFetchRequest } from '../../action/todo/todoAction'

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

  clickSaga = () => {
    const { dispatch } = this.props
    dispatch(userFetchRequest({
      userId: 5
    }))
  }

  render() {
    const { todo, userName } = this.props
    return(
      <div>
        <div>
          {
            todo.map((item, index) => (
              <div key={index}>{`${item.text}-${item.visibilityFilters}`}</div>
            ))
          }
        </div>
        <div>userName: {userName}</div>
        <div onClick={this.clickAction}>+</div>
        <div onClick={this.clickSaga}>测试saga</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    visibilityFilters: state.todo.visibilityFilters,
    todo: state.todo.todo,
    userName: state.todo.userName
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