import React, { Component } from 'react';
import { View } from 'react-native';
import {Card, CardSection, Header } from './common';
import { connect } from 'react-redux';
import { cardsFetch, clearForm } from '../actions/FlashCardActions';
import FlashCard from './FlashCard';
import _ from 'lodash';
import Swiper from 'react-native-swiper';

class GameScreen extends Component {

    state = {
        showBack: false,
    };

    componentWillMount(){
        this.props.cardsFetch(this.props.deckId);
    }

    componentWillUnmount(){
        this.props.clearForm();
    }

    componentWillReceiveProps(nextProps){
        this.onCardToggle();
        this.props.cards = nextProps.cards;
    }

    onCardToggle(){
        this.setState({showBack: !this.state.showBack});
    }


    

    render(){
        return(
            <Card>
                <Swiper 
                style={{flex:1}}>
                    {this.props.cards.map((card, key) => {
                        return( <Card><CardSection><FlashCard toggle={this.onCardToggle.bind(this)}
                                            contents={card}
                                            showBack={this.state.showBack}/></CardSection></Card>)
                    })}
                </Swiper>
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

export default connect(mapStateToProps, { cardsFetch, clearForm })(GameScreen);