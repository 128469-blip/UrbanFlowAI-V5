import React from 'react';
import { User, Settings, Shield, Bell, LogOut, ChevronRight, Activity, Layers, FileText } from 'lucide-react';
import { GlassCard, GradientButton } from '../components/ui';

export function ProfileView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl mx-auto">
      
      {/* Profile Header */}
      <GlassCard className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-urban-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-[#2D3748] border-2 border-urban-cyan overflow-hidden p-1">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-urban-green border-2 border-urban-bg rounded-full"></div>
        </div>
        
        <div className="flex-1 text-center md:text-left z-10">
          <h2 className="text-2xl font-bold text-white mb-1">Diretor Silva</h2>
          <p className="text-urban-cyan font-medium text-sm mb-3 uppercase tracking-wider">Gestão Urbana • Passo Fundo</p>
          <p className="text-urban-text-secondary text-sm max-w-md mx-auto md:mx-0">
            Responsável pela análise e aprovação de projetos de infraestrutura viária e mobilidade na zona sul.
          </p>
        </div>
        
        <div className="z-10">
          <GradientButton variant="secondary" className="w-full md:w-auto">
            Editar Perfil
          </GradientButton>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-urban-cyan/10 flex items-center justify-center border border-urban-cyan/20">
            <Layers className="w-6 h-6 text-urban-cyan" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">12</p>
            <p className="text-[10px] text-urban-text-secondary uppercase tracking-wider">Projetos Analisados</p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-urban-green/10 flex items-center justify-center border border-urban-green/20">
            <FileText className="w-6 h-6 text-urban-green" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">48</p>
            <p className="text-[10px] text-urban-text-secondary uppercase tracking-wider">Relatórios Gerados</p>
          </div>
        </GlassCard>
        
        <GlassCard className="p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-urban-blue/10 flex items-center justify-center border border-urban-blue/20">
            <Activity className="w-6 h-6 text-urban-blue" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">1.2k</p>
            <p className="text-[10px] text-urban-text-secondary uppercase tracking-wider">Imagens Processadas</p>
          </div>
        </GlassCard>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-0 overflow-hidden">
          <div className="p-4 border-b border-urban-border bg-urban-bg/50">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Settings className="w-4 h-4 text-urban-cyan" /> PREFERÊNCIAS
            </h3>
          </div>
          <div className="p-2">
            <SettingsRow icon={<Bell />} title="Notificações" description="Alertas de novos relatórios e análises" />
            <SettingsRow icon={<User />} title="Informações Pessoais" description="Atualize seus dados de contato" />
            <SettingsRow icon={<Layers />} title="Preferências de Mapa" description="Camadas padrão e visualização" />
          </div>
        </GlassCard>

        <GlassCard className="p-0 overflow-hidden">
          <div className="p-4 border-b border-urban-border bg-urban-bg/50">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-urban-cyan" /> SEGURANÇA
            </h3>
          </div>
          <div className="p-2">
            <SettingsRow icon={<Shield />} title="Senha e Autenticação" description="Altere sua senha e 2FA" />
            <SettingsRow icon={<Activity />} title="Sessões Ativas" description="Gerencie dispositivos conectados" />
          </div>
        </GlassCard>
      </div>

      <div className="flex justify-center pt-4">
        <button className="flex items-center gap-2 text-[#FF4E4E] hover:text-red-400 transition-colors px-6 py-3 rounded-xl hover:bg-red-500/10 font-medium text-sm">
          <LogOut className="w-5 h-5" /> Encerrar Sessão
        </button>
      </div>
    </div>
  );
}

function SettingsRow({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
      <div className="w-10 h-10 rounded-lg bg-urban-bg border border-urban-border flex items-center justify-center text-urban-text-secondary group-hover:text-urban-cyan group-hover:border-urban-cyan/30 transition-colors">
        {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5" })}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-white group-hover:text-urban-cyan transition-colors">{title}</h4>
        <p className="text-xs text-urban-text-secondary">{description}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-urban-text-secondary group-hover:text-white transition-colors" />
    </div>
  );
}

