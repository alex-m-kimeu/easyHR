import { Route, Switch } from "react-router-dom";
import { EmployeesPage } from "./pages/employee/EmployeesPage";
import { Header } from "./pages/header/Header";
import { NewHire } from "./pages/newHire/NewHire";
import { Footer } from "./pages/footer/Footer";
import { LoginPage } from "./pages/login/LoginPage";

export const App = () => {
  return (
    <>
      <Header />
      <div className="dark:bg-dark3 h-screen">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
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
      </div>
      <Footer />
    </>
  );
}
