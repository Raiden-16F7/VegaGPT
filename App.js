import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					marginTop: 20,
					alignItems: "center",
					justifyContent: "center",
				}}>
				<LottieView
					autoPlay
					style={{
						width: 200,
						height: 200,
					}}
					// Find more Lottie files at https://lottiefiles.com/featured
					source={require("./assets/animation_llza5dm0.json")}
				/>
				<Text style={{ fontSize: 30, fontWeight: "bold" }}>✵VegaGPT</Text>
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		padding: 20,
	},
});
