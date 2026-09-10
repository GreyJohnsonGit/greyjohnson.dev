import { Box } from '@mui/material';
import { NoPrint } from './Util';
import { AppLink } from './AppLink';

export function AppMenu() {
  return (
    <Box sx={Styles.Box}>
      <b>Navigate</b>
      Tools
      <AppLink href="/tool/mean">Mean</AppLink>
      <br />
      Lessons
      <AppLink href="/notes/stats-l001-catquant">Stats L001 Data</AppLink>
      <AppLink href="/notes/stats-l002-catdata">Stats L002 Categorical Data</AppLink>
      <AppLink href="/notes/stats-l003-catextra">Stats L003 Extra Categorical</AppLink>
      <AppLink href="/notes/stats-l004-dotplots">Stats L004 Dot Plots</AppLink>
      <AppLink href="/notes/alg-l001-realnums">ALG 001 Real Numbers</AppLink>
    </Box>
  );
}

const Styles = {
  Box: {
    color: 'var(--text-primary)',
    position: 'fixed',
    top: '1rem',
    left: '1rem',
    backgroundColor: 'var(--surface)',
    borderRadius: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: '1rem',
    zIndex: 1,
    ...NoPrint
  }
}