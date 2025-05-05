import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { colors } from '../../constants/theme';
import { useFavorites } from '../../contexts/FavoritesContext';
import { RECIPES } from './recipesData';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const { favoriteIds } = useFavorites();
  const favoriteRecipes = RECIPES.filter(r => favoriteIds.includes(r.id));

  const handleLogout = () => {
    Alert.alert(
      'Çıkış Yap',
      'Çıkış yapmak istediğinize emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        { text: 'Çıkış Yap', style: 'destructive', onPress: logout },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileCard}>
        <View style={styles.avatarWrapper}>
          <FontAwesome name="user-circle" size={100} color={colors.primary} />
        </View>
        <Text style={styles.name}>{user?.name || 'Kullanıcı Adı'}</Text>
        <Text style={styles.email}>{user?.email || 'E-posta adresi'}</Text>
      </View>

      <View style={styles.infoSection}>
        <ProfileInfo icon="arrows-v" label="Boy" value={user?.height ? `${user.height} cm` : '-'} />
        <ProfileInfo icon="balance-scale" label="Kilo" value={user?.weight ? `${user.weight} kg` : '-'} />
        <ProfileInfo icon="birthday-cake" label="Yaş" value={user?.age ? `${user.age} yıl` : '-'} />
        <ProfileInfo icon="venus-mars" label="Cinsiyet" value={user?.gender || '-'} />
        <ProfileInfo icon="fire" label="Aktivite Seviyesi" value={user?.activityLevel || '-'} />
        <ProfileInfo icon="heartbeat" label="Sağlık Durumu" value={user?.healthStatus || '-'} />
      </View>

      <View style={{width: '100%', marginBottom: 24}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.primary, marginBottom: 10}}>Favori Tariflerim</Text>
        {favoriteRecipes.length === 0 ? (
          <Text style={{color: colors.textLight}}>Henüz favori tarifiniz yok.</Text>
        ) : (
          favoriteRecipes.map(recipe => (
            <View key={recipe.id} style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF8E1', borderRadius: 16, marginBottom: 10, padding: 10}}>
              <Image source={{uri: recipe.image}} style={{width: 60, height: 60, borderRadius: 10, marginRight: 12}} />
              <View style={{flex: 1}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: colors.text}}>{recipe.name}</Text>
                <Text style={{fontSize: 13, color: colors.textLight}}>{recipe.category}</Text>
              </View>
            </View>
          ))
        )}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <FontAwesome name="sign-out" size={22} color="#fff" />
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileInfo({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <View style={styles.infoCard}>
      <View style={styles.infoIconWrapper}>
        <FontAwesome name={icon} size={22} color={colors.primary} />
      </View>
      <View style={styles.infoTextWrapper}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.background,
    alignItems: 'center',
    flexGrow: 1,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 24,
    padding: 32,
    marginBottom: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarWrapper: {
    marginBottom: 16,
    borderWidth: 4,
    borderColor: colors.primary,
    borderRadius: 60,
    padding: 4,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: colors.textLight,
    marginBottom: 8,
  },
  infoSection: {
    width: '100%',
    marginBottom: 32,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  infoIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF8E1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoTextWrapper: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textLight,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.error,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    marginTop: 'auto',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 12,
  },
}); 