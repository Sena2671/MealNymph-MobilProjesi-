import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinize emin misiniz?',
      [
        {
          text: 'İptal',
          style: 'cancel',
        },
        {
          text: 'Çıkış Yap',
          style: 'destructive',
          onPress: () => {
            logout();
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={80} color="#fff" />
        </View>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <FontAwesome name="arrows-v" size={20} color="#8A2BE2" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Boy</Text>
            <Text style={styles.infoValue}>{user?.height} cm</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <FontAwesome name="balance-scale" size={20} color="#8A2BE2" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Kilo</Text>
            <Text style={styles.infoValue}>{user?.weight} kg</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <FontAwesome name="birthday-cake" size={20} color="#8A2BE2" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Yaş</Text>
            <Text style={styles.infoValue}>{user?.age} yıl</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <FontAwesome name="venus-mars" size={20} color="#8A2BE2" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Cinsiyet</Text>
            <Text style={styles.infoValue}>{user?.gender}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <FontAwesome name="fire" size={20} color="#8A2BE2" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Aktivite Seviyesi</Text>
            <Text style={styles.infoValue}>{user?.activityLevel}</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <FontAwesome name="heartbeat" size={20} color="#8A2BE2" />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Sağlık Durumu</Text>
            <Text style={styles.infoValue}>{user?.healthStatus}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={20} color="#fff" />
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#8A2BE2',
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  infoContainer: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  infoIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#f0e6ff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContent: {
    marginLeft: 15,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8A2BE2',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
}); 