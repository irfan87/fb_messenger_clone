import { FormControl, Input, IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import "./App.css";
import { Message } from "./components/Message";
import db from "./firebase";

// TODO: have the input to write the message
// TODO: have the button to send the message to the other user
// TODO: show the message at the large div

function App() {
	// iniitialze state
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []); // <- [] is condition

	// create another userEffect to connect our clone with firestore
	useEffect(() => {
		// run once when the app component load
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();

		// send the new messages into the firestore
		db.collection("messages").add({
			text_message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		// all the logic to send a message will be trigger by sendMessage function
		// setMessages([...messages, { username: username, text_message: input }]);
		setInput("");
	};

	return (
		<div className="App">
			<h1>
				Hello, {username || "Human"}! Welcome to Facebook Messenger Clone!
			</h1>
			<form className="app__form">
				<FormControl className="app__formControl">
					<Input
						placeholder="Your message"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="app__input"
					/>
					<IconButton
						disabled={!input}
						type="submit"
						variant="contained"
						color="primary"
						onClick={sendMessage}
						className="app__iconButton"
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>
			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} username={username} message={message} />
				))}
			</FlipMove>
		</div>
	);
}

export default App;
