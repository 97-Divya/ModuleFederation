// import { Suspense, lazy, useEffect, useState } from "react";
// import useAuthStore from "auth/useAuthStore"; // default import
// const LoginForm = lazy(() => import("auth/LoginForm"));
// const HomePage = lazy(() => import("home/HomePage")); // ✅ TS knows the type now

// const App = () => {
//   const { loggedInUser, logout } = useAuthStore();
//   const [page, setPage] = useState<"auth" | "home">("auth");

//   useEffect(() => {
//     if (loggedInUser) setPage("home");
//     else setPage("auth");
//   }, [loggedInUser]);

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       {page === "auth" && <LoginForm />}
//       {page === "home" && <HomePage username={loggedInUser} logout={logout} />}
//     </Suspense>
//   );
// };

// export default App;
// host/src/App.tsx
// host/src/App.tsx
import React, { Suspense, lazy, useEffect, useState } from "react";

// Lazy-load remote components
const LoginForm = lazy(() => import("auth/LoginForm"));
const HomePage = lazy(() => import("home/HomePage"));

const App: React.FC = () => {
  const [useAuthStore, setUseAuthStore] = useState<any>(null);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [page, setPage] = useState<"auth" | "home">("auth");

  // ✅ Dynamically load the store after remote is initialized
  useEffect(() => {
    import("auth/useAuthStore")
      .then((mod) => {
        const store = mod.default;
        setUseAuthStore(() => store);
        const { loggedInUser } = store.getState();
        setLoggedInUser(loggedInUser);
        store.subscribe((state: any) => {
          setLoggedInUser(state.loggedInUser);
        });
      })
      .catch((err) => console.error("Failed to load useAuthStore:", err));
  }, []);

  const logout = () => {
    if (useAuthStore) useAuthStore.getState().logout();
  };

  useEffect(() => {
    if (loggedInUser) setPage("home");
    else setPage("auth");
  }, [loggedInUser]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {page === "auth" && <LoginForm />}
      {page === "home" && (
        <HomePage username={loggedInUser} logout={logout} />
      )}
    </Suspense>
  );
};

export default App;
