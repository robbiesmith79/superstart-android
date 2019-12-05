import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import HeaderBarIcon from '../components/HeaderBarIcon';
import Colors from '../constants/Colors';

export default function TipsScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <ExpoLinksView />
    </ScrollView>
  );
}

TipsScreen.navigationOptions = ({ navigation }) => {
 	return {
 		title: 'Tips',
 		headerStyle: {
 			backgroundColor: Colors.headerBackgroundColor,
 		},
 		headerTintColor: Colors.headerTintColor,
 		headerRight: (
 			<HeaderBarIcon
 				name='new-releases'
 			/>
 		)
   };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
