import { NotFound } from "./pages/notFound/NotFound";
import { LoginPage } from "./pages/login/LoginPage";
import { EmployeesPage } from "./pages/employee/EmployeesPage";
import { NewHire } from "./pages/newHire/NewHire";

const routes = [
  {
    path: "/",
    Element: LoginPage,
    isAuthenticated: false,
    layout: "None", // No layout for login page
  },
  { 
    path: "/employee",
    Element: EmployeesPage,
    isAuthenticated: true,
    layout: "Main", // Main layout for employee page
  },
  {
    path: "/hire",
    Element: NewHire,
    isAuthenticated: true,
    layout: "Main", // Main layout for new hire page
  },
  {
    path: "*",
    Element: NotFound,
    isAuthenticated: true,
  },
];

export default routes;