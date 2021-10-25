import './App.module.css';
import Simulate from './components/templates/Simulate';
import Title from './components/Title/Title'
import { UserInputProvider } from './providers/UserInput';
import styles from './App.module.css'
import { useState } from 'react';
import GraphPage from './components/templates/GraphPage';

function App() {
  // TODO: Add proper routing? Discuss solutions with team
  // 'simulate' 'graph'
  const [showing, setShowing] = useState<string>('simulate');
  
  const simulate = () => {
    setShowing('graph')
  }

  const goBack = () => {
    setShowing('simulate')
  }

  const save = () => {
    console.log(`save is coming soon`)
  }

  return (
    <div className={styles.AppWrapper}>
      <Title />
      <UserInputProvider>
        {showing === 'simulate' ? (
            <Simulate 
              simulate={simulate}
            /> 
          ) : showing === 'graph' && (
            <GraphPage
              goBack={goBack}
              save={save}
            />
          )
        }
      </UserInputProvider>
    </div>
  );
}

export default App;
