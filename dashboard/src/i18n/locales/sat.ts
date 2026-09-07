/**
 * Santali (sat) — ᱥᱟᱱᱛᱟᱲᱤ — Ol Chiki script
 *
 * ⚠️ IMPORTANT NOTICE — UNTRANSLATED / PLACEHOLDER STRINGS ⚠️
 *
 * Santali translations require a native speaker and a certified safety domain
 * expert to review EVERY term, especially safety-critical terminology.
 *
 * Strings currently marked with [REVIEW NEEDED] must NOT be used in production
 * without expert validation. English fallbacks are provided in comments.
 *
 * Contact: Santali community language board or a qualified translator familiar
 * with occupational safety terminology in Jharkhand.
 *
 * Script note: Ol Chiki (ᱥᱟᱱᱛᱟᱲᱤ) is the official script for Santali.
 * Latin transliterations are also acceptable as interim fallbacks where
 * Ol Chiki rendering is not confirmed.
 */
import type { Translations } from './en';

const sat: Translations = {
  common: {
    save: 'ᱥᱟᱺᱪᱟᱣ',               // [REVIEW NEEDED] Save
    cancel: 'ᱨᱚᱲ ᱦᱚᱲ',             // [REVIEW NEEDED] Cancel
    reset: 'ᱨᱤᱥᱮᱴ',                // [REVIEW NEEDED] Reset
    view: 'ᱧᱮᱞ',                    // [REVIEW NEEDED] View
    back: 'ᱢᱮᱛᱟᱜ',                 // [REVIEW NEEDED] Back
    loading: 'ᱞᱚᱰᱤᱝ…',             // [REVIEW NEEDED] Loading
    noData: 'ᱫᱮᱛᱟ ᱵᱟᱝ ᱮᱢ',         // [REVIEW NEEDED] No data available
    yes: 'ᱦᱟᱹ',                     // [REVIEW NEEDED] Yes
    no: 'ᱵᱟᱝ',                      // [REVIEW NEEDED] No
    all: 'ᱢᱤᱫᱩᱣᱟᱜ',                // [REVIEW NEEDED] All
    search: 'ᱵᱷᱟᱞ ᱢᱮᱱᱟᱜ',          // [REVIEW NEEDED] Search
    filter: 'ᱯᱷᱤᱞᱴᱟᱨ',              // [REVIEW NEEDED] Filter
    actions: 'ᱠᱟᱹᱢᱤ',               // [REVIEW NEEDED] Actions
    viewDetails: 'ᱵᱤᱵᱚᱨᱚᱱ ᱧᱮᱞ',    // [REVIEW NEEDED] View Details
    score: 'ᱥᱠᱚᱨ',                  // [REVIEW NEEDED] Score
    status: 'ᱦᱤᱥᱟᱵ',               // [REVIEW NEEDED] Status
    date: 'ᱛᱟᱨᱤᱠ',                  // [REVIEW NEEDED] Date
    result: 'ᱯᱷᱚᱞ',                 // [REVIEW NEEDED] Result
    module: 'ᱢᱳᱰᱩᱞ',               // [REVIEW NEEDED] Module
    worker: 'ᱠᱟᱢᱤ',                 // [REVIEW NEEDED] Worker
  },

  nav: {
    overview: 'ᱵᱷᱟᱞᱚᱨᱚ',            // [REVIEW NEEDED] Overview
    workers: 'ᱠᱟᱢᱤ',               // [REVIEW NEEDED] Workers
    trainingModules: 'ᱛᱮᱦᱮᱫ ᱢᱳᱰᱩᱞ', // [REVIEW NEEDED] Training Modules
    assessments: 'ᱢᱩᱞᱤᱡᱟᱹᱱ',        // [REVIEW NEEDED] Assessments
    certificates: 'ᱠᱟᱜᱚᱡ',          // [REVIEW NEEDED] Certificates
    analytics: 'ᱵᱤᱥᱞᱮᱥᱚᱱ',         // [REVIEW NEEDED] Analytics
    settings: 'ᱥᱮᱴᱤᱝ',              // [REVIEW NEEDED] Settings
    operations: 'ᱠᱟᱹᱢᱤᱭᱟᱹᱭ',        // [REVIEW NEEDED] Operations
    platformSubtitle: 'Industrial Safety Control', // [REVIEW NEEDED]
    jharkhandHub: 'Jharkhand Safety Hub',          // [REVIEW NEEDED]
  },

  topbar: {
    searchPlaceholder: 'Search workers, certificate IDs, assessments (e.g. W-001, CERT-001)…', // [REVIEW NEEDED]
    arSyncReady: 'AR Sync Ready',           // [REVIEW NEEDED]
    verifyCertificate: 'ᱠᱟᱜᱚᱡ ᱥᱟᱵᱤᱛ',   // [REVIEW NEEDED] Verify Certificate
    language: 'ᱵᱽᱟᱥᱟ',                   // [REVIEW NEEDED] Language
  },

  overview: {
    title: 'ᱠᱟᱢᱤ ᱥᱩᱨᱩᱠᱥᱚᱱ ᱵᱷᱟᱞᱚᱨᱚ',   // [REVIEW NEEDED] Workforce Safety Overview
    subtitle: 'Operational readiness monitoring across mining & industrial training modules in Jharkhand.', // [REVIEW NEEDED]
    overallSafetyReadiness: 'ᱥᱟᱢᱟᱱ ᱥᱩᱨᱩᱠᱥᱚᱱ ᱛᱮᱭᱟᱨᱤ', // [REVIEW NEEDED] Overall Safety Readiness
    certifiedPersonnel: 'ᱯᱨᱚᱢᱟᱹᱱ ᱠᱟᱢᱤ',  // [REVIEW NEEDED] Certified Personnel
    pendingTraining: 'ᱛᱮᱦᱮᱫ ᱰᱟᱜ',       // [REVIEW NEEDED] Pending Training
    atRisk: 'ᱡᱚᱠᱷᱤᱢ ᱢᱮᱱᱮᱫ',            // [REVIEW NEEDED] At Risk (Re-eval)
    trainingModules: 'ᱛᱮᱦᱮᱫ ᱢᱳᱰᱩᱞ',     // [REVIEW NEEDED] Training Modules
    manageWorkers: 'ᱠᱟᱢᱤ ᱮᱢᱟᱱ',         // [REVIEW NEEDED] Manage Workers
  },

  workers: {
    title: 'ᱠᱟᱢᱤ ᱛᱷᱤᱠᱟᱱᱟ',             // [REVIEW NEEDED] Workers Directory
    subtitle: 'Manage industrial personnel enrolled in AR safety training across Dhanbad & Bokaro sectors.', // [REVIEW NEEDED]
    addWorker: 'ᱠᱟᱢᱤ ᱪᱚᱞᱟᱣ',          // [REVIEW NEEDED] Add Worker
    searchPlaceholder: 'Search worker by name, ID (e.g. Ramesh, W-001)…', // [REVIEW NEEDED]
    role: 'ᱠᱟᱹᱢᱤ',                    // [REVIEW NEEDED] Role
    allRoles: 'ᱢᱤᱫᱩᱣᱟᱜ ᱠᱟᱹᱢᱤ',       // [REVIEW NEEDED] All Roles
    allStatuses: 'ᱢᱤᱫᱩᱣᱟᱜ ᱦᱤᱥᱟᱵ',    // [REVIEW NEEDED] All Statuses
    statusLabel: 'ᱦᱤᱥᱟᱵ',             // [REVIEW NEEDED] Status
    workerId: 'ᱠᱟᱢᱤ ID',              // [REVIEW NEEDED] Worker ID
    nameAndRole: 'ᱱᱟᱢ ᱟᱨ ᱠᱟᱹᱢᱤ',    // [REVIEW NEEDED] Name & Role
    locationDept: 'ᱡᱟᱭᱟᱜ / ᱵᱤᱵᱷᱟᱜ', // [REVIEW NEEDED] Location / Dept
    language: 'ᱵᱽᱟᱥᱟ',               // [REVIEW NEEDED] Language
    progress: 'ᱵᱟᱰᱛᱤ',               // [REVIEW NEEDED] Progress
    latestScore: 'ᱟᱹᱥᱤᱞ ᱥᱠᱚᱨ',       // [REVIEW NEEDED] Latest Score
    backToWorkers: 'Back to Workers',   // [REVIEW NEEDED]
    locationAndDept: 'ᱡᱟᱭᱟᱜ ᱟᱨ ᱵᱤᱵᱷᱟᱜ', // [REVIEW NEEDED] Location & Dept
    languageAndEnrolled: 'ᱵᱽᱟᱥᱟ ᱟᱨ ᱱᱟᱢᱟᱹᱝ', // [REVIEW NEEDED]
    enrolled: 'ᱱᱟᱢᱟᱹᱝ',               // [REVIEW NEEDED] Enrolled
    certificationStatus: 'ᱯᱨᱚᱢᱟᱹᱱ ᱦᱤᱥᱟᱵ', // [REVIEW NEEDED] Certification Status
    trainingProgress: 'ᱛᱮᱦᱮᱫ ᱵᱟᱰᱛᱤ', // [REVIEW NEEDED] Training Progress
    modulesCompleted: 'ᱢᱳᱰᱩᱞ ᱦᱤᱡᱩᱜ', // [REVIEW NEEDED] Modules Completed
    workerCertificates: 'ᱠᱟᱢᱤ ᱠᱟᱜᱚᱡ', // [REVIEW NEEDED] Worker Certificates
    noCertificateYet: 'No certificate issued yet for this worker.', // [REVIEW NEEDED]
    assessmentHistory: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ᱤᱛᱤᱦᱟᱥ', // [REVIEW NEEDED] Assessment History
    attempt: 'ᱯᱷᱚᱠᱚᱨ',               // [REVIEW NEEDED] Attempt
    viewCertificate: 'ᱠᱟᱜᱚᱡ ᱧᱮᱞ',    // [REVIEW NEEDED] View Certificate
    workerProfile: 'ᱠᱟᱢᱤ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ', // [REVIEW NEEDED] Worker Profile
    passed: 'ᱵᱮᱸᱫᱩᱜ',                 // [REVIEW NEEDED] Passed
    fireExplosionSafety: 'Fire & Explosion Safety', // [SAFETY-TERM] [REVIEW NEEDED]
    fireExplosionSubtitle: 'Hazard identification & evacuation', // [SAFETY-TERM] [REVIEW NEEDED]
    gasConfinedSafety: 'Gas / Confined Space Safety', // [SAFETY-TERM] [REVIEW NEEDED]
    gasConfinedSubtitle: 'Toxic gas leak & SCBA procedures', // [SAFETY-TERM] [REVIEW NEEDED]
  },

  addWorker: {
    modalTitle: 'ᱱᱤᱛᱩᱣ ᱠᱟᱢᱤ ᱱᱟᱢᱟᱹᱝ',   // [REVIEW NEEDED] Enroll New Industrial Worker
    fullName: 'ᱯᱩᱨᱟ ᱱᱟᱢ',             // [REVIEW NEEDED] Full Name
    namePlaceholder: 'e.g. Birsa Munda',
    roleAndTrade: 'ᱠᱟᱹᱢᱤ / ᱡᱮᱫᱩ',     // [REVIEW NEEDED] Role / Trade
    preferredLanguage: 'ᱢᱚᱱᱮ ᱵᱽᱟᱥᱟ',   // [REVIEW NEEDED] Preferred Language
    department: 'ᱵᱤᱵᱷᱟᱜ',              // [REVIEW NEEDED] Department
    locationHub: 'ᱡᱟᱭᱟᱜ ᱦᱩᱵ',         // [REVIEW NEEDED] Location Hub
    enrollWorker: 'ᱠᱟᱢᱤ ᱱᱟᱢᱟᱹᱝ',       // [REVIEW NEEDED] Enroll Worker
    miner: 'ᱠᱷᱟᱱᱤ ᱠᱟᱢᱤ',             // [REVIEW NEEDED] Miner
    operator: 'ᱪᱟᱞᱟᱣ',               // [REVIEW NEEDED] Operator
    technician: 'ᱛᱩᱠᱤᱯ',              // [REVIEW NEEDED] Technician
    electrician: 'ᱵᱤᱫᱩᱛ ᱠᱟᱢᱤ',        // [REVIEW NEEDED] Electrician
    safetyInspector: 'Safety Inspector', // [SAFETY-TERM] [REVIEW NEEDED]
  },

  training: {
    title: 'ᱛᱮᱦᱮᱫ ᱢᱳᱰᱩᱞ',             // [REVIEW NEEDED] Training Modules
    subtitle: 'AR-Based Vocational Safety Modules designed for Jharkhand\'s Mining & Manufacturing Sector.', // [REVIEW NEEDED]
    attempts: 'ᱯᱷᱚᱠᱚᱨ',               // [REVIEW NEEDED] Attempts
    completion: 'ᱦᱤᱡᱩᱜ',              // [REVIEW NEEDED] Completion
    passRate: 'ᱵᱮᱸᱫᱩᱜ ᱫᱚᱨ',           // [REVIEW NEEDED] Pass Rate
    avgScore: 'ᱳᱥᱚᱛ ᱥᱠᱚᱨ',            // [REVIEW NEEDED] Avg Score
    evaluatedCompetencies: 'Evaluated Competencies', // [SAFETY-TERM] [REVIEW NEEDED]
    avgAttempts: 'ᱳᱥᱚᱛ ᱯᱷᱚᱠᱚᱨ',       // [REVIEW NEEDED] Avg Attempts
    viewModule: 'ᱢᱳᱰᱩᱞ ᱧᱮᱞ',         // [REVIEW NEEDED] View Module
    backToTraining: 'Back to Training', // [REVIEW NEEDED]
    completionRate: 'ᱦᱤᱡᱩᱜ ᱫᱚᱨ',       // [REVIEW NEEDED] Completion Rate
    averageScore: 'ᱳᱥᱚᱛ ᱥᱠᱚᱨ',        // [REVIEW NEEDED] Average Score
    averageAttempts: 'ᱳᱥᱚᱛ ᱯᱷᱚᱠᱚᱨ',   // [REVIEW NEEDED] Average Attempts
    competencyPerformanceBreakdown: 'Competency Performance Breakdown', // [SAFETY-TERM] [REVIEW NEEDED]
    moduleBenchmark: 'Module Benchmark', // [REVIEW NEEDED]
    assessmentOutcomes: 'Assessment Outcomes for', // [REVIEW NEEDED]
    assessmentId: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ID',       // [REVIEW NEEDED] Assessment ID
    timeTaken: 'ᱞᱮᱠᱟ ᱥᱟᱢᱟᱭ',          // [REVIEW NEEDED] Time Taken
  },

  assessments: {
    title: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ᱯᱷᱚᱞ',           // [REVIEW NEEDED] Assessment Results
    subtitle: 'Review worker performance and spatial decision-making outcomes inside the AR simulator.', // [REVIEW NEEDED]
    searchPlaceholder: 'Search by assessment ID or worker name (e.g. A-1042)…', // [REVIEW NEEDED]
    moduleFilter: 'ᱢᱳᱰᱩᱞ',             // [REVIEW NEEDED] Module
    allModules: 'ᱢᱤᱫᱩᱣᱟᱜ ᱢᱳᱰᱩᱞ',     // [REVIEW NEEDED] All Modules
    resultFilter: 'ᱯᱷᱚᱞ',              // [REVIEW NEEDED] Result
    allResults: 'ᱢᱤᱫᱩᱣᱟᱜ ᱯᱷᱚᱞ',       // [REVIEW NEEDED] All Results
    passed: 'ᱵᱮᱸᱫᱩᱜ',                 // [REVIEW NEEDED] Passed
    failed: 'ᱵᱟᱝ ᱵᱮᱸᱫᱩᱜ',            // [REVIEW NEEDED] Failed
    noMatchTitle: 'No assessments match criteria', // [REVIEW NEEDED]
    noMatchDesc: 'Try adjusting your filter settings to view completed evaluations.', // [REVIEW NEEDED]
    resetFilters: 'ᱯᱷᱤᱞᱴᱟᱨ ᱨᱤᱥᱮᱴ',    // [REVIEW NEEDED] Reset Filters
    assessmentId: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ID',       // [REVIEW NEEDED]
    workerCol: 'ᱠᱟᱢᱤ',                // [REVIEW NEEDED] Worker
    moduleCol: 'ᱢᱳᱰᱩᱞ',              // [REVIEW NEEDED] Module
    scoreCol: 'ᱥᱠᱚᱨ',                 // [REVIEW NEEDED] Score
    resultCol: 'ᱯᱷᱚᱞ',                // [REVIEW NEEDED] Result
    responseTime: 'ᱡᱚᱵᱟᱵ ᱥᱟᱢᱟᱭ',      // [REVIEW NEEDED] Response Time
    dateCol: 'ᱛᱟᱨᱤᱠ',                 // [REVIEW NEEDED] Date
    actionCol: 'ᱠᱟᱹᱢᱤ',               // [REVIEW NEEDED] Action
    backToAssessments: 'Back to Assessments', // [REVIEW NEEDED]
    evaluatedOn: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ᱛᱟᱨᱤᱠ',   // [REVIEW NEEDED] Evaluated on
    totalScore: 'ᱡᱤᱱᱟᱹᱭ ᱥᱠᱚᱨ',         // [REVIEW NEEDED] Total Score
    attempts: 'ᱯᱷᱚᱠᱚᱨ',               // [REVIEW NEEDED] Attempts
    attemptNo: 'ᱯᱷᱚᱠᱚᱨ #',            // [REVIEW NEEDED] Attempt #
    criticalErrors: 'ᱜᱟᱱ ᱛᱷᱩᱞ',       // [REVIEW NEEDED] Critical Errors
  },

  certificates: {
    title: 'ᱠᱟᱜᱚᱡ ᱨᱮᱡᱤᱥᱴᱨᱤ',          // [REVIEW NEEDED] Certificates Registry
    subtitle: 'Manage issued worker safety credentials and official status verification.', // [REVIEW NEEDED]
    searchPlaceholder: 'Search certificate ID, worker name (e.g. CERT-001)…', // [REVIEW NEEDED]
    statusFilter: 'ᱦᱤᱥᱟᱵ ᱯᱷᱤᱞᱴᱟᱨ',     // [REVIEW NEEDED] Status Filter
    allStatuses: 'ᱢᱤᱫᱩᱣᱟᱜ ᱦᱤᱥᱟᱵ',     // [REVIEW NEEDED] All Statuses
    valid: 'ᱦᱳᱞ',                     // [REVIEW NEEDED] Valid
    expiringSoon: 'ᱡᱚᱞᱫᱤ ᱥᱟᱢᱟᱭ',       // [REVIEW NEEDED] Expiring Soon
    expired: 'ᱥᱟᱢᱟᱭ ᱦᱩᱭᱩᱜ',           // [REVIEW NEEDED] Expired
    revoked: 'ᱨᱚᱠᱷᱚᱱ',               // [REVIEW NEEDED] Revoked
    noFoundTitle: 'No certificates found', // [REVIEW NEEDED]
    noFoundDesc: 'Adjust your search parameters or reset status filter.', // [REVIEW NEEDED]
    resetFilter: 'ᱯᱷᱤᱞᱴᱟᱨ ᱨᱤᱥᱮᱴ',      // [REVIEW NEEDED] Reset Filter
    certificateId: 'ᱠᱟᱜᱚᱡ ID',        // [REVIEW NEEDED] Certificate ID
    workerCol: 'ᱠᱟᱢᱤ',                // [REVIEW NEEDED] Worker
    trainingModule: 'ᱛᱮᱦᱮᱫ ᱢᱳᱰᱩᱞ',    // [REVIEW NEEDED] Training Module
    scoreCol: 'ᱥᱠᱚᱨ',                 // [REVIEW NEEDED] Score
    issuedDate: 'ᱡᱟᱨᱤ ᱛᱟᱨᱤᱠ',          // [REVIEW NEEDED] Issued Date
    statusCol: 'ᱦᱤᱥᱟᱵ',               // [REVIEW NEEDED] Status
    actionCol: 'ᱠᱟᱹᱢᱤ',               // [REVIEW NEEDED] Action
    backToCertificates: 'Back to Certificates', // [REVIEW NEEDED]
    officialSafetyCredential: 'Official Safety Credential for', // [SAFETY-TERM] [REVIEW NEEDED]
    certifiedWorker: 'ᱯᱨᱚᱢᱟᱹᱱ ᱠᱟᱢᱤ',  // [REVIEW NEEDED] Certified Worker
    assessmentScore: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ᱥᱠᱚᱨ', // [REVIEW NEEDED] Assessment Score
    credentialStatus: 'ᱠᱨᱮᱰᱮᱱᱥᱤᱭᱟᱹᱞ ᱦᱤᱥᱟᱵ', // [REVIEW NEEDED]
    verificationHash: 'ᱥᱟᱵᱤᱛ ᱦᱮᱥ',    // [REVIEW NEEDED] Verification Hash
    issuedBy: 'ᱡᱟᱨᱤᱠᱟᱨᱩ',             // [REVIEW NEEDED] Issued by
    location: 'ᱡᱟᱭᱟᱜ',               // [REVIEW NEEDED] Location
    issued: 'ᱡᱟᱨᱤ',                   // [REVIEW NEEDED] Issued
  },

  analytics: {
    title: 'ᱥᱩᱨᱩᱠᱥᱚᱱ ᱵᱤᱥᱞᱮᱥᱚᱱ',       // [REVIEW NEEDED] Safety Analytics
    subtitle: 'Understand workforce competency, failure patterns, and training performance at scale.', // [REVIEW NEEDED]
    certEnrolmentTrendTitle: 'Workforce Certification & Enrolment Growth Trend', // [REVIEW NEEDED]
    certEnrolmentTrendDesc: 'Monthly breakdown of certified personnel vs total enrolled', // [REVIEW NEEDED]
    overallReadinessRate: 'Overall Readiness Rate', // [REVIEW NEEDED]
    totalEnrolled: 'ᱡᱤᱱᱟᱹᱭ ᱱᱟᱢᱟᱹᱝ',   // [REVIEW NEEDED] Total Enrolled
    certifiedWorkers: 'ᱯᱨᱚᱢᱟᱹᱱ ᱠᱟᱢᱤ',  // [REVIEW NEEDED] Certified Workers
    moduleComparisonTitle: 'Module Performance Comparison', // [REVIEW NEEDED]
    metric: 'ᱢᱮᱴᱨᱤᱠ',                // [REVIEW NEEDED] Metric
    fireAndExplosion: 'Fire & Explosion', // [SAFETY-TERM] [REVIEW NEEDED]
    gasConfinedSpace: 'Gas / Confined Space', // [SAFETY-TERM] [REVIEW NEEDED]
    passRate: 'ᱵᱮᱸᱫᱩᱜ ᱫᱚᱨ',           // [REVIEW NEEDED] Pass Rate
    averageScore: 'ᱳᱥᱚᱛ ᱥᱠᱚᱨ',        // [REVIEW NEEDED] Average Score
    completionRate: 'ᱦᱤᱡᱩᱜ ᱫᱚᱨ',       // [REVIEW NEEDED] Completion Rate
    avgAttemptsPerPass: 'Avg Attempts per Pass', // [REVIEW NEEDED]
    officerInsight: 'Officer Insight',  // [REVIEW NEEDED]
    officerInsightText:
      'Gas / Confined Space Safety has a lower pass rate (72%) and higher attempt count (1.8), pointing to necessary refresher sessions on SCBA gear.', // [SAFETY-TERM] [REVIEW NEEDED]
    failurePatternsTitle: 'Primary Decision Failure Patterns', // [REVIEW NEEDED]
    highRiskAreas: 'High Risk Areas',   // [SAFETY-TERM] [REVIEW NEEDED]
    occurrences: 'ᱜᱷᱚᱴᱱᱟ',            // [REVIEW NEEDED] occurrences
    dataSource: 'Data synthesized from 345 spatial decision logs across Dhanbad & Bokaro safety trials.', // [REVIEW NEEDED]
  },

  settings: {
    title: 'ᱥᱮᱴᱤᱝ',                   // [REVIEW NEEDED] Settings
    subtitle: 'Manage organization info, admin account profile, and dashboard preferences.', // [REVIEW NEEDED]
    organizationSettings: 'ᱵᱷᱚᱡ ᱥᱮᱴᱤᱝ', // [REVIEW NEEDED] Organization Settings
    organizationName: 'ᱵᱷᱚᱡ ᱱᱟᱢ',      // [REVIEW NEEDED] Organization Name
    organizationId: 'ᱵᱷᱚᱡ ID',         // [REVIEW NEEDED] Organization ID
    divisionHub: 'ᱵᱤᱵᱷᱟᱜ ᱟᱨ ᱦᱩᱵ',     // [REVIEW NEEDED] Division & Hub
    accountProfile: 'ᱠᱷᱟᱛᱟ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ', // [REVIEW NEEDED] Account Profile
    officerName: 'ᱚᱯᱷᱤᱥᱟᱨ ᱱᱟᱢ',        // [REVIEW NEEDED] Officer Name
    designatedRole: 'ᱱᱤᱭᱩᱠᱛ ᱠᱟᱹᱢᱤ',     // [REVIEW NEEDED] Designated Role
    contactEmail: 'ᱥᱚᱝᱯᱚᱨᱠ ᱤᱢᱮᱞ',      // [REVIEW NEEDED] Contact Email
    preferences: 'ᱯᱷᱚᱠᱟ',              // [REVIEW NEEDED] Preferences
    dashboardLanguage: 'ᱰᱮᱥᱵᱳᱨᱰ ᱵᱽᱟᱥᱟ', // [REVIEW NEEDED] Dashboard Language
    savePreferences: 'ᱯᱷᱚᱠᱟ ᱥᱟᱺᱪᱟᱣ',   // [REVIEW NEEDED] Save Preferences
    savedSuccess: '✓ Preferences updated successfully!', // [REVIEW NEEDED]
    langEnglish: 'English (United States)',
    langHindi: 'Hindi (हिन्दी)',
    langSantali: 'Santali (ᱥᱟᱱᱛᱟᱲᱤ)',
  },

  verify: {
    publicBadge: 'Public Credential Verification Service', // [REVIEW NEEDED]
    title: '26041 Industrial Safety Registry',
    subtitle: 'Independent Verification Hub for Mining & Manufacturing Safety Competencies', // [REVIEW NEEDED]
    verified: '✓ ᱠᱟᱜᱚᱡ ᱥᱟᱵᱤᱛ',        // [REVIEW NEEDED] Certificate Verified
    verifiedDesc: 'This certificate is authentic, active, and officially registered in the', // [REVIEW NEEDED]
    database: 'database.',
    certificateId: 'ᱠᱟᱜᱚᱡ ID',        // [REVIEW NEEDED]
    certifiedWorker: 'ᱯᱨᱚᱢᱟᱹᱱ ᱠᱟᱢᱤ',  // [REVIEW NEEDED]
    trainingModule: 'ᱛᱮᱦᱮᱫ ᱢᱳᱰᱩᱞ',    // [REVIEW NEEDED]
    assessmentScore: 'ᱢᱩᱞᱤᱡᱟᱹᱱ ᱥᱠᱚᱨ', // [REVIEW NEEDED]
    issuedDate: 'ᱡᱟᱨᱤ ᱛᱟᱨᱤᱠ',          // [REVIEW NEEDED]
    credentialStatus: 'ᱠᱨᱮᱰᱮᱱᱥᱤᱭᱟᱹᱞ ᱦᱤᱥᱟᱵ', // [REVIEW NEEDED]
    verificationHash: 'ᱥᱟᱵᱤᱛ ᱦᱮᱥ',    // [REVIEW NEEDED]
    issuedBy: 'ᱡᱟᱨᱤᱠᱟᱨᱩ',             // [REVIEW NEEDED]
    locationLabel: 'ᱡᱟᱭᱟᱜ',            // [REVIEW NEEDED]
    invalid: '✕ ᱠᱟᱜᱚᱡ ᱟᱹᱬᱤᱭᱟᱹ ᱵᱟᱝ',  // [REVIEW NEEDED] Certificate Invalid
    invalidDesc: '26041 Safety Platform registry ᱨᱮ ᱥᱟᱵᱤᱛ ᱵᱟᱝ ᱠᱮᱫᱟ।', // [REVIEW NEEDED]
    securityWarning: 'Security Warning', // [SAFETY-TERM] [REVIEW NEEDED]
    securityWarningText:
      'This credential may be unissued, expired, revoked, or tampered with. Please report unverified credentials to the Safety Officer command desk.', // [SAFETY-TERM] [REVIEW NEEDED]
    goToDashboard: 'Admin Dashboard ᱨᱮ ᱪᱚᱞ', // [REVIEW NEEDED]
  },

  dashboard: {
    commonWeakCompetencies: 'Common Weak Competencies', // [SAFETY-TERM] [REVIEW NEEDED]
    weakCompetenciesDesc: 'Identified high-frequency error zones across AR simulator decision trials', // [REVIEW NEEDED]
    priorityActionRequired: 'Priority Action Required', // [REVIEW NEEDED]
    failRate: 'ᱵᱟᱝ ᱵᱮᱸᱫᱩᱜ ᱫᱚᱨ',     // [REVIEW NEEDED] Fail Rate
    arModulePerformance: 'AR ᱢᱳᱰᱩᱞ ᱯᱨᱚᱰ', // [REVIEW NEEDED]
    coreSimulatorMetrics: 'Core Training Simulator Metrics', // [REVIEW NEEDED]
    allModules: 'ᱢᱤᱫᱩᱣᱟᱜ ᱢᱳᱰᱩᱞ',     // [REVIEW NEEDED] All Modules
    arCompletion: 'AR ᱦᱤᱡᱩᱜ',         // [REVIEW NEEDED] AR Completion
    avgScore: 'ᱳᱥᱚᱛ ᱥᱠᱚᱨ',            // [REVIEW NEEDED] AVG Score
    passRate: 'ᱵᱮᱸᱫᱩᱜ ᱫᱚᱨ',           // [REVIEW NEEDED] Pass Rate
    totalAttempts: 'ᱡᱤᱱᱟᱹᱭ ᱯᱷᱚᱠᱚᱨ',   // [REVIEW NEEDED] total attempts
    viewDetails: 'ᱵᱤᱵᱚᱨᱚᱱ ᱧᱮᱞ',       // [REVIEW NEEDED] View Details
    officialCertification: 'Official Sub-Dist Certification', // [REVIEW NEEDED]
    statusBreakdown: 'ᱦᱤᱥᱟᱵ ᱵᱤᱵᱚᱨᱚᱱ', // [REVIEW NEEDED] Status breakdown
    certified: 'ᱯᱨᱚᱢᱟᱹᱱ',              // [REVIEW NEEDED] Certified
    pending: 'ᱰᱟᱜ',                   // [REVIEW NEEDED] Pending
    expiringSoon: 'ᱡᱚᱞᱫᱤ ᱥᱟᱢᱟᱭ',      // [REVIEW NEEDED] Expiring Soon
    notCertified: 'ᱵᱟᱝ ᱯᱨᱚᱢᱟᱹᱱ',      // [REVIEW NEEDED] Not Certified
    workers: 'ᱠᱟᱢᱤ',                  // [REVIEW NEEDED] Workers
    recentARAssessments: 'Recent AR Assessments', // [REVIEW NEEDED]
    liveFeedDesc: 'Live feed of completed training evaluations', // [REVIEW NEEDED]
    viewAllAssessments: 'ᱢᱤᱫᱩᱣᱟᱜ ᱢᱩᱞᱤᱡᱟᱹᱱ', // [REVIEW NEEDED] View All Assessments
    workerCol: 'ᱠᱟᱢᱤ',                // [REVIEW NEEDED]
    moduleCol: 'ᱢᱳᱰᱩᱞ',              // [REVIEW NEEDED]
    scoreCol: 'ᱥᱠᱚᱨ',                 // [REVIEW NEEDED]
    resultCol: 'ᱯᱷᱚᱞ',                // [REVIEW NEEDED]
    dateCol: 'ᱛᱟᱨᱤᱠ',                 // [REVIEW NEEDED]
  },

  competency: {
    detailedEvaluation: 'Detailed Competency Evaluation', // [SAFETY-TERM] [REVIEW NEEDED]
    passingThreshold: 'Passing Threshold',               // [REVIEW NEEDED]
    hazardRecognition: 'Hazard Recognition',             // [SAFETY-TERM] [REVIEW NEEDED]
    emergencyResponse: 'Emergency Response',             // [SAFETY-TERM] [REVIEW NEEDED]
    equipmentSelection: 'Equipment Selection',           // [SAFETY-TERM] [REVIEW NEEDED]
    evacuationDecision: 'Evacuation Decision',           // [SAFETY-TERM] [REVIEW NEEDED]
    scoreLabel: 'ᱥᱠᱚᱨ',                               // [REVIEW NEEDED] Score
  },

  timeline: {
    title: 'AR Decision Log & Real-Time Action Sequence', // [REVIEW NEEDED]
    subtitle: 'Step-by-step spatial decisions evaluated inside the AR headset simulator', // [REVIEW NEEDED]
    spatialTrialEventsLogged: 'Spatial Trial Events Logged', // [REVIEW NEEDED]
    correctDecision: '✓ Correct Decision',               // [SAFETY-TERM] [REVIEW NEEDED]
    incorrectProcedure: '✕ Incorrect Procedure',         // [SAFETY-TERM] [REVIEW NEEDED]
  },

  badge: {
    CERTIFIED: 'ᱯᱨᱚᱢᱟᱹᱱ',             // [REVIEW NEEDED] Certified
    VALID: 'ᱦᱳᱞ',                      // [REVIEW NEEDED] Valid
    PASSED: 'ᱵᱮᱸᱫᱩᱜ',                 // [REVIEW NEEDED] Passed
    PENDING: 'ᱰᱟᱜ',                   // [REVIEW NEEDED] Pending
    EXPIRING: 'ᱥᱟᱢᱟᱭ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ',   // [REVIEW NEEDED] Expiring
    EXPIRING_SOON: 'ᱡᱚᱞᱫᱤ ᱥᱟᱢᱟᱭ',    // [REVIEW NEEDED] Expiring Soon
    NOT_CERTIFIED: 'ᱵᱟᱝ ᱯᱨᱚᱢᱟᱹᱱ',    // [REVIEW NEEDED] Not Certified
    EXPIRED: 'ᱥᱟᱢᱟᱭ ᱦᱩᱭᱩᱜ',          // [REVIEW NEEDED] Expired
    FAILED: 'ᱵᱟᱝ ᱵᱮᱸᱫᱩᱜ',            // [REVIEW NEEDED] Failed
    AT_RISK: 'ᱡᱚᱠᱷᱤᱢ ᱢᱮᱱᱮᱫ',          // [REVIEW NEEDED] At Risk
    REVOKED: 'ᱨᱚᱠᱷᱚᱱ',               // [REVIEW NEEDED] Revoked
  },

  empty: {
    noAssessments: 'No assessments match criteria',               // [REVIEW NEEDED]
    noAssessmentsDesc: 'Try adjusting your filter settings to view completed evaluations.', // [REVIEW NEEDED]
    noCertificates: 'No certificates found',                      // [REVIEW NEEDED]
    noCertificatesDesc: 'Adjust your search parameters or reset status filter.',          // [REVIEW NEEDED]
  },

  langSelector: {
    label: 'ᱵᱽᱟᱥᱟ',                   // [REVIEW NEEDED] Language
    en: 'English',
    hi: 'हिन्दी',
    sat: 'ᱥᱟᱱᱛᱟᱲᱤ',
  },
};

export default sat;
