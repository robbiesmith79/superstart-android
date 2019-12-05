import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Container, Content, Button, Text, Icon } from 'native-base';
import HeaderBarIcon from '../components/HeaderBarIcon';
import Colors from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import PickAccountScreen from './PickAccountScreen';

export default class AccountsScreen extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			numAccounts: 0,
		}
	}

	render() {

		let getStarted;

		if (this.state.numAccounts == 0) {
			getStarted = (
				<View>
					<Text style={styles.firstAccountText}>Let's get started by picking an account type:</Text>
					<PickAccountScreen props={this.props.navigation} />
				</View>
			);
		} else {
			getStarted = (
				<View>
					<Text>Your accounts will show up here later.</Text>
				</View>
			);
		}

		return (
			<Container>
				<Content style={styles.contentContainer}>
					{ getStarted }
				</Content>
			</Container>
		);
	}
}

AccountsScreen.navigationOptions = ({ navigation }) => {
	return {
		title: 'Accounts',
		headerStyle: {
			backgroundColor: Colors.headerBackgroundColor,
		},
		headerTintColor: Colors.headerTintColor,
		headerRight: (
			<View style={styles.headerContainer}>
				<Button transparent rounded onPress={() => navigation.navigate('AddAccount')}>
					<MaterialIcons
						name='add-circle' size={40}
						style={{ marginRight: 10 }}
						color={Colors.headerTintColor}/>
				</Button>
				<HeaderBarIcon
					name='credit-card'
				/>
      </View>
		)
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bodyBackgroundColor
  },
  headerContainer: {
  	flex: 1,
  	justifyContent: 'center',
  	alignItems: 'center',
  	flexDirection: 'row',
  },
  contentContainer: {
    padding: 10
  },
  firstAccountText: {
  	fontSize: 18,
  },
});
