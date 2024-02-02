import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS, GLOBAL_STYLES } from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { addCharacters } from '../../reducers';

const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL;

export function Players({ navigation }) {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user);
  const currentGame = useSelector(state => state.currentGame);
  console.log('[FRONTEND][CHARACTERS CREATION] Current game:', currentGame);

  const user = {
    _id: '65b368bd9d8ddfdd0160810f',
    username: 'testeur',
    password: 'testeurPassword',
    token: 'testeurToken',
    friends: ['Marie', 'Jimmy', 'Jean'],
  };

  const [players, setPlayers] = useState([
    {
      name: `${user.username.slice(0, 1).toUpperCase()}${user.username
        .slice(1)
        .toLowerCase()}`,
      character: '',
      description: '',
    },
    { name: '', character: '', description: '' },
  ]);

  const addNewPlayer = () => {
    if (players.length < 5) {
      setPlayers([
        ...players,
        {
          name: '',
          character: '',
          description: '',
        },
      ]);
    } else {
      alert('Le nombre maximum de joueurs est atteint (5 joueurs).');
    }
  };

  const handleRemovePlayer = i => {
    if (players.length > 2) {
      const updatedPlayers = [...players];
      updatedPlayers.splice(i, 1);
      setPlayers(updatedPlayers);
    }
  };

  const handleChange = (text, i) => {
    const updatedPlayers = [...players];
    updatedPlayers[i].name = `${text.slice(0, 1).toUpperCase()}${text
      .slice(1)
      .toLowerCase()}`;
    setPlayers(updatedPlayers);
  };

  const handleSubmit = () => {
    const playersNames = [];

    for (const player of players) {
      // Check if all fields are completed
      if (player.name.trim() === '') {
        return alert('Tu dois fournir un nom pour chaque joueur.');
      }

      playersNames.push(player.name);
    }

    // TODO: Add the spinner
    console.log(
      '[FRONTEND][CHARACTERS CREATION] Start fetching story/characters'
    );
    fetch(`${BACKEND_URL}/story/characters?players=${playersNames.join(',')}`)
      .then(resp => resp.json())
      .then(data => dispatch(addCharacters(data)))
      .catch(error => console.error(error))
      .finally(() =>
        console.log(
          '[FRONTEND][CHARACTERS CREATION] Finished fetching story/characters'
        )
      );

    // navigation.navigate('Style');
  };

  const inputWidth = i => (i < 2 ? '100%' : '85%');

  return (
    <ScrollView
      style={GLOBAL_STYLES.scrollView}
      contentContainerStyle={GLOBAL_STYLES.scrollViewContainer}
    >
      <Text style={GLOBAL_STYLES.title}>
        Quels sont les prénoms de vos joueurs?
      </Text>

      {players.map((player, i) => (
        <View key={i} style={styles.playerContainer}>
          <View
            style={{
              ...GLOBAL_STYLES.inputContainer,
              width: `${inputWidth(i)}`,
            }}
          >
            <TextInput
              style={GLOBAL_STYLES.input}
              placeholder={`Joueur ${i + 1}`}
              value={player.name}
              onChangeText={text => handleChange(text, i)}
            />
            <TouchableOpacity
              onPress={() => handleChange('', i)}
              style={GLOBAL_STYLES.inputClearIcon}
            >
              <Icon name="times" size={16} color={COLORS.black} />
            </TouchableOpacity>
          </View>
          {i >= 2 ? (
            <TouchableOpacity
              onPress={() => handleRemovePlayer(i)}
              style={styles.removePlayerIcon}
            >
              <Icon name="times" size={35} color={COLORS.black} />
            </TouchableOpacity>
          ) : null}
        </View>
      ))}
      <View style={{ height: '0px' }}></View>
      <TouchableOpacity
        onPress={addNewPlayer}
        style={GLOBAL_STYLES.primaryButton}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>Ajouter un joueur</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GLOBAL_STYLES.primaryButton}
        onPress={handleSubmit}
      >
        <Text style={GLOBAL_STYLES.primaryButtonText}>GO!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  removePlayerIcon: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addButton: {
    backgroundColor: '#efefef',
    paddingVertical: '5%',
    paddingHorizontal: '15%',
    borderRadius: 8,
    marginTop: '7%',
    //elevation: "5%",
    shadowColor: '#000',
    shadowOpacity: '3%',
    shadowOffset: { width: 0, height: 2 },
  },
});
