import React from 'react';
import type { Assessment } from '../../data/types';
import { Badge } from '../common/Badge';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ActivityTableProps {
  assessments: Assessment[];
}

export const ActivityTable: React.FC<ActivityTableProps> = ({ assessments }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h3 className="text-xl font-bold text-[#17211F]">Recent AR Assessments</h3>
          <p className="text-sm text-[#5F6B67] mt-1">Live feed of completed training evaluations</p>
        </div>
        <button
          onClick={() => navigate('/assessments')}
          className="text-xs font-semibold text-[#176B5B] hover:text-[#115044] flex items-center gap-1"
        >
          <span>View All Assessments</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto mt-3">
        <table className="w-full text-left text-xs text-[#17211F]">
          <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
            <tr>
              <th className="py-2.5 px-3">Worker</th>
              <th className="py-2.5 px-3">Module</th>
              <th className="py-2.5 px-3 text-center">Score</th>
              <th className="py-2.5 px-3">Result</th>
              <th className="py-2.5 px-3 text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8E5]">
            {assessments.slice(0, 5).map((a) => (
              <tr
                key={a.id}
                onClick={() => navigate(`/assessments/${a.id}`)}
                className="hover:bg-[#F7F8F6] transition-colors cursor-pointer group"
              >
                <td className="py-3 px-3">
                  <div className="font-semibold text-[#17211F] group-hover:text-[#176B5B] transition-colors">
                    {a.workerName}
                  </div>
                  <div className="text-[10px] text-[#5F6B67]">{a.workerRole} ({a.workerId})</div>
                </td>
                <td className="py-3 px-3 text-[#17211F] font-medium">{a.moduleTitle}</td>
                <td className="py-3 px-3 text-center font-mono font-bold">
                  <span className={a.score >= 80 ? 'text-[#18845B]' : 'text-[#D64545]'}>
                    {a.score}%
                  </span>
                </td>
                <td className="py-3 px-3">
                  <Badge status={a.result} size="sm" />
                </td>
                <td className="py-3 px-3 text-right font-mono text-[#5F6B67] flex items-center justify-end gap-1">
                  <span>{a.date}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#5F6B67] group-hover:text-[#17211F] transition-transform group-hover:translate-x-0.5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
