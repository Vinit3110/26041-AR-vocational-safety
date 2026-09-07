import React from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import {
  MOCK_ANALYTICS_TRENDS,
  MOCK_FAILURE_PATTERNS
} from '../data/mockData';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { TrendingUp, AlertTriangle, BarChart2 } from 'lucide-react';
import { useI18n } from '../i18n/i18n';

export const AnalyticsPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <PageContainer
      title={t.analytics.title}
      subtitle={t.analytics.subtitle}
    >
      {/* 1. Certification Trend Over Time Chart */}
      <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white shadow-xs">
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8E5] mb-6">
          <div>
            <h3 className="text-sm font-bold text-[#17211F] flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#176B5B]" />
              <span>{t.analytics.certEnrolmentTrendTitle}</span>
            </h3>
            <p className="text-xs text-[#5F6B67]">{t.analytics.certEnrolmentTrendDesc}</p>
          </div>
          <span className="text-xs font-mono font-bold text-[#18845B] bg-[#18845B]/10 px-2.5 py-1 rounded border border-[#18845B]/30">
            +74.2% {t.analytics.overallReadinessRate}
          </span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_ANALYTICS_TRENDS}>
              <defs>
                <linearGradient id="colorCertified" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#18845B" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#18845B" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEnrolled" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D99000" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#D99000" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#5F6B67" fontSize={11} />
              <YAxis stroke="#5F6B67" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#E2E8E5',
                  borderRadius: '0.375rem',
                  fontSize: '0.75rem',
                  color: '#17211F'
                }}
              />
              <Area
                type="monotone"
                dataKey="enrolled"
                stroke="#D99000"
                fillOpacity={1}
                fill="url(#colorEnrolled)"
                name={t.analytics.totalEnrolled}
              />
              <Area
                type="monotone"
                dataKey="certified"
                stroke="#18845B"
                fillOpacity={1}
                fill="url(#colorCertified)"
                name={t.analytics.certifiedWorkers}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 2. Side-by-Side Module Comparison & Failure Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Module Comparison Table/Card */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#17211F] pb-3 border-b border-[#E2E8E5] mb-4 flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#176B5B]" />
              <span>{t.analytics.moduleComparisonTitle}</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#17211F]">
                <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
                  <tr>
                    <th className="py-2.5 px-3">{t.analytics.metric}</th>
                    <th className="py-2.5 px-3 text-center text-[#D99000]">{t.analytics.fireAndExplosion}</th>
                    <th className="py-2.5 px-3 text-center text-[#2878A8]">{t.analytics.gasConfinedSpace}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8E5] font-mono">
                  <tr>
                    <td className="py-3 px-3 font-sans font-semibold text-[#17211F]">{t.analytics.passRate}</td>
                    <td className="py-3 px-3 text-center font-bold text-[#18845B]">84%</td>
                    <td className="py-3 px-3 text-center font-bold text-[#D99000]">72%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-sans font-semibold text-[#17211F]">{t.analytics.averageScore}</td>
                    <td className="py-3 px-3 text-center text-[#17211F]">82%</td>
                    <td className="py-3 px-3 text-center text-[#17211F]">74%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-sans font-semibold text-[#17211F]">{t.analytics.completionRate}</td>
                    <td className="py-3 px-3 text-center text-[#17211F]">86%</td>
                    <td className="py-3 px-3 text-center text-[#17211F]">71%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-sans font-semibold text-[#17211F]">{t.analytics.avgAttemptsPerPass}</td>
                    <td className="py-3 px-3 text-center text-[#5F6B67]">1.4</td>
                    <td className="py-3 px-3 text-center text-[#5F6B67]">1.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 p-3 rounded bg-[#F7F8F6] border border-[#E2E8E5] text-xs text-[#5F6B67]">
            <strong>{t.analytics.officerInsight}:</strong> {t.analytics.officerInsightText}
          </div>
        </div>

        {/* Failure Patterns Breakdown */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8E5] mb-4">
              <h3 className="text-sm font-bold text-[#17211F] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#D64545]" />
                <span>{t.analytics.failurePatternsTitle}</span>
              </h3>
              <span className="text-[10px] text-[#D64545] bg-[#D64545]/10 px-2 py-0.5 rounded border border-[#D64545]/30 font-semibold">
                {t.analytics.highRiskAreas}
              </span>
            </div>

            <div className="space-y-4">
              {MOCK_FAILURE_PATTERNS.map((item, idx) => {
                const barColor =
                  idx === 0 ? 'bg-[#D64545]' : idx === 1 ? 'bg-[#D99000]' : idx === 2 ? 'bg-[#F59E0B]' : 'bg-[#2878A8]';

                return (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#17211F]">{item.name}</span>
                      <span className="font-mono font-bold text-[#D64545]">
                        {item.percentage}% ({item.count} {t.analytics.occurrences})
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5F6B67] leading-tight">{item.description}</p>
                    <div className="w-full h-2 rounded-full bg-[#E2E8E5] overflow-hidden">
                      <div
                        className={`h-full ${barColor} rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E2E8E5] text-[11px] text-[#5F6B67]">
            {t.analytics.dataSource}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
