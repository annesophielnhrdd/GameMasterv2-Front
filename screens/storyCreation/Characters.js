import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { COLORS, GLOBAL_STYLES } from '../../constants';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { Text, TouchableOpacity, View } from 'react-native';

export function Characters({ navigation }) {
  const currentGame = useSelector(state => state.currentGame);

  return (
    <View style={GLOBAL_STYLES.centerContainer}>
      <Text style={GLOBAL_STYLES.title}>
        Voici vos personnages pour cette aventure :
      </Text>

      {currentGame.players ? (
        currentGame.players.map(player => {
          return (
            <View key={player.character}>
              <Text>{player.name}</Text>
              <Text>{player.character}</Text>
              <Text>{player.description}</Text>
            </View>
          );
        })
      ) : (
        <Text>...Chargement des personnages</Text>
      )}

      <View style={{ height: '0px' }}></View>
      <TouchableOpacity
        style={GLOBAL_STYLES.primaryButton}
        onPress={() => navigation.navigate('Story')}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}
