import type {
  Worker,
  Assessment,
  TrainingModule,
  Certificate,
  WeakCompetency,
  AnalyticsTrend
} from './types';


export const ORGANIZATION_INFO = {
  name: 'Jharkhand Industrial Safety Training Center',
  tagline: 'AR-Based Vocational Training Simulator for Mining & Manufacturing',
  division: 'Dhanbad & Bokaro Industrial Safety Command',
  orgId: 'ORG-JH-26041',
  contactEmail: 'safety.officer@jharkhandsafety.gov.in',
  contactPhone: '+91 651 2490 041',
  leadOfficer: 'Rajesh Sharma',
  officerRole: 'Lead Industrial Safety & Compliance Officer'
};

export const MOCK_WORKERS: Worker[] = [
  {
    id: 'W-001',
    name: 'Ramesh Kumar',
    role: 'Miner',
    progress: '4/4',
    progressPercent: 100,
    latestScore: 87,
    certificateId: 'CERT-001',
    certificateStatus: 'CERTIFIED',
    preferredLanguage: 'Hindi',
    department: 'Underground Operations',
    location: 'Jharia Coalfield, Dhanbad',
    joinedDate: '12 Jan 2024'
  },
  {
    id: 'W-002',
    name: 'Sita Devi',
    role: 'Operator',
    progress: '2/4',
    progressPercent: 50,
    latestScore: 61,
    certificateId: undefined,
    certificateStatus: 'PENDING',
    preferredLanguage: 'Hindi',
    department: 'Heavy Machinery Plant',
    location: 'Bokaro Steel City',
    joinedDate: '05 Mar 2024'
  },
  {
    id: 'W-003',
    name: 'Mohan Oraon',
    role: 'Miner',
    progress: '3/4',
    progressPercent: 75,
    latestScore: 92,
    certificateId: 'CERT-002',
    certificateStatus: 'CERTIFIED',
    preferredLanguage: 'Nagpuri',
    department: 'Deep Extraction Division',
    location: 'West Bokaro Open Cast',
    joinedDate: '18 Nov 2023'
  },
  {
    id: 'W-004',
    name: 'Arjun Singh',
    role: 'Technician',
    progress: '2/4',
    progressPercent: 50,
    latestScore: 68,
    certificateId: undefined,
    certificateStatus: 'AT_RISK',
    preferredLanguage: 'Hindi',
    department: 'Ventilation & Safety',
    location: 'Singhrauli-Border Complex',
    joinedDate: '01 Feb 2024'
  },
  {
    id: 'W-005',
    name: 'Birsa Tudu',
    role: 'Blaster',
    progress: '4/4',
    progressPercent: 100,
    latestScore: 94,
    certificateId: 'CERT-003',
    certificateStatus: 'CERTIFIED',
    preferredLanguage: 'Santali',
    department: 'Explosives Handling',
    location: 'Jharia Shaft No. 4',
    joinedDate: '10 Aug 2023'
  },
  {
    id: 'W-006',
    name: 'Sunita Mahto',
    role: 'Electrician',
    progress: '1/4',
    progressPercent: 25,
    latestScore: 78,
    certificateId: undefined,
    certificateStatus: 'PENDING',
    preferredLanguage: 'Hindi',
    department: 'High Voltage Maintenance',
    location: 'Bokaro Thermal Power Substation',
    joinedDate: '22 Apr 2024'
  },
  {
    id: 'W-007',
    name: 'Rajesh Hembrom',
    role: 'Heavy Driver',
    progress: '4/4',
    progressPercent: 100,
    latestScore: 81,
    certificateId: 'CERT-004',
    certificateStatus: 'EXPIRING_SOON',
    preferredLanguage: 'Santali',
    department: 'Haulage & Fleet Transport',
    location: 'Noamundi Iron Mine',
    joinedDate: '15 Sep 2023'
  },
  {
    id: 'W-008',
    name: 'Priya Verma',
    role: 'Operator',
    progress: '0/4',
    progressPercent: 0,
    latestScore: 0,
    certificateId: undefined,
    certificateStatus: 'NOT_CERTIFIED',
    preferredLanguage: 'English',
    department: 'Control Room Logistics',
    location: 'Ranchi Industrial Area',
    joinedDate: '01 Aug 2026'
  }
];

