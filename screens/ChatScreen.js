import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
	const param = useRoute().params;
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		console.log(param.params);
		setMessages([
			{
				_id: 5,
				text: "This is a quick reply. Do you love VegaGPT?",
				createdAt: new Date(),
				quickReplies: {
					type: "radio", // or 'checkbox',
					keepIt: true,
					values: [
						{
							title: "😋 Yes",
							value: "yes"
						},
						{
							title: "📷 Yes, let me show you with a picture!",
							value: "yes_picture"
						},
						{
							title: "😞 Nope. What?",
							value: "no"
						}
					]
				},
				user: {
					_id: 6,
					name: "React Native",
					avatar: param.params?.image
				}
			},
			{
				_id: 3,
				text: "How may i help you?",
				createdAt: new Date(),
				user: {
					_id: 4,
					name: "React Native",
					avatar: param.params?.image
				}
			},

			{
				_id: 1,
				text: "Welcome To VegaGPT!",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: param.params?.image
				}
			}
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
	}, []);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{ id: 1 }}
			/>
		</SafeAreaView>
	);
};

export default ChatScreen;
