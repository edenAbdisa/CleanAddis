<<<<<<< HEAD
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  "./src/firestore/firestoreConfig"

export default function App() {
  return (
      <View style={styles.container}>

          <Text>Open up App.js to start worJHKJHking on your app!</Text>

       </View>
  );
=======
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FirebaseComp from "./src/firestore/firebase";

export default function App() {
	return (
		<View style={styles.container}>
			<FirebaseComp />
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
>>>>>>> b4d0b2fafa7569d3fb2cd8c5d6496890b48877c8
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
