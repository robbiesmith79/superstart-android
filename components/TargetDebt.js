import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Expo from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Container, Header, Content, Card, CardItem, Thumbnail, Badge, Text, Button, Icon, Left, Body, Right } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const badgeSize = 75;
const youveGotTime = 7;
const doEeetNow = 4;
const overDue = 0;

const styles=StyleSheet.create({
	container: {
		height: 110
	},
	header: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10
	},
	badgeSuccess: {
		width: badgeSize,
		height: badgeSize,
		borderRadius: badgeSize/2,
		backgroundColor: 'green',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	badgeWarning: {
		width: badgeSize,
		height: badgeSize,
		borderRadius: badgeSize/2,
		backgroundColor: 'orange',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	badgeDanger: {
		width: badgeSize,
		height: badgeSize,
		borderRadius: badgeSize/2,
		backgroundColor: 'red',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	badgeOverdue: {
		width: badgeSize,
		height: badgeSize,
		borderRadius: badgeSize/2,
		backgroundColor: 'maroon',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textSuccess: {
		color: 'green'
	},
	textWarning: {
		color: 'orange'
	},
	textDanger: {
		color: 'red'
	},
	textOverdue: {
		color: 'maroon'
	},
	badgeColor: {
		color: 'white'
	},
	badgePrice: {
		fontSize: 18,
		fontWeight: 'bold'
	}
})

export default class TargetDebt extends Component {

	constructor(props) {
		super(props);
		this.state = {
			daysRemaining: 8
		}
	}

	remainingDays(): string {
		if (this.state.daysRemaining > 1) {
			return this.state.daysRemaining + ' days';
		} else if (this.state.daysRemaining == 1) {
			return this.state.daysRemaining + ' day';
		} else if (this.state.daysRemaining == 0) {
			return 'Today';
		} else {
			return 'Overdue';
		}
	}

	render() {
		return (
			<Card style={styles.container}>
				<CardItem header style={styles.header}>
					<Left>
						<MaterialIcons name="event-available" size={48} />
						<Body>
							<Text>Next Debt</Text>
							<Text note>Best Buy</Text>
							<Text note style={(this.state.daysRemaining <= youveGotTime) ? (this.state.daysRemaining <= doEeetNow) ? (this.state.daysRemaining <= overDue) ? styles.textOverdue : styles.textDanger : styles.textWarning : styles.textSuccess}>12/11/2019</Text>
						</Body>
					</Left>
					<Right>
						<View style={(this.state.daysRemaining <= youveGotTime) ? (this.state.daysRemaining <= doEeetNow) ? (this.state.daysRemaining <= overDue) ? styles.badgeOverdue : styles.badgeDanger : styles.badgeWarning : styles.badgeSuccess}>
							<Text style={[styles.badgeColor, styles.badgePrice]}>$199</Text>
							<Text style={styles.badgeColor}>{this.remainingDays()}</Text>
						</View>
					</Right>
				</CardItem>
			</Card>
		);
	}
}
