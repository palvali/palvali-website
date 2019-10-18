import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import PlannerWidget from '../components/tasks/plannerwidget'
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
)(PlannerWidget)

export default AllTodoList