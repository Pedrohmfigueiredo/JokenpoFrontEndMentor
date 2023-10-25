import { ModalProvider } from "./contexts/ModalContexts";
import { GameProvider } from "./contexts/GameContext";
import Game from "./pages/Game";

function App() {
  return (
    <ModalProvider>
      <GameProvider>
        <Game />
      </GameProvider>
    </ModalProvider>
  );
}

export default App;
