import React, { useState } from 'react';
import { Bell, Settings, Map as MapIcon, Layers, FileText, User } from 'lucide-react';
import { Logo } from './components/ui';
import { MapView } from './views/MapView';
import { ProjectsView } from './views/ProjectsView';
import { ReportsView } from './views/ReportsView';
import { ProfileView } from './views/ProfileView';

type Tab = 'map' | 'projects' | 'reports' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('map');

  return (
    <div className="min-h-screen bg-urban-bg text-white flex flex-col md:flex-row font-sans">
      
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-urban-border bg-[rgba(10,15,25,0.9)] backdrop-blur-md sticky top-0 z-50">
        <Logo />
        <div className="flex items-center gap-4 text-urban-text-secondary">
          <button className="hover:text-white transition-colors"><Bell className="w-6 h-6" /></button>
          <button className="hover:text-white transition-colors"><Settings className="w-6 h-6" /></button>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-24 lg:w-64 border-r border-urban-border bg-[rgba(10,15,25,0.9)] p-6 sticky top-0 h-screen items-center lg:items-stretch z-10">
        <div className="mb-12 flex justify-center lg:justify-start">
          <Logo />
        </div>
        
        <nav className="flex-1 space-y-8 flex flex-col items-center lg:items-stretch">
          <NavItem icon={<MapIcon />} label="MAPA" isActive={activeTab === 'map'} onClick={() => setActiveTab('map')} />
          <NavItem icon={<Layers />} label="PROJETOS" isActive={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
          <NavItem icon={<FileText />} label="RELATÓRIOS" isActive={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
          <NavItem icon={<User />} label="PERFIL" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
        </nav>

        <div className="mt-auto flex items-center justify-center lg:justify-start gap-4 text-urban-text-secondary pt-6 border-t border-urban-border">
          <button className="hover:text-white transition-colors"><Bell className="w-5 h-5" /></button>
          <button className="hover:text-white transition-colors"><Settings className="w-5 h-5" /></button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative pb-20 md:pb-0 overflow-x-hidden">
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
          {/* Desktop Header */}
          <header className="hidden md:flex justify-between items-center mb-8">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-white tracking-[-0.5px]">
                UrbanFlow AI <span className="font-light opacity-60">| Dashboard</span>
              </h1>
              <p className="text-sm text-urban-text-secondary mt-1">
                Olá, Diretor Silva • Gestão Urbana de Passo Fundo
              </p>
            </div>
            <div className="flex items-center gap-3 bg-urban-card px-4 py-2 rounded-full border border-urban-border">
              <span className="text-xs font-semibold tracking-wide">PASSO FUNDO - CENTRO</span>
              <div className="w-8 h-8 rounded-full bg-[#2D3748] border-2 border-urban-cyan overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover" />
              </div>
            </div>
          </header>

          {/* View Rendering */}
          {activeTab === 'map' && <MapView />}
          {activeTab === 'projects' && <ProjectsView />}
          {activeTab === 'reports' && <ReportsView />}
          {activeTab === 'profile' && <ProfileView />}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[rgba(10,15,25,0.95)] backdrop-blur-lg border-t border-urban-border flex justify-around items-center p-2 pb-4 z-50">
        <BottomNavItem icon={<MapIcon />} label="MAPA" isActive={activeTab === 'map'} onClick={() => setActiveTab('map')} />
        <BottomNavItem icon={<Layers />} label="PROJETOS" isActive={activeTab === 'projects'} onClick={() => setActiveTab('projects')} />
        <BottomNavItem icon={<FileText />} label="RELATÓRIOS" isActive={activeTab === 'reports'} onClick={() => setActiveTab('reports')} />
        <BottomNavItem icon={<User />} label="PERFIL" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col lg:flex-row items-center gap-2 lg:gap-4 transition-colors ${
        isActive 
          ? 'text-urban-cyan' 
          : 'text-urban-text-secondary hover:text-white'
      }`}
    >
      <div className={`w-8 h-8 flex items-center justify-center rounded-lg border-[1.5px] ${isActive ? 'border-transparent bg-urban-cyan text-black shadow-[0_0_10px_rgba(0,242,255,0.3)]' : 'border-current'}`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
      </div>
      <span className="text-[10px] lg:text-xs uppercase tracking-[1px] font-medium">{label}</span>
    </button>
  );
}

function BottomNavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 h-14 transition-colors ${
        isActive ? 'text-urban-cyan' : 'text-urban-text-secondary hover:text-white'
      }`}
    >
      <div className={`w-6 h-6 mb-1 flex items-center justify-center rounded border-[1.5px] ${isActive ? 'border-transparent bg-urban-cyan text-black shadow-[0_0_10px_rgba(0,242,255,0.3)]' : 'border-current'}`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4" })}
      </div>
      <span className="text-[9px] uppercase tracking-[1px] font-medium">{label}</span>
    </button>
  );
}
