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
                    <Button>Create New Deck</Button>
                </CardSection>
            </Card>
        );
    }
}

export default TopMenu;