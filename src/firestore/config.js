import * as firebase from "firebase";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyA5EkxZ8ZTqE1OBwLarJaZ-2ljJAf_wtDo",
	authDomain: "cleanaddis-bdaa1.firebaseapp.com",
	databaseURL: "https://cleanaddis-bdaa1.firebaseio.com",
	projectId: "cleanaddis-bdaa1",
	storageBucket: "cleanaddis-bdaa1.appspot.com",
	messagingSenderId: "871168571489",
	appId: "1:871168571489:web:3b227f6f6403cb0c3e5220"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
