import React,  { Component } from 'react';
import { connect } from 'react-redux';
import {CardSection, Button, Confirm} from './common';
import { Modal, View, Text, Picker, Switch } from 'react-native';
import DatePicker from 'react-native-datepicker';


class AlarmSetModal extends Component {

    state = { alarmStatus: this.props.alarmStatus, receivedProps: false };

    //set the alarm status with the loaded value

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
                    value={this.props.alarmStatus}
                    onValueChange={this.props.toggleAlarm}
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



export default AlarmSetModal;