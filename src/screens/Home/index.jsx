import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { Header } from '../../components/Header';
import { Actions } from '../../components/Actions';
import { Balance } from '../../components/Balance';
import { Moviments } from '../../components/Moviments';

import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: 90.00,
    date: '17/05/2022',
    type: 0, // saída / despesa
  },
  {
    id: 2,
    label: 'Pix cliente x',
    value: 400.00,
    date: '19/05/2022',
    type: 1, // entrada / receita
  },
  {
    id: 3,
    label: 'Pix cliente y',
    value: 1500.00,
    date: '5/06/2022',
    type: 1,
  },
  {
    id: 4,
    label: 'Boleto conta de água',
    value: 60.00,
    date: '20/05/2022',
    type: 0, 
  }
]

export function Home() {
  const [showValues, setShowValues] = useState(false);

  const getBalance = list.reduce((acc, curr) => {
    if (curr.value > 0) {
      acc.totalEntrada += curr.value;
    } else {
      acc.totalSaida += curr.value;
    }
    return acc;
  }, {
    totalEntrada: 0,
    totalSaida: 0,
  });

  return (
    <View style={styles.container}>
      <Header name="Antônio Marcelino" />

      <Balance showValues={showValues} saldo="1.900,00" gastos="150,00" />

      <Actions />

      <View style={styles.headerList}>
        <Text style={styles.title}>Últimas movimentações</Text>

        <TouchableOpacity 
          style={styles.secretIcon} 
          onPress={() => setShowValues(!showValues)} 
        >
          <Ionicons 
            name={showValues ? "md-eye-outline" : "md-eye-off-outline"} 
            size={26} 
            color="#000" 
          />
        </TouchableOpacity>
      </View>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} showValues={showValues} />}
      />
    </View>
  );
}