import { Component } from 'react';
import { ColorsWrapper } from './components/ColorsWrapper/ColorsWrapper';
import { ColorProvider } from './context/ColorContext';
import './styles/_global.scss';

class App extends Component {
  render() {
    return (
      <ColorProvider>
        <ColorsWrapper />
      </ColorProvider>
    );
  }
}

export default App;
