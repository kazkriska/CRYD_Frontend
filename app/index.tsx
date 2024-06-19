import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { QR_Scanner } from './components/QR_Scanner';

export default function GetStarted() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Get Started</Text>
      </SafeAreaView>
      <QR_Scanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //. alignItems: 'center',
  },
});
