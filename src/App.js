import "./tailwind.css";
import HelloWorld from "./Components/HelloWorld";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Jaedon" />
    </div>
  );
}

export default App;
