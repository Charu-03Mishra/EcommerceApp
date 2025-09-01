import Entypo from "@expo/vector-icons/Entypo";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
	const [isVisible, setIsVisibel] = useState(false);
	const [countryName, setCountryName] = useState("India");
	const [countryCode, setCountryCode] = useState("+ 91");

	const onNnext = () => {
		router.push("/(auth)/Login/Verify_otp");
	};
	const onPrev = () => {
		router.push("/(auth)");
	};
	return (
		<SafeAreaView className="flex-1 justify-between ">
			<View>
				<View className="flex flex-row items-center  px-3 justify-between bg-[#0BBCB5] py-4">
					<Text>
						<Entypo name="cross" size={20} color="white" onPress={onPrev} />
					</Text>
					<Text className="text-[20px] text-[white]">Stylish</Text>
					<Text></Text>
				</View>

				<View className="pt-9 px-5">
					<Text className="text-[18px] font-bold text-gray-700">
						Login in for the Best Experience
					</Text>
					<Text className="pt-3 text-[18px] font-medium text-gray-400">
						Enter the Phone Number to continue
					</Text>
					<View className="pt-10">
						{/* Country Selector Header */}

						{/* Phone Input Section */}
						<View className="flex flex-row items-end gap-x-5">
							{/* Country Code */}
							<View className="pb-1">
								<Text
									className="font-semibold text-[16px] text-black"
									onPress={() => setIsVisibel(true)}>
									{countryCode}
								</Text>
								<View className="h-[2px] bg-[#05AA82] mt-[8px]" />
							</View>

							{/* Phone Input */}
							<View className="flex-1 pb-1">
								<TextInput
									placeholder="Enter Your Number"
									keyboardType="phone-pad"
									className=" py-0 tfont-semibold text-[16px] text-black"
								/>
								<View className="w-full h-[2px] bg-[#05AA82] mt-[8px]" />
							</View>
						</View>

						<View className=" pt-3">
							<Text className="text-[#808080] text-[14px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Sapiente corrupti quod quidem facilis animi consectetur
								corporis, ut autem fugit ad?
							</Text>
							<Text className="text-red-600 font-semibold text-[14px] pt-4 ">
								Terms of Use <Text className="text-[#808080]">&</Text> Privacy
								Policy
							</Text>
						</View>
					</View>
				</View>
			</View>

			<View className="">
				<TouchableOpacity
					onPress={onNnext}
					activeOpacity={0.7}
					className="bg-[#0BBCB5]  flex items-center
				 justify-center px-5 py-4 ">
					<Text className="text-[20px]">Countinue</Text>
				</TouchableOpacity>
			</View>

			{isVisible && (
				<CountryPicker
					visible={true}
					onClose={() => setIsVisibel(false)}
					onSelect={(e: any) => {
						setCountryCode(`+ ${e.callingCode[0]} `);
						setCountryName(e.name);
					}}
				/>
			)}
		</SafeAreaView>
	);
}
