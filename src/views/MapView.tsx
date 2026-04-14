import React, { useState } from 'react';
import { AlertTriangle, UploadCloud, BrainCircuit, Car, FileText, ChevronRight, ArrowLeft, Camera, Navigation, Download, Filter, Layers } from 'lucide-react';
import { GlassCard, GradientButton } from '../components/ui';

type MapState = 'dashboard' | 'upload' | 'analysis' | 'result';

export function MapView() {
  const [viewState, setViewState] = useState<MapState>('dashboard');

  if (viewState === 'dashboard') return <DashboardState onNext={() => setViewState('upload')} />;
  if (viewState === 'upload') return <UploadState onBack={() => setViewState('dashboard')} onNext={() => setViewState('analysis')} />;
  if (viewState === 'analysis') return <AnalysisState onNext={() => setViewState('result')} />;
  if (viewState === 'result') return <ResultState onReset={() => setViewState('dashboard')} />;

  return null;
}

function DashboardState({ onNext }: { onNext: () => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-500">
      
      {/* MAPA PRINCIPAL */}
      <GlassCard className="md:col-span-2 md:row-span-2 flex flex-col p-0 min-h-[400px] bg-[#0D1117]">
        <div className="flex-1 relative overflow-hidden">
          {/* Google Maps Iframe */}
          <iframe 
            src="https://maps.google.com/maps?q=Passo%20Fundo&t=k&z=14&ie=UTF8&iwloc=&output=embed" 
            className="absolute inset-0 w-full h-full border-0 opacity-60 pointer-events-none"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Passo Fundo"
          ></iframe>
          
          {/* Overlay to darken map slightly and match theme */}
          <div className="absolute inset-0 bg-urban-bg/40 pointer-events-none"></div>

          {/* Map Overlay Elements */}
          <div className="absolute top-5 right-5 flex flex-col items-end gap-1.5 pointer-events-none">
            <div className="bg-black/70 px-2.5 py-1 rounded-full text-[9px] border border-urban-border flex items-center gap-1.5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-urban-green shadow-[0_0_8px_var(--color-urban-green)]"></div>
              SISTEMA OPERACIONAL
            </div>
            <div className="bg-black/70 px-2.5 py-1 rounded-full text-[9px] border border-urban-border backdrop-blur-md">
              SATÉLITE 04-A
            </div>
          </div>

          {/* Visual AI analysis overlay */}
          <div className="absolute top-1/2 left-1/3 w-[120px] h-[120px] border border-dashed border-urban-cyan rounded-full bg-urban-cyan/10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none shadow-[0_0_30px_rgba(0,242,255,0.2)]">
            <div className="absolute top-full mt-2 text-urban-cyan text-[10px] font-bold tracking-wider bg-black/50 px-2 py-1 rounded backdrop-blur-sm">FLUXO CRÍTICO</div>
          </div>
        </div>
        
        <div className="p-4 border-t border-urban-border flex justify-between items-center bg-urban-bg/50">
          <span className="text-xs text-urban-text-secondary">Coordenadas: -28.2628, -52.4067</span>
          <button className="bg-transparent border border-urban-border text-white px-3 py-1.5 rounded-md text-[11px] hover:bg-white/5 transition-colors flex items-center gap-2">
            <Filter className="w-3 h-3" /> Filtros de Camada
          </button>
        </div>
      </GlassCard>

      {/* PAINEL DE CONTROLE */}
      <GlassCard className="flex flex-col gap-4 p-5">
        <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
          <BrainCircuit className="w-5 h-5 text-urban-cyan" /> ANÁLISE INTELIGENTE
        </h3>
        
        <div 
          onClick={onNext}
          className="bg-white/5 border-[1.5px] border-dashed border-urban-border h-[120px] rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-white/10 transition-colors"
        >
          <UploadCloud className="w-6 h-6 text-urban-cyan" />
          <span className="text-xs text-urban-text-secondary">Upload de imagem (Drone/Satélite)</span>
        </div>

        <GradientButton onClick={onNext} className="w-full mt-2">
          Gerar Solução com IA
        </GradientButton>
      </GlassCard>

      {/* PROJETOS RECENTES */}
      <GlassCard className="flex flex-col gap-3 p-5 relative">
        <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-1">
          <Layers className="w-5 h-5 text-urban-cyan" /> PROJETOS ATIVOS
        </h3>
        
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
          <div>
            <h4 className="text-sm font-medium mb-0.5">Viaduto da Independência</h4>
            <span className="text-[11px] text-urban-text-secondary">Z. Leste • Análise de Estrutura</span>
          </div>
          <div className="text-[10px] px-2 py-1 rounded bg-urban-green/10 text-urban-green border border-urban-green/20 font-medium">
            ANÁLISE
          </div>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
          <div>
            <h4 className="text-sm font-medium mb-0.5">Alça de Acesso Rodovia Sul</h4>
            <span className="text-[11px] text-urban-text-secondary">Z. Sul • Simulação de Fluxo</span>
          </div>
          <div className="text-[10px] px-2 py-1 rounded bg-urban-cyan/10 text-urban-cyan border border-urban-cyan/20 font-medium">
            CONCLUÍDO
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-urban-cyan shadow-[0_0_15px_var(--color-urban-cyan)]"></div>
      </GlassCard>

      {/* RELATÓRIOS */}
      <GlassCard className="flex flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-1">
          <FileText className="w-5 h-5 text-urban-cyan" /> RELATÓRIOS TÉCNICOS
        </h3>
        
        <div className="flex items-center p-2 rounded-xl hover:bg-white/5 transition-colors">
          <div className="w-10 h-12 bg-[#1a202c] rounded flex items-center justify-center text-[10px] font-bold text-slate-400 border border-white/5">
            PDF
          </div>
          <div className="flex-1 ml-4">
            <h4 className="text-sm font-medium mb-0.5">Impacto Mobilidade V.04</h4>
            <span className="text-[11px] text-urban-text-secondary">Gerado em 12/10/2023</span>
          </div>
          <button className="bg-transparent border border-urban-cyan text-urban-cyan px-2.5 py-1 rounded text-[10px] font-bold hover:bg-urban-cyan/10 transition-colors">
            ABRIR
          </button>
        </div>
        
        <div className="flex items-center p-2 rounded-xl hover:bg-white/5 transition-colors">
          <div className="w-10 h-12 bg-[#1a202c] rounded flex items-center justify-center text-[10px] font-bold text-slate-400 border border-white/5">
            PDF
          </div>
          <div className="flex-1 ml-4">
            <h4 className="text-sm font-medium mb-0.5">Redesenho Rotatória Central</h4>
            <span className="text-[11px] text-urban-text-secondary">Gerado em 08/10/2023</span>
          </div>
          <button className="bg-transparent border border-urban-cyan text-urban-cyan px-2.5 py-1 rounded text-[10px] font-bold hover:bg-urban-cyan/10 transition-colors">
            ABRIR
          </button>
        </div>
      </GlassCard>

    </div>
  );
}

