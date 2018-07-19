import React from 'react';
import {Text, View, Modal } from 'react-native';
import {CardSection} from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { containerStyle, textStyle, cardSectionStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
            >
            <View
                style={containerStyle}
                >
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button toPress={onAccept}>Yes</Button>
                    <Button toPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

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
        justifyContent: 'center'
    }
}
//at the end of background color, give the opacity of 0.75,
///justif content center will center the card sections
//then we must have flex 1 so it takes up the entire space


//give it props on accept and on decline
//if we don't mpass the parans we dont pass a referene to the function
//flex 1 makes sure the text can properly wrap on the screen,
//line height is how much spacce is plaed
//on each line of text
export { Confirm };