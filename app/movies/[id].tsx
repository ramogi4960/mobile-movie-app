import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function MovieDetails() {
    const { id } = useLocalSearchParams();

    const { data: movie, loading } =  useFetch(() => fetchMovieDetails(id as string))

    return (
        <View className="bg-primary flex-1">
            <ScrollView
            contentContainerStyle={{
                paddingBottom: 80
            }}
            >
                <View>
                    <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
                    className="w-full h-[550px]"
                    resizeMode="stretch"
                    />
                </View>
                <View className="flex-col items-start justify-center mt-5 px-5">
                    <Text className="font-bold text-white text-xl">{movie?.title}</Text>
                </View>
            </ScrollView>
        </View>
    )
}