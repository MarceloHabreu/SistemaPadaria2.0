import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Menu } from "./pages/Menu/Menu";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "./redux/Cart/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
