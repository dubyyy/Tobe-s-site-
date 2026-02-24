import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
  showIcon?: boolean;
}

export function LoadingSpinner({ 
  size = "md", 
  className, 
  text,
  showIcon = true 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-20 h-20",
    lg: "w-28 h-28"
  };

  const iconSizes = {
    sm: 20,
    md: 32,
    lg: 40
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-6", className)}>
      <div className="relative">
        <div className={cn("relative", sizeClasses[size])}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#C5A059] via-[#F1D28C] to-[#C5A059] opacity-20 blur-xl animate-pulse"></div>
          
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-[#C5A059] via-[#F1D28C] to-[#C5A059] bg-clip-border animate-spin [animation-duration:3s]"
               style={{ 
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
                 padding: '4px'
               }}>
          </div>
          
          <div className="absolute inset-2 rounded-full border-2 border-transparent bg-gradient-to-bl from-primary via-amber-500 to-amber-600 bg-clip-border animate-spin [animation-duration:2s] [animation-direction:reverse]"
               style={{ 
                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                 WebkitMaskComposite: 'xor',
                 maskComposite: 'exclude',
                 padding: '2px'
               }}>
          </div>

          {showIcon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <GraduationCap 
                className="text-gradient-gold animate-pulse" 
                size={iconSizes[size]}
                strokeWidth={2}
              />
            </div>
          )}
        </div>
      </div>

      {text && (
        <div className="space-y-2 text-center">
          <p className="text-sm font-medium text-gradient-gold animate-pulse">
            {text}
          </p>
          <div className="flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#F1D28C] animate-bounce [animation-delay:0ms]"></span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#F1D28C] animate-bounce [animation-delay:150ms]"></span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#C5A059] to-[#F1D28C] animate-bounce [animation-delay:300ms]"></span>
          </div>
        </div>
      )}
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-background/50 backdrop-blur-sm">
      <LoadingSpinner size="lg" text="Loading your content..." />
    </div>
  );
}

export function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-amber-500/20 to-amber-600/20 blur-3xl animate-pulse"></div>
        <LoadingSpinner size="lg" text="Preparing your experience..." />
      </div>
    </div>
  );
}
