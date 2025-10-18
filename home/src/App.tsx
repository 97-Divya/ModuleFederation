// home-app/src/App.tsx
import React, { useState } from "react";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>("DemoUser");

  const logout = () => setUsername(null);

  return <HomePage username={username} logout={logout} />;
};

export default App;
