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
import './todaysplan.css';

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
            // textAlign: "center"
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
            margin: theme.spacing(1),
            background: '#01579b',
            color: 'white',
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
        if(todaysTasks.length > 0) {
            title = "You have " + (todaysTasks.length) + " tasks for the day"
        } else if(isMorning()) {
            title = "Good Morning! Plan your day for today and get started."
        } else if (isAfterWork()) {
            title = "Good job at work. No open tasks now!"
        } else {
            title = timeLeftAtWork() +"hours left at work. Everything done for now!"
        }
        return title
    }

    function renderOpenTasksTitle(title) {
        return (
            <Paper className={classes.title_paper} elevation={false}>
                <Typography variant="h4" component="h4">
                    {title} { renderDate() }
                </Typography>
            </Paper>
        );
    }

    function renderDate() {
        return (
            <Chip size="large" color="primary" label={new Date().toDateString()} />
        );
    }

    function renderCompletedTasks(completedTasks) {
        if(completedTasks.length > 0) {
            return (
                <div>
                <Paper className={classes.completed_tasks_card} elevation={false}>
                    <Typography variant="h4" component="h4">
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
                    <Typography variant="h5" component="h2">
                        {taskJson.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Chip size="small"  label={taskJson.category} />
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

    function renderCategoryChip(category) {
        var avatar_color
        if(category == 'Work') {
            avatar_color='red'
            return (
                <LabelIcon color="{avatar_color}"> Work </LabelIcon>
            );
        }
        if(category == 'Home') {
            avatar_color='orange'
            return (
                <StyledAvatar color={avatar_color}> <HomeIcon color="action" /> </StyledAvatar>
            );
        }
        if(category == 'Personal') {
            avatar_color='blue'
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
            <Chip variant="outlined" size="small"  color={priority_color} label={priority + " Priority"} />
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
            <Chip size="small" color={effort_color} icon={<AccessTimeIcon />} label={converted_effort + " " + effort_suffix} />
        );
    }

    function renderAction(status) {
        if(status == "Pending") {
            return (
                // <Button 
                // variant="contained"
                // color="secondary"
                // className={classes.button_start}
                // startIcon={<PlayArrowIcon />}>Start</Button>
                // <IconButton aria-label="start">
                    // <PlayArrowIcon />
                // </IconButton>
                <StyledAvatar color="action"> <PlayArrowIcon color="action" /> </StyledAvatar>
            );
        }
        if(status == "InProgress") {
            return (
                // <Button 
                // variant="contained"
                // color="secondary"
                // className={classes.button_complete}
                // startIcon={<AssignmentTurnedInIcon />}>Complete</Button>
                // <IconButton aria-label="in progress">
                    // <PauseIcon /> 
                    // <div>
                    <StyledAvatar color="action"> <PauseIcon color="action" /> </StyledAvatar>
                    // <Chip variant="outlined" size="small" label="In progress" />
                    // </div>
                // </IconButton>
            );
        }
    }

    function renderTask(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <Grid key={taskJson.id} item>
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
                    // title={
                    //     renderPriorityChip(taskJson.priority)
                    // }
                    // subheader={renderEffortChip(taskJson.effort)
                        // <Chip variant="outlined" color="primary" label={taskJson.effort + " hours"} />
                    // }
                />
                <CardContent className={classes.card_content}>
                    <Typography variant="h5" component="h2">
                        {taskJson.title}
                    </Typography>
                </CardContent>
                {/* <CardActions className={classes.card_action}>
                    {
                        renderAction(taskJson.status)
                    }
                </CardActions> */}
                <CardActions disableSpacing>
                    {
                        renderAction(taskJson.status)
                    }
                    {/* <Chip className={classes.expand} variant="outlined" size="small"  color="secondary" label="Complete" /> */}
                </CardActions>
            </Card>
            </Slide>
            </Grid>
        );
    }

    const isMorning = () => {
        var now = new Date();
        var morningTime = new Date();
        morningTime.setHours(11); morningTime.setMinutes(59);
        return now.getTime() <= morningTime.getTime()
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