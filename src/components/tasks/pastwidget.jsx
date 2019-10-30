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

import './plannerwidget.css';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PastWidget(props) {

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
            category: t_payload.category, 
            effort: ""+t_payload.effort, 
            deadline: ""+t_payload.deadline
        }
    }

    function transformData(allTasks) {
        var tr_data = allTasks.map(transformOneTask)

        return tr_data;
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
                      return JSON.parse(t.payload).status == "Completed"
                      && isPast(JSON.parse(t.payload).deadline)
                  });

      return filtered_data;
  }

  function renderAllTasks(allTasks) {
      var filtered_data = filterData(allTasks)
      var tr_data = transformData(filtered_data)

      const table_data = {
          columns: [
            { title: 'Title', field: 'title', grouping: false },
            { title: 'Category', field: 'category',
              lookup: { 'Work': "Work", 'Home': "Home", 'Personal': "Personal" }},
            { title: 'Effort', field: 'effort', filtering: false },
            { title: 'Deadline', field: 'deadline', type: 'date', filtering: false, defaultGroupOrder: 0 },
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
                  paging: true,
                  maxBodyHeight: 1000,
                  grouping: true
              }
            }
          />
        );
    }

    return (<div className="task-list">
        {
            renderAllTasks(props.allTodos)
        }
    </div>)
}