import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Header, Button } from './common';
import { deckFetch, saveAlarm, onDateChange, deleteDeck } from '../actions/FlashCardActions';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import AlarmSetModal from './AlarmSetModal';
import ReactNativeAN from 'react-native-alarm-notification';

class DeckDisplay extends Component {

    state = { showModal : false, deckIdtoSave: '', deckAlarmDate: '', deckAlarmStatus: true };

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
    return (<CardSection><Button onLongPress={this.openAlarmChooseModal.bind(this, deck.uid, deck.alarmDate, deck.alarmStatus)} toPress={Actions.gameScreen.bind(this, {deckId: deck.uid})}>{deck.DeckName} 
                 </Button></CardSection>);
    }

    openAlarmChooseModal(deckId, alarmDate, alarmStatus){
        this.setState({ showModal: true });
        this.setState({ deckIdtoSave: deckId, deckAlarmDate: alarmDate, deckAlarmStatus: alarmStatus});
    }

    dateChangeHandle(date) {
        this.props.onDateChange(date);
    }

    toggleAlarmStatus(){
        this.setState({deckAlarmStatus: !this.state.deckAlarmStatus});
        this.props.saveAlarm(this.state.deckAlarmDate, this.state.deckIdtoSave, this.state.deckAlarmStatus);

    }

    //wrapper for the save alarm action
    toSaveDate(){
        if(this.state.deckAlarmDate == null){
            alert("Please enter a time and date for your alarm");
            return;
        }

        //testing for the alarm module shit
        const alarmData = {
            id: '1234',
            title: "Test alarm",
            message: "Take a Quiz with the Japanese Deck",
            small_icon: "ic_launcher",
            schedule_once: true,
            fire_date: "01-01-2018 00:00:00"
        };

        ReactNativeAN.scheduleAlarm(alarmData);
        ReactNativeAN.getScheduledAlarms().then(alarmNotif => console.log(alarmNotif + "help"));

        this.props.saveAlarm(this.state.deckAlarmDate, this.state.deckIdtoSave, true);
        this.setState({showModal: false});
        this.setState( { deckIdToSave: '', deckAlarmDate: ''});

    }

    toDeleteDeck(){
        this.props.deleteDeck( this.state.deckIdtoSave );
        
        //reset the currently selected deckId
        this.setState({deckIdtoSave: ''});
        this.setState({showModal: false});
    }

    //when canceling the model
    cancelAction() {
        this.setState({showModal: false});
        this.setState({deckAlarmStatus: false});
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
                    visible={this.state.showModal}
                    onDateChange={(value) => this.setState({ deckAlarmDate: value})}
                    date = {this.state.deckAlarmDate}
                    saveDate={this.toSaveDate.bind(this)}
                    delete={this.toDeleteDeck.bind(this)}
                    currentDeck={this.state.deckIdtoSave}
                    cancel={this.cancelAction.bind(this)}
                    alarmStatus = {this.state.deckAlarmStatus}
                    toggleAlarm={this.toggleAlarmStatus.bind(this)}
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

export default connect(mapStateToProps, { deckFetch, saveAlarm, 
    onDateChange, deleteDeck})(DeckDisplay);