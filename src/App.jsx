import { Routes, Route, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import AuthWrapper from "./AuthWrapper";
import { Header } from "./pages/header/Header";
import { Footer } from "./pages/footer/Footer";

export const App = () => {

  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/easyHR/'}>
        <Routes>
          {routes.map((route, index) => {
            const { Element, path } = route;
            if (route.isAuthenticated) {
              return (
                <Route
                  exact
                  key={index}
                  path={path}
                  element={
                    <AuthWrapper >
                      <Header />
                      <div className="dark:bg-dark3 h-screen">
                      <Element />
                      </div>
                      <Footer />
                    </AuthWrapper>
                  }
                />
              );
            } else {
              return <Route exact key={index} path="/" element={<Element />} />;
            }
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
