import React, { Component } from 'react';
import { Button, Badge, Form, Input, Row, ButtonGroup, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Card, CardTitle, CardText, CardHeader, CardBody, Spinner, Container } from 'reactstrap';
import { Table } from 'reactstrap';
import './addtask.css';

export default class TaskItem extends Component {

    constructor (props) {
        super(props);

        this.state = {
            task: {},
            id: '',
            priorityColor: 'info',
            categoryColor: 'info'
        }
    }

    componentDidMount(){
        let task = JSON.parse( this.props.task );
        this.setState({task: task});
        this.setState(state => ({ id: this.props.key }));
        console.log("Parsed "+JSON.stringify(task))
        var priorityColor
        if(task.priority == 'High') {
            priorityColor = 'danger'
        } else if(task.priority == 'Medium') {
            priorityColor = 'warning'
        } else {
            priorityColor = 'info'
        }

        var categoryColor
        if(task.category == 'Work') {
            categoryColor = 'danger'
        } else if(task.category == 'Home') {
            categoryColor = 'warning'
        } else {
            categoryColor = 'info'
        }

        this.setState(state => ({ priorityColor: priorityColor }));
        this.setState(state => ({ categoryColor: categoryColor }));
    }

    render() {
        return (
            <Row>
                <Col xs="auto">{this.state.task.title}</Col>
                <Col><Badge color={this.state.priorityColor} outline>{this.state.task.priority}</Badge></Col>
                <Col><Badge color={this.state.categoryColor} outline>{this.state.task.category}</Badge></Col>
                <Col><Badge outline>{""+this.state.task.effort} hours</Badge></Col>
                <Col><Badge outline>{""+this.state.task.deadline}</Badge></Col>
            </Row>
        )
    }
}