function UploadState({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-white/10 rounded-lg transition-colors text-urban-text-secondary hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-xl font-semibold">Envie uma Imagem do Problema</h2>
          <p className="text-urban-text-secondary text-sm">Escolha como capturar o congestionamento para análise pela IA.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="relative aspect-video md:aspect-square overflow-hidden group cursor-pointer border-urban-cyan/50 p-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80" alt="Satellite" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-urban-bg via-urban-bg/50 to-transparent"></div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-urban-cyan/20 flex items-center justify-center border border-urban-cyan/50 backdrop-blur-md">
              <Navigation className="w-6 h-6 text-urban-cyan" />
            </div>
            <span className="font-medium text-sm tracking-wide">IMAGEM VIA SATÉLITE</span>
          </div>
        </GlassCard>
        
        <GlassCard className="relative aspect-video md:aspect-square overflow-hidden group cursor-pointer p-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=500&q=80" alt="Drone" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute inset-0 bg-gradient-to-t from-urban-bg via-urban-bg/50 to-transparent"></div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="font-medium text-sm tracking-wide text-urban-text-secondary">CAPTURA COM DRONE</span>
          </div>
        </GlassCard>
      </div>

      <div className="space-y-3 mt-8">
        <label className="text-xs font-bold text-urban-text-secondary uppercase tracking-wider">Descreva o Problema (Opcional)</label>
        <textarea 
          className="w-full bg-black/40 border border-urban-border rounded-xl p-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-urban-cyan/50 transition-colors resize-none h-32"
          placeholder="Explique o problema de mobilidade urbana que precisa ser resolvido..."
        ></textarea>
      </div>

      <GradientButton onClick={onNext} className="w-full py-4 mt-8" icon={<UploadCloud />}>
        Enviar para Análise
      </GradientButton>
    </div>
  );
}

