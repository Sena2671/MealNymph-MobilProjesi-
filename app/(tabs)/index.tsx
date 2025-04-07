import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function HomeScreen() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hoş Geldin, {user?.name || 'Misafir'}</Text>
      <Text style={styles.subtitle}>Bugünkü öğün planın hazır!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
