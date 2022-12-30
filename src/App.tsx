import { SignIn } from './features/Auth';
import s from './styles.module.css';

export const App = () => (
  <main className={s.container}>
    <SignIn />
  </main>
);
