import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {Spinner} from './common';

class FlashCard extends Component {

    state = { recieveProps : false,
              contents: {
                  front: '',
                  back: ''
              } };

    displayContents(){
        if(!this.state.recieveProps){
            return <Spinner />
        }
        if(this.props.showBack){
            return <Text style={styles.textStyle}>{this.state.contents.back}</Text>;
        }
        return <Text style={styles.textStyle}>{this.state.contents.front}</Text>
    }

    componentWillReceiveProps(nextProps){
        this.setState({recieveProps: true});
        this.setState({ contents: nextProps.contents});
        console.log(this.state.contents);
    }
    
    render(){
        return(
            <TouchableOpacity 
                style={styles.containerStyle}
                onPress={this.props.toggle}>
                <View >
                    {this.displayContents()}
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = {

    containerStyle : {
        borderColor: "#212121",
        borderWidth: 3,
        borderRadius: 6,
        flex: 1,
        backgroundColor: '#fff8e1',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 250
    },
    textStyle: {
        fontSize: 60,
        color: '#212121'
    }
};

export default FlashCard;