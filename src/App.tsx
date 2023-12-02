import { useState } from 'react';
import { Appbar, Text, FAB } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const App = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Content title="Flutter Demo Home Page" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>You have pushed the button many times:</Text>
        <Text style={styles.counter}>{count}</Text>
        <FAB icon="plus" onPress={handlePress} style={styles.fab} />
      </View>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  counter: {
    fontSize: 30,
    marginTop: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
  },
});
