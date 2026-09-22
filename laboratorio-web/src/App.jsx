import Game from './components/Game/Game.jsx';
import CronometroHUD from './cronometro/components/CronometroHUD.jsx';
import { TimerProvider } from './cronometro/context/TimerContext.jsx';

export default function App() {
  return (
    <TimerProvider>
      <CronometroHUD />
      <Game />
    </TimerProvider>
  );
}
