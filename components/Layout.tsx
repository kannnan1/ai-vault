import React from 'react';
import { LayoutDashboard, Shield, AlertOctagon, Settings, FileBarChart, LogOut, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const NavItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
    <a href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${active ? 'bg-solytics-800 text-white' : 'text-slate-300 hover:bg-solytics-800/50 hover:text-white'}`}>
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-solytics-900 text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-solytics-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-white text-lg">S</span>
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight">Solytics</h2>
            <p className="text-xs text-slate-400">Governance Hub</p>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2 mt-4">Main</div>
          <NavItem icon={LayoutDashboard} label="Dashboard" active />
          <NavItem icon={FileBarChart} label="Reports" />
          <NavItem icon={Shield} label="Compliance" />
          
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2 mt-8">Risk Management</div>
          <NavItem icon={AlertOctagon} label="Risk Assessment" />
          <NavItem icon={Settings} label="Model Registry" />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-solytics-800">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white w-full transition-colors">
            <LogOut size={20} />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen flex flex-col">
         {/* Mobile Header */}
         <div className="md:hidden bg-solytics-900 text-white p-4 flex justify-between items-center sticky top-0 z-30">
            <div className="flex items-center gap-2">
                 <div className="w-6 h-6 bg-accent-500 rounded flex items-center justify-center text-xs font-bold">S</div>
                 <span className="font-bold">Solytics</span>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu size={24} />
            </button>
         </div>

         {/* Content Wrapper */}
         <div className="flex-1 overflow-y-auto">
            {children}
         </div>
      </main>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;