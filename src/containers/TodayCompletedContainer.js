import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodayCompleted from '../components/tasks/todayscompleted'
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

const TodayCompletedPlan = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayCompleted)

export default TodayCompletedPlan