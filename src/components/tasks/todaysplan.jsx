import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { red, grey, green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PauseIcon from '@material-ui/icons/Pause';
import ComputerIcon from '@material-ui/icons/Computer';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Slide from '@material-ui/core/Slide';
import { editTodo } from '../../actions';
import './todaysplan.css';

const useStyles = makeStyles(theme => ({
        title_paper: {
            backgroundColor: blue[50],
            padding: theme.spacing(3, 2),
        },
        card: {
            width: 270,
        },
        open_tasks_card: {
            backgroundColor: blue[50],
            padding: theme.spacing(3, 2),
        },
        followup_task_card_header: {
            backgroundColor: grey[400],
        },
        card_content: {
            backgroundColor: grey[100],
            height: 110,
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
            color: 'black',
        },
        button_complete: {
            margin: theme.spacing(1),
            background: '#388e3c',
            color: 'white',
        },
        button_show_other_tasks: {
            color: 'black',
            margin: theme.spacing(1),

        },
        expand: {
            marginLeft: 'auto',
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

    const [showNonWorkTasks, setShowNonWorkTasks] = useState(true);
    const [showNonWorkTasksTitle, setShowNonWorkTasksTitle] = useState('Hide');

    useEffect(() => {
        if(showNonWorkTasks) setShowNonWorkTasksTitle('Hide')
        else setShowNonWorkTasksTitle('Show')
      });

    function renderTasks(oldOpenTasks, todaysOpenTasks) {
        var reorderedOldTasks = reorderTasks(oldOpenTasks)
        var reorderedTasks = reorderTasks(todaysOpenTasks)

        var allTasks = []
        Array.prototype.push.apply(allTasks, reorderedOldTasks);
        Array.prototype.push.apply(allTasks, reorderedTasks);

        var reorderedAllTasks = reorderTasks(allTasks)
        var title = getTitle(reorderedAllTasks)

        return (
            <div>
                { renderOpenTasksTitle(title) }
                <Button className={classes.button_show_other_tasks}
                    startIcon={<VerifiedUserIcon />}
                    onClick={() => setShowNonWorkTasks(!showNonWorkTasks)}
                    hidden={!isAtWork()}
                    >
                        <Typography className={classes.action_font_style}>
                            {showNonWorkTasksTitle} non-work tasks
                        </Typography>
                </Button>
                <Grid className={classes.root} container spacing={5} alignItems="center">
                {
                    reorderedAllTasks.map(renderTask)
                }
                </Grid>
            </div>
        );
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

    function renderTask(task) {
        let taskJson = JSON.parse(task.payload);
        if(showNonWorkTasks == false && taskJson.category != 'Work') {
            return;
        }
        if(taskJson.effort < 1) {
            return (
                renderFollowupTask(task)
            )
        } else {
            return (
                renderOpenTask(task)
            )
        }
    }

    function renderOpenTask(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <Grid key={task.id} item>
                <Slide direction="right" in="false" mountOnEnter unmountOnExit>
                    <Card className={classes.card} raised={true}>
                        <CardHeader 
                            avatar={renderCategoryAvatar(taskJson.category)}
                            action={
                                <div align="right">
                                    {renderDeadlineWarningChip(taskJson)}
                                    <br />
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

    function renderFollowupTask(task) {
        let taskJson = JSON.parse(task.payload);
        return (
            <Grid key={task.id} item>
                <Slide direction="right" in="true" mountOnEnter unmountOnExit>
                    <Card className={classes.card} raised={true}>
                        <CardHeader 
                            className={classes.followup_task_card_header}
                            avatar={renderCategoryAvatar(taskJson.category)}
                            title={
                                <Typography variant="h5" component="h5" className={classes.font_style}>
                                    Follow-up
                                </Typography>
                            }
                        />
                        <CardContent className={classes.card_content}>
                            <Typography variant="h5" component="h2" className={classes.font_style}>
                                {taskJson.title}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button 
                                className={classes.button_start}
                                startIcon={<AssignmentTurnedInIcon />}
                                onClick={() => handleActionChange(task.id, "Completed", taskJson)}>
                                <Typography className={classes.action_font_style}>
                                    Done
                                </Typography>
                            </Button>
                        </CardActions>
                    </Card>
                </Slide>
            </Grid>
        );
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
        var numTodaysTasks = todaysTasks.length
        var numTasksAtWork = getTasksByCategory(todaysTasks, "Work").length
        var timeLeft = timeLeftAtWork()
        if(numTodaysTasks > 0) {
            if(isAtWork()) {
                if (numTasksAtWork == 0) {
                    title = "Plan your day at work."
                } else {
                    title = "You have " + (numTasksAtWork) + " "
                    title += (numTasksAtWork == 1) ? "task" : "tasks"
                    title += " at work."
                }
                title += " " + timeLeft + " hours left."
            } else {
                title = "You have " + (numTodaysTasks) + " "
                title += (numTodaysTasks == 1) ? "task" : "tasks"
                title += " for the day."
                if (numTasksAtWork > 0) {
                    title += " "+(numTasksAtWork) + " work tasks left."
                }
            }
        } else if(isMorning()) {
            title = "Good Morning! Plan your day for today and get started."
        } else if (isAfterWork()) {
            title = "No open tasks now!"
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

    function renderDeadlineWarningChip(taskJson) {
        if(isToday(taskJson.deadline)) {
            return (
                <Chip className={classes.font_style} size="small"  color="primary" 
                label="Today" />
            );
        } else {
            return (
                <Chip className={classes.font_style} size="small"  color="secondary" 
                label= {daysLeft(taskJson.deadline) + " days late"} />
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

    const daysLeft = (deadline) => {
        var parts = deadline.split('-')
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        var now = new Date();
        return now.getDate() - mydate.getDate()
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
        workStartTime.setHours(8); workStartTime.setMinutes(0);
        var workEndTime = new Date();
        workEndTime.setHours(18); workEndTime.setMinutes(0);
        return now.getTime() >= workStartTime.getTime() && now.getTime() <= workEndTime.getTime()
    }

    const isBeforeWork = () => {
        var now = new Date();
        var workStartTime = new Date();
        workStartTime.setHours(8); workStartTime.setMinutes(0);
        return now.getTime() < workStartTime.getTime()
    }

    const isAfterWork = () => {
        var now = new Date();
        var eveningTime = new Date();
        eveningTime.setHours(18); eveningTime.setMinutes(0);
        return now.getTime() >= eveningTime.getTime()
    }

    const timeLeftAtWork = () => {
        var now = new Date();
        var eveningTime = new Date();
        eveningTime.setHours(18); eveningTime.setMinutes(0);
        return eveningTime.getHours() - now.getHours()
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

    const isToday = (someDate) => {
        const today = new Date()
        var parts = someDate.split('-')
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
        return mydate.getDate() == today.getDate() &&
            mydate.getMonth() == today.getMonth() &&
            mydate.getFullYear() == today.getFullYear()
    }

    const filterOldOpenTasks = (allTodos) => {
        var oldOpen = allTodos.filter(function(t) {
                        return isPast(JSON.parse(t.payload).deadline) && 
                        JSON.parse(t.payload).status != "Completed"
                    });

        return oldOpen;
    }

    const filterTodaysTasks = (allTodos) => {
        var todaystasks = allTodos.filter(function(t) {
                        return isToday(JSON.parse(t.payload).deadline);
                    });

        return todaystasks;
    }

    const filterOpenTasks = (todaysTodos) => {
        var completedTasks = todaysTodos.filter(function(t) {
                        return JSON.parse(t.payload).status != "Completed";
                    });

        return completedTasks;
    }

    function displayAll(allTodos) {
        let todaysTasks = filterTodaysTasks(allTodos)
        let openTodaysTasks = filterOpenTasks(todaysTasks)
        let oldOpenTasks = filterOldOpenTasks(allTodos)
        return (
            renderTasks(oldOpenTasks, openTodaysTasks)
        )
    }

    return <div className="task-list">
        {
            displayAll(props.allTodos)
        }
    </div>;
}