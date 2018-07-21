import React, { Component } from 'react';
import {Card, CardSection, Header } from './common';
import { connect } from 'react-redux';
import { cardsFetch } from '../actions/FlashCardActions';
import FlashCard from './FlashCard';
import _ from 'lodash';

class GameScreen extends Component {

    state = {
        showBack: false,
        recievedCardProps: false
    };

    componentWillMount(){
        this.props.cardsFetch(this.props.deckId);
    }

    componentWillReceiveProps(){
        this.setState({recievedCardProps: true});
    }

    onCardToggle(){
        this.setState({showBack: !this.state.showBack});
    }

    renderFlashCard(){
        if(this.state.recievedCardProps){
            return(
                <FlashCard toggle={this.onCardToggle.bind(this)}
                contents={this.props.cards[0]}
                showBack={this.state.showBack}/>
            );
        }

    }

    render(){
        return(
            <Card>
                <CardSection>
                    {this.renderFlashCard()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    //map cards
    const cards = _.map(state.flashCard.cards, (val, uid) => {
        return {...val, uid};
    });
    console.log(cards);
    return {
        cards: cards
    }
}

export default connect(mapStateToProps, { cardsFetch })(GameScreen);