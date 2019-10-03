import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddTask from '../components/tasks/addtask'
import {addTodo} from '../actions'

function mapDispatchToProps(dispatch) {
    return {
      dispatch,
      ...bindActionCreators({ addTodo }, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddTask)