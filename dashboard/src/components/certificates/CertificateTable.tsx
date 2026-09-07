import React from 'react';
import type { Certificate } from '../../data/types';
import { Badge } from '../common/Badge';
import { Award, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CertificateTableProps {
  certificates: Certificate[];
}

export const CertificateTable: React.FC<CertificateTableProps> = ({ certificates }) => {
  const navigate = useNavigate();

  return (
    <div className="rounded-lg border border-[#E2E8E5] bg-white overflow-hidden shadow-xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-[#17211F]">
          <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
            <tr>
              <th className="py-3 px-4">Certificate ID</th>
              <th className="py-3 px-4">Worker</th>
              <th className="py-3 px-4">Training Module</th>
              <th className="py-3 px-4 text-center">Score</th>
              <th className="py-3 px-4">Issued Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8E5]">
            {certificates.map((c) => (
              <tr
                key={c.id}
                onClick={() => navigate(`/certificates/${c.id}`)}
                className="hover:bg-[#F7F8F6] transition-colors cursor-pointer group"
              >
                <td className="py-3.5 px-4 font-mono font-bold text-[#176B5B] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#176B5B]" />
                  <span>{c.id}</span>
                </td>
                <td className="py-3.5 px-4">
                  <div className="font-bold text-[#17211F] group-hover:text-[#176B5B] transition-colors">
                    {c.workerName}
                  </div>
                  <div className="text-[10px] text-[#5F6B67]">{c.workerRole} ({c.workerId})</div>
                </td>
                <td className="py-3.5 px-4 font-medium text-[#17211F]">
                  {c.trainingModule}
                </td>
                <td className="py-3.5 px-4 text-center font-mono font-bold text-[#18845B]">
                  {c.score}%
                </td>
                <td className="py-3.5 px-4 font-mono text-[#5F6B67]">
                  {c.issuedDate}
                </td>
                <td className="py-3.5 px-4">
                  <Badge status={c.status} size="sm" />
                </td>
                <td className="py-3.5 px-4 text-right">
                  <ChevronRight className="w-4 h-4 text-[#5F6B67] group-hover:text-[#17211F] inline-block transition-transform group-hover:translate-x-0.5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
