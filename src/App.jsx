import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import AuthWrapper from "./AuthWrapper";
import { Header } from "./pages/header/Header";
import { Footer } from "./pages/footer/Footer";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className="dark:bg-dark3 h-screen">{children}</div>
    <Footer />
  </>
);

export const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/easyHR/'}>
      <Routes>
        {routes.map((route, index) => {
          const { Element, path, isAuthenticated, layout } = route;
          const LayoutComponent = layout === "Main" ? MainLayout : React.Fragment;
          return (
            <Route
              exact
              key={index}
              path={path}
              element={
                <LayoutComponent>
                  {isAuthenticated && <AuthWrapper />}
                  <Element />
                </LayoutComponent>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}