import React, { useEffect, useState } from "react";
import {
	FlatList,
	SafeAreaView,
	Text,
	View,
	Image,
	TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";
import ChatFaceData from "../Services/ChatFaceData";
import { Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const [chatFaceData, setChatFaceData] = useState();
	const [selectedChatFace, setSelectedChatFace] = useState(0);
	const navigation = useNavigation();

	useEffect(() => {
		setChatFaceData(ChatFaceData);
		setSelectedChatFace(ChatFaceData[0]);
	}, []);

	const onChatFacePress = (id) => {
		setSelectedChatFace(ChatFaceData[id - 1]);
	};

	return (
		<SafeAreaView style={{ flex: 1, padding: 20, alignItems: "center" }}>
			<View
				style={{
					marginTop: 150,
					alignItems: "center",
					justifyContent: "center"
				}}>
				<LottieView
					autoPlay
					style={{
						width: 200,
						height: 200
					}}
					// Find more Lottie files at https://lottiefiles.com/featured
					source={
						selectedChatFace.lottie
							? selectedChatFace.lottie
							: require("../assets/5.json")
					}
				/>
				<Text style={{ fontSize: 30, fontWeight: "bold" }}>✵VegaGPT</Text>
				<Divider
					horizontalInset
					bold
				/>

				<Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
					Hello
				</Text>
				<Text
					style={[
						{ fontSize: 35 },
						{ fontWeight: "bold" },
						{ color: selectedChatFace.primary }
					]}>
					I am {selectedChatFace.name}
				</Text>
			</View>

			<View
				style={{
					marginTop: 20,
					backgroundColor: "#F5F5F5",
					padding: 10,
					borderRadius: 20,
					height: 110,
					alignItems: "center"
				}}>
				<FlatList
					data={chatFaceData}
					horizontal
					renderItem={({ item }) =>
						selectedChatFace.id != item.id && (
							<TouchableOpacity
								onPress={() => onChatFacePress(item.id)}
								style={{ margin: 15 }}>
								<Image
									source={{ uri: item.image }}
									style={{ width: 40, height: 40 }}
								/>
							</TouchableOpacity>
						)
					}
				/>
				<Text style={{ marginTop: 5, fontSize: 17, color: "#B0B0B0" }}>
					Choose Your ♥ Chatbot
				</Text>
			</View>

			<Button
				mode="contained"
				onPress={() =>
					navigation.navigate("Chat", { params: selectedChatFace })
				}
				rippleColor={"#FF000080"}
				style={{ width: 300, height: 50, marginTop: 40 }}>
				Chat Now
			</Button>
		</SafeAreaView>
	);
};

export default HomeScreen;
