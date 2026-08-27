import { Landing } from './Landing'
import { AppPagePath } from './AppPagePath'
import { Mean } from './Mean';

function App() {
  const path = AppPagePath.safeParse(window.location.pathname).data ?? '/';

  switch (path) {
    case '/tool/mean':
      return <Mean />
    default:
      return <Landing />
  }
}

export default App
