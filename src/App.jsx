import "./App.css";
import { InfinitePeople } from "./components/people/InfinitePeople";
import { InfiniteSpecies } from "./components/species/InfiniteSpecies";

function App() {
  return (
    <div className="App">
      <h1>Infinite SWAPI</h1>
      {/* <InfinitePeople /> */}
      <InfiniteSpecies />
    </div>
  );
}

export default App;
