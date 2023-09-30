//import libraries
import { I18n }  from "i18n-js";
import * as Localization from "expo-localization";


import en from "./en.json";
import ar from "./ar.json";
import fr from "./fr.json";
//binding
const i18n = new I18n({
  en,
  ar,
  fr,
});

i18n.defaultLocale=Localization.locale
i18n.enableFallback
 export function t(name) {
return i18n.t(name);
}


