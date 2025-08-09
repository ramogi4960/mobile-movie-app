import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, ImageProps, Text } from "react-native";

interface TabIconProps {
    focused: boolean;
    icon: ImageProps
    title: string
}

const TabIcon = ({ focused, icon, title }: TabIconProps) => (
    <ImageBackground
    source={images.highlight}
    className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
        <Image
        source={icon}
        tintColor='#151312'
        className="size-5"
        />
        <Text>{title}</Text>
    </ImageBackground>
);

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    focused={focused}
                    icon={icons.home}
                    title="Home"
                    />
                )
            }} />
            <Tabs.Screen name="search" options={{
                title: "Search",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    focused={focused}
                    icon={icons.search}
                    title="Search"
                    />
                )
            }} />
            <Tabs.Screen name="saved" options={{
                title: "Saved",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    focused={focused}
                    icon={icons.save}
                    title="Saved"
                    />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon
                    focused={focused}
                    icon={icons.person}
                    title="Profile"
                    />
                )
            }} />
        </Tabs>
    );
}