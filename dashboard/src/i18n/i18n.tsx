/**
 * i18n — Lightweight React Context-based internationalization
 * No external dependencies required.
 *
 * Usage:
 *   const { t, locale, setLocale } = useI18n();
 *   <span>{t.nav.overview}</span>
 *
 * Locale persisted to localStorage as 'i18n_locale'.
 * Falls back to 'en' when a translation is missing.
 */
import React, { createContext, useContext, useState, useCallback } from 'react';
import en, { type Translations } from './locales/en';
import hi from './locales/hi';
import sat from './locales/sat';

// ─── Supported Locales ────────────────────────────────────────────────────────
export type Locale = 'en' | 'hi' | 'sat';

export const SUPPORTED_LOCALES: { locale: Locale; label: string; nativeLabel: string; shortCode: string }[] = [
  { locale: 'en',  label: 'English',  nativeLabel: 'English',      shortCode: 'EN' },
  { locale: 'hi',  label: 'Hindi',    nativeLabel: 'हिन्दी',        shortCode: 'हि' },
  { locale: 'sat', label: 'Santali',  nativeLabel: 'ᱥᱟᱱᱛᱟᱲᱤ',     shortCode: 'ᱥᱟ' },
];

const LOCALE_KEY = 'i18n_locale';

const LOCALE_MAP: Record<Locale, Translations> = { en, hi, sat };

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getInitialLocale(): Locale {
  try {
    const stored = localStorage.getItem(LOCALE_KEY) as Locale | null;
    if (stored && stored in LOCALE_MAP) return stored;
  } catch {
    // SSR / private mode
  }
  return 'en';
}

// ─── Context ──────────────────────────────────────────────────────────────────
interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  t: en,
  setLocale: () => {},
});

// ─── Provider ─────────────────────────────────────────────────────────────────
export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const t = LOCALE_MAP[locale];

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}
