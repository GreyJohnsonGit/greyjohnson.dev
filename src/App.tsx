import { Landing } from './Landing'
import { AppPagePath } from './AppPagePath'
import { Mean } from './Mean';
import { Stats_L001_CatQuant } from './lessons/Stats_L001_CatQuant';
import { RevealProvider } from './RevealContext';
import { Alg_L001_RealNums } from './lessons/Alg_L001_RealNums';
import { Stats_L002_CatData } from './lessons/Stats_L002_CatData';
import { Stats_L003_CatExtra } from './lessons/Stats_L003_CatExtra';

function App() {
  const path = AppPagePath.safeParse(window.location.pathname).data ?? '/';

  const toolMap = new Map<
    AppPagePath,
    React.ReactNode
  >([
    ["/tool/mean", <Mean />],
  ]);

  const pathMap = new Map<
    AppPagePath,
    React.ReactNode
  >([
    ["/notes/stats-l001-catquant", <Stats_L001_CatQuant />],
    ["/notes/alg-l001-realnums", <Alg_L001_RealNums />],
    ["/notes/stats-l002-catdata", <Stats_L002_CatData />],
    ["/notes/stats-l003-catextra", <Stats_L003_CatExtra />],
  ]);

  if (toolMap.has(path)) {
    return toolMap.get(path);
  }

  if (pathMap.has(path)) {
    return <RevealProvider> 
      {pathMap.get(path)}
    </RevealProvider>;
  }

  return <Landing />;
}

export default App