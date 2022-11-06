import { BrowserRouter, Route, Switch } from "react-router-dom";
import ManagePlayerPage from "./components/pages/ManagePlayerPage/ManagePlayerPage";
import NewPlayerPage from "./components/pages/NewPlayerPage/NewPlayerPage";
import WelcomePage from "./components/pages/WelcomePages/WelcomePage";

function App() {
  return (
    <div className="container">

      <BrowserRouter>

        <Switch>
          <Route path="/players/list" exact render={() => <WelcomePage />} />
          <Route path="/players/addplayer" exact render={() => <NewPlayerPage />} />
          <Route path="/status/game/:id" exact render={(routeProps) => <ManagePlayerPage {...routeProps} />} />
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;