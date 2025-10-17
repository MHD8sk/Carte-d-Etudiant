import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/emsi.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        
        <View style={styles.textBlock}>
          
          <Text style={styles.appTitle}>Student Card App</Text>
          
          <Text style={styles.schoolName}>EMSI CENTRE</Text>
        </View>
      </View>

      
      <View style={styles.info}>
        <Text style={styles.label}>
          Nom : <Text style={styles.value}>SOKAKI</Text>
        </Text>
        <Text style={styles.label}>
          Prénom : <Text style={styles.value}>MEHDI</Text>
        </Text>
        <Text style={styles.label}>
          Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 15,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  textBlock: {
    alignItems: 'center',
  },

  
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c7a3eff', 
    marginBottom: 5,
    letterSpacing: 1,
  },

  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c7a3eff', 
    letterSpacing: 1,
  },

  info: {
    alignItems: 'row',
    gap: 8,
    marginTop: 30,
  },

  label: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },

  
  value: {
    fontSize: 17,
    color: '#1d4ed8',
    fontWeight: 'bold',
  },
});