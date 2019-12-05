import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
	List,
	ListItem,
	Left,
	Body,
	Right,
	Switch,
	Icon,
	Text,
	Button,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import HeaderBarIcon from '../components/HeaderBarIcon';
import TargetDebt from '../components/TargetDebt';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';
import DueSoon from '../components/DueSoon';

export default function HomeScreen(...props) {


  return (
    <View style={styles.container}>
    	<TargetDebt />
    	<Text style={styles.dueSoon}>Due soon</Text>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.contentContainer}>
				<DueSoon />
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
	return {
		title: 'Dashboard',
		headerStyle: {
			backgroundColor: Colors.headerBackgroundColor,
		},
		headerTintColor: Colors.headerTintColor,
		headerRight: (
			<HeaderBarIcon
				name='dashboard'
			/>
		)
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bodyBackgroundColor,
    margin: 10
  },
  scrollViewContainer: {
		marginLeft: 2,
		marginRight: 2
  },
  contentContainer: {
    paddingTop: 12,
  },
  dueSoon: {
		fontSize: 20
	},
	late: {
		color: 'red'
	}
});
