import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, Collapse } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar dark expand="md" style={{background:"#213969"}}>
                <NavbarBrand href="/"><span className="siteTitle">ONE PLANNER</span></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="siteNav" navbar>
                        <NavLink to="/today" tag={RRNavLink}>today's plan</NavLink>
                        <NavLink to="/planner" tag={RRNavLink}>planner</NavLink>
                        <NavLink to="/past" tag={RRNavLink}>past</NavLink>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}