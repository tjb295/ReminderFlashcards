import React,  { Component } from 'react';
import {CardSection, Button} from './common';
import { Modal, View, Text, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';

class AlarmSetModal extends Component {

    render(){
        return(
            <Modal
            visible={this.props.visible}
            transparent
            animationType="slide">
                <View
                style={styles.containerStyle}>
                    <CardSection
                    style={styles.CardSectionStyle}>
                    <DatePicker
                        style={{width: 200}}
                        date={this.props.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
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
                </CardSection>
                <CardSection>
                    <Button toPress={this.props.saveDate}> Save Alarm </Button>
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