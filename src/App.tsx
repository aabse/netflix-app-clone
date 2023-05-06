import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import './assets/styles/base/_variables.scss';
import './assets/styles/base/global.scss';
import { Profiles } from './pages/Profiles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Profiles />
    </div>
  );
}

export default App;
