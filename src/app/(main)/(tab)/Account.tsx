import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import {
	FontAwesome,
	FontAwesome5,
	Ionicons,
	MaterialIcons,
} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const orders = [
	{
		name: "Order",
		icon: <FontAwesome5 name="first-order" size={16} color="#51A2FF" />,
	},
	{
		name: "WishList",
		icon: <AntDesign name="hearto" size={16} color="#51A2FF" />,
	},
	{
		name: "Coupons",
		icon: (
			<MaterialCommunityIcons name="gift-outline" size={16} color="#51A2FF" />
		),
	},
	{
		name: "Help",
		icon: <Entypo name="help-with-circle" size={16} color="#51A2FF" />,
	},
];

export default function Account() {
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null; // or a loader component
	}

	return (
		<SafeAreaView className="bg-gray-200 flex-1 pt-4 px-3 ">
			<View
				className="bg-white px-4 py-4 rounded-lg  "
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 4,
				}}>
				<View
					className="bg-white  border border-[#0a9396]   px-3 py-4 rounded-lg flex flex-row items-center justify-between"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.1,
						shadowRadius: 3,
						elevation: 4,
					}}>
					<View>
						<Text
							className="text-[14px]"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							Aryan{" "}
						</Text>
						<Text
							className="text-[12px]"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							+91 8976546789{" "}
						</Text>
					</View>
					<View className="w-14 h-10 rounded-full flex flex-row items-center  border border-[#0a9396] px-1  bg-white">
						<MaterialCommunityIcons
							name="hand-coin-outline"
							size={24}
							color="black"
						/>
						<Text
							className="text-[14px]"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							0{" "}
						</Text>
					</View>
				</View>
				<View className="flex mt-4  flex-row gap-3 flex-wrap">
					{orders.map((item, index) => (
						<TouchableOpacity
							key={index}
							style={{ minWidth: 80 }}
							className="w-[48%] px-3 py-3 border rounded-lg gap-3  flex flex-row items-center border-gray-400">
							<Text>{item.icon}</Text>
							<Text
								className="text-black text-[12px] text-center "
								style={{
									fontFamily: "Montserrat_600SemiBold",
									lineHeight: 24,
								}}>
								{item.name}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<View className="flex-1 bg-white mt-3 rounded-lg">
				<DrawerContentScrollView
					showsVerticalScrollIndicator={false}
					className="bg-white"
					contentContainerStyle={{ paddingTop: 18, paddingBottom: 0 }}>
					<TouchableOpacity
						onPress={() => router.push("/(main)/(tab)")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<Feather name="edit" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Edit Profile
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => router.push("/(main)/(tab)/Category")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<FontAwesome name="address-book" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Shoping Address
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => alert("Backups Clicked")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<FontAwesome5 name="first-order" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							My Order
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => router.push("/(main)/(tab)/Account")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<FontAwesome name="history" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Order History
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => alert("Backups Clicked")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<Ionicons name="notifications" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Notification
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => alert("Backups Clicked")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<Feather name="credit-card" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Cards
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => alert("Backups Clicked")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<MaterialIcons name="privacy-tip" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Privacy Center
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => alert("Backups Clicked")}
						style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
						<FontAwesome name="language" size={24} color="black" />
						<Text
							style={{
								marginLeft: 10,
								fontFamily: "Montserrat_600SemiBold",
								fontSize: 12,
							}}>
							Language
						</Text>
					</TouchableOpacity>
				</DrawerContentScrollView>
			</View>

			<TouchableOpacity className="mt-3 mx-4 py-4 rounded-lg border border-gray-300 bg-white">
				<Text
					className="text-center text-[14px] text-blue-600"
					style={{ fontFamily: "Montserrat_600SemiBold" }}>
					Logout
				</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
