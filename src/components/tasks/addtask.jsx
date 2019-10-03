import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, Input, Row, ButtonGroup, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Card, CardHeader, CardBody, Spinner, Collapse} from 'reactstrap';
import './addtask.css';
import { addTodo } from '../../actions';


export default class AddTask extends Component {

    constructor (props) {
        super(props);

        this.state = {
            data: [],
            placeholdertitle: 'Title',
            loading: false,
            collapse: false,
            expandButtonText: 'Expand'
        };

        this.toggle = this.toggle.bind(this);

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.onPriorityBtnClick = this.onPriorityBtnClick.bind(this);
        this.onEffortBtnClick = this.onEffortBtnClick.bind(this);
        this.onCatBtnClick = this.onCatBtnClick.bind(this);
        this.handleDeadlineChange = this.handleDeadlineChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.baseStateData = this.state.data;
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
        var expandButtonText;
        if(this.state.collapse == true) {
            expandButtonText = 'Expand'
        } else {
            expandButtonText = 'Collapse'
        }
        this.setState(state => ({ expandButtonText: expandButtonText }));
    }

    handleTitleChange(event) {
        this.setState({ data: { ...this.state.data, title: event.target.value} });
    }

    onPriorityBtnClick(priority) {
        this.setState({ data: { ...this.state.data, priority} });
    }

    onEffortBtnClick(effort) {
        this.setState({ data: { ...this.state.data, effort} });
    }

    onCatBtnClick(category) {
        this.setState({ data: { ...this.state.data, category} });
    }

    handleDeadlineChange(event) {
        this.setState({ data: { ...this.state.data, deadline: event.target.value} });
    }

    handleSubmit(event) {
        this.setState({loading: true});
        event.preventDefault();
        var input = JSON.stringify(this.state.data);

        console.log(input)

        this.props.dispatch(addTodo(input))

        this.setState({loading: false});
        this.setState({data: {
            'title':'',
            'deadline':''
        }});
    }

    // handleSubmit(event) {
    //     this.setState({loading: true});
    //     event.preventDefault();
    //     var input = JSON.stringify(this.state.data);
    //     console.log("Calling API with input: " + input);
    //     fetch(`http://localhost:6000/addtask`, {
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: input
    //       }).then(result => result.json)
    //         .then(response => console.log('Success:', JSON.stringify(response)))
    //         .catch(error => console.error('Error:', error));
    //     this.setState({loading: false});
    //     this.setState({data: {
    //         'title':'',
    //         'deadline':''
    //     }});
    //     console.log("Clearing the form, state data: ");
    // }

    render() {
        return (
            <div>
                <br />
                <center>
                    <Card style={{width:"96%"}} outline color="secondary">
                        <CardHeader tag="h3" className="CardTitle">
                            <div className="clearfix">
                                Add Task
                                <Button className="btn float-right" onClick={this.toggle}>{this.state.expandButtonText}</Button>
                            </div>
                        </CardHeader>
                        <Collapse isOpen={this.state.collapse}>
                        <CardBody>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col md={4}>
                                        <Input className="TaskField" type="text" name="taskTitle" id="taskTitle" placeholder={this.state.placeholdertitle}
                                        value={this.state.data.title} onChange={this.handleTitleChange} />
                                    </Col>
                                    <Col md={4}>
                                        <ButtonGroup>
                                            <Button color="secondary" className="TaskField" outline disabled>takes</Button>
                                            <Button color="info" outline onClick={() => this.onEffortBtnClick(1)} active={this.state.data.effort === 1}>1</Button>
                                            <Button color="info" outline onClick={() => this.onEffortBtnClick(2)} active={this.state.data.effort === 2}>2</Button>
                                            <Button color="info" outline onClick={() => this.onEffortBtnClick(3)} active={this.state.data.effort === 3}>3</Button>
                                            <Button color="info" outline onClick={() => this.onEffortBtnClick(4)} active={this.state.data.effort === 4}>4</Button>
                                            <Button color="info" outline onClick={() => this.onEffortBtnClick(5)} active={this.state.data.effort === 5}>5</Button>
                                            <Button color="info" outline onClick={() => this.onEffortBtnClick(6)} active={this.state.data.effort === 6}>6</Button>
                                            <Button color="secondary" className="TaskField" outline disabled>hours</Button>
                                        </ButtonGroup>
                                    </Col>

                                    <Col md={3.5}>
                                        <InputGroup>
                                            <InputGroupAddon className="TaskField" addonType="prepend">complete it by</InputGroupAddon>
                                            <Input className="TaskField" type="date" name="taskDeadline" id="taskDeadline" 
                                            value={this.state.data.deadline} onChange={this.handleDeadlineChange}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={3}>
                                        <ButtonGroup>
                                            <Button color="secondary" className="TaskField" outline disabled>priority</Button>
                                            <Button color="danger" outline onClick={() => this.onPriorityBtnClick("High")} active={this.state.data.priority === "High"}>High</Button>
                                            <Button color="warning" outline onClick={() => this.onPriorityBtnClick("Medium")} active={this.state.data.priority === "Medium"}>Medium</Button>
                                            <Button color="info" outline onClick={() => this.onPriorityBtnClick("Low")} active={this.state.data.priority === "Low"}>Low</Button>
                                        </ButtonGroup>
                                    </Col>

                                    <Col md={3}>
                                        <ButtonGroup>
                                            <Button color="secondary" className="TaskField" outline disabled>category</Button>
                                            <Button color="danger" outline onClick={() => this.onCatBtnClick("Work")} active={this.state.data.category === "Work"}>Work</Button>
                                            <Button color="warning" outline onClick={() => this.onCatBtnClick("Home")} active={this.state.data.category === "Home"}>Home</Button>
                                            <Button color="info" outline onClick={() => this.onCatBtnClick("Personal")} active={this.state.data.category === "Personal"}>Personal</Button>
                                        </ButtonGroup>
                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        {this.state.loading ? <Spinner color="primary" className="SubmitButton" /> : <Button color="primary" outline size="lg" className="SubmitButton" >Submit</Button>}
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                        </Collapse>
                    </Card>
                </center>
            </div>
        )
    }
}