export const MOCK_TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'fire-explosion',
    title: 'Fire & Explosion Safety',
    category: 'Hazardous Operations',
    description: 'Emergency response training covering hazard identification, alarm activation, extinguisher selection, evacuation decisions, and alternate exit selection in underground mines and chemical refineries.',
    attempts: 184,
    completionRate: 86,
    passRate: 84,
    avgScore: 82,
    avgAttempts: 1.4,
    competencies: [
      { name: 'Hazard Recognition', score: 89 },
      { name: 'Emergency Response', score: 81 },
      { name: 'Equipment Selection', score: 85 },
      { name: 'Evacuation Decision', score: 78 }
    ]
  },
  {
    id: 'gas-confined-space',
    title: 'Gas / Confined Space Safety',
    category: 'Atmospheric Hazards',
    description: 'Training covering methane and toxic gas leak recognition, SCBA/PPE selection, hazard zones, safe routes, buddy-system decisions, confined-space procedure, and emergency venting protocols.',
    attempts: 161,
    completionRate: 71,
    passRate: 72,
    avgScore: 74,
    avgAttempts: 1.8,
    competencies: [
      { name: 'Gas Detector Usage', score: 76 },
      { name: 'SCBA Equipment Check', score: 71 },
      { name: 'Buddy Protocol', score: 68 },
      { name: 'Venting & Exit Route', score: 65 }
    ]
  }
];

export const MOCK_WEAK_COMPETENCIES: WeakCompetency[] = [
  { name: 'Emergency Response Sequence', failureRate: 38, category: 'Procedural Error' },
  { name: 'Hazard Recognition', failureRate: 29, category: 'Visual Perception' },
  { name: 'PPE Selection', failureRate: 21, category: 'Equipment Protocol' },
  { name: 'Evacuation Decision', failureRate: 18, category: 'Critical Decision' },
  { name: 'Equipment Selection', failureRate: 14, category: 'Equipment Protocol' }
];

