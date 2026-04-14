import React from 'react';
import { Layers, MapPin, Clock, CheckCircle, AlertTriangle, Filter, MoreVertical, Calendar, Activity } from 'lucide-react';
import { GlassCard, GradientButton } from '../components/ui';

const MOCK_PROJECTS = [
  {
    id: 1,
    title: 'Viaduto da Independência',
    location: 'Zona Leste, Passo Fundo',
    status: 'Em Análise',
    priority: 'Alta',
    image: 'https://images.unsplash.com/photo-1584351583369-6baf055b51a7?auto=format&fit=crop&w=500&q=80',
    type: 'Infraestrutura',
    progress: 45
  },
  {
    id: 2,
    title: 'Alça de Acesso Rodovia Sul',
    location: 'Zona Sul, Passo Fundo',
    status: 'Aprovado',
    priority: 'Média',
    image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?auto=format&fit=crop&w=500&q=80',
    type: 'Mobilidade',
    progress: 100
  },
  {
    id: 3,
    title: 'Reestruturação Ciclovia Central',
    location: 'Centro, Passo Fundo',
    status: 'Em Execução',
    priority: 'Baixa',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=80',
    type: 'Sustentabilidade',
    progress: 72
  },
  {
    id: 4,
    title: 'Expansão Linha Verde Metro',
    location: 'Zona Norte, Passo Fundo',
    status: 'Em Análise',
    priority: 'Alta',
    image: 'https://images.unsplash.com/photo-1517737812598-1a43d0ef2a60?auto=format&fit=crop&w=500&q=80',
    type: 'Transporte Público',
    progress: 15
  }
];

export function ProjectsView() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-[-0.5px]">Projetos Ativos</h2>
          <p className="text-sm text-urban-text-secondary mt-1">Gerencie e acompanhe as intervenções urbanas.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="bg-urban-card border border-urban-border rounded-lg px-4 py-2 flex items-center gap-2 flex-1 md:flex-none">
            <Filter className="w-4 h-4 text-urban-text-secondary" />
            <select className="bg-transparent text-sm text-white focus:outline-none w-full appearance-none">
              <option>Todos os Status</option>
              <option>Em Análise</option>
              <option>Aprovado</option>
              <option>Em Execução</option>
            </select>
          </div>
          <GradientButton icon={<Layers />}>Novo Projeto</GradientButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, location, image, status, type, progress, priority }: any) {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Em Análise': return 'text-urban-cyan bg-urban-cyan/10 border-urban-cyan/20';
      case 'Aprovado': return 'text-urban-green bg-urban-green/10 border-urban-green/20';
      case 'Em Execução': return 'text-urban-blue bg-urban-blue/10 border-urban-blue/20';
      default: return 'text-slate-400 bg-white/5 border-white/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'Alta': return 'bg-[#FF4E4E]';
      case 'Média': return 'bg-yellow-500';
      case 'Baixa': return 'bg-urban-green';
      default: return 'bg-slate-500';
    }
  };

  return (
    <GlassCard className="p-0 overflow-hidden flex flex-col group">
      <div className="relative h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-urban-bg to-transparent"></div>
        <div className="absolute top-3 right-3">
          <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/10">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className={`text-[10px] px-2 py-1 rounded border font-medium uppercase tracking-wider ${getStatusColor(status)}`}>
            {status}
          </span>
          <span className="text-[10px] px-2 py-1 rounded bg-black/50 border border-white/10 text-white backdrop-blur-md font-medium uppercase tracking-wider">
            {type}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold leading-tight group-hover:text-urban-cyan transition-colors">{title}</h3>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-urban-text-secondary mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>
        
        <div className="mt-auto space-y-3">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-1.5 text-xs text-urban-text-secondary">
              <Activity className="w-3.5 h-3.5" />
              <span>Progresso</span>
            </div>
            <span className="text-sm font-bold">{progress}%</span>
          </div>
          
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-urban-cyan to-urban-blue rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-urban-border mt-3">
            <div className="flex items-center gap-2 text-[10px] text-urban-text-secondary uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Atualizado há 2 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-urban-text-secondary uppercase">Prioridade</span>
              <div className={`w-2 h-2 rounded-full ${getPriorityColor(priority)} shadow-[0_0_5px_currentColor]`}></div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
