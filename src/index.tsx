import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { test } from "./test";
import ThemeProvider from "./themes/ThemeProvider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

test();
