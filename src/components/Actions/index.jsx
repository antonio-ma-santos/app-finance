import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

const listActions = [
  {
    nameIcon: 'addfolder',
    nameAction: 'Entradas',
  },
  {
    nameIcon: 'tagso',
    nameAction: 'Compras',
  },
  {
    nameIcon: 'creditcard',
    nameAction: 'Carteira',
  },
  {
    nameIcon: 'barcode',
    nameAction: 'Boletos',
  },
  {
    nameIcon: 'setting',
    nameAction: 'Contas',
  },
]

export function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      { 
        listActions.map((item) => (
          <TouchableOpacity key={item.nameIcon} style={styles.actionButton}>
            <View style={styles.areaButton}>
              <AntDesign name={item.nameIcon} size={26} color="#000" />
            </View>
            <Text style={styles.labelButton}>{item.nameAction}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}