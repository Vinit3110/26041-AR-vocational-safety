/**
 * LanguageSelector — compact dropdown for the Topbar.
 * Fits within the existing header design without adding bulk.
 * Persists selection via the I18n context (localStorage-backed).
 */
import React, { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useI18n, SUPPORTED_LOCALES, type Locale } from '../../i18n/i18n';

export const LanguageSelector: React.FC = () => {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = SUPPORTED_LOCALES.find((l) => l.locale === locale)!;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (l: Locale) => {
    setLocale(l);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.topbar.language}
        title={t.topbar.language}
        className={`flex items-center gap-1.5 px-2 py-1 rounded-md border text-xs font-semibold transition-colors ${
          open
            ? 'bg-[#176B5B]/10 border-[#176B5B]/40 text-[#176B5B]'
            : 'bg-[#F7F8F6] border-[#E2E8E5] text-[#5F6B67] hover:border-[#176B5B]/40 hover:text-[#176B5B]'
        }`}
      >
        <Globe className="w-3.5 h-3.5 shrink-0" />
        <span className="font-mono tracking-tight">{current.shortCode}</span>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-40 rounded-md border border-[#E2E8E5] bg-white shadow-lg z-50 overflow-hidden">
          <div className="px-3 py-2 text-[10px] uppercase tracking-wider font-bold text-[#5F6B67] border-b border-[#E2E8E5]">
            {t.topbar.language}
          </div>
          {SUPPORTED_LOCALES.map((l) => (
            <button
              key={l.locale}
              onClick={() => handleSelect(l.locale)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-left text-xs transition-colors ${
                locale === l.locale
                  ? 'bg-[#176B5B]/10 text-[#176B5B] font-semibold'
                  : 'text-[#17211F] hover:bg-[#F7F8F6]'
              }`}
            >
              {/* Short-code pill */}
              <span className="w-6 text-center font-mono font-bold text-[10px] shrink-0 leading-none">
                {l.shortCode}
              </span>
              {/* Native label */}
              <span className="leading-snug">{l.nativeLabel}</span>
              {/* Active indicator */}
              {locale === l.locale && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#176B5B] shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
