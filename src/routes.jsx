import { NotFound } from "./pages/notFound/NotFound";
import { LoginPage } from "./pages/login/LoginPage";
import { EmployeesPage } from "./pages/employee/EmployeesPage";
import { NewHire } from "./pages/newHire/NewHire";

const routes = [
  {
    path: "/",
    Element: LoginPage,
    isAuthenticated: false,
  },

  { 
    path: "/employee",
    Element: EmployeesPage,
    isAuthenticated: true,
  },
  {
    path: "/hire",
    Element: NewHire,
    isAuthenticated: true,
  },
  {
    path: "*",
    Element: NotFound,
    isAuthenticated: true,
  },
];

export default routes;