import React, { Component } from 'react';
import {Header, Card, Input, CardSection, Button } from './common';

class DeckForm extends Component {

    //have the different cards added rendered undernearth

    renderCards() {
        //will use a mapping function based on the cards entered for each

    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Deck name"
                        placeholder="Deck name"
                        value={this.props.deckName}
                        />
                </CardSection>
                <CardSection>
                    <Header headerText="Add Cards Below"/>
                    {this.renderCards()}
                </CardSection>
            </Card>
        );
    }
}

export default DeckForm;