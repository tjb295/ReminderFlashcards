import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Header, Button } from './common';
import { deckFetch, saveAlarm, onDateChange, deleteDeck } from '../actions/FlashCardActions';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import AlarmSetModal from './AlarmSetModal';

class DeckDisplay extends Component {

    state = { showModal : false, deckIdtoSave: '' };

    componentWillMount() {
        this.props.deckFetch();

        this.createDataSource(this.props.decks);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps.decks);

    }

    //helper function for list view data source creation
    createDataSource(decks) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(decks);
    }

    //take user to the selected deck's flash cards
    onDeckPress(deck) {
        Actions.gameScreen({ deck: deck });
    }

    renderRow(deck) {
    return (<Button onLongPress={this.openAlarmChooseModal.bind(this, deck.uid)} toPress={Actions.gameScreen.bind(this, {deckId: deck.uid})}>{deck.DeckName} 
                 </Button>);
    }

    openAlarmChooseModal(deckId){
        this.setState({ showModal: true });
        this.setState({ deckIdtoSave: deckId});
    }

    dateChangeHandle(date) {
        this.props.onDateChange(date);
    }

    //wrapper for the save alarm action
    toSaveDate(){
        this.props.saveAlarm(this.props.date, this.state.deckIdtoSave);
        this.setState({showModal: false});
    }

    toDeleteDeck(){
        this.props.deleteDeck( this.state.deckIdtoSave );
        
        //reset the currently selected deckId
        this.setState({deckIdtoSave: ''});
        this.setState({showModal: false});
    }



  

    render(){
        return(
            <Card>
                <CardSection>
                    <ListView 
                            enableEmptySections
                            dataSource={this.dataSource}
                            renderRow={this.renderRow.bind(this)}
                            />
                </CardSection>
                <AlarmSetModal 
                    date={this.props.date}
                    visible={this.state.showModal}
                    onDateChange={this.dateChangeHandle.bind(this)}
                    saveDate={this.toSaveDate.bind(this)}
                    delete={this.toDeleteDeck.bind(this)}
                />
            </Card>

        );
    }
}

const mapStateToProps = state => {
    const decks = _.map(state.deckFetch.decks, (val, uid) => {
        return {...val, uid};
    });

    return { decks: decks,
             date: state.deckFetch.date };
}

export default connect(mapStateToProps, { deckFetch, saveAlarm, onDateChange, deleteDeck })(DeckDisplay);