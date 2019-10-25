import React, { Component } from 'react';

import TodayContainer from '../containers/TodayContainer';
import TodayCompletedContainer from '../containers/TodayCompletedContainer';

export default class Today extends Component {
    render() {
        return (
            <div>
                <TodayContainer></TodayContainer>
                <TodayCompletedContainer></TodayCompletedContainer>
            </div>
        )
    }
}