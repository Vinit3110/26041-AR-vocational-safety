import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface CertificationChartProps {
  certified: number;
  pending: number;
  expiringSoon: number;
  notCertified: number;
}

export const CertificationChart: React.FC<CertificationChartProps> = ({
  certified,
  pending,
  expiringSoon,
  notCertified
}) => {
  const total = certified + pending + expiringSoon + notCertified;
  const certifiedPercent = Math.round((certified / total) * 100);

  const data = [
    { name: 'Certified', value: certified, color: '#18845B' },
    { name: 'Pending', value: pending, color: '#D99000' },
    { name: 'Expiring Soon', value: expiringSoon, color: '#F59E0B' },
    { name: 'Not Certified', value: notCertified, color: '#D64545' }
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="pb-6">
        <h3 className="text-xl font-bold text-[#17211F]">Official Sub-Dist Certification</h3>
        <p className="text-sm text-[#5F6B67] mt-1">Status breakdown ({total} Workers)</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center bg-white p-6 border-l-4 border-[#18845B]">
        {/* Donut Chart with Center Text */}
        <div className="relative h-44 w-full flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="#FFFFFF" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E2E8E5',
                  borderRadius: '0.375rem',
                  fontSize: '0.75rem',
                  color: '#17211F'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-black text-[#17211F] font-mono leading-none">
              {certifiedPercent}%
            </span>
            <span className="text-[9px] uppercase font-bold text-[#5F6B67] mt-0.5">
              Certified
            </span>
          </div>
        </div>

        {/* Status Legend List */}
        <div className="space-y-2 text-xs">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between py-1 border-b border-[#E2E8E5] last:border-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-medium text-[#17211F]">{item.name}</span>
              </div>
              <div className="font-mono text-[#5F6B67]">
                <strong className="text-[#17211F]">{item.value}</strong> ({Math.round((item.value / total) * 100)}%)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
