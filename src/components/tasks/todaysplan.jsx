import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { red, lightBlue, grey, green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelIcon from '@material-ui/icons/Label';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PauseIcon from '@material-ui/icons/Pause';
import BusinessIcon from '@material-ui/icons/Business';
import ComputerIcon from '@material-ui/icons/Computer';
import clsx from 'clsx';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import { addTodo, editTodo, deleteTodo } from '../../actions';
import './todaysplan.css';
import { identifier } from '@babel/types';

const useStyles = makeStyles(theme => ({
        title_paper: {
            backgroundColor: blue[50],
            padding: theme.spacing(3, 2),
        },
        card: {
            width: 270,
            // height: 300
        },
        open_tasks_card: {
            backgroundColor: blue[50],
            padding: theme.spacing(3, 2),
        },
        completed_tasks_card: {
            backgroundColor: grey[200],
            color: green[900],
            padding: theme.spacing(3, 2),
        },
        completed_card: {
            width: 270,
            // background: 'linear-gradient(45deg, #045494 30%, #045494 90%)',
            background: green[900],
            color: 'white'
        },
        completed_card_content: {
            // backgroundColor: grey[100],
            height: 80,
            // textAlign: "center"
        },
        card_content: {
            backgroundColor: grey[100],
            height: 110,
            // fontFamily: ['Karla','sans-serif']
        },
        font_style: {
            fontFamily: ['Montserrat','sans-serif']
        },
        action_font_style: {
            fontFamily: ['Karla','sans-serif']
        },
        card_action: {
            justifyContent: "flex-start"
        },
        title: {
            fontSize: 14,
        },
        avatar_red: {
            backgroundColor: red[500],
        },
        avatar_blue: {
            backgroundColor: blue[500],
        },
        avatar_orange: {
            backgroundColor: orange[500],
        },
        button_start: {
            // margin: theme.spacing(1),
            // background: '#01579b',
            color: 'black',
        },
        button_complete: {
            margin: theme.spacing(1),
            background: '#388e3c',
            color: 'white',
        },
        expand: {
            // transform: 'rotate(0deg)',
            marginLeft: 'auto',
            // transition: theme.transitions.create('transform', {
            //     duration: theme.transitions.duration.shortest,
            // }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        root: {
            padding: theme.spacing(3, 2),
        },
    }));

const styledBy = (property, mapping) => props => mapping[props[property]];

const StyledAvatar = withStyles({
    root: {
        backgroundColor: styledBy('color', {
            default: red[500],
            blue: blue[500],
            red: red[500],
            green: green[500],
            orange: orange[500],
        })
    },
})(({ classes, color, ...other }) => <Avatar aria-label="recipe" className={classes.root} {...other} />);


export default function Today(props) {
    const classes = useStyles();

    function renderTasks(todaysOpenTasks) {
        var title = getTitle(todaysOpenTasks)
        if(todaysOpenTasks.length > 0) {
            var reorderedTasks = reorderTasks(todaysOpenTasks)
            return (
                <div>
                    { renderOpenTasksTitle(title) }
                    <Grid className={classes.root} container spacing={5}>
                    {
                        reorderedTasks.map(renderTask)
                    }
                    </Grid>
                </div>
            );
        } else {
            return (
                <div>
                    { renderOpenTasksTitle(title) }
                </div>
            );
        }
    }

    function reorderTasks(openTasks) {
        var reorderedTasks = []

        var dayVal = getDayVal()

        var workTasks = reorder(getTasksByCategory(openTasks, "Work"))
        var homeTasks = reorder(getTasksByCategory(openTasks, "Home"))
        var personalTasks = reorder(getTasksByCategory(openTasks, "Personal"))
        if(dayVal == "AT_WORK") {
            Array.prototype.push.apply(reorderedTasks, workTasks);
            Array.prototype.push.apply(reorderedTasks, homeTasks);
            Array.prototype.push.apply(reorderedTasks, personalTasks);
        } else if(dayVal == "BEFORE_WORK") {
            Array.prototype.push.apply(reorderedTasks, homeTasks);
            Array.prototype.push.apply(reorderedTasks, workTasks);
            Array.prototype.push.apply(reorderedTasks, personalTasks);
        } else {
            Array.prototype.push.apply(reorderedTasks, personalTasks);
            Array.prototype.push.apply(reorderedTasks, homeTasks);
            Array.prototype.push.apply(reorderedTasks, workTasks);
        }

        return reorderedTasks
    }

    function reorder(openTasks) {
        var reorderedTasks = []

        var inprogressTasks = getTasksByStatus(openTasks, "InProgress")
        var pendingTasks = getTasksByStatus(openTasks, "Pending")

        var inprogress_high = getTasksByPriority(inprogressTasks, "High")
        var inprogress_med = getTasksByPriority(inprogressTasks, "Medium")
        var inprogress_low = getTasksByPriority(inprogressTasks, "Low")

        var pending_high = getTasksByPriority(pendingTasks, "High")
        var pending_med = getTasksByPriority(pendingTasks, "Medium")
        var pending_low = getTasksByPriority(pendingTasks, "Low")

        Array.prototype.push.apply(reorderedTasks, inprogress_high);
        Array.prototype.push.apply(reorderedTasks, inprogress_med);
        Array.prototype.push.apply(reorderedTasks, inprogress_low);
        Array.prototype.push.apply(reorderedTasks, pending_high);
        Array.prototype.push.apply(reorderedTasks, pending_med);
        Array.prototype.push.apply(reorderedTasks, pending_low);

        return reorderedTasks
    }

    function getDayVal() {
        var dayVal
        if(isBeforeWork()) dayVal = 'BEFORE_WORK'
        else if(isAfterWork()) dayVal = 'AFTER_WORK'
        else dayVal = 'AT_WORK'

        return dayVal
    }

    function getTasksByCategory(tasks, category) {
        var filteredTasks = tasks.filter(function(t) {
            return JSON.parse(t.payload).category == category;
        });

        return filteredTasks;
    }

    function getTasksByPriority(tasks, priority) {
        var filteredTasks = tasks.filter(function(t) {
            return JSON.parse(t.payload).priority == priority;
        });

        return filteredTasks;
    }

    function getTasksByStatus(tasks, status) {
        var filteredTasks = tasks.filter(function(t) {
            return JSON.parse(t.payload).status == status;
        });

        return filteredTasks;
    }

    function getTitle(todaysTasks) {
        var title
        var timeLeft = timeLeftAtWork()
        if(todaysTasks.length > 0) {
            var numTasks = 0
            title = "You have " + (todaysTasks.length) + " tasks for the day."
            if(isAtWork() && timeLeft > 0) {
                numTasks = getTasksByCategory(todaysTasks, "Work").length
                if (numTasks == 0) {
                    title = "Plan your day at work."
                } else {
                    title = "You have " + (numTasks)
                    if(numTasks == 1) title += " task at work."
                    else title += " tasks at work."
                }
                title += " " + timeLeft + " hours left."
            }
        } else if(isMorning()) {
            title = "Good Morning! Plan your day for today and get started."
        } else if (isAfterWork()) {
            title = "Good job at work. No open tasks now!"
        } else {
            title = timeLeftAtWork() +" hours left at work. Everything done for now!"
        }
        return title
    }

    function renderOpenTasksTitle(title) {
        return (
            <Grid justify='space-between' container className={classes.title_paper}>
                <Grid item>
                    <Typography variant="h4" component="h4" className={classes.font_style}>
                        { title }
                    </Typography>
                </Grid>
                <Grid item>
                    { renderDate() }
                </Grid>
            </Grid>
        );
    }

    function renderDate() {
        return (
            <Chip size="medium" color="primary" className={classes.font_style} label={new Date().toDateString()} />
        );
    }

    function renderCompletedTasks(completedTasks) {
        if(completedTasks.length > 0) {
            return (
                <div>
                <Paper className={classes.completed_tasks_card} elevation={false}>
                    <Typography variant="h4" component="h4" className={classes.font_style}>
                        {
                            "Completed " + (completedTasks.length) + " tasks today.."
                        }
                    </Typography>
                </Paper>
                <Grid className={classes.root} container spacing={5}>
                {
                    completedTasks.map(renderCompletedTask)
                }
                </Grid>
                </div>
            );
        }
    }

    function renderCompletedTask(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <Grid key={taskJson.id} item>
                <Slide direction="left" in="true" mountOnEnter unmountOnExit>
            <Card className={classes.completed_card} raised={true}>
                <CardContent className={classes.completed_card_content}>
                    <Typography variant="h5" component="h2" className={classes.font_style}>
                        {taskJson.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Chip size="small" className={classes.font_style} label={taskJson.category} />
                </CardActions>
          </Card>
          </Slide>
          </Grid>
        );
    }

    function renderCategoryAvatar(category) {
        var avatar_color
        if(category == 'Work') {
            avatar_color='blue'
            return (
                <StyledAvatar color={avatar_color}> <ComputerIcon color="action" /> </StyledAvatar>
            );
        }
        if(category == 'Home') {
            avatar_color='orange'
            return (
                <StyledAvatar color={avatar_color}> <HomeIcon color="action" /> </StyledAvatar>
            );
        }
        if(category == 'Personal') {
            avatar_color='green'
            return (
                <StyledAvatar color={avatar_color}> <EmojiPeopleIcon color="action" /> </StyledAvatar>
            );
        }
    }

    function renderPriorityChip(priority) {
        var priority_color
        if(priority == 'High') {
            priority_color='secondary'
        }
        if(priority == 'Medium') {
            priority_color='primary'
        }
        if(priority == 'Low') {
            priority_color='default'
        }
        return (
            <Chip variant="outlined" className={classes.font_style} size="small"  color={priority_color} label={priority + " Priority"} />
        );
    }

    function renderEffortChip(effort) {
        var effort_color
        var effort_suffix = 'hours'
        var converted_effort = effort
        if(effort >= 3) {
            effort_color='secondary'
        }
        if(effort < 3) {
            effort_color='primary'
        }
        if(effort < 1) {
            effort_color='default'
        }
        
        if(effort == 1) effort_suffix = 'hour'
        if(effort < 1) {
            converted_effort = effort * 60
            effort_suffix = 'minutes'
        }

        return (
            <Chip size="small" className={classes.font_style} color={effort_color} icon={<AccessTimeIcon />} label={converted_effort + " " + effort_suffix} />
        );
    }

    function handleActionChange(id, newStatus, task) {
        task.status = newStatus
        editTask(id, task)
    }

    function renderAction(id, status, task) {
        if(status == "Pending") {
            return (
                <Button 
                className={classes.button_start}
                startIcon={<PlayArrowIcon />}
                onClick={() => handleActionChange(id, "InProgress", task)}
                >
                    <Typography className={classes.action_font_style}>
                        Start
                    </Typography>
                </Button>
            );
        }
        if(status == "InProgress") {
            return (
                <Grid container justify='space-between'>
                    <Button 
                        className={classes.button_start}
                        startIcon={<PauseIcon />}
                        onClick={() => handleActionChange(id, "Pending", task)}>
                            <Typography className={classes.action_font_style}>
                                Pause
                            </Typography>
                    </Button>
                    <Button 
                        className={classes.button_start}
                        startIcon={<AssignmentTurnedInIcon />}
                        onClick={() => handleActionChange(id, "Completed", task)}>
                            <Typography className={classes.action_font_style}>
                                Complete
                            </Typography>
                    </Button>
                </Grid>
            );
        }
    }

    function renderTask(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <Grid key={task.id} item>
                <Slide direction="right" in="true" mountOnEnter unmountOnExit>
                    <Card className={classes.card} raised={true}>
                        <CardHeader 
                            avatar={renderCategoryAvatar(taskJson.category)}
                            action={
                                <div align="right">
                                    {renderEffortChip(taskJson.effort)}
                                    <br />
                                    {renderPriorityChip(taskJson.priority)}
                                </div>
                            }
                        />
                        <CardContent className={classes.card_content}>
                            <Typography variant="h5" component="h2" className={classes.font_style}>
                                {taskJson.title}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        {
                            renderAction(task.id, taskJson.status, taskJson)
                        }
                        </CardActions>
                    </Card>
                </Slide>
            </Grid>
        );
    }

    function formatDate(date) {
        if(date.toString().length < 12) return date
  
        var d = date.getDate();
        var m = date.getMonth()+1;
        var y = date.getFullYear();
  
        var formattedDate = y+"-"+(m <= 9 ? '0' + m : m)+"-"+(d <= 9 ? '0' + d : d)
        return formattedDate
    }

    function editTask(id, payload) {
        payload.deadline = formatDate(payload.deadline)
        var jsonPayload = JSON.stringify(payload)
        props.dispatch(editTodo(id, jsonPayload))
    }

    const isMorning = () => {
        var now = new Date();
        var morningTime = new Date();
        morningTime.setHours(11); morningTime.setMinutes(59);
        return now.getTime() <= morningTime.getTime()
    }

    const isAtWork = () => {
        var now = new Date();
        var workStartTime = new Date();
        workStartTime.setHours(9); workStartTime.setMinutes(0);
        var workEndTime = new Date();
        workEndTime.setHours(17); workEndTime.setMinutes(0);
        return now.getTime() >= workStartTime.getTime() && now.getTime() <= workEndTime.getTime()
    }

    const isBeforeWork = () => {
        var now = new Date();
        var workStartTime = new Date();
        workStartTime.setHours(9); workStartTime.setMinutes(0);
        return now.getTime() < workStartTime.getTime()
    }

    const isAfterWork = () => {
        var now = new Date();
        var eveningTime = new Date();
        eveningTime.setHours(17); eveningTime.setMinutes(0);
        return now.getTime() >= eveningTime.getTime()
    }

    const timeLeftAtWork = () => {
        var now = new Date();
        var eveningTime = new Date();
        eveningTime.setHours(17); eveningTime.setMinutes(0);
        return eveningTime.getHours() - now.getHours()
    }

    const isToday = (someDate) => {
        const today = new Date()
        var parts = someDate.split('-')
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        return mydate.getDate() == today.getDate() &&
            mydate.getMonth() == today.getMonth() &&
            mydate.getFullYear() == today.getFullYear()
    }

    const filterTodaysTasks = (allTodos) => {
        var todaystasks = allTodos.filter(function(t) {
                        return isToday(JSON.parse(t.payload).deadline);
                    });

        return todaystasks;
    }

    const isCompleted = (status) => {
        return status == "Completed"
    }

    const filterCompletedTasks = (todaysTodos) => {
        var completedTasks = todaysTodos.filter(function(t) {
                        return isCompleted(JSON.parse(t.payload).status);
                    });

        return completedTasks;
    }

    const filterOpenTasks = (todaysTodos) => {
        var completedTasks = todaysTodos.filter(function(t) {
                        return JSON.parse(t.payload).status != "Completed";
                    });

        return completedTasks;
    }

    function displayAll(allTodos) {
        let todaysTasks = filterTodaysTasks(props.allTodos)
        let openTodaysTasks = filterOpenTasks(todaysTasks)
        let completedTodaysTasks = filterCompletedTasks(todaysTasks)
        return [
            renderTasks(openTodaysTasks),
            renderCompletedTasks(completedTodaysTasks)
        ]
    }

    return <div className="task-list">
        {
            displayAll(props.allTodos)
        }
    </div>;
}