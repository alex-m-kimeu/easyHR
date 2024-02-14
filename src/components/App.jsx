import { Route, Switch } from "react-router-dom";
import EmployeesPage from "./EmployeesPage";
import Header from "./Header";
import NewHire from "./NewHire";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <EmployeesPage />
          </Route>
          <Route path="/new-hire">
            <NewHire />
          </Route>
          <Route path="*">
            <h1 className="font-sans text-4xl font-bold text-center">
              404 Not Found
            </h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
