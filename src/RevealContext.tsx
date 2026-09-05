import { useState } from 'react';
import { RevealContext } from './AppContext';
import { Box, Switch } from '@mui/material';
import { NoPrint } from './Util';

export function RevealProvider({ children }: { children: React.ReactNode }) {
  const [reveal, setReveal] = useState(false);
  
  const toggleReveal = () => {
    setReveal(!reveal);
  };

  return (
    <RevealContext.Provider value={{ reveal, setReveal }}>
      <Box sx={Styles.Box}>
        Show Answers
        <Switch value={reveal} onChange={toggleReveal} />
      </Box>
      {children}
    </RevealContext.Provider>
  );
}

const Styles = {
  Box: {
    color: 'var(--text-primary)',
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'var(--surface)',
    borderRadius: '1em',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingX: '1rem',
    zIndex: 1,
    ...NoPrint
  }
}