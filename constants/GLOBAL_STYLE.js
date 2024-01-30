import { StyleSheet } from 'react-native';
import { COLORS } from './COLORS';

export const GLOBAL_STYLES = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: COLORS.secondary,
    width: '100%',
    height: '15%',
  },

  body: {
    backgroundColor: COLORS.primary,
    width: '100%',
    height: '85%',
  },

  centerContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 32,
  },

  scrollViewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: '20%',
    gap: 32,
    paddingVertical: 32,
    backgroundColor: 'transparent',
  },
  scrollView: {
    width: '100%',
    minHeight: '100%',
  },

  inputContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: COLORS.transpWhite70,
    padding: 16,
    gap: 16,
  },
  input: {
    width: '100%',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: COLORS.black,
    backgroundColor: COLORS.secondary,
  },

  appTitle: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  title: {
    fontFamily: 'LeagueSpartan_700Bold',
    color: COLORS.black,
    textShadowColor: COLORS.secondary,
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  bodyText: {
    color: COLORS.white,
    width: '100%',
    fontSize: 14,
    fontWeight: 'normal',
  },

  primaryButton: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    color: COLORS.black,
    elevation: 10,
  },
  primaryButtonText: {
    fontFamily: 'LeagueSpartan_700Bold',
    color: COLORS.black,
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  secondaryButton: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
  },
  secondaryButtonText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default GLOBAL_STYLES;
