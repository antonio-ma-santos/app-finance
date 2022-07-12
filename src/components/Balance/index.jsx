import React from 'react';
import { View, Text } from 'react-native';

import { MotiView } from 'moti';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Balance({saldo, gastos, showValues}) {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0,
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1,
      }}
      transition={{
        type: 'spring',
        duration: 900,
        delay: 300,
      }}
    >

      <View style={styles.containerBalance}>
        <Text style={styles.itemTitle}>Entradas</Text>
        <View style={styles.content}>
          {
            showValues ? 
              (   <>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={[styles.Balance, {color: theme.colors.comeIn}]}>{saldo}</Text>
                  </>
              ) :
              (
                <View style={styles.skeleton} />
              ) 
          }
        </View>
      </View>

      <View style={styles.containerBalance}>
        <Text style={styles.itemTitle}>Saídas</Text>
        <View style={styles.content}>
          {
            showValues ? 
              (   <>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={[styles.Balance, {color: theme.colors.comeOut}]}>{gastos}</Text>
                  </>
              ) :
              (
                <View style={styles.skeleton} />
              ) 
          }
        </View>
      </View>

    </MotiView>
  );
}