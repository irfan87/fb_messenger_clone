import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";

export const Message = ({ message, username }) => {
	const isUser = username === message.username;

	return (
		<Card className={`message ${isUser && "message__user"}`}>
			<CardContent>
				<Typography color="white" variant="h5" component="h2">
					{message.username} says: {message.text_msg}
				</Typography>
			</CardContent>
		</Card>
	);
};
