import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  change,
  changeType = 'positive',
  icon
}) => {
  const getChangeBadge = () => {
    if (!change) return null;
    const isPos = changeType === 'positive';
    return (
      <span
        className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
          isPos
            ? 'bg-[#18845B]/10 text-[#18845B] border-[#18845B]/30'
            : 'bg-[#D64545]/10 text-[#D64545] border-[#D64545]/30'
        }`}
      >
        {change}
      </span>
    );
  };

  return (
    <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-[#5F6B67] uppercase tracking-wider">
          {title}
        </span>
        {icon && <div className="text-[#176B5B] p-1.5 rounded bg-[#F7F8F6] border border-[#E2E8E5]">{icon}</div>}
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <div className="text-2xl font-black text-[#17211F] font-mono tracking-tight">
          {value}
        </div>
        {getChangeBadge()}
      </div>

      <div className="text-[11px] text-[#5F6B67] mt-1.5">{subtitle}</div>
    </div>
  );
};
