import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { AnimatePresence, MotiText } from 'moti';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Moviments({ data, showValues }) {
  
  return (
    <TouchableOpacity 
      style={styles.container} 
      activeOpacity={1}
    >
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {           
          showValues ? 
            (
              <AnimatePresence exitBeforeEnter>
                <MotiText 
                  style={[styles.value, {color: data.type === 1 ? theme.colors.comeIn : theme.colors.comeOut}]}
                  from={{
                    translateX: 100,
                  }}
                  animate={{
                    translateX: 0
                  }}
                  transition={{
                    type: 'spring',
                    duration: 500,
                  }}
                >
                  { data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}` }
                </MotiText>
              </AnimatePresence>
            ) : 
            (
              <View style={styles.skeleton} />
            )
        }
      </View>
    </TouchableOpacity>
  );
}