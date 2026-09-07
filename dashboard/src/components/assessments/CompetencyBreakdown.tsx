import React from 'react';
import type { Competencies } from '../../data/types';
import { Target } from 'lucide-react';

interface CompetencyBreakdownProps {
  competencies: Competencies;
}

export const CompetencyBreakdown: React.FC<CompetencyBreakdownProps> = ({ competencies }) => {
  const items = [
    { label: 'Hazard Recognition', score: competencies.hazardRecognition },
    { label: 'Emergency Response', score: competencies.emergencyResponse },
    { label: 'Equipment Selection', score: competencies.equipmentSelection },
    { label: 'Evacuation Decision', score: competencies.evacuation }
  ];

  return (
    <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-[#E2E8E5]">
        <h3 className="text-sm font-bold text-[#17211F] flex items-center gap-2">
          <Target className="w-4 h-4 text-[#176B5B]" />
          <span>Detailed Competency Evaluation</span>
        </h3>
        <span className="text-[11px] font-mono text-[#5F6B67]">Passing Threshold: 80%</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => {
          const isPassed = item.score >= 80;

          return (
            <div key={item.label} className="p-3 rounded-md border border-[#E2E8E5] bg-[#F7F8F6] space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#17211F]">{item.label}</span>
                <span
                  className={`font-mono font-bold ${
                    isPassed ? 'text-[#18845B]' : 'text-[#D64545]'
                  }`}
                >
                  {item.score}%
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-[#E2E8E5] overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    isPassed ? 'bg-[#176B5B]' : 'bg-[#D64545]'
                  }`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
