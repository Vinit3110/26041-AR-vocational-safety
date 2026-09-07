import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { ORGANIZATION_INFO } from '../data/mockData';
import { Button } from '../components/common/Button';
import { Building2, User, Globe, Save } from 'lucide-react';
import { useI18n, SUPPORTED_LOCALES, type Locale } from '../i18n/i18n';

export const SettingsPage: React.FC = () => {
  const { t, locale, setLocale } = useI18n();
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <PageContainer
      title={t.settings.title}
      subtitle={t.settings.subtitle}
    >
      <form onSubmit={handleSave} className="space-y-6 max-w-3xl">
        {/* Organization Section */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E2E8E5]">
            <Building2 className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-sm font-bold text-[#17211F]">{t.settings.organizationSettings}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[#5F6B67] font-semibold mb-1">{t.settings.organizationName}</label>
              <input
                type="text"
                readOnly
                value={ORGANIZATION_INFO.name}
                className="w-full px-3 py-2 bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] font-medium cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-[#5F6B67] font-semibold mb-1">{t.settings.organizationId}</label>
              <input
                type="text"
                readOnly
                value={ORGANIZATION_INFO.orgId}
                className="w-full px-3 py-2 bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#176B5B] font-mono font-bold cursor-not-allowed"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#5F6B67] font-semibold mb-1">{t.settings.divisionHub}</label>
              <input
                type="text"
                readOnly
                value={ORGANIZATION_INFO.division}
                className="w-full px-3 py-2 bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] font-medium cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Account Section */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E2E8E5]">
            <User className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-sm font-bold text-[#17211F]">{t.settings.accountProfile}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-[#5F6B67] font-semibold mb-1">{t.settings.officerName}</label>
              <input
                type="text"
                readOnly
                value={ORGANIZATION_INFO.leadOfficer}
                className="w-full px-3 py-2 bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] font-medium cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-[#5F6B67] font-semibold mb-1">{t.settings.designatedRole}</label>
              <input
                type="text"
                readOnly
                value={ORGANIZATION_INFO.officerRole}
                className="w-full px-3 py-2 bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] font-medium cursor-not-allowed"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#5F6B67] font-semibold mb-1">{t.settings.contactEmail}</label>
              <input
                type="text"
                readOnly
                value={ORGANIZATION_INFO.contactEmail}
                className="w-full px-3 py-2 bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] font-medium cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E2E8E5]">
            <Globe className="w-4 h-4 text-[#176B5B]" />
            <h3 className="text-sm font-bold text-[#17211F]">{t.settings.preferences}</h3>
          </div>

          <div className="max-w-xs text-xs">
            <label className="block text-[#17211F] font-semibold mb-1">{t.settings.dashboardLanguage}</label>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="w-full px-3 py-2 bg-white border border-[#E2E8E5] rounded-md text-[#17211F] focus:outline-none focus:border-[#176B5B]"
            >
              {SUPPORTED_LOCALES.map((l) => (
                <option key={l.locale} value={l.locale}>
                  {l.nativeLabel} — {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-3">
          <Button type="submit" variant="primary" icon={<Save className="w-4 h-4" />}>
            {t.settings.savePreferences}
          </Button>
          {saved && (
            <span className="text-xs text-[#18845B] font-semibold">
              {t.settings.savedSuccess}
            </span>
          )}
        </div>
      </form>
    </PageContainer>
  );
};
