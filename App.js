import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from "./src/Account/SignUp";
export default function App() {
  return (
      <View style={styles.container}>
       <Signup/>
          <Text>Open up App.js to start worJHKJHking on your app!</Text>

       </View>
  );

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
