import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Row, ButtonGroup, Col, InputGroup, InputGroupAddon } from 'reactstrap';
import { Card, CardHeader, CardFooter, CardBody, Spinner, Collapse} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
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
        this.handleFollowupChange = this.handleFollowupChange.bind(this);
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

    handleFollowupChange(event) {
        this.setState({ data: { ...this.state.data, followup: event.target.checked} });
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
        this.state.data.status = "Pending";
        if(!this.state.data.hasOwnProperty('deadline')) {
            this.state.data.deadline = new Date().toISOString().substr(0,10);
        }

        if(this.state.data.followup == true) {
            this.state.data.effort = 0.1
        }

        console.log(this.state.data)

        event.preventDefault();
        var input = JSON.stringify(this.state.data);

        console.log(input)

        this.props.dispatch(addTodo(input))

        this.setState({loading: false});
        this.setState({data: {
            'title':'',
            'deadline':new Date().toISOString().substr(0,10),
            'status': '',
            'followup': false
        }});
    }

    render() {
        return (
            <div>
                <br />
                <center>
                    <Fab className="btn" color='secondary' aria-label="add">
                        <AddIcon color="white" onClick={this.toggle} />
                    </Fab>

                    <Modal isOpen={this.state.collapse} size="lg">
                        <Form onSubmit={this.handleSubmit}>
                            <ModalHeader>Add Task</ModalHeader>
                            <ModalBody>
                                <Card outline color="secondary">
                                    <CardBody>
                                        <Row>
                                            <Col>
                                                <Input className="TaskField" type="text" name="taskTitle" id="taskTitle" placeholder={this.state.placeholdertitle}
                                                value={this.state.data.title} onChange={this.handleTitleChange} />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <Switch
                                                    onChange={this.handleFollowupChange}
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
                                                    <Button color="info" outline onClick={() => this.onEffortBtnClick(1)} active={this.state.data.effort === 1} disabled={this.state.data.followup}>1</Button>
                                                    <Button color="info" outline onClick={() => this.onEffortBtnClick(2)} active={this.state.data.effort === 2} disabled={this.state.data.followup}>2</Button>
                                                    <Button color="info" outline onClick={() => this.onEffortBtnClick(3)} active={this.state.data.effort === 3} disabled={this.state.data.followup}>3</Button>
                                                    <Button color="info" outline onClick={() => this.onEffortBtnClick(4)} active={this.state.data.effort === 4} disabled={this.state.data.followup}>4</Button>
                                                    <Button color="info" outline onClick={() => this.onEffortBtnClick(5)} active={this.state.data.effort === 5} disabled={this.state.data.followup}>5</Button>
                                                    <Button color="info" outline onClick={() => this.onEffortBtnClick(6)} active={this.state.data.effort === 6} disabled={this.state.data.followup}>6</Button>
                                                    <Button color="secondary" className="TaskField" outline disabled>hours</Button>
                                                </ButtonGroup>
                                            </Col>
                                            <Col>
                                                <InputGroup>
                                                    <InputGroupAddon className="TaskField" addonType="prepend">complete it by</InputGroupAddon>
                                                    <Input className="TaskField" type="date" name="taskDeadline" id="taskDeadline" defaultValue={new Date().toISOString().substr(0,10)}
                                                    value={this.state.data.deadline} onChange={this.handleDeadlineChange}
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                            <Col>
                                                <ButtonGroup>
                                                    <Button color="secondary" className="TaskField" outline disabled>priority</Button>
                                                    <Button color="danger" outline onClick={() => this.onPriorityBtnClick("High")} active={this.state.data.priority === "High"}>High</Button>
                                                    <Button color="warning" outline onClick={() => this.onPriorityBtnClick("Medium")} active={this.state.data.priority === "Medium"}>Medium</Button>
                                                    <Button color="info" outline onClick={() => this.onPriorityBtnClick("Low")} active={this.state.data.priority === "Low"}>Low</Button>
                                                </ButtonGroup>
                                            </Col>

                                            <Col>
                                                <ButtonGroup>
                                                    <Button color="secondary" className="TaskField" outline disabled>category</Button>
                                                    <Button color="danger" outline onClick={() => this.onCatBtnClick("Work")} active={this.state.data.category === "Work"}>Work</Button>
                                                    <Button color="warning" outline onClick={() => this.onCatBtnClick("Home")} active={this.state.data.category === "Home"}>Home</Button>
                                                    <Button color="info" outline onClick={() => this.onCatBtnClick("Personal")} active={this.state.data.category === "Personal"}>Personal</Button>
                                                </ButtonGroup>
                                            </Col>
                                        </Row>
                                    </CardBody> 
                                </Card>
                            </ModalBody>
                            <ModalFooter className="float-left">
                                {this.state.loading ? <Spinner color="primary" className="SubmitButton" /> : <Button color="primary" size="lg" className="SubmitButton" >Submit</Button>}
                                {' '}
                                <Button color="danger" size="lg" onClick={this.toggle}>Close</Button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                </center>
            </div>
        )
    }
}