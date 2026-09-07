/**
 * English (en) — Primary locale / source of truth
 * Safety-critical terms are marked with [SAFETY-TERM] comments.
 * All translations must preserve exact meaning before going to production.
 */
const en = {
  // ─── Common / Shared ──────────────────────────────────────────────────────
  common: {
    save: 'Save',
    cancel: 'Cancel',
    reset: 'Reset',
    view: 'View',
    back: 'Back',
    loading: 'Loading…',
    noData: 'No data available',
    yes: 'Yes',
    no: 'No',
    all: 'All',
    search: 'Search',
    filter: 'Filter',
    actions: 'Actions',
    viewDetails: 'View Details',
    score: 'Score',
    status: 'Status',
    date: 'Date',
    result: 'Result',
    module: 'Module',
    worker: 'Worker',
  },

  // ─── Navigation ───────────────────────────────────────────────────────────
  nav: {
    overview: 'Overview',
    workers: 'Workers',
    trainingModules: 'Training Modules',
    assessments: 'Assessments',
    certificates: 'Certificates',
    analytics: 'Analytics',
    settings: 'Settings',
    operations: 'Operations',
    platformSubtitle: 'Industrial Safety Control',
    jharkhandHub: 'Jharkhand Safety Hub',
  },

  // ─── Topbar ───────────────────────────────────────────────────────────────
  topbar: {
    searchPlaceholder: 'Search workers, certificate IDs, assessments (e.g. W-001, CERT-001)…',
    arSyncReady: 'AR Sync Ready',
    verifyCertificate: 'Verify Certificate',
    language: 'Language',
  },

  // ─── Overview Page ────────────────────────────────────────────────────────
  overview: {
    title: 'Workforce Safety Overview',
    subtitle: 'Operational readiness monitoring across mining & industrial training modules in Jharkhand.',
    overallSafetyReadiness: 'Overall Safety Readiness',
    certifiedPersonnel: 'Certified Personnel',
    pendingTraining: 'Pending Training',
    atRisk: 'At Risk (Re-eval)',
    trainingModules: 'Training Modules',
    manageWorkers: 'Manage Workers',
  },

  // ─── Workers Page ─────────────────────────────────────────────────────────
  workers: {
    title: 'Workers Directory',
    subtitle: 'Manage industrial personnel enrolled in AR safety training across Dhanbad & Bokaro sectors.',
    addWorker: 'Add Worker',
    searchPlaceholder: 'Search worker by name, ID (e.g. Ramesh, W-001)…',
    role: 'Role',
    allRoles: 'All Roles',
    allStatuses: 'All Statuses',
    statusLabel: 'Status',
    // Table headers
    workerId: 'Worker ID',
    nameAndRole: 'Name & Role',
    locationDept: 'Location / Dept',
    language: 'Language',
    progress: 'Progress',
    latestScore: 'Latest Score',
    // Worker detail page
    backToWorkers: 'Back to Workers',
    locationAndDept: 'Location & Dept',
    languageAndEnrolled: 'Language & Enrolled',
    enrolled: 'Enrolled',
    certificationStatus: 'Certification Status',
    trainingProgress: 'Training Progress',
    modulesCompleted: 'Modules Completed',
    workerCertificates: 'Worker Certificates',
    noCertificateYet: 'No certificate issued yet for this worker.',
    assessmentHistory: 'Assessment History',
    attempt: 'Attempt',
    viewCertificate: 'View Certificate',
    workerProfile: 'Worker Profile',
    passed: 'Passed',
    // Module names (inside worker detail — static references)
    fireExplosionSafety: 'Fire & Explosion Safety',
    fireExplosionSubtitle: 'Hazard identification & evacuation',
    gasConfinedSafety: 'Gas / Confined Space Safety',
    gasConfinedSubtitle: 'Toxic gas leak & SCBA procedures',
  },

  // ─── Add Worker Modal ─────────────────────────────────────────────────────
  addWorker: {
    modalTitle: 'Enroll New Industrial Worker',
    fullName: 'Full Name',
    namePlaceholder: 'e.g. Birsa Munda',
    roleAndTrade: 'Role / Trade',
    preferredLanguage: 'Preferred Language',
    department: 'Department',
    locationHub: 'Location Hub',
    enrollWorker: 'Enroll Worker',
    // Role options
    miner: 'Miner',
    operator: 'Operator',
    technician: 'Technician',
    electrician: 'Electrician',
    safetyInspector: 'Safety Inspector',
  },

  // ─── Training Page ────────────────────────────────────────────────────────
  training: {
    title: 'Training Modules',
    subtitle: "AR-Based Vocational Safety Modules designed for Jharkhand's Mining & Manufacturing Sector.",
    attempts: 'Attempts',
    completion: 'Completion',
    passRate: 'Pass Rate',
    avgScore: 'Avg Score',
    evaluatedCompetencies: 'Evaluated Competencies',
    avgAttempts: 'Avg Attempts',
    viewModule: 'View Module',
    // Training detail
    backToTraining: 'Back to Training',
    completionRate: 'Completion Rate',
    averageScore: 'Average Score',
    averageAttempts: 'Average Attempts',
    competencyPerformanceBreakdown: 'Competency Performance Breakdown',
    moduleBenchmark: 'Module Benchmark',
    assessmentOutcomes: 'Assessment Outcomes for',
    assessmentId: 'Assessment ID',
    timeTaken: 'Time Taken',
  },

  // ─── Assessments Page ─────────────────────────────────────────────────────
  assessments: {
    title: 'Assessment Results',
    subtitle: 'Review worker performance and spatial decision-making outcomes inside the AR simulator.',
    searchPlaceholder: 'Search by assessment ID or worker name (e.g. A-1042)…',
    moduleFilter: 'Module',
    allModules: 'All Modules',
    resultFilter: 'Result',
    allResults: 'All Results',
    passed: 'Passed',
    failed: 'Failed',
    noMatchTitle: 'No assessments match criteria',
    noMatchDesc: 'Try adjusting your filter settings to view completed evaluations.',
    resetFilters: 'Reset Filters',
    // Table
    assessmentId: 'Assessment ID',
    workerCol: 'Worker',
    moduleCol: 'Module',
    scoreCol: 'Score',
    resultCol: 'Result',
    responseTime: 'Response Time',
    dateCol: 'Date',
    actionCol: 'Action',
    // Detail page
    backToAssessments: 'Back to Assessments',
    evaluatedOn: 'Evaluated on',
    totalScore: 'Total Score',
    attempts: 'Attempts',
    attemptNo: 'Attempt #',
    criticalErrors: 'Critical Errors',
  },

  // ─── Certificates Page ────────────────────────────────────────────────────
  certificates: {
    title: 'Certificates Registry',
    subtitle: 'Manage issued worker safety credentials and official status verification.',
    searchPlaceholder: 'Search certificate ID, worker name (e.g. CERT-001)…',
    statusFilter: 'Status Filter',
    allStatuses: 'All Statuses',
    valid: 'Valid',
    expiringSoon: 'Expiring Soon',
    expired: 'Expired',
    revoked: 'Revoked',
    noFoundTitle: 'No certificates found',
    noFoundDesc: 'Adjust your search parameters or reset status filter.',
    resetFilter: 'Reset Filter',
    // Table
    certificateId: 'Certificate ID',
    workerCol: 'Worker',
    trainingModule: 'Training Module',
    scoreCol: 'Score',
    issuedDate: 'Issued Date',
    statusCol: 'Status',
    actionCol: 'Action',
    // Detail page
    backToCertificates: 'Back to Certificates',
    officialSafetyCredential: 'Official Safety Credential for',
    certifiedWorker: 'Certified Worker',
    assessmentScore: 'Assessment Score',
    credentialStatus: 'Credential Status',
    verificationHash: 'Verification Hash',
    issuedBy: 'Issued by',
    location: 'Location',
    issued: 'Issued',
  },

  // ─── Analytics Page ───────────────────────────────────────────────────────
  analytics: {
    title: 'Safety Analytics',
    subtitle: 'Understand workforce competency, failure patterns, and training performance at scale.',
    certEnrolmentTrendTitle: 'Workforce Certification & Enrolment Growth Trend',
    certEnrolmentTrendDesc: 'Monthly breakdown of certified personnel vs total enrolled',
    overallReadinessRate: 'Overall Readiness Rate',
    totalEnrolled: 'Total Enrolled',
    certifiedWorkers: 'Certified Workers',
    moduleComparisonTitle: 'Module Performance Comparison',
    metric: 'Metric',
    fireAndExplosion: 'Fire & Explosion',
    gasConfinedSpace: 'Gas / Confined Space',
    passRate: 'Pass Rate',
    averageScore: 'Average Score',
    completionRate: 'Completion Rate',
    avgAttemptsPerPass: 'Avg Attempts per Pass',
    officerInsight: 'Officer Insight',
    officerInsightText:
      'Gas / Confined Space Safety has a lower pass rate (72%) and higher attempt count (1.8), pointing to necessary refresher sessions on SCBA gear.',
    failurePatternsTitle: 'Primary Decision Failure Patterns',
    highRiskAreas: 'High Risk Areas',
    occurrences: 'occurrences',
    dataSource: 'Data synthesized from 345 spatial decision logs across Dhanbad & Bokaro safety trials.',
  },

  // ─── Settings Page ────────────────────────────────────────────────────────
  settings: {
    title: 'Settings',
    subtitle: 'Manage organization info, admin account profile, and dashboard preferences.',
    organizationSettings: 'Organization Settings',
    organizationName: 'Organization Name',
    organizationId: 'Organization ID',
    divisionHub: 'Division & Hub',
    accountProfile: 'Account Profile',
    officerName: 'Officer Name',
    designatedRole: 'Designated Role',
    contactEmail: 'Contact Email',
    preferences: 'Preferences',
    dashboardLanguage: 'Dashboard Language',
    savePreferences: 'Save Preferences',
    savedSuccess: '✓ Preferences updated successfully!',
    // Language options in settings
    langEnglish: 'English (United States)',
    langHindi: 'Hindi (हिन्दी)',
    langSantali: 'Santali (ᱥᱟᱱᱛᱟᱲᱤ)',
  },

  // ─── Certificate Verification (Public Page) ───────────────────────────────
  verify: {
    publicBadge: 'Public Credential Verification Service',
    title: '26041 Industrial Safety Registry',
    subtitle: 'Independent Verification Hub for Mining & Manufacturing Safety Competencies',
    // Valid state
    verified: '✓ CERTIFICATE VERIFIED',
    verifiedDesc: 'This certificate is authentic, active, and officially registered in the',
    database: 'database.',
    certificateId: 'Certificate ID',
    certifiedWorker: 'Certified Worker',
    trainingModule: 'Training Module',
    assessmentScore: 'Assessment Score',
    issuedDate: 'Issued Date',
    credentialStatus: 'Credential Status',
    verificationHash: 'Verification Hash',
    issuedBy: 'Issued by',
    locationLabel: 'Location',
    // Invalid state
    invalid: '✕ CERTIFICATE INVALID',
    invalidDesc: 'could not be verified in the 26041 Safety Platform registry.',
    securityWarning: 'Security Warning',
    securityWarningText:
      'This credential may be unissued, expired, revoked, or tampered with. Please report unverified credentials to the Safety Officer command desk.',
    // Navigation
    goToDashboard: 'Go to Admin Dashboard',
  },

  // ─── Dashboard Components ─────────────────────────────────────────────────
  dashboard: {
    // CompetencyBars
    commonWeakCompetencies: 'Common Weak Competencies',
    weakCompetenciesDesc: 'Identified high-frequency error zones across AR simulator decision trials',
    priorityActionRequired: 'Priority Action Required',
    failRate: 'Fail Rate',
    // ModulePerformance
    arModulePerformance: 'AR Module Performance',
    coreSimulatorMetrics: 'Core Training Simulator Metrics',
    allModules: 'All Modules',
    arCompletion: 'AR Completion',
    avgScore: 'AVG Score',
    passRate: 'Pass Rate',
    totalAttempts: 'total attempts',
    viewDetails: 'View Details',
    // CertificationChart
    officialCertification: 'Official Sub-Dist Certification',
    statusBreakdown: 'Status breakdown',
    certified: 'Certified',
    pending: 'Pending',
    expiringSoon: 'Expiring Soon',
    notCertified: 'Not Certified',
    workers: 'Workers',
    // ActivityTable
    recentARAssessments: 'Recent AR Assessments',
    liveFeedDesc: 'Live feed of completed training evaluations',
    viewAllAssessments: 'View All Assessments',
    workerCol: 'Worker',
    moduleCol: 'Module',
    scoreCol: 'Score',
    resultCol: 'Result',
    dateCol: 'Date',
  },

  // ─── Competency Breakdown (assessments component) ─────────────────────────
  competency: {
    detailedEvaluation: 'Detailed Competency Evaluation',
    passingThreshold: 'Passing Threshold',
    // [SAFETY-TERM] — Must be validated by domain expert before production
    hazardRecognition: 'Hazard Recognition',
    // [SAFETY-TERM]
    emergencyResponse: 'Emergency Response',
    // [SAFETY-TERM]
    equipmentSelection: 'Equipment Selection',
    // [SAFETY-TERM]
    evacuationDecision: 'Evacuation Decision',
    scoreLabel: 'Score',
  },

  // ─── Decision Timeline (assessments component) ────────────────────────────
  timeline: {
    title: 'AR Decision Log & Real-Time Action Sequence',
    subtitle: 'Step-by-step spatial decisions evaluated inside the AR headset simulator',
    spatialTrialEventsLogged: 'Spatial Trial Events Logged',
    correctDecision: '✓ Correct Decision',
    incorrectProcedure: '✕ Incorrect Procedure',
  },

  // ─── Badge labels (status values → display text) ──────────────────────────
  badge: {
    CERTIFIED: 'Certified',
    VALID: 'Valid',
    PASSED: 'Passed',
    PENDING: 'Pending',
    EXPIRING: 'Expiring',
    EXPIRING_SOON: 'Expiring Soon',
    NOT_CERTIFIED: 'Not Certified',
    EXPIRED: 'Expired',
    FAILED: 'Failed',
    AT_RISK: 'At Risk',
    REVOKED: 'Revoked',
  },

  // ─── Empty states ─────────────────────────────────────────────────────────
  empty: {
    noAssessments: 'No assessments match criteria',
    noAssessmentsDesc: 'Try adjusting your filter settings to view completed evaluations.',
    noCertificates: 'No certificates found',
    noCertificatesDesc: 'Adjust your search parameters or reset status filter.',
  },

  // ─── Language Selector ────────────────────────────────────────────────────
  langSelector: {
    label: 'Language',
    en: 'English',
    hi: 'हिन्दी',
    sat: 'Santali',
  },
};

export type Translations = typeof en;
export default en;
