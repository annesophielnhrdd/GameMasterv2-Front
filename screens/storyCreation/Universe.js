import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUniverse } from '../../reducers';

import { COLORS, GLOBAL_STYLES } from '../../constants';
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import { Text, TouchableOpacity, View } from 'react-native';

export function Universe({ navigation }) {
  const dispatch = useDispatch();
  const [selectedUniverse, setSelectedUniverse] = useState('intrigue');

  const universeChoices = ['montagne', 'forêt', 'ville'];

  const handleNext = () => {
    dispatch(setUniverse(selectedUniverse));
    navigation.navigate('Characters');
  };

  return (
    <View style={GLOBAL_STYLES.centerContainer}>
      <Text style={GLOBAL_STYLES.title}>
        Dans quel univers se déroule votre aventure ?
      </Text>

      <WheelPickerExpo
        height={200}
        width={200}
        selectedStyle={{ borderColor: COLORS.secondary, borderWidth: 1 }}
        initialSelectedIndex={1}
        backgroundColor={COLORS.primary}
        items={universeChoices.map(universeChoice => ({
          label: universeChoice.toUpperCase(),
          value: universeChoice.toLowerCase(),
        }))}
        onChange={({ item }) => setSelectedUniverse(item.value)}
      />

      <View style={{ height: '0px' }}></View>
      <TouchableOpacity
        style={GLOBAL_STYLES.primaryButton}
        onPress={handleNext}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}
