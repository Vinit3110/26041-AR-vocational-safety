import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_TRAINING_MODULES, MOCK_ASSESSMENTS } from '../data/mockData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { ArrowLeft, BarChart2 } from 'lucide-react';
import { useI18n } from '../i18n/i18n';

export const TrainingDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useI18n();

  const module =
    MOCK_TRAINING_MODULES.find((m) => m.id === id) || MOCK_TRAINING_MODULES[0];

  const relatedAssessments = MOCK_ASSESSMENTS.filter((a) => a.moduleId === module.id);

  return (
    <PageContainer
      title={module.title}
      subtitle={module.description}
      action={
        <Link to="/training">
          <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
            {t.training.backToTraining}
          </Button>
        </Link>
      }
    >
      {/* 4 Stat Boxes Header */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white text-center">
          <div className="text-xs text-[#5F6B67] font-semibold uppercase">{t.training.completionRate}</div>
          <div className="text-2xl font-black text-[#17211F] font-mono mt-1">
            {module.completionRate}%
          </div>
        </div>

        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white text-center">
          <div className="text-xs text-[#5F6B67] font-semibold uppercase">{t.training.passRate}</div>
          <div className="text-2xl font-black text-[#18845B] font-mono mt-1">
            {module.passRate}%
          </div>
        </div>

        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white text-center">
          <div className="text-xs text-[#5F6B67] font-semibold uppercase">{t.training.averageScore}</div>
          <div className="text-2xl font-black text-[#D99000] font-mono mt-1">
            {module.avgScore}%
          </div>
        </div>

        <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white text-center">
          <div className="text-xs text-[#5F6B67] font-semibold uppercase">{t.training.averageAttempts}</div>
          <div className="text-2xl font-black text-[#17211F] font-mono mt-1">
            {module.avgAttempts}
          </div>
        </div>
      </div>

      {/* Competency Performance */}
      <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2E8E5]">
          <h3 className="text-sm font-bold text-[#17211F] flex items-center gap-2">
            <BarChart2 className="w-4 h-4 text-[#176B5B]" />
            <span>{t.training.competencyPerformanceBreakdown}</span>
          </h3>
          <span className="text-xs text-[#5F6B67] font-mono">{t.training.moduleBenchmark}: 80%</span>
        </div>

        <div className="space-y-3.5">
          {module.competencies.map((comp) => (
            <div key={comp.name} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-[#17211F]">{comp.name}</span>
                <span className="font-mono font-bold text-[#18845B]">{comp.score}% {t.competency.scoreLabel}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E2E8E5] overflow-hidden">
                <div
                  className="h-full bg-[#176B5B] rounded-full"
                  style={{ width: `${comp.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assessment Outcomes Table */}
      <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-3">
        <h3 className="text-sm font-bold text-[#17211F] pb-3 border-b border-[#E2E8E5]">
          {t.training.assessmentOutcomes} {module.title}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#17211F]">
            <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
              <tr>
                <th className="py-2.5 px-3">{t.training.assessmentId}</th>
                <th className="py-2.5 px-3">{t.assessments.workerCol}</th>
                <th className="py-2.5 px-3 text-center">{t.assessments.scoreCol}</th>
                <th className="py-2.5 px-3">{t.assessments.resultCol}</th>
                <th className="py-2.5 px-3 text-right">{t.training.timeTaken}</th>
                <th className="py-2.5 px-3 text-right">{t.assessments.dateCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8E5]">
              {relatedAssessments.map((a) => (
                <tr key={a.id} className="hover:bg-[#F7F8F6] transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-[#176B5B]">{a.id}</td>
                  <td className="py-3 px-3 font-semibold text-[#17211F]">{a.workerName}</td>
                  <td className="py-3 px-3 text-center font-mono font-bold">
                    <span className={a.score >= 80 ? 'text-[#18845B]' : 'text-[#D64545]'}>
                      {a.score}%
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <Badge status={a.result} size="sm" />
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-[#5F6B67]">{a.responseTime}</td>
                  <td className="py-3 px-3 text-right font-mono text-[#5F6B67]">{a.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageContainer>
  );
};
