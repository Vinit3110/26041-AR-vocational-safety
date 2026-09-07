import React from 'react';
import type { Worker } from '../../data/types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ChevronRight } from 'lucide-react';

interface WorkerTableProps {
  workers: Worker[];
  onWorkerClick: (workerId: string) => void;
}

export const WorkerTable: React.FC<WorkerTableProps> = ({ workers, onWorkerClick }) => {
  return (
    <div className="rounded-lg border border-[#E2E8E5] bg-white overflow-hidden shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-[#17211F]">
          <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
            <tr>
              <th className="py-3 px-4">Worker ID</th>
              <th className="py-3 px-4">Name & Role</th>
              <th className="py-3 px-4">Location / Dept</th>
              <th className="py-3 px-4">Language</th>
              <th className="py-3 px-4">Progress</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Latest Score</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8E5]">
            {workers.map((w) => (
              <tr
                key={w.id}
                onClick={() => onWorkerClick(w.id)}
                className="hover:bg-[#F7F8F6] transition-colors cursor-pointer group"
              >
                <td className="py-3.5 px-4 font-mono font-bold text-[#176B5B]">
                  {w.id}
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-bold text-[#17211F] group-hover:text-[#176B5B] transition-colors">
                    {w.name}
                  </div>
                  <div className="text-[10px] text-[#5F6B67]">{w.role}</div>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-medium text-[#17211F]">{w.location}</div>
                  <div className="text-[10px] text-[#5F6B67]">{w.department}</div>
                </td>
                <td className="py-3.5 px-4 font-medium text-[#5F6B67]">
                  {w.preferredLanguage}
                </td>
                <td className="py-3.5 px-4 font-medium text-[#17211F]">
                  <span className="font-mono">{w.progress}</span>
                </td>
                <td className="py-3.5 px-4">
                  <Badge status={w.certificateStatus} size="sm" />
                </td>
                <td className="py-3.5 px-4 text-center font-mono font-bold">
                  {w.latestScore !== undefined ? (
                    <span className={w.latestScore >= 80 ? 'text-[#18845B]' : 'text-[#D64545]'}>
                      {w.latestScore}%
                    </span>
                  ) : (
                    <span className="text-[#5F6B67] font-normal">—</span>
                  )}
                </td>
                <td className="py-3.5 px-4 text-right">
                  <Button variant="outline" size="sm" icon={<ChevronRight className="w-3.5 h-3.5" />}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
