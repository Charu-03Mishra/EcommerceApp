import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import "@/global.css"
SplashScreen.preventAutoHideAsync();
export default function RootNavigation() {
	const [isLogin, setIsLogin] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hideAsync();
		}, 1000);
	}, []);
	return (
		<>
			<Stack screenOptions={{ headerShown: false }} />
			{isLogin? <Redirect href={"/(main)"} />: <Redirect href={"/(auth)"} />}
		</>
	);
}
