import React, { createContext, useContext, ReactNode } from 'react';

interface AutofictionalContextValue {
  appId: string;
  isInitialized: boolean;
}

const AutofictionalContext = createContext<AutofictionalContextValue | null>(null);

export interface AutofictionalProviderProps {
  appId: string;
  children: ReactNode;
}

/**
 * AutofictionalProvider - Runtime provider for autonomous sidebar adaptation
 * 
 * NIGHT 1: Renders children without behavior (skeleton only)
 */
export function AutofictionalProvider({ appId, children }: AutofictionalProviderProps) {
  const contextValue: AutofictionalContextValue = {
    appId,
    isInitialized: true,
  };

  return (
    <AutofictionalContext.Provider value={contextValue}>
      {children}
    </AutofictionalContext.Provider>
  );
}

/**
 * Hook to access Autofictional context
 */
export function useAutofictional() {
  const context = useContext(AutofictionalContext);
  if (!context) {
    throw new Error('useAutofictional must be used within AutofictionalProvider');
  }
  return context;
}

export { AutofictionalContext };

