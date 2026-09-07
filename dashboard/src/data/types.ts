export type CertificationStatus = 'CERTIFIED' | 'PENDING' | 'EXPIRING_SOON' | 'NOT_CERTIFIED' | 'AT_RISK';

export type CertificateValidity = 'VALID' | 'EXPIRING' | 'EXPIRED' | 'REVOKED';

export type AssessmentResult = 'PASSED' | 'FAILED';

export interface Worker {
  id: string; // e.g. W-001
  name: string;
  role: string; // Miner, Operator, Technician, Blaster, Electrician, Heavy Driver
  progress: string; // e.g. "4/4"
  progressPercent: number;
  latestScore: number;
  certificateId?: string;
  certificateStatus: CertificationStatus;
  preferredLanguage: string;
  department: string;
  location: string;
  joinedDate: string;
}

export interface AssessmentTimelineEvent {
  time: string;
  timestamp: string;
  action: string;
  isCorrect: boolean;
  responseTimeSec: number;
  notes?: string;
}

export interface Competencies {
  hazardRecognition: number;
  emergencyResponse: number;
  equipmentSelection: number;
  evacuation: number;
}

export interface Assessment {
  id: string; // e.g. A-1042
  workerId: string;
  workerName: string;
  workerRole: string;
  moduleId: string;
  moduleTitle: string;
  score: number;
  result: AssessmentResult;
  responseTime: string; // e.g. "02:41"
  date: string;
  attempts: number;
  criticalErrors: number;
  competencies: Competencies;
  timeline: AssessmentTimelineEvent[];
}

export interface TrainingModule {
  id: string; // e.g. fire-explosion
  title: string;
  category: string;
  description: string;
  attempts: number;
  completionRate: number;
  passRate: number;
  avgScore: number;
  avgAttempts: number;
  competencies: {
    name: string;
    score: number;
  }[];
}

export interface Certificate {
  id: string; // e.g. CERT-001
  workerId: string;
  workerName: string;
  workerRole: string;
  trainingModule: string;
  moduleId: string;
  score: number;
  issuedDate: string;
  expiryDate: string;
  status: CertificateValidity;
  verificationHash: string;
  issuer: string;
  location: string;
}

export interface WeakCompetency {
  name: string;
  failureRate: number;
  category: string;
}

export interface AnalyticsTrend {
  month: string;
  certified: number;
  enrolled: number;
  passRate: number;
}
