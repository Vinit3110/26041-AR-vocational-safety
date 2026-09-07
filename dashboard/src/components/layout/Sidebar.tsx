import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardCheck,
  Award,
  BarChart3,
  Settings,
  ShieldCheck,
  X
} from 'lucide-react';
import { ORGANIZATION_INFO } from '../../data/mockData';
import { useI18n } from '../../i18n/i18n';

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, onMobileClose }) => {
  const { t } = useI18n();

  const navItems = [
    { label: t.nav.overview, icon: <LayoutDashboard className="w-4 h-4" />, path: '/overview' },
    { label: t.nav.workers, icon: <Users className="w-4 h-4" />, path: '/workers' },
    { label: t.nav.trainingModules, icon: <BookOpen className="w-4 h-4" />, path: '/training' },
    { label: t.nav.assessments, icon: <ClipboardCheck className="w-4 h-4" />, path: '/assessments' },
    { label: t.nav.certificates, icon: <Award className="w-4 h-4" />, path: '/certificates' },
    { label: t.nav.analytics, icon: <BarChart3 className="w-4 h-4" />, path: '/analytics' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onMobileClose}
          className="fixed inset-0 z-40 bg-[#17211F]/40 lg:hidden"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-[#E2E8E5] flex flex-col justify-between transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Header Branding */}
          <div className="h-16 px-5 border-b border-[#E2E8E5] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-[#176B5B] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-xs tracking-tight text-[#17211F]">
                  26041 Safety Platform
                </div>
                <div className="text-[10px] text-[#5F6B67] truncate font-medium">
                  {t.nav.platformSubtitle}
                </div>
              </div>
            </div>

            <button
              onClick={onMobileClose}
              className="lg:hidden p-1 text-[#5F6B67] hover:text-[#17211F]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <div className="px-3 py-2 text-[10px] uppercase tracking-wider font-semibold text-[#5F6B67]">
              {t.nav.operations}
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onMobileClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#176B5B]/10 text-[#176B5B] font-semibold border-l-2 border-[#176B5B]'
                      : 'text-[#5F6B67] hover:text-[#17211F] hover:bg-[#F7F8F6]'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer Navigation & Org Meta */}
        <div className="p-3 border-t border-[#E2E8E5] space-y-3 bg-[#F7F8F6]">
          <NavLink
            to="/settings"
            onClick={onMobileClose}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-[#176B5B]/10 text-[#176B5B] font-semibold border-l-2 border-[#176B5B]'
                  : 'text-[#5F6B67] hover:text-[#17211F] hover:bg-[#E2E8E5]'
              }`
            }
          >
            <Settings className="w-4 h-4" />
            <span>{t.nav.settings}</span>
          </NavLink>

          <div className="px-3 py-2 rounded border border-[#E2E8E5] bg-white text-[11px] space-y-0.5">
            <div className="font-semibold text-[#17211F] truncate">
              {ORGANIZATION_INFO.division}
            </div>
            <div className="text-[10px] text-[#5F6B67]">
              {t.nav.jharkhandHub}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
