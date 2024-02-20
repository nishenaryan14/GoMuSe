import "./styles.scss";
import Home from "./pages/Home";
import { PlaylistProvider } from "../PlayListContext";

function App() {
  return (
    <PlaylistProvider>
      <div className="App">
        <Home />
      </div>
    </PlaylistProvider>
  );
}

export default App;
