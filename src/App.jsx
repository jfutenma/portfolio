import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { BrowserRouter as Navegador, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navegador>
        <Menu />
        <Home />
        <Routes>
          <Route path="/sobre" element={"Página Sobre em manutenção"} />
        </Routes>
      </Navegador>
    </>
  );
}
export default App;
