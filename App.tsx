import React, { useState } from 'react';
import { TopNavigation } from './components/TopNavigation';
import { DashboardHeader } from './components/DashboardHeader';
import { ModelsTable } from './components/ModelsTable';
import { AlertsPanel } from './components/AlertsPanel';
import { TasksTable } from './components/TasksTable';
import { GeminiAnalysisModal } from './components/GeminiAnalysisModal';
import { GovernanceView } from './components/GovernanceView';
import { AlertItem } from './types';

const App: React.FC = () => {
  const [selectedAlert, setSelectedAlert] = useState<AlertItem | null>(null);
  const [activeTab, setActiveTab] = useState('AI Model Governance');

  const handleAnalyzeAlert = (alert: AlertItem) => {
    setSelectedAlert(alert);
  };

  const handleCloseModal = () => {
    setSelectedAlert(null);
  };

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      <TopNavigation />
      
      <main className="flex-1 px-6 py-4 max-w-[1920px] mx-auto w-full">
        <DashboardHeader 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        <div className="space-y-6 mt-6">
          
          {/* Default Dashboard View (Overview) */}
          {activeTab === 'Overview' && (
            <>
              {/* Top Section: MRM Models Table */}
              <section>
                <ModelsTable />
              </section>

              {/* Bottom Section: Split View */}
              <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[500px]">
                {/* Left: Alerts (approx 1/3 width) */}
                <div className="lg:col-span-4 h-full">
                  <AlertsPanel onAnalyze={handleAnalyzeAlert} />
                </div>

                {/* Right: My Tasks (approx 2/3 width) */}
                <div className="lg:col-span-8 h-full">
                  <TasksTable />
                </div>
              </section>
            </>
          )}

          {/* AI Model Governance View */}
          {activeTab === 'AI Model Governance' && (
            <GovernanceView />
          )}
          
          {/* Fallback for other tabs */}
          {activeTab !== 'Overview' && activeTab !== 'AI Model Governance' && (
             <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                <p className="text-lg font-medium">Content for {activeTab} is under construction.</p>
             </div>
          )}

        </div>
      </main>

      {selectedAlert && (
        <GeminiAnalysisModal 
          alert={selectedAlert} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default App;
