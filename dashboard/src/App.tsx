import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { I18nProvider } from './i18n/i18n';

import { OverviewPage } from './pages/OverviewPage';
import { WorkersPage } from './pages/WorkersPage';
import { WorkerDetailPage } from './pages/WorkerDetailPage';
import { TrainingPage } from './pages/TrainingPage';
import { TrainingDetailPage } from './pages/TrainingDetailPage';
import { AssessmentsPage } from './pages/AssessmentsPage';
import { AssessmentDetailPage } from './pages/AssessmentDetailPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { CertificateDetailPage } from './pages/CertificateDetailPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';

// Dashboard Layout Wrapper
const DashboardLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F8F6] text-[#17211F] flex">

      {/* Sidebar Navigation */}
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        <Topbar onMenuClick={() => setMobileMenuOpen(true)} />
        <div className="flex-1 pb-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export function App() {
  return (
    <I18nProvider>
      <Router>
        <Routes>
          {/* Public Standalone Verification Route (No Dashboard Layout) */}
          <Route path="/verify/:certificateId" element={<VerifyCertificatePage />} />

          {/* Admin Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Navigate to="/overview" replace />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/workers" element={<WorkersPage />} />
            <Route path="/workers/:id" element={<WorkerDetailPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/training/:id" element={<TrainingDetailPage />} />
            <Route path="/assessments" element={<AssessmentsPage />} />
            <Route path="/assessments/:id" element={<AssessmentDetailPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/certificates/:id" element={<CertificateDetailPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/overview" replace />} />
          </Route>
        </Routes>
      </Router>
    </I18nProvider>
  );
}

export default App;
