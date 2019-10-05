import React, { Component } from "react";
import { View, Text } from "react-native";
import * as fs from "./config";

export default class FirebaseComp extends Component {
	render() {
		// console.log(
		fs.firestore
			.collection("address")
			.doc("NAMSSHEF6dlVFNCaPfgp")
			.get()
			.then(doc => {
				console.log("Document data: ");
			})
			.catch(error => {
				console.log(error);
			});
		// .get("city")
		// );
		return (
			<View>
				<Text> textInComponent </Text>
			</View>
		);
	}
}
