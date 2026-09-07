import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_WORKERS, MOCK_ASSESSMENTS, MOCK_CERTIFICATES } from '../data/mockData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { CompetencyBreakdown } from '../components/assessments/CompetencyBreakdown';
import { ArrowLeft, User, MapPin, Globe, Calendar, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/i18n';

export const WorkerDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();

  const worker = MOCK_WORKERS.find((w) => w.id === id) || MOCK_WORKERS[0];
  const assessments = MOCK_ASSESSMENTS.filter((a) => a.workerId === worker.id);
  const certificate = MOCK_CERTIFICATES.find((c) => c.workerId === worker.id);

  return (
    <PageContainer
      title={worker.name}
      subtitle={`Worker ID: ${worker.id} • Role: ${worker.role} • Preferred Language: ${worker.preferredLanguage}`}
      action={
        <Link to="/workers">
          <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
            {t.workers.backToWorkers}
          </Button>
        </Link>
      }
    >
      {/* Worker Profile Overview Header Card */}
      <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-[#E2E8E5] pb-4 md:pb-0 pr-4">
          <div className="w-12 h-12 rounded-md bg-[#176B5B]/10 border border-[#176B5B]/30 flex items-center justify-center font-bold text-sm text-[#176B5B]">
            {worker.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div>
            <div className="text-base font-bold text-[#17211F]">{worker.name}</div>
            <div className="text-xs text-[#5F6B67] flex items-center gap-1 mt-0.5">
              <User className="w-3 h-3 text-[#176B5B]" />
              <span>{worker.role}</span>
            </div>
          </div>
        </div>

        <div className="space-y-1 text-xs">
          <div className="text-[#5F6B67] uppercase text-[10px] font-semibold">{t.workers.locationAndDept}</div>
          <div className="text-[#17211F] font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#5F6B67]" />
            <span>{worker.location}</span>
          </div>
          <div className="text-[#5F6B67]">{worker.department}</div>
        </div>

        <div className="space-y-1 text-xs">
          <div className="text-[#5F6B67] uppercase text-[10px] font-semibold">{t.workers.languageAndEnrolled}</div>
          <div className="text-[#17211F] font-medium flex items-center gap-1">
            <Globe className="w-3 h-3 text-[#5F6B67]" />
            <span>{worker.preferredLanguage}</span>
          </div>
          <div className="text-[#5F6B67] flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#5F6B67]" />
            <span>{t.workers.enrolled}: {worker.joinedDate}</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start md:items-end space-y-1">
          <div className="text-[#5F6B67] uppercase text-[10px] font-semibold">{t.workers.certificationStatus}</div>
          <Badge status={worker.certificateStatus} size="md" />
        </div>
      </div>

      {/* 2-Column Section: Training Progress & Certificates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Training Progress List */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-3">
          <h3 className="text-sm font-bold text-[#17211F] pb-3 border-b border-[#E2E8E5]">
            {t.workers.trainingProgress} ({worker.progress} {t.workers.modulesCompleted})
          </h3>
          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-md border border-[#E2E8E5] bg-[#F7F8F6] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#17211F]">{t.workers.fireExplosionSafety}</div>
                <div className="text-[10px] text-[#5F6B67]">{t.workers.fireExplosionSubtitle}</div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#18845B] bg-[#18845B]/10 px-2 py-0.5 rounded border border-[#18845B]/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.workers.passed} (87%)
              </span>
            </div>

            <div className="p-3 rounded-md border border-[#E2E8E5] bg-[#F7F8F6] flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#17211F]">{t.workers.gasConfinedSafety}</div>
                <div className="text-[10px] text-[#5F6B67]">{t.workers.gasConfinedSubtitle}</div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#18845B] bg-[#18845B]/10 px-2 py-0.5 rounded border border-[#18845B]/30">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t.workers.passed} (92%)
              </span>
            </div>
          </div>
        </div>

        {/* Certificate Card Container */}
        <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-3">
          <h3 className="text-sm font-bold text-[#17211F] pb-3 border-b border-[#E2E8E5]">
            {t.workers.workerCertificates}
          </h3>
          {certificate ? (
            <div className="p-4 rounded-md border border-[#176B5B]/30 bg-[#176B5B]/5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#176B5B]" />
                  <span className="font-mono font-bold text-[#176B5B]">{certificate.id}</span>
                </div>
                <Badge status={certificate.status} size="sm" />
              </div>
              <div>
                <div className="font-bold text-[#17211F]">{certificate.trainingModule}</div>
                <div className="text-xs text-[#5F6B67]">{t.certificates.issued}: {certificate.issuedDate}</div>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => navigate(`/certificates/${certificate.id}`)}
              >
                {t.workers.viewCertificate}
              </Button>
            </div>
          ) : (
            <div className="text-center p-6 text-[#5F6B67] text-xs">
              {t.workers.noCertificateYet}
            </div>
          )}
        </div>
      </div>

      {/* Competency Breakdown */}
      <CompetencyBreakdown
        competencies={
          assessments[0]?.competencies || {
            hazardRecognition: 92,
            emergencyResponse: 84,
            equipmentSelection: 88,
            evacuation: 83
          }
        }
      />

      {/* Assessment History Table */}
      <div className="p-5 rounded-lg border border-[#E2E8E5] bg-white space-y-3">
        <h3 className="text-sm font-bold text-[#17211F] pb-3 border-b border-[#E2E8E5]">
          {t.workers.assessmentHistory}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#17211F]">
            <thead className="bg-[#F7F8F6] text-[#5F6B67] font-semibold uppercase text-[10px] tracking-wider border-b border-[#E2E8E5]">
              <tr>
                <th className="py-2.5 px-3">{t.workers.attempt}</th>
                <th className="py-2.5 px-3">{t.assessments.moduleCol}</th>
                <th className="py-2.5 px-3 text-center">{t.assessments.scoreCol}</th>
                <th className="py-2.5 px-3">{t.assessments.resultCol}</th>
                <th className="py-2.5 px-3 text-right">{t.assessments.dateCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8E5]">
              {assessments.map((a) => (
                <tr
                  key={a.id}
                  onClick={() => navigate(`/assessments/${a.id}`)}
                  className="hover:bg-[#F7F8F6] transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-3 font-mono font-bold text-[#176B5B]">
                    {t.assessments.attemptNo}{a.attempts}
                  </td>
                  <td className="py-3 px-3 font-semibold text-[#17211F] group-hover:text-[#176B5B]">
                    {a.moduleTitle}
                  </td>
                  <td className="py-3 px-3 text-center font-mono font-bold">
                    <span className={a.score >= 80 ? 'text-[#18845B]' : 'text-[#D64545]'}>
                      {a.score}%
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <Badge status={a.result} size="sm" />
                  </td>
                  <td className="py-3 px-3 text-right font-mono text-[#5F6B67] flex items-center justify-end gap-2">
                    <span>{a.date}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#5F6B67]" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageContainer>
  );
};
