import React from 'react';
import { Button, Table, Card, CardText, CardHeader, Row, Col } from 'reactstrap';
import TaskItem from './taskitem'
import './addtask.css';
import { deleteTodo, editTodo, addTodo } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import MaterialTable, {MTableToolbar} from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ShowTasks(props) {

    const classes = useStyles();

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    function transformOneTask(task) {
        var t_payload = JSON.parse(task.payload)
        return {
            id: task.id,
            title: t_payload.title, 
            priority: t_payload.priority, 
            category: t_payload.category, 
            effort: ""+t_payload.effort, 
            deadline: ""+t_payload.deadline
        }
    }

    function transformData(allTasks) {
        var tr_data = allTasks.map(transformOneTask)

        return tr_data;
    }

    function renderAllTasks(allTasks) {

        var tr_data = transformData(allTasks)

        const table_data = {
            columns: [
              { title: 'Title', field: 'title' },
              { title: 'Priority', field: 'priority' },
              { title: 'Category', field: 'category'},
              { title: 'Effort', field: 'effort' },
              { title: 'Deadline', field: 'deadline', type: 'numeric' },
            ],
            data: tr_data,
          };

          return (
            <MaterialTable
            // components={{
            //     Toolbar: props => (
            //         <div style={{ background: 'linear-gradient(45deg, white 15%, #21CBF3 60%)', borderStyle: 'solid', borderWidth: 1, borderColor:'black' }}>
            //             <MTableToolbar {...props} />
            //         </div>
            //     )
            // }}
              title=""
              columns={table_data.columns}
              data={table_data.data}
              icons={tableIcons}
              options={
                {
                    headerStyle: {
                        background: 'lightgray',
                        color: '#213969'
                    },
                    search: false,
                    toolbar: false
                }
              }
              editable={{
                // onRowAdd: newData =>
                //   new Promise(resolve => {
                //     setTimeout(() => {
                //       resolve();
                //       const data = [...table_data.data];
                //       data.push(newData);
                //       props.dispatch(addTodo(JSON.stringify(newData)))
                //     }, 600);
                //   }),
                onRowUpdate: (newData, oldData) =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      editTask(oldData.id, JSON.stringify(newData))
                    }, 600);
                  }),
                onRowDelete: oldData =>
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      deleteTask(oldData.id)
                    }, 600);
                  }),
              }}
            />
          );
    }

    function renderTaskItem(task) {
        return (
            <center>
            <Card body outline color="secondary" style={{width:"70%"}}>
                <CardText>
                    <Row>
                        <Col xs="auto"><TaskItem task={task.payload} key={task.id}></TaskItem></Col>
                        <Col>
                            <Fab color="secondary" aria-label="edit" className={classes.fab}>
                                <EditIcon onClick={() => editTask(task.id)} />
                            </Fab>
                            <Fab aria-label="delete" className={classes.fab}>
                                <DeleteIcon onClick={() => deleteTask(task.id)} />
                            </Fab>
                        </Col>
                    </Row>
                </CardText>
            </Card>
            <br />
            </center>
        );
    }

    function editTask(id, payload) {
        props.dispatch(editTodo(id, payload))
    }

    function deleteTask(id) {
        props.dispatch(deleteTodo(id))
    }

    return <div className="task-list">
        {/* <Card inverse color="secondary">
            <CardHeader tag="h3" className="CardTitle">
                <div className="clearfix">
                    All Your Tasks
                </div>
            </CardHeader>
        </Card> */}
        {/* <br /> */}
        {
            renderAllTasks(props.allTodos)
            // props.allTodos.map(renderTaskItem) 
        }
    </div>
}