import { Stack } from "expo-router";
import {
  useFonts,
  DMSans_400Regular as DMRegular,
  DMSans_500Medium as DMMedium,
  DMSans_700Bold as DMBold,
} from "@expo-google-fonts/dm-sans";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMRegular,
    DMMedium,
    DMBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName='home'>
      <Stack.Screen name='home' />
    </Stack>
  );
};

export default Layout;
