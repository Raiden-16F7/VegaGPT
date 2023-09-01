import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack1 = createNativeStackNavigator();

const Stack = () => {
	return (
		<Stack1.Navigator screenOptions={{ headerShown: false }}>
			<Stack1.Screen
				name="Home"
				component={HomeScreen}
			/>
			<Stack1.Screen
				name="Chat"
				component={ChatScreen}
			/>
		</Stack1.Navigator>
	);
};

export default Stack;
