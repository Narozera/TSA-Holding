// const defaultLocale = "en";

// const supportedLocales = ["en", "br"];

// let locale;

// const fullyQualifiedLocaleDefaults = {
//   en: "en",
//   br: "br",
// };

// const translations = {
//   // English translations
//   en: {
//     "nav-1": "Home",
//     "nav-2": "About",
//     "nav-3": "Brands",
//     "nav-4": "Contact Us",
//     "nav-5": "Home",
//     "nav-6": "About",
//     "nav-7": "Brands",
//     "nav-8": "Contact Us",
//     "one_paralax-h1 ":
//       "Our ecosystem is associated to the education, technology and marketingsectors",
//     "about-1": "About",
//     "about-2": "TSA Holding",
//     "about-3":
//       "TSA Capital Holding Ltd is an operating holding company that owns a number of companies related to education, technology and marketing, which operates in Latin America and some European and Asian countries.",
//     "about-4":
//       "TSA Capital Holding Ltd is also actively involved in the production and sale of online courses, as well as consulting, promotion, digital media, and marketing services for its clients.",
//     "ourBrands-1": "OUR BRANDS",
//     "ourBrands-2":
//       "We inspire lives and move forward side by side with technology, so that people can explore possibilities and gain knowledge, achieve goals, and grow, always succeeding in their objectives.",
//     "ourBrands-3": "HD TRADE PARTICIPAÇÕES LTDA TRADE STARS BRAZIL",
//     "ourBrands-4": "MN TECNOLOGIA LTDA MONEY NOW NEWS",
//     "ourBrands-5": "BLACK MENTORY AGENCY LTDA TRADE STARS LATAM",
//     "contact-1 ": "Contact Us",
//     "copy-right": "2023 © Copyright - All Rights reserved.",
//     "ts-1": "English",
//     "ts-2": "Brazilian Portuguese",
//   },

//   br: {
//     "nav-1": "Home",
//     "nav-2": "Sobre",
//     "nav-3": "Marcas",
//     "nav-4": "Entre em contato",
//     "nav-5": "Home",
//     "nav-6": "Sobre",
//     "nav-7": "Marcas",
//     "nav-8": "Entre em contato",
//     "one_paralax-h1":
//       "Nosso ecossistema é associado à educação, tecnologia e setores de marketing",
//     "about-1": "Sobre",
//     "about-2": "TSA Holding",
//     "about-3":
//       "TSA Capital Holding Ltd é uma companhia de holding operacional que possui diversas companhias relacionadas à educação, tecnologia e marketing, as quais operam na América Latina assim como alguns países europeus e asiáticos.",
//     "about-4":
//       "TSA Capital Holding Ltd também está envolvida ativamente na produção e venda de cursos online, tal qual como consultorias, promoções, mídias digitais e serviços de marketing para seus clientes.",
//     "ourBrands-1": "NOSSAS MARCAS",
//     "ourBrands-2":
//       "Nós inspiramos vidas e caminhamos lado a lado com a tecnologia, permitindo que as pessoas explorem possibilidades, evoluam seus conhecimentos, alcancem seus objetivos e cresçam, tendo sempre sucesso em seus objetivos.",
//     "ourBrands-3": "HD TRADE PARTICIPAÇÕES LTDA TRADE STARS BRAZIL",
//     "ourBrands-4": "MN TECNOLOGIA LTDA MONEY NOW NEWS",
//     "ourBrands-5": "BLACK MENTORY AGENCY LTDA TRADE STARS LATAM",
//     "contact-1": "Entre em contato",
//     "copy-right": "2023 © Copyright - Todos os direitos reservados.",
//     "ts-1": "Inglês",
//     "ts-2": "Português (br)",
//   },
// };

// // When the page content is ready...
// document.addEventListener("DOMContentLoaded", () => {
//   const initialLocale = supportedOrDefault(browserLocales(true));

//   setLocale(initialLocale);

//   bindLocaleSwitcher(initialLocale);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   setLocale(defaultLocale);
//   bindLocaleSwitcher(defaultLocale);
// });

// // Load translations for the given locale and translate
// // the page to this locale
// async function setLocale(newLocale) {
//   if (newLocale === locale) return;

//   const newTranslations = await fetchTranslationsFor(newLocale);

//   locale = newLocale;
//   translations = newTranslations;
//   document.documentElement.lang = newLocale;
//   document.documentElement.dir = dir(newLocale);

//   translatePage();
// }

// // Retrieves translations JSON object for the given
// // locale over the network
// async function fetchTranslationsFor(newLocale) {
//   const response = await fetch(`/lang/${newLocale}.json`);
//   return await response.json();
// }

// // Replace the inner text of all elements with the
// // data-i18n-key attribute to translations corresponding
// // to their data-i18n-key
// function translatePage() {
//   document
//     .querySelectorAll("[data-i18n-key]")
//     .forEach((el) => translateElement(el));
// }

// // Replace the inner text of the given HTML element
// // with the translation in the active locale,
// // corresponding to the element's data-i18n-key
// function translateElement(element) {
//   const key = element.getAttribute("data-i18n-key");

//   const options = JSON.parse(element.getAttribute("data-i18n-opt")) || {};

//   element.innerText = translate(key, options);
// }

// function translate(key, interpolations = {}) {
//   const message = translations[key];

//   if (key.endsWith("-plural")) {
//     return interpolate(
//       pluralFormFor(message, interpolations.count),
//       interpolations
//     );
//   }

//   return interpolate(message, interpolations);
// }

