import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// modules
import ContextApi from './constants/ContextApi';
import BottomTabNav from './src/routes/BottomTab';

export default function App() {
  return (
    <ContextApi>
      <SafeAreaView barStyle="light-content" />
      <BottomTabNav />
    </ContextApi>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
