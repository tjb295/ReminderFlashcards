import React, { Component } from 'react';
import { ListView } from 'react-native';
import {Header, Card, NewCardButton, Input, CardSection, Button } from './common';
import { connect } from 'react-redux';
import CardInputModal from './CardInputModal';
import { cardsFetch, 
        onDeckNameChange, 
        newDeckCreated, 
        saveCurrentDeck, 
        addCardtoDeck,
        clearForm,
        cardDetailReset 
} from '../actions/FlashCardActions';
import _ from 'lodash';

class DeckForm extends Component {
    
    state = { showModal: false};

    componentWillMount(){
        this.props.newDeckCreated(this.props.deckName);
       
        this.createDataSource(this.props.cards); 
    }

    componentWillUnmount(){
        this.props.clearForm();
    }

    deckNameChange(text) {
        this.props.onDeckNameChange(text);
    }

    toSaveDeck(){
        const { deckName, deckId } = this.props;
        if(deckName == ''){
            alert("Please enter a name for your deck");
            return
        }
        console.log(this.props.cards);
        if(!Array.isArray(this.props.cards) || !this.props.cards.length){
            alert("Please add cards before saving.");
            return;
        }
        this.props.saveCurrentDeck({deckName, deckId});
    }

    addNewCard() {
        const { front, back, deckId} = this.props;
        
        this.props.addCardtoDeck({front, back, deckId});
        this.setState({ showModal: false});
        this.props.cardsFetch(this.props.deckId);
    }

    cancelAddCard() {
        this.setState({ showModal: false});
        this.props.cardDetailReset();
    }

    componentWillReceiveProps(nextProps) {
       
        this.createDataSource(nextProps.cards)
    }

    createDataSource(cards){
        const ds = new ListView.DataSource({
            rowHasChanged: ( r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(cards);
    }

    renderRow(card){
        return <Button style={{borderRadius: 1}}> {card.front} </Button>;
    }

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
                    
                    <Card style={{ alignItems: 'center'}}>
                        <CardSection>
                            <NewCardButton toPress={() => this.setState({ showModal: !this.state.showModal})}>+</NewCardButton>
                        </CardSection>
                        <CardSection>
                            <ListView 
                                style={{height: 200}}
                                enableEmptySections
                                dataSource={this.dataSource}
                                renderRow={this.renderRow}
                                />
                        </CardSection>
                    </Card>

                </Card>
                <CardSection>
                    <Button toPress={this.toSaveDeck.bind(this)}>Save Deck</Button>
                </CardSection>
                <CardInputModal 
                    visible={this.state.showModal}
                    front={this.props.front}
                    back={this.props.back}
                    save={this.addNewCard.bind(this)}
                    cancel={this.cancelAddCard.bind(this)}
                />
            </Card>
            
        );
    }
}

const mapStateToProps = state => {
    //map the cards

    const cards = _.map(state.flashCard.cards, (val, uid) => {
        return {...val, uid};
    });

    return { 
        deckId: state.flashCard.deckId,
        deckName: state.flashCard.deckName,
        cards: cards,
        front: state.flashCard.front,
        back: state.flashCard.back
    }
}
    

export default connect(mapStateToProps, {cardsFetch, 
    onDeckNameChange, newDeckCreated, saveCurrentDeck,
     addCardtoDeck, cardsFetch, clearForm, cardDetailReset })(DeckForm);