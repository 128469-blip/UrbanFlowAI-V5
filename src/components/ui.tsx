import React from 'react';
import { cn } from '../lib/utils';

export function GlassCard({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "bg-[rgba(15,20,30,0.75)] backdrop-blur-[12px] border border-[rgba(0,242,255,0.15)] rounded-[20px] shadow-[0_0_20px_rgba(0,242,255,0.05)] overflow-hidden relative",
        onClick && "cursor-pointer hover:bg-[rgba(25,30,45,0.85)] transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GradientButton({ 
  children, 
  className, 
  onClick, 
  variant = 'primary',
  icon
}: { 
  children: React.ReactNode, 
  className?: string, 
  onClick?: () => void,
  variant?: 'primary' | 'secondary',
  icon?: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-4 py-[14px] rounded-xl font-bold transition-transform duration-200 uppercase text-xs tracking-[0.5px] active:scale-95",
        variant === 'primary' 
          ? "bg-gradient-to-r from-urban-cyan to-urban-blue text-black border-none" 
          : "bg-transparent border border-urban-cyan text-urban-cyan hover:bg-urban-cyan/10",
        className
      )}
    >
      {icon && <span className="w-4 h-4">{icon}</span>}
      {children}
    </button>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
        {/* Usando um placeholder. Para usar a imagem real, faça o upload dela para a pasta public/ como logo.png e mude o src para "/logo.png" */}
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="UrbanFlow AI Logo" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/05070A/00F2FF?text=UF' }} />
      </div>
      <span className="text-xl font-semibold tracking-tight text-white hidden lg:block">
        UrbanFlow <span className="font-light opacity-60">| AI</span>
      </span>
    </div>
  );
}
