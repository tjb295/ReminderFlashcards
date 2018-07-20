import React, { Component } from 'react';
import { ListView } from 'react-native';
import {Header, Card, NewCardButton, Input, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { cardsFetch, onDeckNameChange, newDeckCreated, saveCurrentDeck } from '../actions/FlashCardActions';
import _ from 'lodash';

class DeckForm extends Component {

    componentWillMount(){
        this.props.newDeckCreated(this.props.deckName);
    }

    deckNameChange(text) {
        this.props.onDeckNameChange(text);
    }

    toSaveDeck(){
        const { deckName, deckId } = this.props;
        this.props.saveCurrentDeck({deckName, deckId});
    }

    //have the different cards added rendered undernearth

    // componentWillMount() {
    //     this.props.cardsFetch();

    //     this.createDataSource(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.createDataSource(nextProps);
    // }

    // createDataSource({ cards }){
    //     const ds = new ListView.DataSource({
    //         rowHasChanged: (r1,r2) => r1 !== r2
    //     });

    //     this.dataSource = ds.cloneWithRows(cards);
    // }

    // renderRow(card) {
    //     return <Header headerText={card} />
    // }
    // <ListView
    // enableEmptySections
    // dataSource={this.dataSource}
    // renderRow={this.renderRow}
    // />

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Deck name"
                        placeholder="Deck name"
                        value={this.props.deckName}
                        onChangeText={this.deckNameChange.bind(this)}
                        />
                </CardSection>
                <Card>
                    <Header headerText="Add Cards Below"/>
                    
                    <CardSection>
                        <NewCardButton toPress={() => {}}>+</NewCardButton>
                       
                    </CardSection>

                </Card>
                <CardSection>
                    <Button toPress={this.toSaveDeck.bind(this)}>Save Deck</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    //map the cards

    const cards = _.map(state.cards, (val, uid) => {
        return {...val, uid};
    })

    return { 
        deckId: state.flashCard.deckId,
        deckName: state.flashCard.deckName,
        cards: cards
    }
}
    

export default connect(mapStateToProps, {cardsFetch, onDeckNameChange, newDeckCreated, saveCurrentDeck })(DeckForm);