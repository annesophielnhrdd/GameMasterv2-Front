import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/logogm.png')}
        style={styles.logo}
        resizeMethod="resize"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logo: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
});

export default Header;
