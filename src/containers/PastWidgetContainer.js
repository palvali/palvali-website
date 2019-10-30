import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import PastWidget from '../components/tasks/pastwidget'
import { getAllTodos } from '../selectors'

const mapStateToProps = state => ({
  allTodos: getAllTodos(state)
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators(TodoActions, dispatch)
  }
}

const AllTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PastWidget)

export default AllTodoList