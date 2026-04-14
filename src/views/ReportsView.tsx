import React from 'react';
import { FileText, Download, Share2, Filter, Search, Calendar, Eye } from 'lucide-react';
import { GlassCard, GradientButton } from '../components/ui';

const MOCK_REPORTS = [
  {
    id: 1,
    title: 'Análise de Impacto: Viaduto Independência',
    date: '12/10/2023',
    project: 'Viaduto da Independência',
    status: 'Finalizado',
    pages: 24
  },
  {
    id: 2,
    title: 'Simulação de Fluxo: Rodovia Sul',
    date: '08/10/2023',
    project: 'Alça de Acesso Rodovia Sul',
    status: 'Em Revisão',
    pages: 18
  },
  {
    id: 3,
    title: 'Estudo de Viabilidade Cicloviária',
    date: '01/10/2023',
    project: 'Reestruturação Ciclovia Central',
    status: 'Finalizado',
    pages: 32
  },
  {
    id: 4,
    title: 'Relatório Preliminar: Expansão Metro',
    date: '25/09/2023',
    project: 'Expansão Linha Verde Metro',
    status: 'Rascunho',
    pages: 12
  }
];

export function ReportsView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-[-0.5px]">Relatórios Técnicos</h2>
          <p className="text-sm text-urban-text-secondary mt-1">Acesse e compartilhe as análises geradas pela IA.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="bg-urban-card border border-urban-border rounded-lg px-4 py-2 flex items-center gap-2 flex-1 md:flex-none">
            <Search className="w-4 h-4 text-urban-text-secondary" />
            <input 
              type="text" 
              placeholder="Buscar relatórios..." 
              className="bg-transparent text-sm text-white focus:outline-none w-full"
            />
          </div>
          <button className="bg-urban-card border border-urban-border p-2 rounded-lg text-urban-text-secondary hover:text-white transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Featured/Latest Report Preview */}
        <GlassCard className="lg:col-span-1 p-0 flex flex-col overflow-hidden border-urban-cyan/30">
          <div className="p-4 border-b border-urban-border bg-urban-cyan/5 flex justify-between items-center">
            <h3 className="text-xs font-bold tracking-widest text-urban-cyan">ÚLTIMO RELATÓRIO</h3>
            <span className="text-[10px] bg-urban-cyan/20 text-urban-cyan px-2 py-1 rounded border border-urban-cyan/30">NOVO</span>
          </div>
          
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-black/20">
            <div className="w-24 h-32 bg-white/5 border border-white/10 rounded-lg shadow-2xl mb-6 relative flex flex-col items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-urban-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <FileText className="w-10 h-10 text-urban-cyan mb-2" />
              <div className="w-12 h-1 bg-white/10 rounded-full mb-1"></div>
              <div className="w-8 h-1 bg-white/10 rounded-full"></div>
            </div>
            
            <h4 className="text-lg font-semibold mb-2">Análise de Impacto: Viaduto Independência</h4>
            <p className="text-xs text-urban-text-secondary mb-6">Gerado em 12/10/2023 • 24 páginas</p>
            
            <div className="flex gap-3 w-full">
              <GradientButton className="flex-1" icon={<Eye />}>Visualizar</GradientButton>
              <button className="p-2 rounded-lg border border-urban-border hover:bg-white/5 transition-colors text-urban-text-secondary hover:text-white">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Reports List */}
        <div className="lg:col-span-2 space-y-4">
          {MOCK_REPORTS.map((report) => (
            <div key={report.id}>
              <GlassCard className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 group hover:border-urban-cyan/30 transition-colors">
                <div className="w-12 h-14 bg-[#1a202c] rounded flex items-center justify-center text-[10px] font-bold text-slate-400 border border-white/5 shrink-0 group-hover:border-urban-cyan/50 group-hover:text-urban-cyan transition-colors">
                  PDF
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-medium mb-1 truncate group-hover:text-white transition-colors">{report.title}</h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-urban-text-secondary">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {report.date}</span>
                    <span className="truncate max-w-[200px]">Projeto: {report.project}</span>
                    <span>{report.pages} págs</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-urban-border">
                  <span className={`text-[10px] px-2 py-1 rounded border font-medium uppercase tracking-wider ${
                    report.status === 'Finalizado' ? 'text-urban-green bg-urban-green/10 border-urban-green/20' :
                    report.status === 'Em Revisão' ? 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20' :
                    'text-slate-400 bg-white/5 border-white/10'
                  }`}>
                    {report.status}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-1.5 text-urban-text-secondary hover:text-urban-cyan transition-colors" title="Visualizar">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-urban-text-secondary hover:text-white transition-colors" title="Baixar">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-urban-text-secondary hover:text-white transition-colors" title="Compartilhar">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
