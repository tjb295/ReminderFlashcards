import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import {CardSection, Card, Input, Button } from './common';
import { connect } from 'react-redux';
import { cardDetailUpdate } from '../actions/FlashCardActions';

class CardInputModal extends Component {

        
        render(){
            return(
                <Modal
                    visible={this.props.visible}
                    transparent
                    animationType="slide"
                    onRequestClose={this.props.cancel}
                    >
                    <View
                        style={styles.containerStyle}
                        >
                        <CardSection
                            style={styles.CardSectionStyle}>
                            <Input 
                                label="front"
                                placeholder="front"
                                value={this.props.front}
                                onChangeText={value => this.props.cardDetailUpdate({ prop: 'front', value})}
                                />
                        </CardSection>
                        <CardSection>
                            <Input 
                                label="back"
                                placeholder="back content"
                                value={this.props.back}
                                onChangeText={value => this.props.cardDetailUpdate({ prop: 'back', value})}
                            />
                        </CardSection>
                        <CardSection>
                            <Button toPress={this.props.save}> Add Card </Button>
                            <Button toPress={this.props.cancel}> Cancel </Button>
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
    const { front, back } = state.flashCard;

    return{ front, back };
}

export default connect(mapStateToProps, { cardDetailUpdate })(CardInputModal);