import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_CERTIFICATES } from '../data/mockData';
import { CertificateTable } from '../components/certificates/CertificateTable';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';
import { Search, Filter } from 'lucide-react';
import { useI18n } from '../i18n/i18n';

export const CertificatesPage: React.FC = () => {
  const { t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredCertificates = MOCK_CERTIFICATES.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.workerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.trainingModule.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <PageContainer
      title={t.certificates.title}
      subtitle={t.certificates.subtitle}
    >
      {/* Controls Bar */}
      <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5F6B67]" />
          <input
            type="text"
            placeholder={t.certificates.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] placeholder-[#5F6B67] focus:outline-none focus:border-[#176B5B] focus:bg-white"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-1.5 text-xs text-[#5F6B67]">
          <Filter className="w-3.5 h-3.5" />
          <span>{t.certificates.statusFilter}:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-2.5 py-1.5 bg-white border border-[#E2E8E5] rounded-md text-[#17211F] text-xs focus:outline-none focus:border-[#176B5B]"
          >
            <option value="ALL">{t.certificates.allStatuses}</option>
            <option value="VALID">{t.certificates.valid}</option>
            <option value="EXPIRING">{t.certificates.expiringSoon}</option>
            <option value="EXPIRED">{t.certificates.expired}</option>
            <option value="REVOKED">{t.certificates.revoked}</option>
          </select>
        </div>
      </div>

      {/* Certificates Table */}
      {filteredCertificates.length === 0 ? (
        <EmptyState
          title={t.certificates.noFoundTitle}
          description={t.certificates.noFoundDesc}
          action={
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('ALL');
              }}
            >
              {t.certificates.resetFilter}
            </Button>
          }
        />
      ) : (
        <CertificateTable certificates={filteredCertificates} />
      )}
    </PageContainer>
  );
};
