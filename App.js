import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import HomeScreen from "./screens/HomeScreen";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./Navigation/Stack";

export default function App() {
	const theme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			primary: "tomato",
			secondary: "yellow"
		}
	};
	return (
		<PaperProvider
			theme={theme}
			settings={{
				rippleEffectEnabled: true
			}}>
			<NavigationContainer>
				<Stack />
			</NavigationContainer>
			<StatusBar style="auto" />
		</PaperProvider>
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
