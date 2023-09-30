
import RootNavigation from './app/navigation/RootNavigation';
import { t } from "./app/translation";
import * as Localization from "expo-localization";
import Translation from "./app/translation/context";

import { useFonts, Inter_900Black, Inter_500Medium , Inter_700Bold} from '@expo-google-fonts/inter';

const isRtl =  Localization.getLocales()[0].textDirection === "rtl"


export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_500Medium,
    Inter_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Translation.Provider  value={{isRtl, t}}><RootNavigation/></Translation.Provider>;
}


