import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { getClassNames } from "./helpers/ts/getClassNames";
import { getTailSpin } from "./helpers/tsx/secondary";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import MainPage from "./pages/MainPage/MainPage";
import "./styles/index.scss";
import { useTheme } from "./themes/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={getClassNames("app", { hovered: true, selected: true }, [
        theme,
      ])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={getTailSpin()}>
        <Routes>
          <Route path='/' element={<MainPage />}>
            Main
          </Route>
          <Route path='/about' element={<AboutPageAsync />}>
            About
          </Route>
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;
