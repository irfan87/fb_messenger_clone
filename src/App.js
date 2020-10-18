import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Message } from "./components/Message";

// TODO: have the input to write the message
// TODO: have the button to send the message to the other user
// TODO: show the message at the large div

function App() {
	// iniitialze state
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			username: "irfan",
			text_msg: "hello!",
		},
		{
			username: "ivy",
			text_msg: "hey, irfan",
		},
	]);
	const [username, setUsername] = useState("");

	useEffect(() => {
		setUsername(prompt("Please enter your name"));
	}, []); // <- [] is condition

	const sendMessage = (e) => {
		e.preventDefault();
		// all the logic to send a message will be trigger by sendMessage function
		setMessages([...messages, { username: username, text_msg: input }]);
		setInput("");
	};

	return (
		<div className="App">
			<h1>
				Hello, {username || "Human"}! Welcome to Facebook Messenger Clone!
			</h1>
			<FormControl>
				<InputLabel>Your Message</InputLabel>
				<Input value={input} onChange={(e) => setInput(e.target.value)} />
				<Button
					type="submit"
					variant="contained"
					color="primary"
					onClick={sendMessage}
					disabled={!input}
				>
					SEND MESSAGE
				</Button>
			</FormControl>
			<div>
				{messages.map((message) => (
					<Message username={username} message={message} />
				))}
			</div>
		</div>
	);
}

export default App;
