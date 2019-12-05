import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, FormItem, Item, Icon, Button, Picker, View, Text, Label, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import Colors from '../../constants/Colors';
import HeaderBarIcon from '../../components/HeaderBarIcon';

class BasicCreditCardDebtScreen extends React.Component {
	render() {
		return (

			<View>
				<Form>
					<Item>
						<Label>Outstanding Balance: </Label>
						<Input />
					</Item>
					<Item>
						<Label>Loan Term in Months: </Label>
						<Input />
					</Item>
					<Item>
						<Label>APR: </Label>
						<Input />
					</Item>
					<Button><Text>Calculate</Text></Button>
				</Form>
			</View>
		);
  }
}

BasicCreditCardDebtScreen.navigationOptions = ({ navigation }) => {
	return {
		title: 'Basic Credit Card Debt',
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

export default withNavigation(BasicCreditCardDebtScreen);

const styles = StyleSheet.create({
	grid: {
		flex: 1,
		margin: 10,
	},
	gridRow: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10,
	},
})