import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_ASSESSMENTS } from '../data/mockData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { DecisionTimeline } from '../components/assessments/DecisionTimeline';
import { CompetencyBreakdown } from '../components/assessments/CompetencyBreakdown';
import { ArrowLeft, Clock, AlertOctagon, RefreshCw, User, ShieldCheck } from 'lucide-react';
import { useI18n } from '../i18n/i18n';

export const AssessmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useI18n();

  const assessment = MOCK_ASSESSMENTS.find((a) => a.id === id) || MOCK_ASSESSMENTS[0];

  return (
    <PageContainer
      title={`Assessment #${assessment.id}`}
      subtitle={`${assessment.workerName} (${assessment.workerRole}) • ${assessment.moduleTitle}`}
      action={
        <Link to="/assessments">
          <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
            {t.assessments.backToAssessments}
          </Button>
        </Link>
      }
    >
      {/* Top Banner Result Card */}
      <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-md bg-[#176B5B]/10 border border-[#176B5B]/30 flex flex-col items-center justify-center">
            <span className="text-2xl font-black font-mono text-[#176B5B]">{assessment.score}%</span>
            <span className="text-[9px] uppercase font-bold text-[#5F6B67]">{t.assessments.scoreCol}</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge status={assessment.result} size="md" />
              <span className="text-xs font-mono text-[#5F6B67]">{t.assessments.evaluatedOn} {assessment.date}</span>
            </div>
            <h2 className="text-base font-bold text-[#17211F]">
              {assessment.workerName} — {assessment.moduleTitle}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to={`/workers/${assessment.workerId}`}>
            <Button variant="outline" size="sm" icon={<User className="w-3.5 h-3.5" />}>
              {t.workers.workerProfile}
            </Button>
          </Link>
          {assessment.result === 'PASSED' && (
            <Link to="/certificates/CERT-001">
              <Button variant="primary" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                {t.workers.viewCertificate}
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white">
          <div className="text-xs text-[#5F6B67] uppercase font-semibold">{t.assessments.totalScore}</div>
          <div className="text-2xl font-black text-[#17211F] font-mono mt-1">
            {assessment.score}%
          </div>
        </div>

        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white">
          <div className="text-xs text-[#5F6B67] uppercase font-semibold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#176B5B]" />
            <span>{t.assessments.responseTime}</span>
          </div>
          <div className="text-2xl font-black text-[#17211F] font-mono mt-1">
            {assessment.responseTime}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white">
          <div className="text-xs text-[#5F6B67] uppercase font-semibold flex items-center gap-1">
            <RefreshCw className="w-3.5 h-3.5 text-[#2878A8]" />
            <span>{t.assessments.attempts}</span>
          </div>
          <div className="text-2xl font-black text-[#17211F] font-mono mt-1">
            {t.assessments.attemptNo}{assessment.attempts}
          </div>
        </div>

        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white">
          <div className="text-xs text-[#5F6B67] uppercase font-semibold flex items-center gap-1">
            <AlertOctagon className="w-3.5 h-3.5 text-[#D64545]" />
            <span>{t.assessments.criticalErrors}</span>
          </div>
          <div
            className={`text-2xl font-black font-mono mt-1 ${
              assessment.criticalErrors === 0 ? 'text-[#18845B]' : 'text-[#D64545]'
            }`}
          >
            {assessment.criticalErrors}
          </div>
        </div>
      </div>

      {/* Competency Breakdown */}
      <CompetencyBreakdown competencies={assessment.competencies} />

      {/* Decision Timeline Log */}
      <DecisionTimeline events={assessment.timeline} />
    </PageContainer>
  );
};
