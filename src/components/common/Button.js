import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({toPress, children}) => {
	return (
		<TouchableOpacity 
			onPress={toPress}
			style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{children}</Text>
		</TouchableOpacity>  
	);  
};

const styles = {

	textStyle: {
		alignSelf: 'center',
		color: '#212121',
		fontSize: 20,
		fontWeight: '200',
		paddingTop: 10,
		paddingBottom: 10
	},

	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff8e1',
		borderRadius: 5,
		borderTopWidth: 5,
		borderBottomWidth: 5,
		borderColor: '#212121',
		marginLeft: 5,
		marginRight: 5,
	}
}

export { Button };