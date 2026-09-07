import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_TRAINING_MODULES } from '../data/mockData';
import { Button } from '../components/common/Button';
import { Flame, Wind, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';

export const TrainingPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useI18n();

  return (
    <PageContainer
      title={t.training.title}
      subtitle={t.training.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_TRAINING_MODULES.map((module) => {
          const isFire = module.id === 'fire-explosion';

          return (
            <div
              key={module.id}
              className="p-6 rounded-lg border border-[#E2E8E5] bg-white flex flex-col justify-between hover:border-[#176B5B]/50 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-md border ${
                        isFire
                          ? 'bg-[#D99000]/10 text-[#D99000] border-[#D99000]/30'
                          : 'bg-[#2878A8]/10 text-[#2878A8] border-[#2878A8]/30'
                      }`}
                    >
                      {isFire ? <Flame className="w-6 h-6" /> : <Wind className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#5F6B67]">
                        {module.category}
                      </span>
                      <h3 className="text-base font-bold text-[#17211F]">
                        {module.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#5F6B67] leading-relaxed mb-6">
                  {module.description}
                </p>

                {/* Module Statistics Grid */}
                <div className="grid grid-cols-4 gap-2 p-3 rounded-md border border-[#E2E8E5] bg-[#F7F8F6] mb-6 text-center">
                  <div>
                    <div className="text-[10px] text-[#5F6B67] uppercase font-semibold">{t.training.attempts}</div>
                    <div className="text-xs font-bold text-[#17211F] font-mono mt-0.5">
                      {module.attempts}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#5F6B67] uppercase font-semibold">{t.training.completion}</div>
                    <div className="text-xs font-bold text-[#17211F] font-mono mt-0.5">
                      {module.completionRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#5F6B67] uppercase font-semibold">{t.training.passRate}</div>
                    <div className="text-xs font-bold text-[#18845B] font-mono mt-0.5">
                      {module.passRate}%
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#5F6B67] uppercase font-semibold">{t.training.avgScore}</div>
                    <div className="text-xs font-bold text-[#D99000] font-mono mt-0.5">
                      {module.avgScore}%
                    </div>
                  </div>
                </div>

                {/* Module Key Skills */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[10px] uppercase font-semibold text-[#5F6B67]">
                    {t.training.evaluatedCompetencies}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {module.competencies.map((comp) => (
                      <span
                        key={comp.name}
                        className="px-2 py-0.5 rounded bg-[#F7F8F6] text-[#17211F] text-[11px] border border-[#E2E8E5]"
                      >
                        {comp.name} ({comp.score}%)
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E2E8E5] flex items-center justify-between">
                <span className="text-xs text-[#5F6B67]">{t.training.avgAttempts}: {module.avgAttempts}</span>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={() => navigate(`/training/${module.id}`)}
                >
                  {t.training.viewModule}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </PageContainer>
  );
};
