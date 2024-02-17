import { Route, Switch } from "react-router-dom";
import { EmployeesPage } from "./pages/employee/EmployeesPage";
import { Header } from "./pages/header/Header";
import { NewHire } from "./pages/newHire/NewHire";
import { Footer } from "./pages/footer/Footer";
import error from "../src/assets/404.svg"

export const App = () => {
  return (
    <>
      <Header />
      <div className="dark:bg-dark3 h-screen">
        <Switch>
          <Route exact path="/">
            <EmployeesPage />
          </Route>
          <Route path="/new-hire">
            <NewHire />
          </Route>
          <Route path="*">
            <div className="min-h-screen flex items-start justify-center sm:mt-20 mt-10">
              <img src={error} alt="404" className="w-full max-w-md sm:max-w-md mx-auto" />
            </div>
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}
