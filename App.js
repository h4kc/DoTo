
import RootNavigation from './app/navigation/RootNavigation';
import { t } from "./app/translation";
import * as Localization from "expo-localization";
import Translation from "./app/translation/context";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

const isRtl =  Localization.getLocales()[0].textDirection === "rtl"


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Translation.Provider  value={{isRtl, t}}><RootNavigation/></Translation.Provider>;
}


