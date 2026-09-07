import React from 'react';
import { Search, Menu, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { LanguageSelector } from '../common/LanguageSelector';
import { ORGANIZATION_INFO } from '../../data/mockData';
import { useI18n } from '../../i18n/i18n';

interface TopbarProps {
  onMenuClick: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const { t } = useI18n();

  return (
    <header className="h-16 bg-white border-b border-[#E2E8E5] px-4 md:px-6 flex items-center justify-between gap-4 sticky top-0 z-30">
      {/* Left: Mobile Menu Toggle & Global Search */}
      <div className="flex items-center gap-3 flex-1 max-w-xl">
        <button
          onClick={onMenuClick}
          className="p-1.5 rounded-md text-[#5F6B67] hover:text-[#17211F] hover:bg-[#F7F8F6] lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5F6B67]" />
          <input
            type="text"
            placeholder={t.topbar.searchPlaceholder}
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] placeholder-[#5F6B67] focus:outline-none focus:border-[#176B5B] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Right: Actions & User Info */}
      <div className="flex items-center gap-3">
        {/* AR Simulator Live Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#18845B]/10 border border-[#18845B]/30 text-[#18845B] text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#18845B] animate-pulse" />
          <span>{t.topbar.arSyncReady}</span>
        </div>

        {/* Language Selector */}
        <LanguageSelector />

        {/* Public Certificate Verification Quick Link */}
        <Link to="/verify/CERT-001">
          <Button variant="outline" size="sm" icon={<ShieldCheck className="w-4 h-4 text-[#176B5B]" />}>
            {t.topbar.verifyCertificate}
          </Button>
        </Link>

        {/* Divider */}
        <div className="h-6 w-px bg-[#E2E8E5] hidden sm:block" />

        {/* Officer Profile Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-[#176B5B]/10 border border-[#176B5B]/30 flex items-center justify-center font-bold text-xs text-[#176B5B]">
            RS
          </div>
          <div className="hidden md:block text-left">
            <div className="text-xs font-bold text-[#17211F] leading-tight">
              {ORGANIZATION_INFO.leadOfficer}
            </div>
            <div className="text-[10px] text-[#5F6B67] leading-tight">
              {ORGANIZATION_INFO.officerRole}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
