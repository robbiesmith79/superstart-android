import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Icon, Text, View } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import Colors from '../constants/Colors';

class PickAccountScreen extends React.Component {
	render() {
		return (
			<View style={styles.grid}>
				<View style={styles.gridRow}>
					<Button iconLeft onPress={() => this.props.navigation.navigate('BasicCredit')} >
						<MaterialIcons
							name='credit-card'
							size={24} color='white'
							style={styles.accountTypeButtonIcon}
						/>
						<Text>Credit Card</Text>
					</Button>
					<Button iconLeft disabled>
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Promotional Offer</Text>
					</Button>
				</View>
				<View style={styles.gridRow}>
					<Button iconLeft disabled >
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Cash Advance</Text>
					</Button>
					<Button iconLeft disabled>
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Student Loan</Text>
					</Button>
				</View>
				<View style={styles.gridRow}>
					<Button iconLeft disabled >
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Payday Loan</Text>
					</Button>
					<Button iconLeft disabled>
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Car Payment</Text>
					</Button>
				</View>
				<View style={styles.gridRow}>
					<Button iconLeft disabled >
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Mortgage</Text>
					</Button>
					<Button iconLeft disabled>
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Line of Credit</Text>
					</Button>
				</View>
				<View style={styles.gridRow}>
					<Button iconLeft disabled >
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Debt Consolidation</Text>
					</Button>
					<Button iconLeft disabled>
						<MaterialIcons name='credit-card' size={24} color='white' style={styles.accountTypeButtonIcon} />
						<Text>Unsecured Debt</Text>
					</Button>
				</View>
			</View>
		);
	}
}

export default withNavigation(PickAccountScreen);

const styles = StyleSheet.create({
	grid: {
		flex: 1,
		marginTop: 10,
	},
	gridRow: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 10,
	},
	accountTypeButtonIcon: {
		marginLeft: 10,
	}
})