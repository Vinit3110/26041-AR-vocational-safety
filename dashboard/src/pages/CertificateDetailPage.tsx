import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { MOCK_CERTIFICATES } from '../data/mockData';
import { Button } from '../components/common/Button';
import { CertificateCard } from '../components/certificates/CertificateCard';
import { ArrowLeft } from 'lucide-react';

export const CertificateDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const certificate =
    MOCK_CERTIFICATES.find((c) => c.id === id) || MOCK_CERTIFICATES[0];

  return (
    <PageContainer
      title={`Certificate ${certificate.id}`}
      subtitle={`Official Safety Credential for ${certificate.workerName}`}
      action={
        <Link to="/certificates">
          <Button variant="outline" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Certificates
          </Button>
        </Link>
      }
    >
      <CertificateCard certificate={certificate} />
    </PageContainer>
  );
};
