import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.tsx";
import SignIn from "./pages/SignIn.tsx";
import User from "./pages/User.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./services/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <User />,
  },
]);

console.log("Initial state:", store.getState());
store.subscribe(() => {
  console.log("State updated:", store.getState());
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
