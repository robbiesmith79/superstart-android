import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import { Button, Text } from 'native-base';
import HeaderBarIcon from '../components/HeaderBarIcon';
import Colors from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function AccountsScreen(props) {

		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.container}
					contentContainerStyle={styles.contentContainer}>

				</ScrollView>
			</View>
		);

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
			<Button transparent rounded onPress={() => navigation.navigate('Home')}>
				<MaterialIcons
					name='add-circle' size={40}
					style={{ marginRight: 10 }}
					color={Colors.headerTintColor}/>
			</Button>
      <HeaderBarIcon
      				name='dashboard'
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
    paddingTop: 30,
  },
});
