import React from 'react'

import { 
  View,
  TouchableOpacity
 } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';
 
export function Header({ name }) {
  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          duration: 800,
          delay: 300
        }}
      >
        <MotiText 
          style={styles.username}
          from={{
            translateX: -300
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 800
          }}
        >
          {`Olá, ${name}`}
        </MotiText>

        <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.buttonUser}
        >
          <Feather 
            name="user"
            size={27}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}