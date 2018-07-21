import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class FlashCard extends Component {

    displayContents(){
        if(this.props.showBack){
            return <Text>{this.props.contents.back}</Text>;
        }
        return <Text>{this.props.contents.front}</Text>
    }
    
    render(){
        return(
            <TouchableOpacity onPress={this.props.toggle}>
                <View>
                    {this.displayContents()}
                </View>
            </TouchableOpacity>
        );
    }

}

export default FlashCard;