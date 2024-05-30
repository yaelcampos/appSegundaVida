import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CategoriesConteiner } from './src/components/Categories/CategoriesConteiner.js'; 

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Segunda</Text>
      <Text>VidaDeco</Text>
      < CategoriesConteiner/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '	#9DC6D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
