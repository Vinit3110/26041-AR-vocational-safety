import React from 'react';
import type { Certificate } from '../../data/types';
import { Badge } from '../common/Badge';
import { ExternalLink, QrCode, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="max-w-2xl mx-auto rounded-lg border-2 border-[#176B5B]/30 bg-white p-6 md:p-8 space-y-6 shadow-xs relative overflow-hidden">
      {/* Top Banner Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-[#E2E8E5] gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-[#176B5B]/10 border border-[#176B5B]/30 flex items-center justify-center text-[#176B5B]">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#5F6B67]">
              Industrial Safety Credential
            </div>
            <h2 className="text-lg font-black text-[#17211F]">
              Official Certificate of Competency
            </h2>
          </div>
        </div>

        <Badge status={certificate.status} size="md" />
      </div>

      {/* Main Certificate Content */}
      <div className="space-y-4 text-xs text-[#17211F] border-b border-[#E2E8E5] pb-6">
        <div className="p-4 rounded-md bg-[#F7F8F6] border border-[#E2E8E5] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] uppercase font-semibold text-[#5F6B67]">Certified Personnel</div>
            <div className="text-sm font-bold text-[#17211F] mt-0.5">{certificate.workerName}</div>
            <div className="text-[11px] text-[#5F6B67]">{certificate.workerRole} ({certificate.workerId})</div>
          </div>

          <div>
            <div className="text-[10px] uppercase font-semibold text-[#5F6B67]">Certificate Identifier</div>
            <div className="text-sm font-mono font-bold text-[#176B5B] mt-0.5">{certificate.id}</div>
            <div className="text-[11px] text-[#5F6B67]">Issued: {certificate.issuedDate}</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-[10px] uppercase font-semibold text-[#5F6B67]">Training Program & Assessment</div>
          <div className="text-sm font-bold text-[#17211F]">{certificate.trainingModule}</div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#5F6B67]">Evaluation Score: <strong className="text-[#18845B] font-mono">{certificate.score}%</strong></span>
            <span className="text-[#5F6B67]">Issuing Authority: <strong className="text-[#17211F]">{certificate.issuer}</strong></span>
          </div>
        </div>

        {/* Verification Hash & QR Code Section */}
        <div className="pt-3 border-t border-[#E2E8E5] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 w-full md:w-auto">
            <div className="text-[10px] uppercase font-semibold text-[#5F6B67]">Registry Verification Hash</div>
            <div className="font-mono text-[11px] text-[#5F6B67] bg-[#F7F8F6] px-2.5 py-1 rounded border border-[#E2E8E5] truncate max-w-sm">
              {certificate.verificationHash}
            </div>
          </div>

          {/* QR Code graphic */}
          <div className="p-2 rounded bg-white border border-[#E2E8E5] flex items-center gap-2">
            <QrCode className="w-10 h-10 text-[#17211F]" />
            <div className="text-[9px] text-[#5F6B67] leading-tight">
              Scan to verify<br />
              <strong className="text-[#176B5B]">26041 Registry</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[11px] text-[#5F6B67]">Location: {certificate.location}</span>
        <Link to={`/verify/${certificate.id}`}>
          <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
            Open Public Verification
          </Button>
        </Link>
      </div>
    </div>
  );
};
