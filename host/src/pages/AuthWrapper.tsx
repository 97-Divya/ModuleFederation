// import React, { Suspense, useState } from "react";

// // Lazy load remote components
// const RemoteLoginForm = React.lazy(() => import("auth/LoginForm"));
// const RemoteSignupForm = React.lazy(() => import("auth/SignupForm"));

// export default function AuthWrapper() {
//   const [page, setPage] = useState<"login" | "signup">("login");
//   const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

//   if (loggedInUser) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <h1>Welcome, {loggedInUser}!</h1>
//       </div>
//     );
//   }

//   return (
//     <Suspense fallback={<div>Loading Auth...</div>}>
//       {page === "login" ? (
//         <RemoteLoginForm
//           onLogin={(username: string) => setLoggedInUser(username)}
//           onSwitch={() => setPage("signup")}
//         />
//       ) : (
//         <RemoteSignupForm onSignup={() => setPage("login")} />
//       )}
//     </Suspense>
//   );
// }
import React, { Suspense } from "react";

const LoginForm = React.lazy(() => import("auth/LoginForm"));

export default function AuthWrapper() {
  return (
    <Suspense fallback={<div>Loading Auth...</div>}>
      <LoginForm />
    </Suspense>
  );
}
