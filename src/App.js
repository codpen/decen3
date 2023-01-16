import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Views from "./views";
import { Route, Switch } from "react-router-dom";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./configs/AppConfig";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function getLibrary(provider) {
  return new Web3(provider);
}
function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeSwitcherProvider
            themeMap={themes}
            defaultTheme={THEME_CONFIG.currentTheme}
            insertionPoint="styles-insertion-point"
          >
            <Router>
              <Switch>
                <Route path="/" component={Views} />
              </Switch>
            </Router>
          </ThemeSwitcherProvider>
        </Provider>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
