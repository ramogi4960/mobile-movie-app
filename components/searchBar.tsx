import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

interface Props {
    placeHolderText: string;
    onPress?: () => void;
    onChangeText?: (text: string) => void;
    value ?: string;
    editable?:  boolean;
}

export default function SearchBar({ placeHolderText, onPress, onChangeText, value, editable }: Props) {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4 w-[90%]">
            <Image
            source={icons.search}
            resizeMode="contain"
            tintColor='#ab8bff'
            />
            <TextInput
            onPress={onPress}
            editable={editable}
            placeholder={placeHolderText}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor='#a8b5db'
            className="flex-1 ml-2 text-white"
            />
        </View>
    );
}