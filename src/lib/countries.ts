import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

export const countryList = Object.values(
  countries.getNames("en", { select: "official" })
).sort();