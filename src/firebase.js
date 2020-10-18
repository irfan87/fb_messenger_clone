// firebase config file
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDuymy6OSnUgPILFKv9RG8_0oEVPa_PKTg",
	authDomain: "fb-messenger-clone-af348.firebaseapp.com",
	databaseURL: "https://fb-messenger-clone-af348.firebaseio.com",
	projectId: "fb-messenger-clone-af348",
	storageBucket: "fb-messenger-clone-af348.appspot.com",
	messagingSenderId: "657088396825",
	appId: "1:657088396825:web:7e378f2f15617c51af3488",
	measurementId: "G-68N8E6SSXE",
});

const db = firebaseApp.firestore();

// check if the app have been connected with the firebase / firestore database
if (db) {
	console.log("connected");
} else {
	console.log("not connected");
}

export default db;
