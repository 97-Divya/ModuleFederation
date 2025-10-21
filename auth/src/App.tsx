import React from "react";
import useAuthStore from "./store/useAuthStore";
import LoginForm from "./components/LoginForm";
import WelcomePage from "./components/WelcomePage";

const App: React.FC = () => {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);
  return <>{loggedInUser ? <WelcomePage /> : <LoginForm />}</>;
};

export default App;
