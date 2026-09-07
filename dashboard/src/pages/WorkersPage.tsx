import React, { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_WORKERS } from '../data/mockData';
import type { Worker } from '../data/types';
import { WorkerTable } from '../components/workers/WorkerTable';
import { AddWorkerModal } from '../components/workers/AddWorkerModal';
import { Button } from '../components/common/Button';
import { Search, Filter, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/i18n';

export const WorkersPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useI18n();
  const [workersList, setWorkersList] = useState<Worker[]>(MOCK_WORKERS);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddWorker = (
    newWorkerData: Omit<Worker, 'id' | 'joinedDate' | 'progress' | 'progressPercent' | 'latestScore' | 'certificateStatus'>
  ) => {
    const newWorker: Worker = {
      ...newWorkerData,
      id: `W-00${workersList.length + 1}`,
      joinedDate: '07 Sep 2026',
      progress: '0/2',
      progressPercent: 0,
      certificateStatus: 'NOT_CERTIFIED',
      latestScore: 0
    };

    setWorkersList([newWorker, ...workersList]);
  };


  const filteredWorkers = workersList.filter((w) => {
    const matchesSearch =
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.role.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === 'ALL' || w.role === roleFilter;
    const matchesStatus = statusFilter === 'ALL' || w.certificateStatus === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <PageContainer
      title={t.workers.title}
      subtitle={t.workers.subtitle}
      action={
        <Button
          variant="primary"
          size="sm"
          icon={<UserPlus className="w-4 h-4" />}
          onClick={() => setIsModalOpen(true)}
        >
          {t.workers.addWorker}
        </Button>
      }
    >
      {/* Controls Bar */}
      <div className="p-4 rounded-lg border border-[#E2E8E5] bg-white flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#5F6B67]" />
          <input
            type="text"
            placeholder={t.workers.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 text-xs bg-[#F7F8F6] border border-[#E2E8E5] rounded-md text-[#17211F] placeholder-[#5F6B67] focus:outline-none focus:border-[#176B5B] focus:bg-white"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-1.5 text-xs text-[#5F6B67]">
            <Filter className="w-3.5 h-3.5" />
            <span>{t.workers.role}:</span>
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-white border border-[#E2E8E5] rounded-md text-[#17211F] text-xs focus:outline-none focus:border-[#176B5B]"
            >
              <option value="ALL">{t.workers.allRoles}</option>
              <option value="Miner">Miner</option>
              <option value="Operator">Operator</option>
              <option value="Technician">Technician</option>
              <option value="Electrician">Electrician</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#5F6B67]">
            <span>{t.workers.statusLabel}:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-white border border-[#E2E8E5] rounded-md text-[#17211F] text-xs focus:outline-none focus:border-[#176B5B]"
            >
              <option value="ALL">{t.workers.allStatuses}</option>
              <option value="Certified">{t.badge.CERTIFIED}</option>
              <option value="Pending">{t.badge.PENDING}</option>
              <option value="Expiring Soon">{t.badge.EXPIRING_SOON}</option>
              <option value="Not Certified">{t.badge.NOT_CERTIFIED}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Workers Table */}
      <WorkerTable
        workers={filteredWorkers}
        onWorkerClick={(workerId) => navigate(`/workers/${workerId}`)}
      />

      {/* Add Worker Modal */}
      <AddWorkerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddWorker={handleAddWorker}
      />
    </PageContainer>
  );
};
