import React, { useState } from 'react';
import { Button, Form, Input, Row, ButtonGroup, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Card, CardBody, Spinner} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MaterialTable from 'material-table';
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
import Grid from '@material-ui/core/Grid';

import { addTodo, editTodo, deleteTodo } from '../../actions';
import './plannerwidget.css';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PlannerWidget(props) {

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

    const [data, setData] = useState([]);
    const [placeholdertitle, setPlaceholdertitle] = useState('Title');
    const [loading, setLoading] = useState(false);
    const [collapse, setCollapse] = useState(false);

    function transformOneTask(task) {
        var t_payload = JSON.parse(task.payload)
        return {
            id: task.id,
            title: t_payload.title, 
            priority: t_payload.priority, 
            category: t_payload.category, 
            effort: ""+t_payload.effort, 
            deadline: ""+t_payload.deadline,
            status: t_payload.status
        }
    }

    function transformData(allTasks) {
        var tr_data = allTasks.map(transformOneTask)

        return tr_data;
    }

    function toggle() {
      setCollapse(!collapse)
    }

    function handleTitleChange(event) {
        setData({...data, title: event.target.value})
    }

    function handleFollowupChange(event) {
        setData({...data, followup: event.target.checked})
    }

    function onPriorityBtnClick(priority) {
        setData({...data, priority})
    }

    function onEffortBtnClick(effort) {
        setData({...data, effort})
    }

    function onCatBtnClick(category) {
        setData({...data, category})
    }

    function handleDeadlineChange(event) {
        setData({...data, deadline: event.target.value})
    }

    function formatDate(date) {
      var dateStr = date.toString()
      if(date.toString().length < 12) return date

      var d = date.getDate();
      var m = date.getMonth()+1;
      var y = date.getFullYear();

      var formattedDate = y+"-"+(m <= 9 ? '0' + m : m)+"-"+(d <= 9 ? '0' + d : d)
      console.log("Formatted: "+formattedDate)
      return formattedDate
    }

    function getCurrentDate() {
      var curDate = new Date()
      return curDate
    }

    Date.prototype.toJSON = function () {
      var timezoneOffsetInHours = -(this.getTimezoneOffset() / 60); //UTC minus local time
      var sign = timezoneOffsetInHours >= 0 ? '+' : '-';
      var leadingZero = (Math.abs(timezoneOffsetInHours) < 10) ? '0' : '';
    
      //It's a bit unfortunate that we need to construct a new Date instance 
      //(we don't want _this_ Date instance to be modified)
      var correctedDate = new Date(this.getFullYear(), this.getMonth(), 
          this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(), 
          this.getMilliseconds());
      correctedDate.setHours(this.getHours() + timezoneOffsetInHours);
      var iso = correctedDate.toISOString().replace('Z', '');
    
      return iso + sign + leadingZero + Math.abs(timezoneOffsetInHours).toString() + ':00';
    }

    function handleSubmit(event) {
      setLoading(true)
      data.status = "Pending";
      if(!data.hasOwnProperty('deadline')) {
          data.deadline = formatDate(getCurrentDate())
      }

      if(data.followup == true) {
          data.effort = 0.1
      }

      event.preventDefault();
      var input = JSON.stringify(data);

      console.log(input)

      props.dispatch(addTodo(input))

      setLoading(false)
      setData({
          'title':'',
          'deadline':formatDate(getCurrentDate()),
          'status': '',
          'followup': false
      })
    }

    function renderAddTaskButton() {
      return (
        <div>
          <center>
            <Fab className="btn" color='secondary' size="small" aria-label="add">
              <AddIcon color="white" onClick={toggle} />
            </Fab>

            <Modal isOpen={collapse} size="lg">
              <Form onSubmit={handleSubmit}>
                <ModalHeader>Add Task</ModalHeader>
                <ModalBody>
                  <Card outline color="secondary">
                    <CardBody>
                      <Row>
                        <Col>
                            <Input className="TaskField" type="text" name="taskTitle" id="taskTitle" placeholder={placeholdertitle}
                            value={data.title} onChange={handleTitleChange} />
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <Switch
                              onChange={handleFollowupChange}
                              checked={data.followup}
                              value="followup"
                              color="primary"
                          />
                          Is Follow-up task?
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <ButtonGroup >
                            <Button color="secondary" className="TaskField" outline disabled>takes</Button>
                            <Button color="info" outline onClick={() => onEffortBtnClick(1)} active={data.effort === 1} disabled={data.followup}>1</Button>
                            <Button color="info" outline onClick={() => onEffortBtnClick(2)} active={data.effort === 2} disabled={data.followup}>2</Button>
                            <Button color="info" outline onClick={() => onEffortBtnClick(3)} active={data.effort === 3} disabled={data.followup}>3</Button>
                            <Button color="info" outline onClick={() => onEffortBtnClick(4)} active={data.effort === 4} disabled={data.followup}>4</Button>
                            <Button color="info" outline onClick={() => onEffortBtnClick(5)} active={data.effort === 5} disabled={data.followup}>5</Button>
                            <Button color="info" outline onClick={() => onEffortBtnClick(6)} active={data.effort === 6} disabled={data.followup}>6</Button>
                            <Button color="secondary" className="TaskField" outline disabled>hours</Button>
                          </ButtonGroup>
                        </Col>
                        <Col>
                          <InputGroup>
                            <InputGroupAddon className="TaskField" addonType="prepend">complete it by</InputGroupAddon>
                            <Input className="TaskField" type="date" name="taskDeadline" id="taskDeadline" defaultValue={formatDate(getCurrentDate())}
                            value={data.deadline} onChange={handleDeadlineChange}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <Col>
                          <ButtonGroup>
                            <Button color="secondary" className="TaskField" outline disabled>priority</Button>
                            <Button color="danger" outline onClick={() => onPriorityBtnClick("High")} active={data.priority === "High"}>High</Button>
                            <Button color="warning" outline onClick={() => onPriorityBtnClick("Medium")} active={data.priority === "Medium"}>Medium</Button>
                            <Button color="info" outline onClick={() => onPriorityBtnClick("Low")} active={data.priority === "Low"}>Low</Button>
                          </ButtonGroup>
                        </Col>

                        <Col>
                          <ButtonGroup>
                            <Button color="secondary" className="TaskField" outline disabled>category</Button>
                            <Button color="danger" outline onClick={() => onCatBtnClick("Work")} active={data.category === "Work"}>Work</Button>
                            <Button color="warning" outline onClick={() => onCatBtnClick("Home")} active={data.category === "Home"}>Home</Button>
                            <Button color="info" outline onClick={() => onCatBtnClick("Personal")} active={data.category === "Personal"}>Personal</Button>
                          </ButtonGroup>
                        </Col>
                        </Row>
                    </CardBody> 
                  </Card>
                </ModalBody>
                <ModalFooter className="float-left">
                  {loading ? <Spinner color="primary" className="SubmitButton" /> : <Button color="primary" size="lg" className="SubmitButton" >Submit</Button>}
                  {' '}
                  <Button color="danger" size="lg" onClick={toggle}>Close</Button>
                </ModalFooter>
              </Form>
            </Modal>
          </center>
        </div>
      )
    }

  const isPast = (someDate) => {
      const today = new Date()
      var parts = someDate.split('-')
      var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)
      today.setMilliseconds(0)
      return mydate < today
  }

  const filterData = (allTasks) => {
      var filtered_data = allTasks.filter(function(t) {
                      return JSON.parse(t.payload).status != "Completed"
                      || !isPast(JSON.parse(t.payload).deadline)
                  });

      return filtered_data;
  }

  function renderAllTasks(allTasks) {
      var filtered_data = filterData(allTasks)
      var tr_data = transformData(filtered_data)

      const table_data = {
          columns: [
            { title: 'Title', field: 'title' },
            { title: 'Priority', field: 'priority', 
              lookup: { 'High': "High", 'Medium': "Medium", 'Low': "Low" } },
            { title: 'Category', field: 'category',
              lookup: { 'Work': "Work", 'Home': "Home", 'Personal': "Personal" }},
            { title: 'Effort', field: 'effort', filtering: false },
            { title: 'Deadline', field: 'deadline', type: 'date', filtering: false },
            { title: 'Status', field: 'status',
              lookup: { 'Pending': "Pending", 'InProgress': "InProgress", 'Completed': "Completed" }},
          ],
          data: tr_data,
        };

        return (
          <MaterialTable
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
                  toolbar: false,
                  filtering: true,
                  actionsColumnIndex: -1,
                  paging: false,
                  maxBodyHeight: 1000
              }
            }
            editable={{
              isEditable: rowData => rowData.status != 'Completed',
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    editTask(oldData.id, newData)
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
            actions={[
              rowData => ({
                icon: 'check',
                tooltip: 'Complete task',
                onClick: (event, rowData) => 
                  new Promise(resolve => {
                    setTimeout(() => {
                      resolve();
                      rowData.status = 'Completed'
                      completeTask(rowData.id, rowData)
                    }, 600);
                  }),
                disabled: rowData.status == 'Completed'
              })
            ]}
          />
        );
    }

    function completeTask(id, payload) {
      var jsonPayload = JSON.stringify(payload)
      props.dispatch(editTodo(id, jsonPayload))
    }

    function editTask(id, payload) {
        payload.deadline = formatDate(payload.deadline)
        var jsonPayload = JSON.stringify(payload)
        props.dispatch(editTodo(id, jsonPayload))
    }

    function deleteTask(id) {
        props.dispatch(deleteTodo(id))
    }

    return (<div className="task-list">
        <Grid justify='space-between' container className={classes.root}>
          <Grid item>
            <Typography variant="h4" component="h4">
              You have {
                props.allTodos.filter(function(t) {
                  return JSON.parse(t.payload).status != 'Completed';
                }).length
              } open tasks.
            </Typography>
          </Grid>
          <Grid item>
            { 
              renderAddTaskButton()
            }
          </Grid>
        </Grid>
        {
            renderAllTasks(props.allTodos)
        }
    </div>)
}