import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
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
import Colors from '../constants/Colors';

export default function DueSoon() {
  return (
			<List>
				<ListItem itemDivider>
					<Text>November</Text>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#0A0" }}>
							<Icon active name="bug" />
						</Button>
					</Left>
					<Body>
						<Text style={styles.late}>Pest Control (11/15)</Text>
					</Body>
					<Right>
						<Text style={styles.late}>$56</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#F0F" }}>
							<Icon active name="beer" />
						</Button>
					</Left>
					<Body>
						<Text style={styles.late}>Beer money (11/26)</Text>
					</Body>
					<Right>
						<Text style={styles.late}>$5</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#FF9501" }}>
							<Icon active name="airplane" />
						</Button>
					</Left>
					<Body>
						<Text>Airline Miles Card (11/30)</Text>
					</Body>
					<Right>
						<Text>$29</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#FF9501" }}>
							<Icon active name="wifi" />
						</Button>
					</Left>
					<Body>
						<Text>Phone Bill (11/30)</Text>
					</Body>
					<Right>
						<Text>$199</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem itemDivider>
					<Text>December</Text>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#007AFF" }}>
							<Icon active name="bluetooth" />
						</Button>
					</Left>
					<Body>
						<Text>Best Buy (12/05)</Text>
					</Body>
					<Right>
						<Text>$199</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#0A0" }}>
							<Icon active name="bug" />
						</Button>
					</Left>
					<Body>
						<Text>Pest Control (12/15)</Text>
					</Body>
					<Right>
						<Text>$56</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#F0F" }}>
							<Icon active name="beer" />
						</Button>
					</Left>
					<Body>
						<Text>Beer money (12/26)</Text>
					</Body>
					<Right>
						<Text>$5</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#FF9501" }}>
							<Icon active name="airplane" />
						</Button>
					</Left>
					<Body>
						<Text>Airline Miles Card (12/30)</Text>
					</Body>
					<Right>
						<Text>$29</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: "#FF9501" }}>
							<Icon active name="wifi" />
						</Button>
					</Left>
					<Body>
						<Text>Phone Bill (12/30)</Text>
					</Body>
					<Right>
						<Text>$199</Text>
						<MaterialIcons active name="keyboard-arrow-right" size={24} />
					</Right>
				</ListItem>
			</List>
  );
}


const styles = StyleSheet.create({
  dueSoon: {
		fontSize: 20,
		marginTop: 10
	},
	late: {
		color: 'red'
	}
});
