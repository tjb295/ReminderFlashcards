import React, { Component } from 'react';
import {Card, CardSection, Header } from './common';
import _ from 'lodash';

class GameScreen extends Component {

    state = { cards: [] };

    componentWillMount(){
        _.each(this.props.deck, (front, back) => {
            console.log( front + ' ' + back);
            this.state.cards.push({ front, back });
        });

        this.setState({ cards: this.state.cards });
    }


    render(){
        return(
            <Card>
                <CardSection>
                    <Header headerText="Whah" />
                </CardSection>
            </Card>
        );
    }
}

export default GameScreen;