import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_CERTIFICATES, ORGANIZATION_INFO } from '../data/mockData';
import { ShieldCheck, CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import { Badge } from '../components/common/Badge';

export const VerifyCertificatePage: React.FC = () => {
  const { certificateId } = useParams<{ certificateId: string }>();

  const certificate = MOCK_CERTIFICATES.find(
    (c) => c.id.toLowerCase() === certificateId?.toLowerCase()
  );

  const isValid = !!certificate && (certificate.status === 'VALID' || certificate.status === 'EXPIRING');

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#17211F] flex flex-col items-center justify-center p-4 md:p-6 font-sans">
      {/* Top Standalone Verification Portal Header */}
      <div className="w-full max-w-xl text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#176B5B]/30 bg-[#176B5B]/10 text-[#176B5B] text-xs font-semibold uppercase tracking-wider mb-3">
          <ShieldCheck className="w-4 h-4" />
          <span>Public Credential Verification Service</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#17211F] tracking-tight">
          26041 Industrial Safety Registry
        </h1>
        <p className="text-xs text-[#5F6B67] mt-1">
          Independent Verification Hub for Mining & Manufacturing Safety Competencies
        </p>
      </div>

      {/* Main Verification Result Card */}
      <div className="w-full max-w-xl rounded-lg border border-[#E2E8E5] bg-white shadow-sm p-6 md:p-8 space-y-6 relative overflow-hidden">
        {isValid ? (
          <>
            {/* Valid State Header */}
            <div className="flex flex-col items-center text-center p-6 rounded-md border border-[#18845B]/30 bg-[#18845B]/10 space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#18845B]/20 border border-[#18845B] flex items-center justify-center text-[#18845B]">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#18845B] tracking-wide">
                  ✓ CERTIFICATE VERIFIED
                </h2>
                <p className="text-xs text-[#17211F] max-w-md mt-1">
                  This certificate is authentic, active, and officially registered in the{' '}
                  <strong className="text-[#17211F]">{ORGANIZATION_INFO.name}</strong> database.
                </p>
              </div>
            </div>

            {/* Certificate Meta Details Grid */}
            <div className="space-y-3 text-xs border-t border-b border-[#E2E8E5] py-5">
              <div className="flex justify-between items-center py-1.5 border-b border-[#E2E8E5]/60">
                <span className="text-[#5F6B67] font-semibold">Certificate ID</span>
                <span className="font-mono font-bold text-[#176B5B] text-sm">
                  {certificate.id}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#E2E8E5]/60">
                <span className="text-[#5F6B67] font-semibold">Certified Worker</span>
                <span className="font-bold text-[#17211F] text-sm">
                  {certificate.workerName} ({certificate.workerRole})
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#E2E8E5]/60">
                <span className="text-[#5F6B67] font-semibold">Training Module</span>
                <span className="font-semibold text-[#17211F]">
                  {certificate.trainingModule}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#E2E8E5]/60">
                <span className="text-[#5F6B67] font-semibold">Assessment Score</span>
                <span className="font-mono font-black text-[#18845B] text-sm">
                  {certificate.score}%
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#E2E8E5]/60">
                <span className="text-[#5F6B67] font-semibold">Issued Date</span>
                <span className="font-mono text-[#17211F]">
                  {certificate.issuedDate}
                </span>
              </div>

              <div className="flex justify-between items-center py-1.5 border-b border-[#E2E8E5]/60">
                <span className="text-[#5F6B67] font-semibold">Credential Status</span>
                <Badge status={certificate.status} size="sm" />
              </div>

              <div className="flex justify-between items-center py-1.5">
                <span className="text-[#5F6B67] font-semibold">Verification Hash</span>
                <span className="font-mono text-[11px] text-[#5F6B67] truncate max-w-[200px]">
                  {certificate.verificationHash}
                </span>
              </div>
            </div>

            {/* Issuer Footer */}
            <div className="text-[11px] text-[#5F6B67] text-center space-y-0.5">
              <div>Issued by {certificate.issuer}</div>
              <div className="text-[#5F6B67]">Location: {certificate.location}</div>
            </div>
          </>
        ) : (
          <>
            {/* Invalid State Header */}
            <div className="flex flex-col items-center text-center p-6 rounded-md border border-[#D64545]/30 bg-[#D64545]/10 space-y-2">
              <div className="w-14 h-14 rounded-full bg-[#D64545]/20 border border-[#D64545] flex items-center justify-center text-[#D64545]">
                <XCircle className="w-8 h-8 stroke-[2.5]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#D64545] tracking-wide">
                  ✕ CERTIFICATE INVALID
                </h2>
                <p className="text-xs text-[#17211F] max-w-md mt-1">
                  This certificate ID <code className="text-[#176B5B] font-bold">{certificateId}</code> could not be verified in the 26041 Safety Platform registry.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-md bg-[#F7F8F6] border border-[#E2E8E5] text-xs text-[#5F6B67] leading-relaxed">
              <strong>Security Warning:</strong> This credential may be unissued, expired, revoked, or tampered with. Please report unverified credentials to the Safety Officer command desk.
            </div>
          </>
        )}

        {/* Navigation Action */}
        <div className="pt-4 border-t border-[#E2E8E5] flex items-center justify-between">
          <Link
            to="/overview"
            className="text-xs text-[#176B5B] hover:text-[#115044] font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go to Admin Dashboard</span>
          </Link>
          <span className="text-[10px] text-[#5F6B67] font-mono">ID: {certificateId}</span>
        </div>
      </div>
    </div>
  );
};