export const MOCK_ASSESSMENTS: Assessment[] = [
  {
    id: 'A-1042',
    workerId: 'W-001',
    workerName: 'Ramesh Kumar',
    workerRole: 'Miner',
    moduleId: 'fire-explosion',
    moduleTitle: 'Fire & Explosion Safety',
    score: 87,
    result: 'PASSED',
    responseTime: '02:41',
    date: '05 Sep 2026',
    attempts: 2,
    criticalErrors: 0,
    competencies: {
      hazardRecognition: 92,
      emergencyResponse: 84,
      equipmentSelection: 88,
      evacuation: 83
    },
    timeline: [
      { time: '10:31:04', timestamp: '00:04', action: 'Hazard identified: Electrical spark near coal conveyor seam', isCorrect: true, responseTimeSec: 4, notes: 'Spotted smoke plume within 5 seconds in AR viewport' },
      { time: '10:31:11', timestamp: '00:11', action: 'Alarm raised: Activated emergency pull-cord switch', isCorrect: true, responseTimeSec: 7, notes: 'Correctly chose primary alarm breaker' },
      { time: '10:31:25', timestamp: '00:25', action: 'Extinguisher selected: CO2 Dry Chemical Extinguisher', isCorrect: true, responseTimeSec: 14, notes: 'Avoided water-based extinguisher on electrical fire' },
      { time: '10:32:01', timestamp: '01:01', action: 'Primary exit selected (Blocked by heavy smoke)', isCorrect: false, responseTimeSec: 36, notes: 'Failed to inspect airflow direction indicator first' },
      { time: '10:32:18', timestamp: '01:18', action: 'Alternate exit selected: Shaft B ventilation escape way', isCorrect: true, responseTimeSec: 17, notes: 'Re-evaluated situation and chose updraft escape corridor' },
      { time: '10:32:31', timestamp: '01:31', action: 'Evacuation completed: Checked in at Muster Station 3', isCorrect: true, responseTimeSec: 13, notes: 'Successfully verified buddy team count' }
    ]
  },
  {
    id: 'A-1041',
    workerId: 'W-002',
    workerName: 'Sita Devi',
    workerRole: 'Operator',
    moduleId: 'gas-confined-space',
    moduleTitle: 'Gas / Confined Space Safety',
    score: 61,
    result: 'FAILED',
    responseTime: '04:12',
    date: '05 Sep 2026',
    attempts: 1,
    criticalErrors: 2,
    competencies: {
      hazardRecognition: 65,
      emergencyResponse: 55,
      equipmentSelection: 60,
      evacuation: 64
    },
    timeline: [
      { time: '14:02:10', timestamp: '00:10', action: 'Methane alarm sounded at 1.8% concentration', isCorrect: true, responseTimeSec: 10, notes: 'Acknowledged AR HUD acoustic alert' },
      { time: '14:02:35', timestamp: '00:35', action: 'Selected Standard Dust Mask instead of SCBA Breathing Apparatus', isCorrect: false, responseTimeSec: 25, notes: 'CRITICAL ERROR: Inadequate respiratory protection for toxic atmosphere' },
      { time: '14:03:15', timestamp: '01:15', action: 'Entered confined sump chamber without gas clearance tester', isCorrect: false, responseTimeSec: 40, notes: 'CRITICAL ERROR: Violated mandatory 2-person clearance protocol' },
      { time: '14:04:00', timestamp: '02:00', action: 'Retreated after AR simulated oxygen drop alert', isCorrect: true, responseTimeSec: 45, notes: 'Activated emergency distress beacon' },
      { time: '14:06:22', timestamp: '04:22', action: 'Reached secondary air lock door', isCorrect: true, responseTimeSec: 142, notes: 'Simulation terminated due to elapsed safety threshold' }
    ]
  },
  {
    id: 'A-1040',
    workerId: 'W-003',
    workerName: 'Mohan Oraon',
    workerRole: 'Miner',
    moduleId: 'fire-explosion',
    moduleTitle: 'Fire & Explosion Safety',
    score: 92,
    result: 'PASSED',
    responseTime: '02:15',
    date: '04 Sep 2026',
    attempts: 1,
    criticalErrors: 0,
    competencies: {
      hazardRecognition: 95,
      emergencyResponse: 90,
      equipmentSelection: 94,
      evacuation: 89
    },
    timeline: [
      { time: '09:15:02', timestamp: '00:02', action: 'Spotted overheated conveyor roller bearing', isCorrect: true, responseTimeSec: 2, notes: 'Immediate hazard identification' },
      { time: '09:15:10', timestamp: '00:10', action: 'Isolated power circuit breaker prior to fire escalation', isCorrect: true, responseTimeSec: 8, notes: 'Proactive isolation step' },
      { time: '09:15:24', timestamp: '00:24', action: 'Deploys Class ABC Foam Extinguisher', isCorrect: true, responseTimeSec: 14, notes: 'Perfect equipment choice' },
      { time: '09:16:10', timestamp: '01:10', action: 'Guided section crew to Intake Airway refuge chamber', isCorrect: true, responseTimeSec: 46, notes: 'Flawless execution of emergency protocol' }
    ]
  },
  {
    id: 'A-1039',
    workerId: 'W-004',
    workerName: 'Arjun Singh',
    workerRole: 'Technician',
    moduleId: 'gas-confined-space',
    moduleTitle: 'Gas / Confined Space Safety',
    score: 68,
    result: 'FAILED',
    responseTime: '03:45',
    date: '04 Sep 2026',
    attempts: 2,
    criticalErrors: 1,
    competencies: {
      hazardRecognition: 70,
      emergencyResponse: 62,
      equipmentSelection: 72,
      evacuation: 68
    },
    timeline: [
      { time: '11:20:05', timestamp: '00:05', action: 'Identified hydrogen sulfide odor sensor notification', isCorrect: true, responseTimeSec: 5, notes: 'Detected gas hazard' },
      { time: '11:20:45', timestamp: '00:45', action: 'Attempted to clear pipe blockage before gas venting', isCorrect: false, responseTimeSec: 40, notes: 'Attempted repair in unsafe atmospheric zone' },
      { time: '11:21:30', timestamp: '01:30', action: 'Activated portable ventilation fan', isCorrect: true, responseTimeSec: 45, notes: 'Reduced toxic concentration' },
      { time: '11:23:50', timestamp: '03:50', action: 'Evacuated through emergency riser pipe shaft', isCorrect: true, responseTimeSec: 140, notes: 'Retreated to surface level' }
    ]
  },
  {
    id: 'A-1038',
    workerId: 'W-005',
    workerName: 'Birsa Tudu',
    workerRole: 'Blaster',
    moduleId: 'fire-explosion',
    moduleTitle: 'Fire & Explosion Safety',
    score: 94,
    result: 'PASSED',
    responseTime: '01:58',
    date: '03 Sep 2026',
    attempts: 1,
    criticalErrors: 0,
    competencies: {
      hazardRecognition: 98,
      emergencyResponse: 92,
      equipmentSelection: 95,
      evacuation: 91
    },
    timeline: [
      { time: '15:10:02', timestamp: '00:02', action: 'Detected misfired blasting cap risk in AR overlay', isCorrect: true, responseTimeSec: 2, notes: 'Flawless visual inspection' },
      { time: '15:10:15', timestamp: '00:15', action: 'Enforced 300m blast perimeter lockout', isCorrect: true, responseTimeSec: 13, notes: 'Perfect perimeter security' },
      { time: '15:11:00', timestamp: '01:00', action: 'Initiated controlled safety vent purge', isCorrect: true, responseTimeSec: 45, notes: 'Cleared residual gases' }
    ]
  }
];

