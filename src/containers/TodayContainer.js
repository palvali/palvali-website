import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import Today from '../components/tasks/todaysplan'
import { getAllTodos } from '../selectors'

const mapStateToProps = state => ({
  allTodos: getAllTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


const TodaysPlan = connect(
  mapStateToProps,
  mapDispatchToProps
)(Today)

export default TodaysPlan