import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./App.tsx";
import theme from "./theme";
import { store } from "./redux";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./client/login-page/login-page.tsx";
import SignupPage from "./client/signup-page/signup-page.tsx";
//mport { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path:"/login",
//     element: <div>LOGIN PAGE</div>
//   },
//   {
//     path:"/signup",
//     element: <div>LOGIN PAGE</div>
//   },
//   {
//     path:"admin-login",
//     element: <div>admin login </div>
//   }
// ]);
ReactDOM.createRoot(document.querySelector("#root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<App></App>} path="/"></Route>
          <Route element={<LoginPage></LoginPage>} path="/login"></Route>
          <Route element={<SignupPage></SignupPage>} path="/signup"></Route>
          <Route element={<div>admin </div>} path="/admin"></Route>
          <Route element={<App></App>} path="/admin-site-management"></Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