function AnalysisState({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 flex flex-col h-[calc(100vh-140px)] md:h-auto max-w-4xl mx-auto">
      <div className="flex items-center gap-3 text-urban-cyan bg-urban-cyan/10 p-4 rounded-xl border border-urban-cyan/20 backdrop-blur-md">
        <div className="w-5 h-5 rounded-full border-2 border-urban-cyan border-t-transparent animate-spin"></div>
        <span className="font-bold tracking-wide text-sm">ANALISANDO O PROBLEMA...</span>
        <ChevronRight className="w-5 h-5 ml-auto opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {/* Analysis Map */}
        <GlassCard className="md:col-span-2 relative overflow-hidden min-h-[300px] p-0 border-urban-cyan/30">
          <img 
            src={`${import.meta.env.BASE_URL}upf-traffic.jpg`} 
            alt="Traffic Analysis UPF" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1566336485560-660c6d701201?auto=format&fit=crop&w=800&q=80' }}
          />
          <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div>
          
          <div className="absolute top-4 left-4 bg-urban-bg/90 backdrop-blur-md border border-red-500/30 p-2 rounded-lg shadow-xl max-w-[180px]">
            <div className="flex items-start gap-2">
              <div className="bg-red-500/20 p-1 rounded-md">
                <AlertTriangle className="w-3 h-3 text-red-500" />
              </div>
              <p className="text-[10px] font-medium leading-tight">Entrada da Universidade com alto congestionamento</p>
            </div>
          </div>
        </GlassCard>

        {/* Stats Panel */}
        <div className="flex flex-col gap-4">
          <GlassCard className="p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-urban-text-secondary mb-2">
              <Car className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Entrada de Veículos</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-2xl font-bold text-[#FF4E4E]">380+</span>
                <span className="text-xs text-urban-text-secondary ml-1">/hora</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Navigation className="w-4 h-4 text-urban-text-secondary transform rotate-45" />
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-urban-text-secondary mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Impacto na Via</span>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-2xl font-bold text-[#FF4E4E]">760+</span>
                <span className="text-xs text-urban-text-secondary ml-1">em fila</span>
              </div>
            </div>
            <div className="flex items-end gap-1 h-8 mt-2">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className={`flex-1 rounded-t-sm ${i > 4 ? 'bg-[#FF4E4E]' : 'bg-urban-cyan/30'}`} style={{height: `${i*16}%`}}></div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4 flex flex-col gap-2 mt-auto">
            <div className="flex items-center gap-2 text-urban-text-secondary mb-1">
              <BrainCircuit className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Eficiência Atual</span>
            </div>
            <div className="text-3xl font-bold text-urban-cyan">28%</div>
          </GlassCard>
        </div>
      </div>

      <div className="flex gap-4 pt-2">
        <GradientButton variant="secondary" className="flex-1">
          Nova Análise
        </GradientButton>
        <GradientButton onClick={onNext} className="flex-[2]" icon={<BrainCircuit />}>
          Gerar Solução com IA
        </GradientButton>
      </div>
    </div>
  );
}

function ResultState({ onReset }: { onReset: () => void }) {
  return (
    <div className="space-y-6 animate-in zoom-in-95 duration-500 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 text-urban-green bg-urban-green/10 p-4 rounded-xl border border-urban-green/20 backdrop-blur-md">
        <div className="w-2 h-2 rounded-full bg-urban-green shadow-[0_0_8px_var(--color-urban-green)]"></div>
        <span className="font-bold tracking-wide text-sm uppercase">Solução Gerada com Sucesso</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before */}
        <GlassCard className="p-0 flex flex-col">
          <div className="p-4 border-b border-urban-border bg-urban-bg/50">
            <h3 className="text-xs font-bold tracking-widest text-urban-text-secondary">CENÁRIO ANTERIOR</h3>
          </div>
          <div className="relative overflow-hidden aspect-video">
            <img 
              src={`${import.meta.env.BASE_URL}upf-traffic.jpg`} 
              alt="Before UPF" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1566336485560-660c6d701201?auto=format&fit=crop&w=800&q=80' }}
            />
            <div className="absolute inset-0 bg-red-500/20 mix-blend-overlay"></div>
            <div className="absolute bottom-4 left-4 bg-urban-bg/90 backdrop-blur-md border border-red-500/30 p-3 rounded-xl shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <p className="text-xs font-medium">Congestionamento Severo</p>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* After */}
        <GlassCard className="p-0 flex flex-col border-urban-cyan/50 shadow-[0_0_30px_rgba(0,242,255,0.1)] relative">
          <div className="p-4 border-b border-urban-border bg-urban-cyan/5 flex justify-between items-center">
            <h3 className="text-xs font-bold tracking-widest text-urban-cyan">SOLUÇÃO PROPOSTA</h3>
            <span className="text-[10px] bg-urban-cyan/20 text-urban-cyan px-2 py-1 rounded border border-urban-cyan/30">MODELO 3D IA</span>
          </div>
          <div className="relative overflow-hidden aspect-video">
            <img 
              src={`${import.meta.env.BASE_URL}upf-solution.jpg`} 
              alt="After UPF" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80' }}
            />
            <div className="absolute bottom-4 left-4 bg-urban-bg/90 backdrop-blur-md border border-urban-cyan/30 p-2 rounded-lg shadow-xl max-w-[200px]">
              <div className="flex items-start gap-2">
                <div className="bg-urban-cyan/20 p-1 rounded-md">
                  <Navigation className="w-3 h-3 text-urban-cyan" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white leading-tight mb-0.5">Novo Viaduto em Frente à Universidade</p>
                  <p className="text-[8px] text-urban-cyan font-medium tracking-wide uppercase">Fluxo Otimizado (+35%)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-urban-cyan shadow-[0_0_15px_var(--color-urban-cyan)]"></div>
        </GlassCard>
      </div>

      <div className="flex gap-4 pt-4">
        <GradientButton variant="secondary" onClick={onReset} className="flex-1">
          Nova Análise
        </GradientButton>
        <GradientButton className="flex-[2]" icon={<FileText />}>
          Ver Relatório Completo
        </GradientButton>
      </div>
    </div>
  );
}
