import { Route, Switch } from "react-router-dom";
import { EmployeesPage } from "./pages/employee/EmployeesPage";
import { Header } from "./pages/header/Header";
import { NewHire } from "./pages/newHire/NewHire";
import { Footer } from "./pages/footer/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <main className="dark:bg-dark3 h-screen">
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
