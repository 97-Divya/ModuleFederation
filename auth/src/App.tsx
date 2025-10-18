// import React from "react";
// App.tsx in auth-app
import React from "react";
import LoginForm from "./components/LoginForm";
import WelcomePage from "./components/WelcomePage";
import useAuthStore from "./store/useAuthStore"; // ✅ correct relative path

const App: React.FC = () => {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);

  return <div>{loggedInUser ? <WelcomePage /> : <LoginForm />}</div>;
};

export default App;
