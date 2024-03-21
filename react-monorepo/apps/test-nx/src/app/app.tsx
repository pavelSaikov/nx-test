// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { library1 } from '@react-monorepo/library-1';
import NxWelcome from './nx-welcome';

library1();

export function App() {
  return (
    <div>
      <NxWelcome title="test-nx" />
    </div>
  );
}

export default App;
