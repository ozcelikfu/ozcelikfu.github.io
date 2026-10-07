// UI strings. English is complete; Turkish is scaffolded for the /tr/ version.
// Pages that exist in Turkish are listed in `translatedPaths` — the language
// switch only appears on those pages.

export const languages = { en: 'English', tr: 'Türkçe' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'skip': 'Skip to content',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.experience': 'Experience',
    'nav.ideas': 'Ideas',
    'nav.writing': 'Writing',
    'nav.about': 'About',
    'nav.menu': 'Menu',
    'theme.toLight': 'Switch to light theme',
    'theme.toDark': 'Switch to dark theme',
    'motion.pause': 'Pause animation',
    'motion.play': 'Play animation',
    'footer.explore': 'Explore',
    'footer.elsewhere': 'Elsewhere',
    'footer.colophon': 'A static site — no cookies, no analytics, no trackers.',
    'writing.inTurkish': 'in Turkish',
    'writing.back': 'All writing',
    'pubs.all': 'All',
  },
  tr: {
    'skip': 'İçeriğe geç',
    'nav.research': 'Araştırma',
    'nav.publications': 'Yayınlar',
    'nav.experience': 'Deneyim',
    'nav.ideas': 'Fikirler',
    'nav.writing': 'Yazılar',
    'nav.about': 'Hakkında',
    'nav.menu': 'Menü',
    'theme.toLight': 'Açık temaya geç',
    'theme.toDark': 'Koyu temaya geç',
    'motion.pause': 'Animasyonu durdur',
    'motion.play': 'Animasyonu oynat',
    'footer.explore': 'Keşfet',
    'footer.elsewhere': 'Diğer',
    'footer.colophon': 'Statik bir site — çerez, analiz ya da takip yok.',
    'writing.inTurkish': 'Türkçe',
    'writing.back': 'Tüm yazılar',
    'pubs.all': 'Tümü',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => (ui[lang] as Record<UIKey, string>)[key] ?? ui[defaultLang][key];
}

/** Paths (without locale prefix) that have a Turkish version. Empty for now. */
export const translatedPaths: string[] = [];

export function localizedPath(path: string, lang: Lang) {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
