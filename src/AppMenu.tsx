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
      <AppLink href="/notes/example-lesson">Example</AppLink>
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