export const MOCK_CERTIFICATES: Certificate[] = [
  {
    id: 'CERT-001',
    workerId: 'W-001',
    workerName: 'Ramesh Kumar',
    workerRole: 'Miner',
    trainingModule: 'Fire & Explosion Safety',
    moduleId: 'fire-explosion',
    score: 87,
    issuedDate: '05 Sep 2026',
    expiryDate: '05 Sep 2027',
    status: 'VALID',
    verificationHash: 'a8f3c7e9120b48fd991bc3847291a021',
    issuer: 'Jharkhand Industrial Safety Training Directorate',
    location: 'Jharia Mining Safety Hub'
  },
  {
    id: 'CERT-002',
    workerId: 'W-003',
    workerName: 'Mohan Oraon',
    workerRole: 'Miner',
    trainingModule: 'Fire & Explosion Safety',
    moduleId: 'fire-explosion',
    score: 92,
    issuedDate: '04 Sep 2026',
    expiryDate: '04 Sep 2027',
    status: 'VALID',
    verificationHash: 'e92b1104a7c849102c98d7fa3110901e',
    issuer: 'Jharkhand Industrial Safety Training Directorate',
    location: 'Bokaro Safety Academy'
  },
  {
    id: 'CERT-003',
    workerId: 'W-005',
    workerName: 'Birsa Tudu',
    workerRole: 'Blaster',
    trainingModule: 'Fire & Explosion Safety',
    moduleId: 'fire-explosion',
    score: 94,
    issuedDate: '03 Sep 2026',
    expiryDate: '03 Sep 2027',
    status: 'VALID',
    verificationHash: '7c89f012b349a128e409b8214fa7210c',
    issuer: 'Jharkhand Industrial Safety Training Directorate',
    location: 'Jharia Shaft 4 Complex'
  },
  {
    id: 'CERT-004',
    workerId: 'W-007',
    workerName: 'Rajesh Hembrom',
    workerRole: 'Heavy Driver',
    trainingModule: 'Gas / Confined Space Safety',
    moduleId: 'gas-confined-space',
    score: 81,
    issuedDate: '15 Sep 2025',
    expiryDate: '15 Sep 2026',
    status: 'EXPIRING',
    verificationHash: '34b12c8901fe23984d7a81093bc2145e',
    issuer: 'Jharkhand Industrial Safety Training Directorate',
    location: 'Noamundi Operational Base'
  },
  {
    id: 'CERT-005',
    workerId: 'W-004',
    workerName: 'Arjun Singh',
    workerRole: 'Technician',
    trainingModule: 'Fire & Explosion Safety',
    moduleId: 'fire-explosion',
    score: 72,
    issuedDate: '10 Aug 2024',
    expiryDate: '10 Aug 2025',
    status: 'EXPIRED',
    verificationHash: '99a01b23c456d789e0123456789abcde',
    issuer: 'Jharkhand Industrial Safety Training Directorate',
    location: 'Singhrauli Sub-station'
  }
];

export const MOCK_ANALYTICS_TRENDS: AnalyticsTrend[] = [
  { month: 'Apr 2026', certified: 110, enrolled: 150, passRate: 73.3 },
  { month: 'May 2026', certified: 132, enrolled: 172, passRate: 76.7 },
  { month: 'Jun 2026', certified: 150, enrolled: 190, passRate: 78.9 },
  { month: 'Jul 2026', certified: 165, enrolled: 215, passRate: 76.7 },
  { month: 'Aug 2026', certified: 178, enrolled: 232, passRate: 76.7 },
  { month: 'Sep 2026', certified: 184, enrolled: 248, passRate: 74.2 }
];

export const MOCK_FAILURE_PATTERNS = [
  { name: 'Emergency Sequence', count: 48, percentage: 38, description: 'Skipping alarm activation or incorrect order of containment steps' },
  { name: 'Incorrect PPE', count: 36, percentage: 29, description: 'Using standard dust masks in low oxygen or toxic gas zones' },
  { name: 'Wrong Exit Selection', count: 26, percentage: 21, description: 'Attempting evacuation through downwind smoke corridor' },
  { name: 'Hazard Ignored', count: 15, percentage: 12, description: 'Failing to notice visual thermal HUD alerts in AR viewport' }
];

export const MOCK_SUMMARY_STATS = {
  totalWorkers: 248,
  certified: 184,
  certifiedPercentage: 74.2,
  pendingTraining: 42,
  atRisk: 22,
  expiringSoon: 12
};
