import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {

  const [ searchQuery, setSearchQuery ] = useState<string>('');

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch,
    reset
  }  = useFetch(() => fetchMovies({
    query: searchQuery
  }), false)

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await refetch();
      } else {
        reset();
      }
    }, 600);

    return () => clearTimeout(timeoutId);

  }, [searchQuery])

  return (
    <View className="flex-1 bg-primary">
      <Image
      source={images.bg}
      className="absolute w-full z-0"
      />

      <FlatList
      data={movies}
      renderItem={({ item }) => <MovieCard {...item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      className="px-5"
      numColumns={3}
      columnWrapperStyle={{
        justifyContent: 'center',
        gap: 16,
        marginVertical: 16
      }}
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      ListHeaderComponent={
        <>
          <View className="w-full flex-row items-center justify-center mt-20 mb-5">
            <Image
            source={icons.logo}
            className="w-12 h-10"
            />
          </View>

          <View className="my-5">
            <SearchBar
            placeHolderText="Search movie..."
            value={searchQuery}
            onChangeText={(previousState: string) => setSearchQuery(previousState)}
            />
          </View>

          { moviesLoading && (
            <ActivityIndicator
            size={'large'}
            color={"#0000ff"}
            className="my-3"
            />
          ) }
          { moviesError && (
            <Text className="text-red-500 px-5 my-3">
              Error: {moviesError?.message}
            </Text>
          ) }

          { !moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
            <Text className="text-xl text-white font-bold">
              Search results for "
              <Text className="text-accent">{searchQuery}</Text>
              "
            </Text>
          ) }
        </>
      }
      />
    </View>
  );
}
