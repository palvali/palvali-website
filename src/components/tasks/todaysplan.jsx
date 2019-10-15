import React from 'react';
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
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TaskItem from './taskitem'
import './addtask.css';

const useStyles = makeStyles(theme => ({
        card: {
            minWidth: 100,
            maxWidth: 300,
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
            orange: orange[500],
        })
    },
})(({ classes, color, ...other }) => <Avatar aria-label="recipe" className={classes.root} {...other} />);
      

export default function Today(props) {
    const classes = useStyles();

    function renderTasks(todaysTasks) {
        if(todaysTasks.length > 0) {
            return (
                <div>
                <Paper className={classes.root} elevation={false}>
                    <Typography variant="h4" component="h4">
                        {
                            "You have " + (todaysTasks.length) + " tasks for the day"
                        }
                    </Typography>
                </Paper>
                <Grid className={classes.root} container spacing={5}>
                {
                    todaysTasks.map(renderTask)
                }
                </Grid>
                </div>
            );
        } else {
            return (
                <div>
                <Paper>
                    <br />
                    <Typography variant="h3" component="h3">
                        Hooray! No tasks today..
                    </Typography>
                    <br />
                </Paper>
                </div>
            );
        }
    }

    function renderAvatar(category) {
        var avatar_color
        if(category == 'Work') {
            avatar_color='red'
            return (
                <StyledAvatar color={avatar_color}> <WorkIcon color="action" /> </StyledAvatar>
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

    function renderTask(task) {
        let taskJson = JSON.parse(task.payload);
        var avatar_color
        if(taskJson.category == 'Work') avatar_color='red'
        if(taskJson.category == 'Home') avatar_color='orange'
        if(taskJson.category == 'Personal') avatar_color='blue'
        return (
            <Grid key={taskJson.id} item>
            <Card className={classes.card} raised={true}>
                <CardHeader
                    avatar={
                        renderAvatar(taskJson.category)
                    }
                    title={
                        <Chip variant="outlined" color="secondary" label={taskJson.priority + " Priority"} />
                    }
                    subheader={
                        <Chip variant="outlined" color="primary" label={taskJson.effort + " hours"} />
                    }
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {taskJson.title}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Complete Task</Button>
                </CardActions>
          </Card>
          </Grid>
        );
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

    function displayAll(allTodos) {
        let todaysTasks = filterTodaysTasks(props.allTodos)
        return [
            renderTasks(todaysTasks),
        ]
    }

    return <div className="task-list">
        {
            displayAll(props.allTodos)
        }
    </div>;
}