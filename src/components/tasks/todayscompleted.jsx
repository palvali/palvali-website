import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { grey, green } from '@material-ui/core/colors';
import Slide from '@material-ui/core/Slide';
import './todaysplan.css';

const useStyles = makeStyles(theme => ({
        completed_tasks_card: {
            backgroundColor: grey[200],
            color: grey[900],
            padding: theme.spacing(3, 2),
        },
        completed_card: {
            width: 270,
            background: grey[800],
            color: 'white'
        },
        completed_card_content: {
            height: 80,
        },
        font_style: {
            fontFamily: ['Montserrat','sans-serif']
        },
        root: {
            padding: theme.spacing(3, 2),
        },
    }));

export default function TodayCompleted(props) {
    const classes = useStyles();

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

    const filterCompletedTasks = (todaysTodos) => {
        var completedTasks = todaysTodos.filter(function(t) {
                        return JSON.parse(t.payload).status == "Completed";
                    });

        return completedTasks;
    }

    function displayCompleted(allTodos) {
        let todaysTasks = filterTodaysTasks(allTodos)
        let completedTodaysTasks = filterCompletedTasks(todaysTasks)
        return (
            renderCompletedTasks(completedTodaysTasks)
        )
    }

    return <div className="task-list">
        {
            displayCompleted(props.allTodos)
        }
    </div>;
}