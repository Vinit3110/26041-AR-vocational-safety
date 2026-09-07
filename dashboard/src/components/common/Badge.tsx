import React from 'react';
import type { CertificationStatus, CertificateValidity, AssessmentResult } from '../../data/types';
import { CheckCircle2, AlertTriangle, XCircle, Clock, ShieldCheck } from 'lucide-react';

interface BadgeProps {
  status: CertificationStatus | CertificateValidity | AssessmentResult;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ status, size = 'sm' }) => {
  const getBadgeStyle = () => {
    switch (status) {
      case 'CERTIFIED':
      case 'VALID':
      case 'PASSED':
        return {
          bg: 'bg-[#18845B]/10',
          text: 'text-[#18845B]',
          border: 'border-[#18845B]/30',
          icon: <CheckCircle2 className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
        };

      case 'PENDING':
      case 'EXPIRING':
        return {
          bg: 'bg-[#D99000]/10',
          text: 'text-[#D99000]',
          border: 'border-[#D99000]/30',
          icon: <Clock className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
        };

      case 'EXPIRING_SOON':
        return {
          bg: 'bg-[#F59E0B]/10',
          text: 'text-[#B45309]',
          border: 'border-[#F59E0B]/30',
          icon: <AlertTriangle className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
        };

      case 'NOT_CERTIFIED':
      case 'EXPIRED':
      case 'FAILED':
      case 'AT_RISK':
        return {
          bg: 'bg-[#D64545]/10',
          text: 'text-[#D64545]',
          border: 'border-[#D64545]/30',
          icon: <XCircle className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
        };

      case 'REVOKED':
        return {
          bg: 'bg-[#5F6B67]/10',
          text: 'text-[#5F6B67]',
          border: 'border-[#5F6B67]/30',
          icon: <ShieldCheck className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
        };

      default:
        return {
          bg: 'bg-[#5F6B67]/10',
          text: 'text-[#5F6B67]',
          border: 'border-[#E2E8E5]',
          icon: null
        };
    }
  };

  const style = getBadgeStyle();
  const paddingClass = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded border ${style.bg} ${style.text} ${style.border} ${paddingClass}`}
    >
      {style.icon}
      <span>{status}</span>
    </span>
  );
};
