import "./App.css";
import ItemListContainer from "./Components/ItemsList/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
