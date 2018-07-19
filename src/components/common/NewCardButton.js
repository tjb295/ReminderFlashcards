import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const NewCardButton = ({toPress, children}) => {
    return(
        <TouchableOpacity
            onPress={toPress}
            style={styles.buttonStyle} >
            <Text style={styles.textStyle}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: "#81c784",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        backgroundColor: '#f1f8e9',
        borderRadius: 1,
        borderWidth: 2,
        borderColor: '#81c784'

    }
}

export { NewCardButton };