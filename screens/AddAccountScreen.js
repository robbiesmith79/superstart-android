import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Content, Form, Item, Icon, Button, Picker, Text, Label, Input } from 'native-base';
import HeaderBarIcon from '../components/HeaderBarIcon';
import Colors from '../constants/Colors';
import PickAccountScreen from './PickAccountScreen';
import { MaterialIcons } from '@expo/vector-icons';

export default class AddAccountScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			debtType: undefined,
			aprRequired: false
		};
	}
	onDebtTypeChange(value: string) {
		this.setState({
			debtType: value
		});
	}

	debtTypeExplanation() {
		if (this.state.debtType != undefined && this.state.debtType != '') {
			if (this.state.debtType == 'credit' || this.state.debtType == 'payday' || this.state.debtType == 'unsecured') {
				this.state.aprRequired = true;
				return <Text note>This debt type is usually a variable rate and most dangerous to keep for long.</Text>
			} else {
				this.state.aprRequired = false;
				return <Text note>This debt type is a fixed rate and the apr is built into the monthly payment.</Text>
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<PickAccountScreen />
			</View>
		);
	}
}

AddAccountScreen.navigationOptions = ({ navigation }) => {
	return {
		title: 'Add Account',
		headerStyle: {
			backgroundColor: Colors.headerBackgroundColor,
		},
		headerTintColor: Colors.headerTintColor,
		headerLeft: (
			<Button transparent rounded onPress={() => navigation.navigate('Accounts')}>
				<MaterialIcons
					name='keyboard-arrow-left' size={40}
					style={{ marginRight: 10 }}
					color={Colors.headerTintColor}/>
			</Button>
		),
		headerRight: (
			<View style={styles.headerContainer}>
      	<HeaderBarIcon
					name='credit-card'
				/>
      </View>
		)
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodyBackgroundColor
  },
  headerContainer: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	flexDirection: 'row',
  },
  contentContainer: {
    paddingTop: 10,
    marginLeft: 14,
    marginRight: 14
  },
});
