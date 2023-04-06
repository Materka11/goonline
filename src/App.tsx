import { ColorsWrapper } from './components/ColorsWrapper/ColorsWrapper';
import { ColorProvider } from './context/ColorContext';

const App = () => (
  <ColorProvider>
    <ColorsWrapper />
  </ColorProvider>
);

export default App;
