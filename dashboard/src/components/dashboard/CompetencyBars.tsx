import React from 'react';
import type { WeakCompetency } from '../../data/types';
import { AlertCircle } from 'lucide-react';

interface CompetencyBarsProps {
  competencies: WeakCompetency[];
}

export const CompetencyBars: React.FC<CompetencyBarsProps> = ({ competencies }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 gap-4">
        <div>
          <h3 className="text-xl font-bold text-[#17211F] flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#D64545]" />
            <span>Common Weak Competencies</span>
          </h3>
          <p className="text-sm text-[#5F6B67] mt-1">Identified high-frequency error zones across AR simulator decision trials</p>
        </div>
        <span className="text-xs font-bold text-[#D64545] uppercase tracking-wider py-1 border-b-2 border-[#D64545]">
          Priority Action Required
        </span>
      </div>

      <div className="space-y-4 mt-2">
        {competencies.map((comp, idx) => {
          const barColor =
            idx === 0 ? 'bg-[#D64545]' : idx === 1 ? 'bg-[#D99000]' : idx === 2 ? 'bg-[#F59E0B]' : 'bg-[#2878A8]';

          return (
            <div key={comp.name} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#17211F] text-base">{comp.name}</span>
                  <span className="text-xs text-[#5F6B67] uppercase tracking-wider">
                    {comp.category}
                  </span>
                </div>
                <span className="font-mono font-bold text-[#D64545] text-base">
                  {comp.failureRate}% Fail Rate
                </span>
              </div>

              <div className="w-full h-3 bg-[#E2E8E5] overflow-hidden">
                <div
                  className={`h-full ${barColor} transition-all duration-500`}
                  style={{ width: `${comp.failureRate}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
