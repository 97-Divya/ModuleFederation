import React, { Suspense } from "react";

const LoginForm = React.lazy(() => import("auth/LoginForm"));

export default function AuthWrapper() {
  return (
    <Suspense fallback={<div>Loading Auth...</div>}>
      <LoginForm />
    </Suspense>
  );
}
