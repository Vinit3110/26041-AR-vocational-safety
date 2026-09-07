import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { CertificationChart } from '../components/dashboard/CertificationChart';
import { ModulePerformance } from '../components/dashboard/ModulePerformance';
import { CompetencyBars } from '../components/dashboard/CompetencyBars';
import { ActivityTable } from '../components/dashboard/ActivityTable';
import { Button } from '../components/common/Button';

import {
  MOCK_SUMMARY_STATS,
  MOCK_TRAINING_MODULES,
  MOCK_WEAK_COMPETENCIES,
  MOCK_ASSESSMENTS
} from '../data/mockData';
import { Award, Clock, AlertTriangle, UserPlus, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';

export const OverviewPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <PageContainer
      title={t.overview.title}
      subtitle={t.overview.subtitle}
      action={
        <>
          <Button
            variant="outline"
            size="sm"
            icon={<BookOpen className="w-4 h-4" />}
            onClick={() => navigate('/training')}
          >
            {t.overview.trainingModules}
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<UserPlus className="w-4 h-4" />}
            onClick={() => navigate('/workers')}
          >
            {t.overview.manageWorkers}
          </Button>
        </>
      }
    >
      <div className="space-y-16 py-6">
        {/* 1. Hero Readiness Section */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-[#5F6B67] uppercase tracking-widest">
            {t.overview.overallSafetyReadiness}
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <div className="text-7xl sm:text-8xl md:text-9xl font-black text-[#17211F] font-mono tracking-tighter leading-none">
              {MOCK_SUMMARY_STATS.certifiedPercentage}<span className="text-4xl md:text-6xl text-[#5F6B67]">%</span>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-12 pb-2">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#17211F] font-mono">
                  {MOCK_SUMMARY_STATS.certified} <span className="text-base font-medium text-[#5F6B67]">/ {MOCK_SUMMARY_STATS.totalWorkers}</span>
                </div>
                <div className="text-sm font-semibold text-[#5F6B67] mt-1 flex items-center gap-1.5"><Award className="w-4 h-4 text-[#18845B]" /> {t.overview.certifiedPersonnel}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D99000] font-mono">
                  {MOCK_SUMMARY_STATS.pendingTraining}
                </div>
                <div className="text-sm font-semibold text-[#5F6B67] mt-1 flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#D99000]" /> {t.overview.pendingTraining}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#D64545] font-mono">
                  {MOCK_SUMMARY_STATS.atRisk}
                </div>
                <div className="text-sm font-semibold text-[#5F6B67] mt-1 flex items-center gap-1.5"><AlertTriangle className="w-4 h-4 text-[#D64545]" /> {t.overview.atRisk}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Key Differentiator: Weak Competencies */}
        <div className="pt-12 border-t border-[#E2E8E5]">
          <CompetencyBars competencies={MOCK_WEAK_COMPETENCIES} />
        </div>

        {/* 3. Modules and Certifications juxtaposed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 border-t border-[#E2E8E5]">
          <div>
            <ModulePerformance
              modules={MOCK_TRAINING_MODULES}
              totalWorkers={MOCK_SUMMARY_STATS.totalWorkers}
            />
          </div>
          <div>
            <CertificationChart
              certified={MOCK_SUMMARY_STATS.certified}
              pending={MOCK_SUMMARY_STATS.pendingTraining}
              expiringSoon={12}
              notCertified={10}
            />
          </div>
        </div>

        {/* 4. Activity Table */}
        <div className="pt-12 border-t border-[#E2E8E5]">
          <ActivityTable assessments={MOCK_ASSESSMENTS} />
        </div>
      </div>
    </PageContainer>
  );
};
