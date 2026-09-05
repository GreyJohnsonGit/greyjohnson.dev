import { Landing } from './Landing'
import { AppPagePath } from './AppPagePath'
import { Mean } from './Mean';
import { ExampleLesson } from './ExampleLesson';
import { RevealProvider } from './RevealContext';

function App() {
  const path = AppPagePath.safeParse(window.location.pathname).data ?? '/';

  switch (path) {
    case '/tool/mean':
      return <Mean />
    case '/notes/example-lesson':
      return (
        <RevealProvider>
          <ExampleLesson />
        </RevealProvider>
      );
    default:
      return <Landing />
  }
}

export default App