import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { toggleAlarm, alarmFetch } from '../actions/FlashCardActions';
import {CardSection, Button, Confirm} from './common';
import { Modal, View, Text, Picker, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';


class AlarmSetModal extends Component {

    state = { alarmStatus: this.props.alarmStatus };

    //set the alarm status with the loaded value
    componentWillMount() {
        if (this.props.currentDeck == ''){
            return;
        }
        this.props.alarmFetch(this.props.currentDeck);
        this.setState({ alarmStatus: this.props.alarmStatus });
    }
    setAlarmStatus() {
        this.setState({ alarmStatus: !this.state.alarmStatus});
        console.log(this.props.currentDeck);
        this.props.toggleAlarm(this.props.currentDeck, this.state.alarmStatus);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ alarmStatus: nextProps.alarmStatus});
    }

    render(){
        return(
            <Modal
            visible={this.props.visible}
            transparent
            animationType="slide"
            onRequestClose={this.props.cancel}>
                <View
                style={styles.containerStyle}>
                    <CardSection
                    style={styles.CardSectionStyle}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.props.date}
                        mode="datetime"
                        placeholder="Select a Date and Time"
                        minDate="2016-05-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        iconSource={require('../../resources/FlashReminderLogo.png')}
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={this.props.onDateChange}
                />
                <Switch 
                    value={this.state.alarmStatus}
                    onValueChange={this.setAlarmStatus.bind(this)}
                />
                </CardSection>
                <CardSection>
                    <Button toPress={this.props.saveDate}> Save Alarm </Button>
                    <Button toPress={this.props.delete}> Delete Deck </Button>
                    <Button toPress={() => {}}> Edit Deck </Button>
                </CardSection>
                </View>
            </Modal>
        );
    }
    
}

const styles = {
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40

    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 5
    }
}

const mapStateToProps = state => {

    
    console.log(state.alarm.alarmStatus);
    return { alarmStatus: state.alarm.alarmStatus };
}


export default connect(mapStateToProps, { toggleAlarm, alarmFetch } )(AlarmSetModal);