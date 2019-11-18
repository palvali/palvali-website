import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red, grey, green } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import { orange } from '@material-ui/core/colors';
import './todaysplan.css';

export const useStyles = makeStyles(theme => ({
        title_paper: {
            backgroundColor: grey[100],
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
        button_pause: {
            color: 'red',
            background: red[50]
        },
        button_complete: {
            color: 'green',
            background: green[50]
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


