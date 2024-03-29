import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function HeaderBarIcon(props) {
  return (
    <MaterialIcons
      name={props.name}
      size={40}
      style={{ marginRight: 10 }}
      color={Colors.headerTintColor}
    />
  );
}
