import app from 'firebase';
import  'firebase/firestore';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const config = {
    apiKey: "AIzaSyA5EkxZ8ZTqE1OBwLarJaZ-2ljJAf_wtDo",
    authDomain: "cleanaddis-bdaa1.firebaseapp.com",
    databaseURL: "https://cleanaddis-bdaa1.firebaseio.com",
    projectId: "cleanaddis-bdaa1",
    storageBucket: "cleanaddis-bdaa1.appspot.com",
    messagingSenderId: "871168571489",
    appId: "1:871168571489:web:3b227f6f6403cb0c3e5220"
}
export const firestore=app.initializeApp(config);
const db = app.firestore();

export default db;