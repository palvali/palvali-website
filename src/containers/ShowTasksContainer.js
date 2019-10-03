import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import ShowTasks from '../components/tasks/showtasks'
import { getAllTodos } from '../selectors'

const mapStateToProps = state => ({
  allTodos: getAllTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


const AllTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowTasks)

export default AllTodoList