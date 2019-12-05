import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AccountsScreen from '../screens/AccountsScreen';
import AddAccountScreen from '../screens/AddAccountScreen';
import PickAccountScreen from '../screens/PickAccountScreen';
import PlanScreen from '../screens/PlanScreen';
import TipsScreen from '../screens/TipsScreen';
import SettingsScreen from '../screens/SettingsScreen';

import BasicCreditCardDebtScreen from '../screens/debts/BasicCreditCardDebtScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='dashboard'
    />
  ),
};

HomeStack.path = '';

const AccountsStack = createStackNavigator(
  {
    Accounts: AccountsScreen,
    AddAccount: AddAccountScreen,
    PickAccount: PickAccountScreen,
    BasicCredit: BasicCreditCardDebtScreen,
  },
  config
);

AccountsStack.navigationOptions = {
  tabBarLabel: 'Accounts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='credit-card'
    />
  ),
};

AccountsStack.path = '';

const PlanStack = createStackNavigator(
  {
    Plan: PlanScreen,
  },
  config
);

PlanStack.navigationOptions = {
  tabBarLabel: 'Plan',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='trending-down' />
  ),
};

PlanStack.path = '';

const TipsStack = createStackNavigator(
  {
    Tips: TipsScreen,
  },
  config
);

TipsStack.navigationOptions = {
  tabBarLabel: 'Tips',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='new-releases' />
  ),
};

TipsStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='settings' />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  AccountsStack,
  PlanStack,
  TipsStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