// // Convert a message like "Hello, {name}" to "Hello, Chad"
// // where the given interpolations object is {name: "Chad"}
// function interpolate(message, interpolations) {
//   return Object.keys(interpolations).reduce((interpolated, key) => {
//     const value = formatDate(formatNumber(interpolations[key]));

//     return interpolated.replace(new RegExp(`{\s*${key}\s*}`, "g"), value);
//   }, message);
// }

// function pluralFormFor(forms, count) {
//   const matchingForm = new Intl.PluralRules(locale).select(count);

//   return forms[matchingForm];
// }

// function isSupported(locale) {
//   return supportedLocales.indexOf(locale) > -1;
// }

// function supportedOrDefault(locales) {
//   return locales.find(isSupported) || defaultLocale;
// }

// function dir(locale) {
//   return locale === "br" ? "rtl" : "ltr";
// }

// function bindLocaleSwitcher(initialValue) {
//   const switcher = document.querySelector("[data-i18n-switcher]");

//   switcher.value = initialValue;

//   switcher.onchange = (e) => {
//     setLocale(e.target.value);
//   };
// }

// /**
//  * Retrieve user-preferred locales from browser
//  *
//  * @param {boolean} languageCodeOnly - when true, returns
//  * ["en", "fr"] instead of ["en-US", "fr-FR"]
//  * @returns array | undefined
//  */
// function browserLocales(languageCodeOnly = false) {
//   return navigator.languages.map((locale) =>
//     languageCodeOnly ? locale.split("-")[0] : locale
//   );
// }

// The locale our app first shows
const defaultLocale = "en";

const supportedLocales = ["br", "en"];

const fullyQualifiedLocaleDefaults = {
  en: "en-US",
  br: "pt-BR",
};

// The active locale
let locale;

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  const initialLocale = supportedOrDefault(browserLocales(true));

  setLocale(initialLocale);

  bindLocaleSwitcher(initialLocale);
});

// Load translations for the given locale and translate
// the page to this locale
async function setLocale(newLocale) {
  if (newLocale === locale) return;

  const newTranslations = await fetchTranslationsFor(newLocale);

  locale = newLocale;
  translations = newTranslations;
  document.documentElement.lang = newLocale;
  document.documentElement.dir = dir(newLocale);

  translatePage();
}

// Retrieves translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
  const response = await fetch(`/lang/${newLocale}.json`);
  return await response.json();
}

// Replace the inner text of all elements with the
// data-i18n-key attribute to translations corresponding
// to their data-i18n-key
function translatePage() {
  document
    .querySelectorAll("[data-i18n-key]")
    .forEach((el) => translateElement(el));
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");

  const options = JSON.parse(element.getAttribute("data-i18n-opt")) || {};

  element.innerText = translate(key, options);
}

function translate(key, interpolations = {}) {
  const message = translations[key];

  if (key.endsWith("-plural")) {
    return interpolate(
      pluralFormFor(message, interpolations.count),
      interpolations
    );
  }

  return interpolate(message, interpolations);
}

// Convert a message like "Hello, {name}" to "Hello, Chad"
// where the given interpolations object is {name: "Chad"}
function interpolate(message, interpolations) {
  return Object.keys(interpolations).reduce((interpolated, key) => {
    const value = formatDate(formatNumber(interpolations[key]));

    return interpolated.replace(new RegExp(`{\s*${key}\s*}`, "g"), value);
  }, message);
}

/*
  Given a value object like
  {
    "number" : 300000,
    "style": "currency",
    "currency": "EUR"
  } and that the current locale is en, returns "€300,000.00"
*/
function formatNumber(value) {
  if (typeof value === "object" && value.number) {
    const { number, ...options } = value;

    return new Intl.NumberFormat(
      fullyQualifiedLocaleDefaults[locale],
      options
    ).format(number);
  } else {
    return value;
  }
}

/*
  Given a value object like
  {
    "date": "2021-12-05 15:29:00",
    "dateStyle": "long",
    "timeStyle": "short"
  } and that the current locale is en,
  returns "December 5, 2021 at 3:29 PM"
*/
// function formatDate(value) {
//   if (typeof value === "object" && value.date) {
//     const { date, ...options } = value;

//     const parsedDate = typeof date === "string" ? Date.parse(date) : date;

//     return new Intl.DateTimeFormat(
//       fullyQualifiedLocaleDefaults[locale],
//       options
//     ).format(parsedDate);
//   } else {
//     return value;
//   }
// }

/*
  Given a forms object like
  {
    "zero": "No articles",
    "one": "One article",
    "other": "{count} articles"
  } and a count of 1, returns "One article"
*/
function pluralFormFor(forms, count) {
  const matchingForm = new Intl.PluralRules(locale).select(count);

  return forms[matchingForm];
}

function isSupported(locale) {
  return supportedLocales.indexOf(locale) > -1;
}

// Retrieve the first locale we support from the given
// array, or return our default locale
function supportedOrDefault(locales) {
  return locales.find(isSupported) || defaultLocale;
}

function dir() {
  return "ltr";
}

function bindLocaleSwitcher(initialValue) {
  const switcher = document.querySelector("[data-i18n-switcher]");

  switcher.value = initialValue;

  switcher.onchange = (e) => {
    setLocale(e.target.value);
  };
}

// /**
//  * Retrieve user-preferred locales from browser
//  *
//  * @param {boolean} languageCodeOnly - when true, returns
//  * ["en", "fr"] instead of ["en-US", "fr-FR"]
//  * @returns array | undefined
//  */
function browserLocales(languageCodeOnly = false) {
  return navigator.languages.map((locale) =>
    languageCodeOnly ? locale.split("-")[0] : locale
  );
}
