// // auth-app/src/context/AuthContext.tsx
// import React, { createContext, useState, ReactNode } from 'react';

// export const AuthContext = createContext({ user: null as null | { name: string }, login: (name: string)=>{} });

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<{ name: string } | null>(null);
//   function login(name: string) { setUser({ name }); }
//   return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
// }
