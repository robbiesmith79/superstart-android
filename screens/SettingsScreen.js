import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import HeaderBarIcon from '../components/HeaderBarIcon';
import Colors from '../constants/Colors';

export default function SettingsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = ({ navigation }) => {
 	return {
 		title: 'Settings',
 		headerStyle: {
 			backgroundColor: Colors.headerBackgroundColor,
 		},
 		headerTintColor: Colors.headerTintColor,
 		headerRight: (
 			<HeaderBarIcon
 				name='settings'
 			/>
 		)
   };
};
