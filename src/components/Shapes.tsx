
import React from 'react';
import { cn } from '@/lib/utils';

interface CircleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'yellow' | 'orange' | 'white';
  animate?: boolean;
}

export const Circle: React.FC<CircleProps> = ({ 
  className, 
  size = 'md', 
  color = 'yellow',
  animate = false
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-64 h-64',
    xl: 'w-96 h-96',
  };
  
  const colorClasses = {
    yellow: 'bg-coach-yellow',
    orange: 'bg-coach-orange',
    white: 'bg-coach-white',
  };
  
  const animationClass = animate ? 'animate-float' : '';
  
  return (
    <div 
      className={cn(
        'rounded-full', 
        sizeClasses[size], 
        colorClasses[color], 
        animationClass,
        className
      )}
    />
  );
};

interface StarburstProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'yellow' | 'orange' | 'white';
  animate?: boolean;
}

export const Starburst: React.FC<StarburstProps> = ({ 
  className, 
  size = 'md', 
  color = 'white',
  animate = false
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
  };
  
  const colorClasses = {
    yellow: 'text-coach-yellow',
    orange: 'text-coach-orange',
    white: 'text-coach-white',
  };
  
  const animationClass = animate ? 'animate-spin-slow' : '';
  
  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" className={cn('w-full h-full', colorClasses[color], animationClass)}>
        <path 
          fill="currentColor" 
          d="M50 0 L55 35 L90 25 L60 50 L90 75 L55 65 L50 100 L45 65 L10 75 L40 50 L10 25 L45 35 Z"
        />
      </svg>
    </div>
  );
};

interface PlusProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'yellow' | 'orange' | 'white';
  rotate?: boolean;
}

export const Plus: React.FC<PlusProps> = ({ 
  className, 
  size = 'md', 
  color = 'yellow',
  rotate = false
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };
  
  const colorClasses = {
    yellow: 'text-coach-yellow',
    orange: 'text-coach-orange',
    white: 'text-coach-white',
  };
  
  const rotateClass = rotate ? 'rotate-45' : '';
  
  return (
    <div className={cn('relative', sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" className={cn('w-full h-full', colorClasses[color], rotateClass, 'transition-transform duration-300')}>
        <path 
          fill="currentColor" 
          d="M40 0 L60 0 L60 40 L100 40 L100 60 L60 60 L60 100 L40 100 L40 60 L0 60 L0 40 L40 40 Z"
        />
      </svg>
    </div>
  );
};
