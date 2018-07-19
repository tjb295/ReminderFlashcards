import React, { Component } from 'react';
import {Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';

class TopMenu extends Component {

    render(){
        return(
            <Card>
                <CardSection>
                    <Button>View Decks</Button>
                </CardSection>
                <CardSection>
                    <Button>Do a Random Challenge!</Button>
                </CardSection>
                <CardSection>
                    <Button>Manage Challenge Alarms </Button>
                </CardSection>
            </Card>
        );
    }
}

export default TopMenu;