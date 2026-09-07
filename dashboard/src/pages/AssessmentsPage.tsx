import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_ASSESSMENTS } from '../data/mockData';
import { Badge } from '../components/common/Badge';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';
import { Search, Filter, ChevronRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';

export const AssessmentsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [moduleFilter, setModuleFilter] = useState('ALL');
  const [resultFilter, setResultFilter] = useState('ALL');

  const filteredAssessments = MOCK_ASSESSMENTS.filter((a) => {
    const matchesSearch =
      a.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.workerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.moduleTitle.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesModule = moduleFilter === 'ALL' || a.moduleId === moduleFilter;
    const matchesResult = resultFilter === 'ALL' || a.result === resultFilter;

    return matchesSearch && matchesModule && matchesResult;
  });

  return (
    <PageContainer
      title={t.assessments.title}
      subtitle={t.assessments.subtitle}
    >
      {/* Controls Bar */}
      <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5F6B67]" />
          <input
            type="text"
            placeholder={t.assessments.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] placeholder-[#5F6B67] focus:outline-none focus:border-[#176B5B] focus:bg-white"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#5F6B67]">
            <Filter className="w-3.5 h-3.5" />
            <span>{t.assessments.moduleFilter}:</span>
            <select
              value={moduleFilter}
              onChange={(e) => setModuleFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-white border border-[#E2E8E5] rounded-md text-[#17211F] text-xs focus:outline-none focus:border-[#176B5B]"
            >
              <option value="ALL">{t.assessments.allModules}</option>
              <option value="fire-explosion">Fire &amp; Explosion</option>
              <option value="gas-confined-space">Gas / Confined Space</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#5F6B67]">
            <span>{t.assessments.resultFilter}:</span>
            <select
              value={resultFilter}
              onChange={(e) => setResultFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-white border border-[#E2E8E5] rounded-md text-[#17211F] text-xs focus:outline-none focus:border-[#176B5B]"
            >
              <option value="ALL">{t.assessments.allResults}</option>
              <option value="PASSED">{t.assessments.passed}</option>
              <option value="FAILED">{t.assessments.failed}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assessments Table */}
      {filteredAssessments.length === 0 ? (
        <EmptyState
          title={t.assessments.noMatchTitle}
          description={t.assessments.noMatchDesc}
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setModuleFilter('ALL');
                setResultFilter('ALL');
              }}
            >
              {t.assessments.resetFilters}
            </Button>
          }
        />
      ) : (
        <div className="rounded-lg border border-[#E2E8E5] bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#17211F]">
              <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
                <tr>
                  <th className="py-3 px-4">{t.assessments.assessmentId}</th>
                  <th className="py-3 px-4">{t.assessments.workerCol}</th>
                  <th className="py-3 px-4">{t.assessments.moduleCol}</th>
                  <th className="py-3 px-4 text-center">{t.assessments.scoreCol}</th>
                  <th className="py-3 px-4">{t.assessments.resultCol}</th>
                  <th className="py-3 px-4 text-right">{t.assessments.responseTime}</th>
                  <th className="py-3 px-4 text-right">{t.assessments.dateCol}</th>
                  <th className="py-3 px-4 text-right">{t.assessments.actionCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8E5]">
                {filteredAssessments.map((a) => (
                  <tr
                    key={a.id}
                    onClick={() => navigate(`/assessments/${a.id}`)}
                    className="hover:bg-[#F7F8F6] transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-[#176B5B]">
                      {a.id}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#17211F] group-hover:text-[#176B5B] transition-colors">
                        {a.workerName}
                      </div>
                      <div className="text-[10px] text-[#5F6B67]">{a.workerRole} ({a.workerId})</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-[#17211F]">
                      {a.moduleTitle}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold">
                      <span className={a.score >= 80 ? 'text-[#18845B]' : 'text-[#D64545]'}>
                        {a.score}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <Badge status={a.result} size="sm" />
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono text-[#17211F]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#5F6B67]" />
                        {a.responseTime}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono text-[#5F6B67]">
                      {a.date}
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
      )}
    </PageContainer>
  );
};
