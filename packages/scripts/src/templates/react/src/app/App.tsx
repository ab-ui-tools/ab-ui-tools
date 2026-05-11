import { BrowserRouter } from 'react-router-dom';
import { Snackbar } from '@ab.uitools/ui-library';

import Routes from './Routes.tsx';
import '../configs/i18next.ts';
import '../App.scss';
import '../index.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Snackbar duration={1000} position="top-right" />
    </BrowserRouter>
  );
}

export default App;
